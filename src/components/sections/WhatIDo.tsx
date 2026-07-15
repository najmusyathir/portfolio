import { PILLARS, STACK } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";

export function WhatIDo() {
  return (
    <section className="section" id="what-i-do">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="What I do" title="Three things, done properly." />
        </Reveal>

        <div className="pillars-grid" style={{ marginTop: "2.5rem" }}>
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90} as="article">
              <div className="surface card-hover" style={{ padding: "1.75rem", height: "100%" }}>
                <span
                  style={{
                    display: "inline-flex",
                    width: "48px",
                    height: "48px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    background: "color-mix(in srgb, var(--c-accent) 12%, transparent)",
                    color: "var(--c-accent)",
                    marginBottom: "1.1rem",
                  }}
                >
                  <Icon name={pillar.icon} size={24} />
                </span>
                <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "0.6rem" }}>
                  {pillar.title}
                </h3>
                <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-base)" }}>
                  {pillar.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stack chips */}
        <Reveal delay={120}>
          <div
            style={{
              marginTop: "2.75rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--c-muted)",
                marginRight: "0.35rem",
              }}
            >
              Stack
            </span>
            {STACK.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 720px) {
          .pillars-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
}
