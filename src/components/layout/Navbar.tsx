'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Download, Menu, X, ExternalLink } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { VersionSwitcher } from './VersionSwitcher';
import { SECTION_LINKS, PAGE_LINKS, scrollToSection } from '@/lib/nav';

/**
 * Navbar — the site's single wayfinding system (.docs/10 §3).
 *
 * - Section links are absolute (`/#work`) so they work from every page.
 * - On `/`, clicks are intercepted and smooth-scrolled (no hard nav);
 *   scroll-spy highlights the section currently in view.
 * - On `/ai` and `/resume`, the current page link is highlighted instead
 *   and section links navigate home (HashScroll finishes the landing).
 * - Below `md`, a hamburger menu exposes every link, the resume
 *   download, and the v1 portfolio link.
 */
export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Active section only means anything on the homepage — derived, not reset.
  const currentSection = pathname === '/' ? activeSection : null;

  // ── Scroll-spy (§3.4) — homepage only ─────────────────────────
  useEffect(() => {
    if (pathname !== '/') return;

    let raf = 0;
    const probe = () => {
      raf = 0;
      const line = window.innerHeight * 0.42;
      let current: string | null = null;
      for (const link of SECTION_LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= line && rect.bottom >= line) {
          current = link.id;
          break;
        }
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(probe);
    };

    onScroll(); // initial probe, async via rAF
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // ── Mobile menu: close on Escape / outside click ───────────────
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [menuOpen]);

  // ── Same-page hash click (§3.2) ────────────────────────────────
  const onSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      setMenuOpen(false);
      if (pathname !== '/') return; // cross-page: let Link navigate, HashScroll lands it
      e.preventDefault();
      if (scrollToSection(id, 'smooth')) {
        history.pushState(null, '', `/#${id}`);
      }
    },
    [pathname]
  );

  return (
    <div ref={menuRef} style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <nav
        aria-label="Main"
        className="px-4 sm:px-6"
        style={{
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
        <Link
          href="/"
          aria-label="Najmu Syathir — home"
          className="flex flex-col leading-tight"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-mono text-sm font-semibold">
            <span style={{ color: 'var(--color-text-muted)' }}>&lt;</span>
            <span className="gradient-text">najmu</span>
            <span style={{ color: 'var(--color-text-muted)' }}> /&gt;</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
            Najmu Syathir
          </span>
        </Link>

        {/* ── Desktop row ─────────────────────────── */}
        <div className="nav-desktop" style={{ alignItems: 'center', gap: '20px' }}>
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(e) => onSectionClick(e, link.id)}
              className={`nav-link${currentSection === link.id ? ' nav-link-active' : ''}`}
              aria-current={currentSection === link.id ? 'true' : undefined}
            >
              {link.label}
            </Link>
          ))}

          <span aria-hidden="true" style={{ width: '1px', height: '16px', background: 'var(--color-border)' }} />

          {PAGE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? ' nav-link-active' : ''}`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}

          <VersionSwitcher />

          <a
            href="/resume.pdf"
            download="Najmu_Syathir_Resume.pdf"
            aria-label="Download resume as PDF"
            className="nav-pill"
          >
            <Download size={12} />
            <span className="hidden lg:inline">Download Resume</span>
          </a>
        </div>

        {/* ── Right cluster (always visible) ──────── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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

          <button
            className="nav-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            style={{
              background: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              padding: '6px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu panel (§3.5) ─────────────── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="nav-mobile-panel"
          style={{
            position: 'absolute',
            top: '56px',
            left: 0,
            right: 0,
            backgroundColor: 'color-mix(in srgb, var(--color-bg-base) 92%, transparent)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid var(--color-border)',
            padding: '10px 16px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(e) => onSectionClick(e, link.id)}
              className={`nav-mobile-link${currentSection === link.id ? ' nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          <span aria-hidden="true" style={{ height: '1px', background: 'var(--color-border)', margin: '8px 0' }} />

          {PAGE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`nav-mobile-link${pathname === link.href ? ' nav-link-active' : ''}`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/resume.pdf"
            download="Najmu_Syathir_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="nav-mobile-link"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Download size={14} />
            Download Resume
          </a>

          <a
            href="https://portfolio-v1.najmusyathir.dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="nav-mobile-link"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <ExternalLink size={14} />
            Portfolio v1
          </a>
        </div>
      )}

      <style>{`
        .nav-desktop {
          display: none;
        }
        .nav-burger {
          display: flex;
        }
        @media (min-width: 768px) {
          .nav-desktop {
            display: flex;
          }
          .nav-burger,
          .nav-mobile-panel {
            display: none !important;
          }
        }
        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--color-text-primary);
        }
        .nav-link.nav-link-active {
          color: var(--color-accent);
        }
        .nav-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border: 1px solid var(--color-border);
          border-radius: 999px;
          background: var(--color-bg-elevated);
          color: var(--color-text-muted);
          font-size: 0.75rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
        }
        .nav-pill:hover {
          color: var(--color-text-primary);
          border-color: var(--color-border-strong);
        }
        .nav-mobile-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-muted);
          text-decoration: none;
          padding: 10px 8px;
          border-radius: 8px;
          transition: color 0.2s, background-color 0.2s;
        }
        .nav-mobile-link:hover {
          color: var(--color-text-primary);
          background-color: var(--color-bg-overlay);
        }
        .nav-mobile-link.nav-link-active {
          color: var(--color-accent);
        }
      `}</style>
    </div>
  );
}
