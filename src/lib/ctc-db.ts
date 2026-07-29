/**
 * THROWAWAY — /ctc checklist. Server-only SQLite persistence.
 *
 * Node on this box (dev + hosting clone) is v20.x, older than the 22.5+
 * needed for the built-in `node:sqlite` module, so this uses the
 * `better-sqlite3` package instead. Single file DB at the project root
 * (ctc-checklist.db, gitignored) — deliberately separate from the app's
 * normal Postgres/Prisma stack since this is temporary throwaway state.
 *
 * Do not import this from a Client Component — better-sqlite3 is a native
 * module and only runs server-side (API routes / Server Components).
 */

import path from "node:path";
import Database from "better-sqlite3";
import { CTC_ITEMS, type CtcState } from "@/lib/ctc-data";

type DbInstance = InstanceType<typeof Database>;

let db: DbInstance | null = null;

function getDb(): DbInstance {
  if (db) return db;

  const dbPath = path.join(process.cwd(), "ctc-checklist.db");
  const instance = new Database(dbPath);
  instance.pragma("journal_mode = WAL");
  instance.exec(`
    CREATE TABLE IF NOT EXISTS ctc_checkbox (
      item_index INTEGER NOT NULL,
      copy_index INTEGER NOT NULL,
      checked INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY (item_index, copy_index)
    )
  `);

  seedMissingRows(instance);

  db = instance;
  return instance;
}

// Insert any (item_index, copy_index) rows that don't exist yet as
// unchecked. Safe to call every time — INSERT OR IGNORE is a no-op for rows
// that already exist. Reading CTC_ITEMS here (rather than hardcoding counts)
// means bumping a copy count later just works on next run.
function seedMissingRows(instance: DbInstance): void {
  const insert = instance.prepare(
    "INSERT OR IGNORE INTO ctc_checkbox (item_index, copy_index, checked) VALUES (?, ?, 0)"
  );
  const seedAll = instance.transaction(() => {
    CTC_ITEMS.forEach((item, itemIndex) => {
      for (let copyIndex = 0; copyIndex < item.copies; copyIndex++) {
        insert.run(itemIndex, copyIndex);
      }
    });
  });
  seedAll();
}

export function getCtcState(): CtcState {
  const instance = getDb();
  const rows = instance
    .prepare("SELECT item_index, copy_index, checked FROM ctc_checkbox")
    .all() as { item_index: number; copy_index: number; checked: number }[];

  const items = CTC_ITEMS.map((item, index) => ({
    index,
    name: item.name,
    copies: item.copies,
    checked: new Array<boolean>(item.copies).fill(false),
    displayNumber: item.displayNumber,
  }));

  for (const row of rows) {
    const item = items[row.item_index];
    if (item && row.copy_index >= 0 && row.copy_index < item.checked.length) {
      item.checked[row.copy_index] = row.checked === 1;
    }
  }

  return { notes: [], items };
}

// Destructive — clears every checkbox back to unchecked. Used by the
// "Reset" action on /ctc/edit only; confirmation happens client-side before
// this is ever called.
export function resetCtcState(): CtcState {
  const instance = getDb();
  instance.exec("UPDATE ctc_checkbox SET checked = 0");
  return getCtcState();
}

export function toggleCtcCheckbox(itemIndex: number, copyIndex: number): CtcState {
  const item = CTC_ITEMS[itemIndex];
  if (!item || copyIndex < 0 || copyIndex >= item.copies) {
    throw new Error("Invalid item/copy index");
  }

  const instance = getDb();
  instance
    .prepare(
      `INSERT INTO ctc_checkbox (item_index, copy_index, checked)
       VALUES (?, ?, 1)
       ON CONFLICT(item_index, copy_index) DO UPDATE SET checked = 1 - checked`
    )
    .run(itemIndex, copyIndex);

  return getCtcState();
}
