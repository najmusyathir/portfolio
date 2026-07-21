/* eslint-disable @next/next/no-img-element -- plain <img> used deliberately for
   the static monogram SVG; this is a temporary review page, not shipped UI. */
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { LogoWordmark } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Logo Preview (temporary)",
  description: "Internal review of the monogram dot-spacing fix. Not for public linking.",
  robots: { index: false, follow: false },
};

const MARK_SIZES = [
  { label: "128px", size: 128 },
  { label: "48px", size: 48 },
  { label: "32px", size: 32 },
  { label: "16px (favicon)", size: 16 },
];

function Swatch({
  bg,
  border,
  label,
  labelColor,
}: {
  bg: string;
  border: string;
  label: string;
  labelColor: string;
}) {
  return (
    <div
      style={{
        flex: "1 1 320px",
        minWidth: "280px",
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

      <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5rem", flexWrap: "wrap" }}>
        {MARK_SIZES.map(({ label: sizeLabel, size }) => (
          <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
            <img src="/logo-mark.svg" alt="" width={size} height={size} style={{ display: "block" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: labelColor, opacity: 0.55 }}>
              {sizeLabel}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: `1px solid ${border}` }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: labelColor,
            opacity: 0.55,
            marginBottom: "0.6rem",
          }}
        >
          Wordmark, for completeness
        </span>
        <LogoWordmark height={28} style={{ color: labelColor }} />
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
              title="Dot-spacing fix, verified."
              intro="A temporary test page for confirming the monogram's dot no longer touches/overlaps the N — will be removed once Abang confirms. Shown at the exact sizes that matter (128 / 48 / 32 / 16px) against both a light and a dark swatch, since the site itself switches themes."
            />
            <div style={{ marginTop: "1rem" }}>
              <Chip>Not linked from navigation</Chip>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <article className="surface" style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "var(--text-xl)", margin: 0 }}>Monogram — corrected dot position</h3>
                <Chip>Currently live</Chip>
              </div>
              <p style={{ color: "var(--c-body)", marginTop: "0.5rem", marginBottom: "1.5rem", maxWidth: "70ch" }}>
                The dot moved from <code>cx=25.5, cy=24.5, r=2.3</code> to <code>cx=27, cy=26, r=2.2</code> —
                shifted further into the bottom-right corner (still clear of the rounded corner radius) so
                it sits past the N&apos;s rounded stroke join instead of overlapping it. Check especially the
                16px render below; that&apos;s the real favicon scale.
              </p>

              <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                <Swatch bg="#d9dbdd" border="#a4a8ab" label="Light background" labelColor="#16181a" />
                <Swatch bg="#16181a" border="#3a4247" label="Dark background" labelColor="#e8ecee" />
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
