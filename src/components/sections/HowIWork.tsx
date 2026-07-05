import { WORKFLOW_INTRO, WORKFLOW_CLOSING, WORKFLOW_STEPS } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * How I work with AI — restored v2 content (.docs/10 §1), Daybreak skin.
 * The framing + 5-step process is the site's actual differentiator:
 * AI as a precision instrument — directed, audited, owned.
 */
export function HowIWork() {
  return (
    <section
      id="workflow"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '112px 24px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '44px' }}>
          <SectionLabel label="WORKFLOW" />
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
            How I work with AI
          </h2>
        </div>

        <div className="workflow-layout" style={{ display: 'grid', gap: '48px', alignItems: 'start' }}>
          {/* ── The framing ─────────────────────── */}
          <div className="reveal" data-delay="100">
            {WORKFLOW_INTRO.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                style={{
                  fontSize: '1rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.75,
                  margin: '0 0 24px 0',
                }}
              >
                {paragraph}
              </p>
            ))}

            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                fontWeight: 700,
                lineHeight: 1.5,
                color: 'var(--color-text-primary)',
                margin: 0,
                paddingLeft: '18px',
                borderLeft: '3px solid transparent',
                borderImage: 'linear-gradient(180deg, var(--color-accent-from), var(--color-accent-to)) 1',
              }}
            >
              {WORKFLOW_CLOSING}
            </p>
          </div>

          {/* ── The 5-step process ──────────────── */}
          <div className="reveal" data-delay="200">
            <ol style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: 0, padding: 0, listStyle: 'none' }}>
              {WORKFLOW_STEPS.map((step, i) => (
                <li key={step.title} style={{ display: 'flex', gap: '18px', alignItems: 'stretch' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div
                      aria-hidden="true"
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))',
                        flexShrink: 0,
                        marginTop: '5px',
                        boxShadow: '0 0 10px color-mix(in srgb, var(--color-accent-mid) 55%, transparent)',
                      }}
                    />
                    {i < WORKFLOW_STEPS.length - 1 && (
                      <div
                        aria-hidden="true"
                        style={{
                          width: '2px',
                          flex: 1,
                          minHeight: '28px',
                          background: 'linear-gradient(to bottom, var(--color-accent-from), var(--color-accent-to))',
                          opacity: 0.35,
                        }}
                      />
                    )}
                  </div>

                  <div style={{ paddingBottom: i < WORKFLOW_STEPS.length - 1 ? '28px' : 0 }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        color: 'var(--color-text-subtle)',
                        margin: '0 0 2px 0',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        margin: '0 0 4px 0',
                        lineHeight: 1.35,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <style>{`
        .workflow-layout {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .workflow-layout {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
