"use client";

// THROWAWAY — /ctc — view-only. Abang reloads this to check progress.
// No checkboxes are interactive here.

import ChecklistBoard from "./_components/ChecklistBoard";
import NotesBanner from "./_components/NotesBanner";

export default function CtcViewPage() {
  return (
    <main>
      <header className="mb-6">
        <p className="text-xs font-extrabold uppercase leading-none tracking-[0.14em] text-[var(--ctc-muted)]">
          CTC Checklist
        </p>
        <h1 className="mt-2 text-[26px] leading-tight sm:text-3xl">
          Semakan Progress
        </h1>
      </header>

      <NotesBanner />

      <ChecklistBoard editable={false} />
    </main>
  );
}
