import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ChipRow } from "@/components/ui/Chip";
import { ACHIEVEMENTS, FYP } from "@/lib/content";
import { PhotoGrid } from "@/components/ui/PhotoGrid";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Awards and invited roles — the Anugerah Panel Industri for Best Industrial Panel FYP (2024), and returning as Industry Jury at the FYP Exhibition C²PI (2026).",
};

export default function AchievementsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          className="section-tight"
          style={{ background: "var(--hero-wash)", borderBottom: "1px solid var(--c-line-soft)" }}
        >
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Achievements"
                title="Judged, then judging."
                intro="Two entries, and the line between them is the point: the industrial panel award I received as a student in 2024 is the same category I was invited back to judge at the FYP Exhibition C²PI in 2026."
              />
            </Reveal>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-tight">
          <div className="container" style={{ maxWidth: "820px" }}>
            <ol className="ach-list">
              {ACHIEVEMENTS.map((a, i) => (
                <Reveal key={a.title} delay={i * 90} as="li">
                  <div className="surface ach-card">
                    <span
                      className="ach-icon"
                      aria-hidden
                      style={{
                        background: "color-mix(in srgb, var(--c-accent) 12%, transparent)",
                        color: "var(--c-accent)",
                      }}
                    >
                      <Icon name={a.kind === "award" ? "spark" : "check"} size={20} />
                    </span>
                    <div>
                      <div className="ach-head">
                        <h2 style={{ fontSize: "var(--text-xl)", lineHeight: 1.3 }}>{a.title}</h2>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "var(--text-xs)",
                            color: "var(--c-muted)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {a.date}
                        </span>
                      </div>
                      <p
                        style={{
                          margin: "0.3rem 0 0.75rem",
                          color: "var(--c-accent)",
                          fontWeight: 600,
                          fontSize: "var(--text-sm)",
                        }}
                      >
                        {a.org}
                      </p>
                      <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-base)" }}>
                        {a.summary}
                      </p>
                      {a.images && <PhotoGrid photos={a.images.map((img) => ({ ...img }))} />}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* The awarded project, in full */}
        <section className="section" style={{ background: "var(--c-bg-soft)" }}>
          <div className="container" style={{ maxWidth: "820px" }}>
            <Reveal>
              <SectionHeading eyebrow="The awarded project" title={FYP.name} intro={FYP.context} />
            </Reveal>

            <Reveal delay={80}>
              <div className="surface" style={{ marginTop: "2rem", padding: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
                <p style={{ margin: "0 0 1.5rem", color: "var(--c-body)", fontSize: "var(--text-lg)", lineHeight: 1.65 }}>
                  {FYP.summary}
                </p>

                {/* Explicit markers — Tailwind's preflight strips list styling. */}
                <ul style={{ margin: "0 0 1.5rem", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {FYP.bullets.map((b) => (
                    <li
                      key={b.slice(0, 20)}
                      style={{ display: "flex", gap: "0.65rem", color: "var(--c-body)", fontSize: "var(--text-sm)", lineHeight: 1.6 }}
                    >
                      <span
                        aria-hidden
                        style={{
                          flexShrink: 0,
                          width: "5px",
                          height: "5px",
                          borderRadius: "var(--radius-full)",
                          background: "var(--c-accent)",
                          marginTop: "0.55em",
                        }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <ChipRow items={[...FYP.tags]} />

                <p
                  style={{
                    margin: "1.5rem 0 0",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--c-line-soft)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--c-accent)",
                  }}
                >
                  <Icon name="spark" size={14} style={{ flexShrink: 0 }} /> {FYP.award}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/projects" className="btn btn-ghost">
                  What I build now <Icon name="arrow-right" size={16} />
                </Link>
                <Link href="/resume" className="btn btn-ghost">
                  Full résumé <Icon name="file-text" size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .ach-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .ach-card {
          padding: clamp(1.35rem, 3vw, 1.85rem);
          display: flex;
          gap: 1.15rem;
          align-items: flex-start;
        }
        .ach-icon {
          display: inline-flex;
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
        }
        .ach-head {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.5rem;
        }
      `}</style>
    </>
  );
}
