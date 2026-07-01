'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface PortfolioVersion {
  label: string;
  url: string;
}

// Add future versions here — each entry renders as one row in the dropdown.
const PORTFOLIO_VERSIONS: PortfolioVersion[] = [
  { label: 'v1', url: 'https://portfolio-v1.najmusyathir.dev' },
];

export function VersionSwitcher() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Portfolio versions"
        aria-expanded={open}
        style={{
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '5px 12px',
          borderRadius: '999px',
          color: 'var(--color-text-muted)',
          fontSize: '0.75rem',
          fontWeight: 500,
          transition: 'color 0.2s, border-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--color-text-primary)';
          e.currentTarget.style.borderColor = 'var(--color-border-strong)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--color-text-muted)';
          e.currentTarget.style.borderColor = 'var(--color-border)';
        }}
      >
        <span className="hidden sm:inline">Portfolio Versions</span>
        <span className="sm:hidden">Versions</span>
        <ChevronDown size={12} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            minWidth: '180px',
            background: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border)',
            borderRadius: '10px',
            boxShadow: '0 8px 32px rgba(124, 58, 237, 0.12)',
            padding: '6px',
            zIndex: 60,
          }}
        >
          <div
            style={{
              padding: '6px 10px 8px',
              fontSize: '0.65rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-text-subtle)',
              borderBottom: '1px solid var(--color-border)',
              marginBottom: '4px',
            }}
          >
            Portfolio versions
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '6px 10px',
              borderRadius: '6px',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
            }}
          >
            <span>Current</span>
            <span
              style={{
                fontSize: '0.625rem',
                fontWeight: 600,
                color: 'var(--color-accent)',
                background: 'var(--color-bg-overlay)',
                border: '1px solid var(--color-border)',
                borderRadius: '999px',
                padding: '1px 8px',
              }}
            >
              You are here
            </span>
          </div>

          {PORTFOLIO_VERSIONS.map((version) => (
            <a
              key={version.url}
              href={version.url}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                borderRadius: '6px',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-bg-overlay)';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-muted)';
              }}
            >
              <span>{version.label}</span>
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
