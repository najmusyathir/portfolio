/**
 * THROWAWAY — /ctc checklist API. See src/lib/ctc-data.ts for context.
 *
 * GET  -> current full state.
 * POST -> toggle one checkbox { itemIndex, copyIndex }, returns updated state.
 */

import { NextRequest, NextResponse } from "next/server";
import { getCtcState, toggleCtcCheckbox } from "@/lib/ctc-db";
import { CTC_NOTES } from "@/lib/ctc-data";

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
    return NextResponse.json({ ...state, notes: CTC_NOTES });
  } catch {
    return NextResponse.json({ error: "Invalid item/copy index" }, { status: 400 });
  }
}
