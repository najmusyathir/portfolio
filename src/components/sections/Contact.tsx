'use client';

import { Mail, ExternalLink } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '112px 24px 144px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '16px' }}>
          <SectionLabel label="GET IN TOUCH" />
        </div>

        <h2
          className="reveal"
          data-delay="80"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            margin: '0 0 16px 0',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Let&apos;s work together
        </h2>

        <p
          className="reveal"
          data-delay="160"
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.75,
            margin: '0 auto 40px',
            maxWidth: '480px',
          }}
        >
          Open to interesting projects, collaborations, or just a good conversation.
          The best way to reach me is by email.
        </p>

        <div
          className="reveal"
          data-delay="240"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <a href="mailto:alsyathir@gmail.com" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 28px' }}>
            <Mail size={18} />
            alsyathir@gmail.com
          </a>

          <a
            href="https://github.com/najmusyathir"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)')}
          >
            <ExternalLink size={14} />
            github.com/najmusyathir
          </a>
        </div>
      </div>
    </section>
  );
}
