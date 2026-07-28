import type { Metadata } from "next";

// THROWAWAY — /ctc checklist. Not linked from anywhere in the real site;
// noindex/nofollow so it never shows up in search results either.
export const metadata: Metadata = {
  title: "CTC Checklist",
  robots: { index: false, follow: false },
};

export default function CtcLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="mx-auto max-w-2xl px-4 py-8">{children}</div>
    </div>
  );
}
