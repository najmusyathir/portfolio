/**
 * THROWAWAY — /ctc checklist.
 *
 * Data + shared types for Abang's CTC document-copy checklist (abah is
 * ticking off physical copies for a government submission). Not part of the
 * real portfolio content — no nav/sitemap reference anywhere. Safe to delete
 * this whole feature (src/app/ctc, src/app/api/ctc, src/lib/ctc-data.ts,
 * src/lib/ctc-db.ts, ctc-checklist.db) once the documents are delivered.
 *
 * Kept import-safe for both client and server code (no better-sqlite3 here —
 * that lives in ctc-db.ts, server-only).
 */

export interface CtcItemDef {
  name: string;
  copies: number;
  // Only set when this item is an extra top-up batch for a document that
  // already has its own numbered slot in the main list — displays that
  // original number instead of its own section-local position.
  displayNumber?: number;
}

// Keep this list + copy counts exactly as given — order matters, it defines
// the item_index used as the DB primary key. New items only ever get
// appended to the end (never inserted/reordered) so existing checked state
// stays pinned to the right row.
export const CTC_ITEMS: CtcItemDef[] = [
  { name: "Surat Tawaran", copies: 4 },
  { name: "Borang akaun berkanun", copies: 4 },
  { name: "Borang Kesihatan", copies: 3 },
  { name: "Widad", copies: 3 },
  { name: "Matrik", copies: 3 },
  { name: "SPM", copies: 4 },
  { name: "IC pelajar", copies: 4 },
  { name: "IC ibu", copies: 3 },
  { name: "IC bapa", copies: 3 },
  { name: "PRC cert", copies: 6 },
  { name: "PRC letter", copies: 6 },
  { name: "Surat PTM", copies: 2 },
  { name: "Bank statement", copies: 3 },
  { name: "Penyata KWSP", copies: 3 },
  { name: "Mytax Statement", copies: 3 },
  // Extra CTC — separate top-up batch, tracked on its own so it doesn't
  // get confused with the main list's already-ticked copies above. Each
  // displayNumber points back at that same document's number in the main
  // list (no. 7 IC pelajar, no. 13 Bank statement, no. 14 Penyata KWSP,
  // no. 1 Surat Tawaran).
  { name: "IC pelajar", copies: 3, displayNumber: 7 },
  { name: "Bank statement", copies: 1, displayNumber: 13 },
  { name: "Penyata KWSP", copies: 1, displayNumber: 14 },
  { name: "Surat Tawaran", copies: 2, displayNumber: 1 },
];

export interface CtcSectionDef {
  title: string;
  // How many consecutive CTC_ITEMS (starting right after the previous
  // section's items) belong to this section. Must sum to CTC_ITEMS.length.
  count: number;
}

export const CTC_SECTIONS: CtcSectionDef[] = [
  { title: "Senarai Utama", count: 15 },
  { title: "Extra CTC", count: 4 },
];

// Plain banner text — not interactive, keep exactly as given.
export const CTC_NOTES: string[] = [
  "Cop setiap muka surat",
  "1 muka, 1 page (JANGAN depan belakang)",
  "Color hanya untuk (1 - (page 1 sahaja), 5, 6)",
  "12 belum dapat",
];

export const CTC_API_PATH = "/api/ctc";
export const CTC_STREAM_PATH = `${CTC_API_PATH}/stream`;

export interface CtcItemState {
  index: number;
  name: string;
  copies: number;
  checked: boolean[];
  displayNumber?: number;
}

export interface CtcState {
  notes: string[];
  items: CtcItemState[];
}
