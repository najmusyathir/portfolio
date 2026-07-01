import { STATS } from '@/lib/data';

export function Stats() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '112px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1024px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
        className="stats-grid"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="reveal"
            data-delay={String(i * 80)}
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-bg-elevated) 80%, transparent)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
            }}
          >
            <p
              className="gradient-text"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                margin: '0 0 8px 0',
                lineHeight: 1,
              }}
            >
              {stat.number}
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 400,
                color: 'var(--color-text-muted)',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
