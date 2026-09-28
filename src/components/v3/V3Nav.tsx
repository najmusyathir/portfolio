"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LogoWordmark } from "@/components/ui/Logo";
import { PROFILE } from "@/lib/content";
import { LABELS, NAV_LINKS } from "./copy";
import { Pill } from "./Pill";

/**
 * Floating glass island, detached from the top edge. On narrow screens the
 * burger morphs into an X and opens a full-screen glass menu whose links rise
 * in with a stagger. Escape closes it; the page does not scroll behind it.
 */
export function V3Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const current = (href: string) => (pathname.startsWith(href) ? "page" : undefined);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="v3-nav">
        <Link href="/landing-v3" className="v3-nav-brand" aria-label="Najmu Syathir, home">
          <LogoWordmark height={18} title="Najmu Syathir" />
        </Link>
        <nav className="v3-nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="v3-nav-link" aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
        <Pill href={PROFILE.whatsapp} external small icon="whatsapp" className="v3-nav-cta">
          {LABELS.message}
        </Pill>
        <button
          type="button"
          className="v3-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <i aria-hidden="true" />
          <i aria-hidden="true" />
        </button>
      </header>

      {open && (
        <nav id={menuId} className="v3-menu" aria-label="Primary, mobile">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="v3-menu-link"
              aria-current={current(l.href)}
              style={{ ["--i" as string]: i }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Pill href={PROFILE.whatsapp} external icon="whatsapp">
            {LABELS.message}
          </Pill>
        </nav>
      )}
    </>
  );
}
