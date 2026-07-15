import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ChipRow } from "@/components/ui/Chip";
import { FLAGSHIP, ECOSYSTEM, EARLIER_WORK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The flagship personal-dashboard, a self-hosted ecosystem of live tools, and earlier delivered client work.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="section-tight" style={{ background: "var(--hero-wash)", borderBottom: "1px solid var(--c-line-soft)" }}>
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Projects"
                title="What I've built, and what I keep running."
                intro="A flagship product, a set of self-hosted tools live in production, and the client work that came before."
              />
            </Reveal>
          </div>
        </section>

        {/* Flagship */}
        <section className="section">
          <div className="container">
            <Reveal>
              <article className="surface" style={{ padding: "clamp(1.75rem, 4vw, 2.75rem)" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--c-accent)",
                    marginBottom: "1rem",
                  }}
                >
                  <Icon name="spark" size={14} /> Flagship
                </span>
                <h2 style={{ fontSize: "var(--text-3xl)", marginBottom: "0.35rem", fontFamily: "var(--font-mono)" }}>
                  {FLAGSHIP.name}
                </h2>
                <p style={{ fontSize: "var(--text-xl)", fontWeight: 600, color: "var(--c-ink)", margin: "0 0 1rem" }}>
                  {FLAGSHIP.tagline}
                </p>
                <p style={{ fontSize: "var(--text-lg)", color: "var(--c-body)", maxWidth: "64ch", margin: "0 0 1.5rem" }}>
                  {FLAGSHIP.description}
                </p>
                <ChipRow items={FLAGSHIP.tags} />
              </article>
            </Reveal>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="section-tight" style={{ background: "var(--c-bg-soft)" }}>
          <div className="container">
            <Reveal>
              <SectionHeading eyebrow="Self-hosted ecosystem" title="Tools I run on my own infrastructure." />
            </Reveal>
            <div className="proj-eco-grid" style={{ marginTop: "2.25rem" }}>
              {ECOSYSTEM.map((p, i) => {
                const inner = (
                  <div className="surface card-hover" style={{ padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                      <h3 style={{ fontSize: "var(--text-lg)", fontFamily: "var(--font-mono)", color: "var(--c-ink)" }}>{p.name}</h3>
                      {p.url ? (
                        <Icon name="arrow-up-right" size={18} style={{ color: "var(--c-accent)", flexShrink: 0 }} />
                      ) : (
                        <span style={{ fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>internal</span>
                      )}
                    </div>
                    <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-sm)", flex: 1 }}>{p.description}</p>
                    <ChipRow items={p.tags} />
                    {p.url && (
                      <span style={{ fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)", color: "var(--c-accent)" }}>
                        {p.url.replace("https://", "")}
                      </span>
                    )}
                  </div>
                );
                return (
                  <Reveal key={p.name} delay={i * 70} as="article" style={{ height: "100%" }}>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", height: "100%" }}>
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Earlier work */}
        <section className="section">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Earlier work"
                title="Client projects that built the range."
                intro="Delivered work from before the current stack — the foundation the rest is built on."
              />
            </Reveal>
            <div className="earlier-grid" style={{ marginTop: "2.25rem" }}>
              {EARLIER_WORK.map((p, i) => {
                const isVideo = p.image.endsWith(".mp4");
                const media = isVideo ? (
                  <video src={p.image} muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <Image src={p.image} alt={p.name} fill sizes="(max-width: 720px) 90vw, 360px" style={{ objectFit: "cover" }} />
                );
                const inner = (
                  <div className="surface card-hover" style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", background: "var(--c-surface-2)" }}>
                      {media}
                    </div>
                    <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.5rem" }}>
                        <h3 style={{ fontSize: "var(--text-lg)" }}>{p.name}</h3>
                        <span style={{ fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)", color: "var(--c-muted)", whiteSpace: "nowrap" }}>{p.date}</span>
                      </div>
                      <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-sm)", flex: 1 }}>{p.description}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {p.tags.map((t) => (
                          <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--c-muted)" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={p.name} delay={i * 80} as="article" style={{ height: "100%" }}>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", height: "100%" }}>
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .proj-eco-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) { .proj-eco-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1000px) { .proj-eco-grid { grid-template-columns: repeat(4, 1fr); } }
        .earlier-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 720px) { .earlier-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>
    </>
  );
}
