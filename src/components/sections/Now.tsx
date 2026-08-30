import Link from "next/link";
import { NOW } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * The thesis section: what every project on the server is actually for.
 * Replaces the old one-line AITeaser — AI appears here as one capability of a
 * working environment, not as the headline, so the landing still doesn't read
 * as an "AI website".
 */
export function Now() {
  return (
    <section className="section" id="now">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow={NOW.eyebrow} title={NOW.title} />
        </Reveal>

        <div className="now-grid">
          {/* Narrative */}
          <Reveal delay={80}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                color: "var(--c-body)",
                fontSize: "var(--text-lg)",
                maxWidth: "62ch",
              }}
            >
              <p style={{ margin: 0, color: "var(--c-ink)", fontWeight: 600 }}>{NOW.lead}</p>
              {NOW.paragraphs.map((para) => (
                <p key={para.slice(0, 24)} style={{ margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Capabilities */}
          <div className="now-cards">
            {NOW.capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={100 + i * 70} as="article" style={{ height: "100%" }}>
                <div
                  className="surface card-hover"
                  style={{
                    padding: "1.35rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      width: "38px",
                      height: "38px",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      background: "color-mix(in srgb, var(--c-accent) 12%, transparent)",
                      color: "var(--c-accent)",
                    }}
                  >
                    <Icon name={cap.icon} size={19} />
                  </span>
                  <h3 style={{ fontSize: "var(--text-base)", lineHeight: 1.3 }}>{cap.title}</h3>
                  <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-sm)" }}>
                    {cap.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing line + route out to the engineering detail */}
        <Reveal delay={140}>
          <div
            className="surface now-closing"
            style={{ marginTop: "2.5rem", padding: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "var(--text-xl)",
                fontWeight: 600,
                color: "var(--c-ink)",
                lineHeight: 1.4,
                maxWidth: "58ch",
              }}
            >
              {NOW.closing}
            </p>
            <Link href="/ai" className="btn btn-ghost" style={{ flexShrink: 0 }}>
              How the AI side is built <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        .now-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 2.5rem;
          align-items: start;
        }
        .now-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 560px) {
          .now-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 960px) {
          .now-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
        }
        .now-closing {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
      `}</style>
    </section>
  );
}
