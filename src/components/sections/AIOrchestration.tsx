import { SectionLabel } from '@/components/ui/SectionLabel';

const STEPS = [
  'Design & architecture',
  'Context docs + system specs',
  'Agent executes',
  'Human review + git commit',
  'Ship',
];

export function AIOrchestration() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '112px 24px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <SectionLabel label="WORKFLOW" />
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: '12px 0 0 0',
              fontFamily: 'var(--font-sans)',
            }}
          >
            How I work with AI
          </h2>
        </div>

        <div
          className="ai-layout"
          style={{ display: 'grid', gap: '48px', alignItems: 'start' }}
        >
          <div className="reveal" data-delay="100">
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: '0 0 16px 0',
              }}
            >
              I work with multiple AI agents as part of my development workflow.
              The distinction matters: I design the architecture and write the context documentation.
              The agents execute within that structure — with code review, git discipline, and human sign-off.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              This isn&apos;t AI doing my job. It&apos;s AI as a precision instrument — directed, audited, owned.
            </p>
          </div>

          <div className="reveal" data-delay="200">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {STEPS.map((step, i) => (
                <div key={step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    {/* Step dot */}
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))',
                        flexShrink: 0,
                        marginTop: '4px',
                      }}
                    />
                    {/* Connector line */}
                    {i < STEPS.length - 1 && (
                      <div
                        style={{
                          width: '2px',
                          height: '36px',
                          background: 'linear-gradient(to bottom, var(--color-accent-from), var(--color-accent-to))',
                          opacity: 0.4,
                        }}
                      />
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: 'var(--color-text-primary)',
                      margin: '0 0 36px 0',
                      lineHeight: 1.4,
                      paddingTop: '0',
                    }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .ai-layout {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
