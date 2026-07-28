/**
 * THROWAWAY — /ctc checklist API. See src/lib/ctc-data.ts for context.
 *
 * GET    -> current full state.
 * POST   -> toggle one checkbox { itemIndex, copyIndex }, returns updated state.
 * DELETE -> reset every checkbox back to unchecked, returns updated state.
 *           Client-side confirm happens before this is ever called (see
 *           the Reset button on /ctc/edit).
 *
 * POST/DELETE also broadcast the new state via ctcEvents so the SSE route
 * (src/app/api/ctc/stream/route.ts) can push it to every connected /ctc and
 * /ctc/edit tab without them needing to poll or manually reload.
 */

import { NextRequest, NextResponse } from "next/server";
import { getCtcState, resetCtcState, toggleCtcCheckbox } from "@/lib/ctc-db";
import { CTC_NOTES } from "@/lib/ctc-data";
import { emitCtcUpdate } from "@/lib/ctc-events";

// Always read fresh from SQLite — this is live mutable state, never cache.
export const dynamic = "force-dynamic";

export async function GET() {
  const state = getCtcState();
  return NextResponse.json({ ...state, notes: CTC_NOTES });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const itemIndex = Number(body?.itemIndex);
  const copyIndex = Number(body?.copyIndex);

  if (!Number.isInteger(itemIndex) || !Number.isInteger(copyIndex)) {
    return NextResponse.json(
      { error: "itemIndex and copyIndex are required integers" },
      { status: 400 }
    );
  }

  try {
    const state = toggleCtcCheckbox(itemIndex, copyIndex);
    emitCtcUpdate(state);
    return NextResponse.json({ ...state, notes: CTC_NOTES });
  } catch {
    return NextResponse.json({ error: "Invalid item/copy index" }, { status: 400 });
  }
}

export async function DELETE() {
  const state = resetCtcState();
  emitCtcUpdate(state);
  return NextResponse.json({ ...state, notes: CTC_NOTES });
}
