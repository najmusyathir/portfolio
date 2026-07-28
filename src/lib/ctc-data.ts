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
}

// Keep this list + copy counts exactly as given — order matters, it defines
// the item_index used as the DB primary key.
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
}

export interface CtcState {
  notes: string[];
  items: CtcItemState[];
}
