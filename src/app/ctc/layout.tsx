import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./ctc.css";

// THROWAWAY — /ctc checklist. Not linked from anywhere in the real site;
// noindex/nofollow so it never shows up in search results either.
//
// Deliberately a totally different visual project from the rest of the
// portfolio — own font, own palette, own scoped stylesheet (ctc.css). See
// ctc.css for why plain scoped CSS (not just Tailwind classes) is needed to
// actually escape the portfolio's global heading/body styles.
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-ctc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CTC Checklist",
  robots: { index: false, follow: false },
};

export default function CtcLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${nunito.variable} ctc-scope`}>
      <div className="ctc-glow ctc-glow--one" aria-hidden="true" />
      <div className="ctc-glow ctc-glow--two" aria-hidden="true" />
      <div className="ctc-shell">{children}</div>
    </div>
  );
}
