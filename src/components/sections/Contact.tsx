'use client';

import { Mail, ExternalLink, MessageCircle } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SOCIAL_LINKS } from '@/lib/data';

const ICON_MAP: Record<string, React.ReactNode> = {
  GitHub: <ExternalLink size={16} />,
  LinkedIn: <ExternalLink size={16} />,
  Instagram: <ExternalLink size={16} />,
  Facebook: <ExternalLink size={16} />,
  WhatsApp: <MessageCircle size={16} />,
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
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '18px' }}>
          <SectionLabel label="GET IN TOUCH" />
        </div>

        <h2
          className="font-display reveal"
          data-delay="80"
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
            margin: '0 0 20px 0',
          }}
        >
          Got an idea?
          <br />
          <span className="gradient-text">Let&apos;s make it real.</span>
        </h2>

        <p
          className="reveal"
          data-delay="160"
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.75,
            margin: '0 auto 44px',
            maxWidth: '34em',
          }}
        >
          Bring the messy version — half-formed ideas are my favorite kind.
          I&apos;m quick to reply, genuinely fun to build with, and my whole
          team comes free.
        </p>

        {/* Primary CTAs */}
        <div
          className="reveal"
          data-delay="220"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '44px',
          }}
        >
          <a
            href="mailto:alsyathir@gmail.com"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '14px 28px' }}
          >
            <Mail size={18} />
            alsyathir@gmail.com
          </a>
          <a
            href="https://wa.link/k7r72h"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: '1rem', padding: '14px 28px' }}
          >
            <MessageCircle size={18} />
            WhatsApp me
          </a>
        </div>

        {/* Social links */}
        <div
          className="reveal"
          data-delay="280"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
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
                gap: '7px',
                fontSize: '0.82rem',
                fontWeight: 500,
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                padding: '7px 14px',
                border: '1px solid var(--color-border)',
                borderRadius: '999px',
                backgroundColor: 'var(--color-bg-elevated)',
                transition: 'color 0.2s, border-color 0.2s, background-color 0.2s, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-accent)';
                el.style.borderColor = 'var(--color-accent)';
                el.style.backgroundColor = 'color-mix(in srgb, var(--color-accent) 7%, var(--color-bg-elevated))';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-text-muted)';
                el.style.borderColor = 'var(--color-border)';
                el.style.backgroundColor = 'var(--color-bg-elevated)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {ICON_MAP[link.label]}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
