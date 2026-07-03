import { PERSONAS } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * The Team — the six named AI personas that actually run
 * alongside Najmu on his own server. This is the heart of
 * the "AI as a collaborator, not a tool" story.
 */
export function TheTeam() {
  return (
    <section
      id="team"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '112px 24px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '20px' }}>
          <SectionLabel label="THE TEAM" />
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              color: 'var(--color-text-primary)',
              margin: '14px 0 0 0',
            }}
          >
            One human. Six AI teammates.
          </h2>
        </div>

        <p
          className="reveal"
          data-delay="100"
          style={{
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--color-text-muted)',
            maxWidth: '44em',
            margin: '0 0 48px 0',
          }}
        >
          I don&apos;t just <em>use</em> AI — I built a team out of it. Each
          teammate has a name, a scope, and a persistent memory, all running on
          a server I manage myself. When you work with me, this whole crew
          shows up.
        </p>

        <div className="team-grid" style={{ display: 'grid', gap: '18px' }}>
          {PERSONAS.map((p, i) => (
            <div
              key={p.name}
              className="card card-hover reveal"
              data-delay={String(i * 70)}
              style={{
                padding: '22px 22px 24px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* persona color accent */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, var(${p.colorVar}), transparent 80%)`,
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span
                  aria-hidden="true"
                  style={{
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    background: `var(${p.colorVar})`,
                    boxShadow: `0 0 10px color-mix(in srgb, var(${p.colorVar}) 60%, transparent)`,
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    margin: 0,
                  }}
                >
                  {p.name}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-subtle)',
                    marginLeft: 'auto',
                    textAlign: 'right',
                  }}
                >
                  {p.role}
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                  margin: 0,
                }}
              >
                {p.blurb}
              </p>
            </div>
          ))}
        </div>

        <p
          className="reveal"
          data-delay="200"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--color-text-subtle)',
            marginTop: '28px',
            marginBottom: 0,
          }}
        >
          {'// not a metaphor — these agents dispatch, build, and report back every day'}
        </p>
      </div>

      <style>{`
        .team-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
