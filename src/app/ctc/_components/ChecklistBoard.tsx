"use client";

/**
 * THROWAWAY — /ctc checklist board. Shared by /ctc (read-only) and
 * /ctc/edit (interactive). Both fetch from the same /api/ctc route so they
 * always reflect the same underlying SQLite state.
 *
 * Styling note: colors below are pulled from the scoped custom properties
 * defined in ../ctc.css (--ctc-*), never from the portfolio's own tokens.
 */

import { useEffect, useState } from "react";
import { CTC_API_PATH, type CtcState } from "@/lib/ctc-data";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

interface OverallProgress {
  percent: number;
  fullyCheckedItems: number;
  totalItems: number;
  checkedCopies: number;
  totalCopies: number;
}

function OverallRing({
  percent,
  fullyCheckedItems,
  totalItems,
  checkedCopies,
  totalCopies,
}: OverallProgress) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="mb-6 flex items-center gap-5 rounded-2xl border border-[var(--ctc-line)] bg-[var(--ctc-surface)] p-5">
      <svg viewBox="0 0 112 112" className="h-24 w-24 shrink-0">
        <g transform="rotate(-90 56 56)">
          <circle cx="56" cy="56" r={radius} fill="none" stroke="var(--ctc-line-soft)" strokeWidth="11" />
          <circle
            cx="56"
            cy="56"
            r={radius}
            fill="none"
            stroke="var(--ctc-accent)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 500ms ease" }}
          />
        </g>
        <text x="56" y="53" textAnchor="middle" fill="var(--ctc-ink)" fontSize="23" fontWeight={800}>
          {Math.round(percent)}%
        </text>
        <text x="56" y="72" textAnchor="middle" fill="var(--ctc-muted)" fontSize="11" fontWeight={700}>
          siap
        </text>
      </svg>
      <div>
        <p className="text-[15px] font-bold leading-snug text-[var(--ctc-ink)]">
          {fullyCheckedItems}/{totalItems} item lengkap
        </p>
        <p className="mt-1.5 text-sm leading-snug text-[var(--ctc-muted)]">
          {checkedCopies}/{totalCopies} copy checked
        </p>
      </div>
    </div>
  );
}

function ResetIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M15.5 6.5A6 6 0 1 0 16.9 11" />
      <path d="M16 3v4h-4" />
    </svg>
  );
}

function ResetConfirmModal({
  resetting,
  onCancel,
  onConfirm,
}: {
  resetting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onCancel();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onCancel]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgb(var(--ctc-shadow)/0.45)] px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ctc-reset-title"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-[var(--ctc-line)] bg-[var(--ctc-surface)] p-5 shadow-[0_24px_48px_-16px_rgb(var(--ctc-shadow)/0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ctc-bg-soft)] text-[var(--ctc-ink)]">
            <ResetIcon />
          </span>
          <div>
            <h2 id="ctc-reset-title" className="text-lg font-bold text-[var(--ctc-ink)]">
              Reset semua progress?
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--ctc-body)]">
              Semua checkbox akan kembali kosong. Tindakan ini tak boleh undo.
            </p>
          </div>
        </div>
        <div className="mt-5 flex justify-end gap-2.5">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border border-[var(--ctc-line)] bg-[var(--ctc-surface)] px-4 py-2 text-sm font-bold text-[var(--ctc-muted)] transition-colors hover:bg-[var(--ctc-bg-soft)]"
          >
            Batal
          </button>
          <button
            type="button"
            disabled={resetting}
            onClick={onConfirm}
            className="rounded-full bg-[var(--ctc-ink)] px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {resetting ? "Resetting…" : "Ya, reset"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ResetAction({
  onReset,
  resetting,
}: {
  onReset: () => Promise<void>;
  resetting: boolean;
}) {
  const [open, setOpen] = useState(false);

  async function handleConfirm() {
    await onReset();
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--ctc-line)] bg-[var(--ctc-surface)] px-3.5 py-1.5 text-xs font-bold text-[var(--ctc-muted)] transition-colors hover:border-[var(--ctc-accent)] hover:text-[var(--ctc-accent)]"
      >
        <ResetIcon />
        Reset checklist
      </button>
      {open && (
        <ResetConfirmModal
          resetting={resetting}
          onCancel={() => setOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}

function OverallBar({
  percent,
  fullyCheckedItems,
  totalItems,
  checkedCopies,
  totalCopies,
}: OverallProgress) {
  return (
    <div className="mb-6 rounded-2xl border border-[var(--ctc-line)] bg-[var(--ctc-surface)] p-5">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[15px] font-bold leading-snug text-[var(--ctc-ink)]">
          {fullyCheckedItems}/{totalItems} item lengkap
        </span>
        <span className="text-sm font-bold leading-snug text-[var(--ctc-accent)]">
          {checkedCopies}/{totalCopies} copy
        </span>
      </div>
      <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-[var(--ctc-bg-soft)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--ctc-accent)] to-[var(--ctc-accent-bright)] transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function ChecklistBoard({ editable }: { editable: boolean }) {
  const [state, setState] = useState<CtcState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pendingKey, setPendingKey] = useState<string | null>(null);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadState() {
      try {
        const res = await fetch(CTC_API_PATH);
        if (!res.ok) throw new Error("Failed to load checklist");
        const data: CtcState = await res.json();
        if (!cancelled) setState(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load checklist");
        }
      }
    }

    loadState();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleToggle(itemIndex: number, copyIndex: number) {
    if (!editable) return;
    const key = `${itemIndex}-${copyIndex}`;
    setPendingKey(key);
    setError(null);
    try {
      const res = await fetch(CTC_API_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemIndex, copyIndex }),
      });
      if (!res.ok) throw new Error("Failed to save — try again");
      const data: CtcState = await res.json();
      setState(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save — try again");
    } finally {
      setPendingKey(null);
    }
  }

  async function handleReset() {
    setResetting(true);
    setError(null);
    try {
      const res = await fetch(CTC_API_PATH, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to reset — try again");
      const data: CtcState = await res.json();
      setState(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reset — try again");
    } finally {
      setResetting(false);
    }
  }

  if (!state) {
    return (
      <div className="rounded-2xl border border-[var(--ctc-line)] bg-[var(--ctc-surface)] px-4 py-6 text-center text-sm font-semibold text-[var(--ctc-muted)]">
        {error ?? "Memuatkan…"}
      </div>
    );
  }

  const totalItems = state.items.length;
  const fullyCheckedItems = state.items.filter((item) =>
    item.checked.every(Boolean)
  ).length;
  const totalCopies = state.items.reduce((sum, item) => sum + item.copies, 0);
  const checkedCopies = state.items.reduce(
    (sum, item) => sum + item.checked.filter(Boolean).length,
    0
  );
  const percent = totalCopies > 0 ? (checkedCopies / totalCopies) * 100 : 0;
  const progress: OverallProgress = {
    percent,
    fullyCheckedItems,
    totalItems,
    checkedCopies,
    totalCopies,
  };

  return (
    <div>
      {editable ? <OverallBar {...progress} /> : <OverallRing {...progress} />}

      {editable && <ResetAction onReset={handleReset} resetting={resetting} />}

      {error && (
        <p className="mb-4 rounded-xl border border-[var(--ctc-danger-border)] bg-[var(--ctc-danger-bg)] px-3 py-2 text-sm font-semibold text-[var(--ctc-danger)]">
          {error}
        </p>
      )}

      <ul className="space-y-3.5">
        {state.items.map((item) => {
          const doneCount = item.checked.filter(Boolean).length;
          const complete = doneCount === item.copies;
          return (
            <li
              key={item.index}
              className="ctc-item rounded-2xl border border-[var(--ctc-line)] bg-[var(--ctc-surface)] p-4 sm:p-5"
              style={{ animationDelay: `${Math.min(item.index * 30, 300)}ms` }}
            >
              <div className="mb-4 flex items-baseline justify-between gap-3">
                <span className="text-[15px] font-extrabold leading-snug text-[var(--ctc-ink)] sm:text-base">
                  {item.index + 1}. {item.name}
                </span>
                <span
                  className={
                    complete
                      ? "shrink-0 rounded-full bg-[var(--ctc-success-soft)] px-2.5 py-1 text-xs font-bold leading-none text-[var(--ctc-success)]"
                      : "shrink-0 rounded-full bg-[var(--ctc-bg-soft)] px-2.5 py-1 text-xs font-bold leading-none text-[var(--ctc-muted)]"
                  }
                >
                  {doneCount}/{item.copies}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {item.checked.map((checked, copyIndex) => {
                  const key = `${item.index}-${copyIndex}`;
                  const isPending = pendingKey === key;
                  const label = `${item.name} — copy ${copyIndex + 1}`;
                  const baseClasses =
                    "flex h-14 w-14 items-center justify-center rounded-2xl border-2 text-base font-bold select-none";

                  if (editable) {
                    const stateClasses = checked
                      ? "border-[var(--ctc-success)] bg-[var(--ctc-success)] text-white shadow-[0_6px_14px_-6px_rgb(31_157_108/0.55)] ctc-check--on"
                      : "border-[var(--ctc-line)] bg-[var(--ctc-bg-soft)] text-[var(--ctc-muted)] hover:border-[var(--ctc-accent)] hover:bg-[var(--ctc-accent-soft)] hover:text-[var(--ctc-accent)]";
                    return (
                      <button
                        key={copyIndex}
                        type="button"
                        onClick={() => handleToggle(item.index, copyIndex)}
                        disabled={isPending}
                        aria-pressed={checked}
                        aria-label={label}
                        className={`${baseClasses} ${stateClasses} transition-all duration-200 ${
                          isPending ? "opacity-50" : "active:scale-90"
                        }`}
                      >
                        {checked ? <CheckIcon /> : copyIndex + 1}
                      </button>
                    );
                  }

                  const stateClasses = checked
                    ? "border-[var(--ctc-success)] bg-[var(--ctc-success)] text-white"
                    : "border-[var(--ctc-line)] bg-[var(--ctc-bg-soft)] text-[var(--ctc-muted)]";

                  return (
                    <div
                      key={copyIndex}
                      role="img"
                      aria-label={`${label} — ${checked ? "checked" : "unchecked"}`}
                      className={`${baseClasses} ${stateClasses}`}
                    >
                      {checked ? <CheckIcon /> : copyIndex + 1}
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
