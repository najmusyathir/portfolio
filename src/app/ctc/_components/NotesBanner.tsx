/**
 * THROWAWAY — /ctc checklist. Shared "important instructions" callout,
 * used by both /ctc and /ctc/edit so the header notes stay visually
 * prominent (styled as a pinned note, not buried in plain text).
 */

import { CTC_NOTES } from "@/lib/ctc-data";

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2a5 5 0 0 0-5 5c0 2.5 2 4 2 6l-3 2h12l-3-2c0-2 2-3.5 2-6a5 5 0 0 0-5-5Z" />
      <path d="M12 15v7" />
    </svg>
  );
}

export default function NotesBanner() {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-[var(--ctc-line)] bg-[var(--ctc-surface)] shadow-[0_10px_24px_-16px_rgb(var(--ctc-shadow)/0.45)]">
      <div className="flex items-center gap-2.5 border-b border-[var(--ctc-line-soft)] bg-[var(--ctc-accent-soft)] px-4 py-3 sm:px-5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--ctc-accent)] text-[var(--ctc-accent-ink)]">
          <PinIcon />
        </span>
        <span className="text-xs font-extrabold uppercase leading-none tracking-[0.08em] text-[var(--ctc-accent)]">
          Penting — baca dulu
        </span>
      </div>
      <ul className="space-y-2.5 px-4 py-4 text-[15px] leading-relaxed text-[var(--ctc-body)] sm:px-5">
        {CTC_NOTES.map((note) => (
          <li key={note} className="flex gap-3">
            <span
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ctc-accent)]"
              aria-hidden="true"
            />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
