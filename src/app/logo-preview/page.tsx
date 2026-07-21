/* eslint-disable @next/next/no-img-element -- plain <img> used deliberately for
   these static candidate SVGs; this is a temporary review page, not shipped UI. */
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";

export const metadata: Metadata = {
  title: "Logo Preview (temporary)",
  description: "Internal side-by-side review of logo candidates. Not for public linking.",
  robots: { index: false, follow: false },
};

interface Candidate {
  id: string;
  name: string;
  description: string;
  mark: string;
  wordmark: string;
  live?: boolean;
}

const CANDIDATES: Candidate[] = [
  {
    id: "sonnet-original",
    name: "Sonnet — Original",
    description:
      'The first functional version: a thinner two-stroke N (open top and bottom) and a plain "Najmu." wordmark with a brass full stop. Recovered from git history (commit 6bd243b) — no longer on disk elsewhere.',
    mark: "/logo-candidates/sonnet-original-mark.svg",
    wordmark: "/logo-candidates/sonnet-original-wordmark.svg",
  },
  {
    id: "fable-refined",
    name: "Fable — Refined",
    description:
      'The currently shipped, live version. Bolder solid-fill N monogram and a hand-kerned "Najmu" wordmark with a brass rounded-square accent instead of a dot.',
    mark: "/logo-mark.svg",
    wordmark: "/logo-wordmark.svg",
    live: true,
  },
  {
    id: "fable-terminal",
    name: "Fable — Terminal",
    description:
      'Monospace/technical direction: sharper rx-3 container, a narrower monospace-proportioned N, and a lowercase "najmu" wordmark with a solid brass cursor block.',
    mark: "/logo-candidates/option-2-mark.svg",
    wordmark: "/logo-candidates/option-2-wordmark.svg",
  },
  {
    id: "fable-interlocking",
    name: "Fable — Interlocking",
    description:
      "Two overlapping N-shapes — a mirrored diagonal echo threads behind the primary N and reveals itself in the negative-space counters. Wordmark trades the dot/square for a brass baseline rule.",
    mark: "/logo-candidates/option-3-mark.svg",
    wordmark: "/logo-candidates/option-3-wordmark.svg",
  },
  {
    id: "fable-line",
    name: "Fable — Line",
    description:
      "The shipped N's exact silhouette, redrawn as an outline/stroke instead of a solid fill — lighter and quieter. Wordmark drops to medium weight with an outlined accent square.",
    mark: "/logo-candidates/option-4-mark.svg",
    wordmark: "/logo-candidates/option-4-wordmark.svg",
  },
];

const MARK_SIZES = [
  { label: "128px", size: 128 },
  { label: "48px", size: 48 },
  { label: "16px (favicon)", size: 16 },
];

function Swatch({
  bg,
  border,
  label,
  labelColor,
  mark,
  wordmark,
}: {
  bg: string;
  border: string;
  label: string;
  labelColor: string;
  mark: string;
  wordmark: string;
}) {
  return (
    <div
      style={{
        flex: "1 1 260px",
        minWidth: "260px",
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: "var(--radius)",
        padding: "1.25rem",
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: labelColor,
          opacity: 0.65,
          marginBottom: "1rem",
        }}
      >
        {label}
      </span>

      <div style={{ display: "flex", alignItems: "flex-end", gap: "1.25rem", flexWrap: "wrap" }}>
        {MARK_SIZES.map(({ label: sizeLabel, size }) => (
          <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
            <img src={mark} alt="" width={size} height={size} style={{ display: "block" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: labelColor, opacity: 0.55 }}>
              {sizeLabel}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: `1px solid ${border}` }}>
        <img src={wordmark} alt="" style={{ height: "36px", width: "auto", display: "block" }} />
      </div>
    </div>
  );
}

export default function LogoPreviewPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-tight" style={{ background: "var(--hero-wash)", borderBottom: "1px solid var(--c-line-soft)" }}>
          <div className="container">
            <SectionHeading
              eyebrow="Internal · temporary"
              title="Logo candidates, side by side."
              intro="A temporary review page for picking the final logo direction — not linked from navigation and not meant to stay. Each candidate is shown against both a light and a dark background, since the site itself switches themes and a page rendered in only one theme wouldn't reveal how a mark holds up in the other. Some wordmark files below are hardcoded to a single ink color rather than adapting like the shipped Navbar component does — if one disappears against a swatch, that's real signal, not a rendering bug."
            />
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {CANDIDATES.map((c) => (
              <article key={c.id} className="surface" style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "var(--text-xl)", margin: 0 }}>{c.name}</h3>
                  {c.live && <Chip>Currently live</Chip>}
                </div>
                <p style={{ color: "var(--c-body)", marginTop: "0.5rem", marginBottom: "1.5rem", maxWidth: "70ch" }}>
                  {c.description}
                </p>

                <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                  <Swatch
                    bg="#d9dbdd"
                    border="#a4a8ab"
                    label="Light background"
                    labelColor="#16181a"
                    mark={c.mark}
                    wordmark={c.wordmark}
                  />
                  <Swatch
                    bg="#16181a"
                    border="#3a4247"
                    label="Dark background"
                    labelColor="#e8ecee"
                    mark={c.mark}
                    wordmark={c.wordmark}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
