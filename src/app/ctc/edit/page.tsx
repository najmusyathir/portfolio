"use client";

// THROWAWAY — /ctc/edit — editable. This is the link sent to abah.
// Each checkbox persists immediately on click via /api/ctc — no save button.

import ChecklistBoard from "../_components/ChecklistBoard";
import { CTC_NOTES } from "@/lib/ctc-data";

export default function CtcEditPage() {
  return (
    <main>
      <h1 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
        CTC Checklist
      </h1>

      <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200">
        <ul className="list-disc space-y-1 pl-4">
          {CTC_NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

      <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
        Tap kotak untuk tanda copy yang sudah siap. Auto-save, tak perlu tekan
        apa-apa lagi.
      </p>

      <ChecklistBoard editable />
    </main>
  );
}
