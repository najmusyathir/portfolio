import { STACK_ITEMS } from '@/lib/data';

/**
 * 15:20 — tool check. Two counter-scrolling lines, each tool with
 * its one-breath descriptor. Authored, not a logo ticker.
 */
export function Stack() {
  return (
    <section
      aria-label="The daily toolkit"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '64px 0',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
        <p className="moment-stamp reveal" style={{ marginBottom: '28px' }}>
          <span className="clock">15:20</span> tool check
        </p>
      </div>

      <div className="marquee reveal" data-delay="80" aria-hidden="false">
        <MarqueeTrack items={STACK_ITEMS} />
        <MarqueeTrack items={STACK_ITEMS} ariaHidden />
      </div>

      <div className="marquee reveal" data-delay="140" style={{ marginTop: '14px' }} aria-hidden="true">
        <MarqueeTrack items={[...STACK_ITEMS.slice(5), ...STACK_ITEMS.slice(0, 5)]} reverse />
        <MarqueeTrack items={[...STACK_ITEMS.slice(5), ...STACK_ITEMS.slice(0, 5)]} reverse ariaHidden />
      </div>
    </section>
  );
}

function MarqueeTrack({
  items,
  ariaHidden = false,
  reverse = false,
}: {
  items: typeof STACK_ITEMS;
  ariaHidden?: boolean;
  reverse?: boolean;
}) {
  return (
    <div className={`marquee-track${reverse ? ' reverse' : ''}`} aria-hidden={ariaHidden || undefined}>
      {items.map((item) => (
        <span
          key={item.label}
          style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '10px',
            padding: '0 26px',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            className="font-display"
            style={{
              fontSize: 'clamp(1.15rem, 2.4vw, 1.6rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
            }}
          >
            {item.label}
          </span>
          {item.note && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-text-subtle)',
              }}
            >
              — {item.note}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
