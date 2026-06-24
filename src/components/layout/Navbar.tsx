'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'color-mix(in srgb, var(--color-bg-base) 70%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}
    >
      <div className="flex flex-col leading-tight">
        <span className="font-mono text-sm font-semibold">
          <span style={{ color: 'var(--color-text-muted)' }}>&lt;</span>
          <span className="gradient-text">najmu</span>
          <span style={{ color: 'var(--color-text-muted)' }}> /&gt;</span>
        </span>
        <span className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
          Najmu Syathir
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <a
          href="#work"
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-primary)')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-muted)')}
        >
          Work
        </a>
        <a
          href="#about"
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-primary)')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-muted)')}
        >
          About
        </a>
        <a
          href="#contact"
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-primary)')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-muted)')}
        >
          Contact
        </a>

        <button
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
            borderRadius: '6px',
            transition: 'color 0.2s',
          }}
        >
          {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}
