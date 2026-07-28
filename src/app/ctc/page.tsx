"use client";

// THROWAWAY — /ctc — view-only. Abang reloads this to check progress.
// No checkboxes are interactive here.

import ChecklistBoard from "./_components/ChecklistBoard";
import { CTC_NOTES } from "@/lib/ctc-data";

export default function CtcViewPage() {
  return (
    <main>
      <h1 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
        CTC Checklist — Semakan
      </h1>

      <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200">
        <ul className="list-disc space-y-1 pl-4">
          {CTC_NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

      <ChecklistBoard editable={false} />
    </main>
  );
}
