'use client';

import { Sun, Moon, Download, ChevronDown } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { VersionSwitcher } from './VersionSwitcher';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="px-4 sm:px-6"
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

      <div className="gap-3 sm:gap-6" style={{ display: 'flex', alignItems: 'center' }}>
        <a
          href="#work"
          className="hidden md:block"
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
          className="hidden md:block"
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
          className="hidden md:block"
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

        <VersionSwitcher />

        <div
          style={{
            background: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'stretch',
            borderRadius: '999px',
            overflow: 'hidden',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-border-strong)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
        >
          <a
            href="/resume.pdf"
            download="Najmu_Syathir_Resume.pdf"
            aria-label="Download resume"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 10px',
              color: 'var(--color-text-muted)',
              fontSize: '0.75rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            <Download size={12} />
            <span className="hidden sm:inline">Download Resume</span>
          </a>

          <span style={{ width: '1px', background: 'var(--color-border)', margin: '5px 0' }} />

          <a
            href="/resume"
            aria-label="View full resume page"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '5px 8px',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            <ChevronDown size={12} />
          </a>
        </div>

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
