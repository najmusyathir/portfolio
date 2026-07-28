"use client";

// THROWAWAY — /ctc/edit — editable. This is the link sent to abah.
// Each checkbox persists immediately on click via /api/ctc — no save button.

import ChecklistBoard from "../_components/ChecklistBoard";
import NotesBanner from "../_components/NotesBanner";

export default function CtcEditPage() {
  return (
    <main>
      <header className="mb-6">
        <p className="text-xs font-extrabold uppercase leading-none tracking-[0.14em] text-[var(--ctc-muted)]">
          CTC Checklist
        </p>
        <h1 className="mt-2 text-[26px] leading-tight sm:text-3xl">
          Tanda Copy
        </h1>
        <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--ctc-body)]">
          Tap kotak untuk tanda copy yang sudah siap — auto-save, tak payah
          tekan apa-apa lagi.
        </p>
      </header>

      <NotesBanner />

      <ChecklistBoard editable />
    </main>
  );
}
