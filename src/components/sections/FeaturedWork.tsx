import Link from "next/link";
import { FLAGSHIP, ECOSYSTEM } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChipRow } from "@/components/ui/Chip";

export function FeaturedWork() {
  return (
    <section className="section" id="work" style={{ background: "var(--c-bg-soft)" }}>
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Featured work"
            title="The flagship, and the ecosystem around it."
          />
        </Reveal>

        {/* Flagship */}
        <Reveal delay={80}>
          <article
            className="surface card-hover"
            style={{
              marginTop: "2.5rem",
              padding: "clamp(1.75rem, 4vw, 2.75rem)",
              position: "relative",
              overflow: "hidden",
            }}
          >
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
            <h3 style={{ fontSize: "var(--text-3xl)", marginBottom: "0.35rem", fontFamily: "var(--font-mono)" }}>
              {FLAGSHIP.name}
            </h3>
            <p
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: 600,
                color: "var(--c-ink)",
                margin: "0 0 1rem",
              }}
            >
              {FLAGSHIP.tagline}
            </p>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--c-body)",
                maxWidth: "62ch",
                margin: "0 0 1.5rem",
              }}
            >
              {FLAGSHIP.description}
            </p>
            <ChipRow items={FLAGSHIP.tags} />
          </article>
        </Reveal>

        {/* Ecosystem grid */}
        <Reveal delay={100}>
          <p
            style={{
              margin: "2.75rem 0 1.25rem",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              color: "var(--c-muted)",
            }}
          >
            The self-hosted ecosystem
          </p>
        </Reveal>

        <div className="eco-grid">
          {ECOSYSTEM.map((project, i) => {
            const inner = (
              <div
                className="surface card-hover"
                style={{
                  padding: "1.5rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                  <h4
                    style={{
                      fontSize: "var(--text-lg)",
                      fontFamily: "var(--font-mono)",
                      color: "var(--c-ink)",
                    }}
                  >
                    {project.name}
                  </h4>
                  {project.url ? (
                    <Icon name="arrow-up-right" size={18} style={{ color: "var(--c-accent)", flexShrink: 0 }} />
                  ) : (
                    <span
                      style={{
                        fontSize: "var(--text-xs)",
                        fontFamily: "var(--font-mono)",
                        color: "var(--c-muted)",
                        flexShrink: 0,
                      }}
                    >
                      internal
                    </span>
                  )}
                </div>
                <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-sm)", flex: 1 }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--c-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.live && project.url && (
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      fontFamily: "var(--font-mono)",
                      color: "var(--c-accent)",
                    }}
                  >
                    {project.url.replace("https://", "")}
                  </span>
                )}
              </div>
            );

            return (
              <Reveal key={project.name} delay={i * 70} as="article" style={{ height: "100%" }}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", height: "100%" }}
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/projects" className="link-underline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              All projects, including earlier work <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        .eco-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .eco-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1000px) {
          .eco-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
}
