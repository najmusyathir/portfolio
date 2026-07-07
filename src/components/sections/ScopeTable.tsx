import { Check, X } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface ScopeRow {
  agent: string;
  role: string;
  can: string;
  cannot: string;
}

/**
 * The scope table — the strongest credibility receipt on /ai.
 * Exactly 3 rows, all confirmed-real and enforced today (see
 * portfolio-v3-content-design.md's truthfulness constraint). No
 * 4th row, no cross-agent data-isolation claim — that isn't
 * technically enforced, so it stays out.
 */
const SCOPE_ROWS: ScopeRow[] = [
  {
    agent: 'Umai',
    role: 'orchestrator',
    can: 'Holds context, dispatches the right agent for the job',
    cannot:
      'Execute code, run git operations, touch infra/servers, run destructive commands — always delegates',
  },
  {
    agent: 'Bastian',
    role: 'code',
    can: 'Write, refactor, commit (feat/, chore/, checkpoint/)',
    cannot:
      'Merge branches, open PRs, push to main — Najmu does that by hand, every time',
  },
  {
    agent: 'Every agent',
    role: '',
    can: 'Draft, propose, execute within scope',
    cannot:
      'Ship anything without passing through human review first — checkable in the git history',
  },
];

export function ScopeTable() {
  return (
    <section
      id="scope"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '96px 24px 112px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '20px' }}>
          <SectionLabel label="THE BOUNDARIES" />
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              color: 'var(--color-text-primary)',
              margin: '14px 0 10px 0',
              lineHeight: 1.15,
            }}
          >
            What each agent can — and can&apos;t — do.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--color-text-subtle)',
              margin: 0,
            }}
          >
            Not a claim. Here&apos;s the actual boundary.
          </p>
        </div>

        <div className="scope-grid" style={{ display: 'grid', gap: '16px' }}>
          {SCOPE_ROWS.map((row, i) => (
            <div
              key={row.agent}
              className="card reveal"
              data-delay={String(i * 80)}
              style={{ padding: '24px 24px 26px' }}
            >
              <h3
                className="font-display"
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  margin: '0 0 16px 0',
                }}
              >
                {row.agent}
                {row.role && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-subtle)',
                      marginLeft: '10px',
                    }}
                  >
                    — {row.role}
                  </span>
                )}
              </h3>

              <div className="scope-row" style={{ display: 'grid', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'flex',
                      flexShrink: 0,
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'color-mix(in srgb, var(--color-success) 16%, transparent)',
                      color: 'var(--color-success)',
                      marginTop: '1px',
                    }}
                  >
                    <Check size={12} strokeWidth={2.75} />
                  </span>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                    <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Can — </span>
                    {row.can}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'flex',
                      flexShrink: 0,
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'color-mix(in srgb, var(--color-error) 14%, transparent)',
                      color: 'var(--color-error)',
                      marginTop: '1px',
                    }}
                  >
                    <X size={12} strokeWidth={2.75} />
                  </span>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                    <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Cannot — </span>
                    {row.cannot}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .scope-row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
