"use client";

/**
 * THROWAWAY — /ctc checklist board. Shared by /ctc (read-only) and
 * /ctc/edit (interactive). Both fetch from the same /api/ctc route so they
 * always reflect the same underlying SQLite state.
 */

import { useEffect, useState } from "react";
import { CTC_API_PATH, type CtcState } from "@/lib/ctc-data";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export default function ChecklistBoard({ editable }: { editable: boolean }) {
  const [state, setState] = useState<CtcState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pendingKey, setPendingKey] = useState<string | null>(null);

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

  if (!state) {
    return (
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {error ?? "Memuatkan…"}
      </p>
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

  return (
    <div>
      <div className="mb-6 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
        {fullyCheckedItems}/{totalItems} item lengkap &middot; {checkedCopies}/
        {totalCopies} copy checked
      </div>

      {error && (
        <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
          {error}
        </p>
      )}

      <ul className="space-y-3">
        {state.items.map((item) => {
          const doneCount = item.checked.filter(Boolean).length;
          const complete = doneCount === item.copies;
          return (
            <li
              key={item.index}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <span className="text-base font-medium text-slate-900 dark:text-slate-100">
                  {item.index + 1}. {item.name}
                </span>
                <span
                  className={
                    complete
                      ? "shrink-0 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
                      : "shrink-0 text-sm font-semibold text-slate-500 dark:text-slate-400"
                  }
                >
                  {doneCount}/{item.copies}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.checked.map((checked, copyIndex) => {
                  const key = `${item.index}-${copyIndex}`;
                  const isPending = pendingKey === key;
                  const label = `${item.name} — copy ${copyIndex + 1}`;
                  const baseClasses =
                    "flex h-12 w-12 items-center justify-center rounded-lg border-2 text-sm font-semibold transition-colors";
                  const stateClasses = checked
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-slate-300 bg-slate-50 text-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-500";

                  if (editable) {
                    return (
                      <button
                        key={copyIndex}
                        type="button"
                        onClick={() => handleToggle(item.index, copyIndex)}
                        disabled={isPending}
                        aria-pressed={checked}
                        aria-label={label}
                        className={`${baseClasses} ${stateClasses} ${
                          isPending ? "opacity-50" : "active:scale-95"
                        }`}
                      >
                        {checked ? <CheckIcon /> : copyIndex + 1}
                      </button>
                    );
                  }

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
