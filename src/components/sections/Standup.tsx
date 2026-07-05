import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PERSONAS } from '@/lib/data';

/**
 * 09:04 — standup. Not a section, a moment: one breath between
 * first light and deep work where the whole crew checks in.
 * The full roster lives on /ai; this is the hallway version.
 */
export function Standup() {
  return (
    <section
      aria-label="Morning standup — the AI team checks in"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '40px 24px 56px',
      }}
    >
      <div
        style={{
          maxWidth: '1024px',
          margin: '0 auto',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          padding: '26px 0',
        }}
      >
        <div
          className="standup-row reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            gap: '10px 22px',
          }}
        >
          <p className="moment-stamp" style={{ flexShrink: 0 }}>
            <span className="clock">09:04</span> standup
          </p>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              lineHeight: 2,
              color: 'var(--color-text-muted)',
              margin: 0,
              flex: '1 1 28em',
            }}
          >
            {PERSONAS.map((p, i) => (
              <span key={p.name} style={{ whiteSpace: 'nowrap' }}>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: `var(${p.colorVar})`,
                    marginRight: '6px',
                    verticalAlign: 'baseline',
                  }}
                />
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
                  {p.name}
                </span>{' '}
                {p.role.toLowerCase()}
                {i < PERSONAS.length - 1 && (
                  <span style={{ color: 'var(--color-text-subtle)', margin: '0 10px 0 10px' }}>·</span>
                )}
              </span>
            ))}
          </p>

          <Link
            href="/ai"
            className="standup-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--color-accent)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            full roster
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <style>{`
        .standup-link {
          transition: gap 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .standup-link:hover {
          gap: 10px;
        }
      `}</style>
    </section>
  );
}
