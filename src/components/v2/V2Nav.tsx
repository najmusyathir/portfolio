"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LogoWordmark } from "@/components/ui/Logo";
import { PROFILE } from "@/lib/content";
import { LABELS, NAV_LINKS } from "./copy";

/** v2 header: wordmark, five links, theme toggle, one CTA. No scroll listener. */
export function V2Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const current = (href: string) => (pathname.startsWith(href) ? "page" : undefined);

  return (
    <header className="v2-nav">
      <div className="v2-container v2-nav-bar">
        <Link href="/landing-v2" className="v2-nav-brand" aria-label="Najmu Syathir, home">
          <LogoWordmark height={20} title="Najmu Syathir" />
        </Link>

        <nav className="v2-nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="v2-nav-link" aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="v2-nav-right">
          <ThemeToggle />
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-btn v2-btn-sm v2-nav-cta"
          >
            {LABELS.message}
          </a>
          <button
            type="button"
            className="v2-nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id={panelId} className="v2-nav-panel">
          <nav className="v2-container v2-nav-panel-inner" aria-label="Primary, mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="v2-nav-panel-link"
                aria-current={current(l.href)}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" className="v2-btn">
              {LABELS.message}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
