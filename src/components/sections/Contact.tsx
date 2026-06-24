'use client';

import { Mail, ExternalLink, MessageCircle } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SOCIAL_LINKS } from '@/lib/data';

const ICON_MAP: Record<string, React.ReactNode> = {
  GitHub: <ExternalLink size={18} />,
  LinkedIn: <ExternalLink size={18} />,
  Instagram: <ExternalLink size={18} />,
  Facebook: <ExternalLink size={18} />,
  WhatsApp: <MessageCircle size={18} />,
};

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

        {/* Social links */}
        <div
          className="reveal"
          data-delay="200"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                padding: '8px 16px',
                border: '1px solid var(--color-border)',
                borderRadius: '999px',
                backgroundColor: 'var(--color-bg-elevated)',
                transition: 'color 0.2s, border-color 0.2s, background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-accent)';
                el.style.borderColor = 'var(--color-accent)';
                el.style.backgroundColor = 'color-mix(in srgb, var(--color-accent) 8%, var(--color-bg-elevated))';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-text-muted)';
                el.style.borderColor = 'var(--color-border)';
                el.style.backgroundColor = 'var(--color-bg-elevated)';
              }}
            >
              {ICON_MAP[link.label]}
              {link.label}
            </a>
          ))}
        </div>

        <div
          className="reveal"
          data-delay="280"
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
        </div>
      </div>
    </section>
  );
}
