import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { AI_INFRA } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Infrastructure",
  description:
    "The self-hosted AI infrastructure Najmu engineered: reliable, persistent context, structured for real human use. An engineering story, not a gimmick.",
};

export default function AiPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="section" style={{ background: "var(--hero-wash)", borderBottom: "1px solid var(--c-line-soft)" }}>
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="AI infrastructure"
                title="I don't just use AI — I engineered the system that runs it."
              />
            </Reveal>
            <Reveal delay={90}>
              <p style={{ marginTop: "1.75rem", color: "var(--c-body)", fontSize: "var(--text-lg)", maxWidth: "68ch" }}>
                {AI_INFRA.intro}
              </p>
            </Reveal>
          </div>
        </section>

        {/* The engineering points */}
        <section className="section">
          <div className="container">
            <div className="ai-grid">
              {AI_INFRA.points.map((point, i) => (
                <Reveal key={point.title} delay={i * 80} as="article" style={{ height: "100%" }}>
                  <div className="surface card-hover" style={{ padding: "1.75rem", height: "100%", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        width: "40px",
                        height: "40px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                        background: "color-mix(in srgb, var(--c-accent) 12%, transparent)",
                        color: "var(--c-accent)",
                      }}
                    >
                      <Icon name="check" size={20} />
                    </span>
                    <h3 style={{ fontSize: "var(--text-xl)" }}>{point.title}</h3>
                    <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-base)" }}>{point.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing framing */}
        <section className="section-tight" style={{ background: "var(--c-bg-soft)" }}>
          <div className="container">
            <Reveal>
              <div className="surface" style={{ padding: "clamp(1.75rem, 4vw, 2.75rem)", textAlign: "center" }}>
                <p style={{ fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--c-ink)", margin: "0 auto 1.25rem", maxWidth: "26ch", lineHeight: 1.3 }}>
                  A precision instrument — directed, audited, owned.
                </p>
                <p style={{ color: "var(--c-body)", fontSize: "var(--text-lg)", maxWidth: "58ch", margin: "0 auto 1.75rem" }}>
                  This is infrastructure I designed and maintain, not a product built for me.
                  It&apos;s the same discipline as any system I ship: clear architecture, versioned
                  specs, and human sign-off on what matters.
                </p>
                <Link href="/projects" className="btn btn-ghost">
                  See the projects it supports <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .ai-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) { .ai-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
