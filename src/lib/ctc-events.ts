/**
 * THROWAWAY — /ctc checklist. In-memory pub/sub for realtime updates.
 *
 * Works only because this route runs inside a single long-lived Node
 * process (tmux-managed `next dev`, not serverless) — every SSE
 * subscriber and every POST/DELETE handler share this same module-level
 * EventEmitter instance. If this ever moved to a serverless/multi-instance
 * deployment, this would need to become a real broker (Redis pub/sub,
 * etc.) — deliberately not doing that here since it'd be overkill for a
 * throwaway page.
 */

import { EventEmitter } from "node:events";
import type { CtcState } from "@/lib/ctc-data";

export const CTC_UPDATE_EVENT = "update";

export const ctcEvents = new EventEmitter();
// Multiple browser tabs/devices can each hold an open SSE connection —
// raise the default limit (10) so Node doesn't warn about a "leak".
ctcEvents.setMaxListeners(100);

export function emitCtcUpdate(state: CtcState): void {
  ctcEvents.emit(CTC_UPDATE_EVENT, state);
}
