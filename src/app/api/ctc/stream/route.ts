/**
 * THROWAWAY — /ctc checklist SSE stream. See src/lib/ctc-events.ts for why
 * this in-memory pub/sub approach is safe here (single long-lived `next dev`
 * process, not serverless).
 *
 * GET -> opens a text/event-stream connection. Pushes the current full
 * state immediately on connect, then again every time POST/DELETE on
 * /api/ctc mutate state (via ctcEvents). Stays open until the client
 * disconnects (request.signal aborts), at which point the listener is
 * removed and the underlying ReadableStream controller is closed.
 *
 * A comment-only heartbeat ("`: ping`") is written every 15s so that
 * intermediate proxies/tunnels (e.g. the Cloudflare tunnel in front of this
 * in prod-clone hosting) don't treat the connection as idle and kill it.
 */

import { NextRequest } from "next/server";
import { getCtcState } from "@/lib/ctc-db";
import { CTC_NOTES, type CtcState } from "@/lib/ctc-data";
import { ctcEvents, CTC_UPDATE_EVENT } from "@/lib/ctc-events";

// Always live-streamed, never cached/statically optimized.
export const dynamic = "force-dynamic";

function toSseMessage(state: CtcState): string {
  return `data: ${JSON.stringify({ ...state, notes: CTC_NOTES })}\n\n`;
}

export async function GET(request: NextRequest) {
  const encoder = new TextEncoder();

  let onUpdate: (state: CtcState) => void = () => {};
  let heartbeat: ReturnType<typeof setInterval> | undefined;

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      // Initial snapshot immediately — the client shouldn't have to wait
      // for the first change to see current state.
      controller.enqueue(encoder.encode(toSseMessage(getCtcState())));

      onUpdate = (state: CtcState) => {
        try {
          controller.enqueue(encoder.encode(toSseMessage(state)));
        } catch {
          // Controller may already be closed if the client disconnected
          // between the emit and this callback running — safe to ignore.
        }
      };
      ctcEvents.on(CTC_UPDATE_EVENT, onUpdate);

      heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`: ping\n\n`));
        } catch {
          // ignore — cleanup below handles teardown
        }
      }, 15000);

      const cleanup = () => {
        if (heartbeat) clearInterval(heartbeat);
        ctcEvents.off(CTC_UPDATE_EVENT, onUpdate);
        try {
          controller.close();
        } catch {
          // already closed
        }
      };

      if (request.signal.aborted) {
        cleanup();
        return;
      }
      request.signal.addEventListener("abort", cleanup);
    },
    cancel() {
      if (heartbeat) clearInterval(heartbeat);
      ctcEvents.off(CTC_UPDATE_EVENT, onUpdate);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      // Disable response buffering on nginx-like intermediaries; harmless
      // elsewhere.
      "X-Accel-Buffering": "no",
    },
  });
}
