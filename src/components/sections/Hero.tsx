'use client';

import { ChevronDown, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '0 24px',
      }}
    >
      {/* Subtle radial vignette behind text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center top, rgba(124, 58, 237, 0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1024px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1
          className="gradient-text"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            margin: '0 0 16px 0',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Najmu Syathir
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            fontWeight: 400,
            color: 'var(--color-text-muted)',
            margin: '0 0 16px 0',
            lineHeight: 1.4,
          }}
        >
          Full-Stack Engineer
          <br />
          &amp; Solution Architect
        </p>

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            fontWeight: 400,
            color: 'var(--color-text-primary)',
            margin: '0 0 40px 0',
            lineHeight: 1.6,
          }}
        >
          I design the system.
          <br />
          AI executes within it.<span className="cursor" aria-hidden="true" />
        </p>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a href="#work" className="btn-primary">
            <ChevronDown size={16} />
            View my work
          </a>
          <a
            href="https://github.com/najmusyathir"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <ExternalLink size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
