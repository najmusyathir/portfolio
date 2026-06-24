'use client';

import { STACK_ITEMS } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Stack() {
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
          <SectionLabel label="TOOLS" />
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: '12px 0 0 0',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Tech I work with
          </h2>
        </div>

        <div
          className="reveal"
          data-delay="100"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {STACK_ITEMS.map((item, i) => (
            <StackItem key={item.label} label={item.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackItem({ label, index }: { label: string; index: number }) {
  return (
    <div
      className="stack-item"
      data-delay={String(index * 40)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'color-mix(in srgb, var(--color-bg-elevated) 80%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid var(--color-border)',
        borderRadius: '10px',
        padding: '10px 16px',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-mono)',
        transition: 'color 0.2s, border-color 0.2s, background-color 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = 'var(--color-accent)';
        el.style.borderColor = 'var(--color-border-strong)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = 'var(--color-text-muted)';
        el.style.borderColor = 'var(--color-border)';
      }}
    >
      {label}
    </div>
  );
}
