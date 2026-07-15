"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/content";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/ai", label: "AI" },
  { href: "/resume", label: "Résumé" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled
          ? "color-mix(in srgb, var(--c-bg) 82%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--c-line)" : "transparent"}`,
        transition: "background 240ms ease, border-color 240ms ease",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "var(--text-lg)",
            letterSpacing: "-0.02em",
            color: "var(--c-ink)",
          }}
        >
          Najmu<span style={{ color: "var(--c-accent)" }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ alignItems: "center", gap: "0.35rem" }}>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.5rem 0.85rem",
                borderRadius: "var(--radius-full)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                color: isActive(link.href) ? "var(--c-ink)" : "var(--c-muted)",
                background: isActive(link.href) ? "var(--c-surface-2)" : "transparent",
                transition: "color 160ms ease, background 160ms ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginLeft: "0.5rem", padding: "0.6rem 1.1rem" }}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            background: "transparent",
            border: "1px solid var(--c-line)",
            borderRadius: "10px",
            width: "42px",
            height: "42px",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--c-ink)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div
          className="nav-mobile"
          style={{
            borderTop: "1px solid var(--c-line)",
            background: "var(--c-bg)",
          }}
        >
          <div className="container" style={{ paddingBlock: "1rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "0.75rem 0.5rem",
                  borderRadius: "10px",
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  color: isActive(link.href) ? "var(--c-accent)" : "var(--c-ink)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PROFILE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: "0.5rem" }}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop { display: none; }
        @media (min-width: 860px) {
          .nav-desktop { display: flex; }
          .nav-toggle { display: none !important; }
        }
        @media (max-width: 859px) {
          .nav-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
