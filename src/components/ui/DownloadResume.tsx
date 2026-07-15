"use client";

/**
 * Split "Download PDF" button used in the /resume header.
 * - Primary segment force-downloads the CURRENT résumé (/resume.pdf).
 * - Chevron segment opens a small menu to pick the current résumé or the
 *   older v1 version (/portfolio-v1.pdf).
 * Fully theme-token driven so it re-skins across all three palettes
 * (default, /landing-2 editorial, /landing-3 timber). Keyboard-accessible:
 * opens/closes with the chevron, closes on Escape or outside click.
 */

import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

interface ResumeOption {
  label: string;
  sub: string;
  href: string;
  icon: "file-text" | "history";
  download: string;
}

const OPTIONS: ResumeOption[] = [
  {
    label: "Current résumé",
    sub: "Latest — myFirst Tech, current stack",
    href: "/resume.pdf",
    icon: "file-text",
    download: "Najmu-Syathir-Resume.pdf",
  },
  {
    label: "v1 (older version)",
    sub: "Previous résumé, kept for reference",
    href: "/portfolio-v1.pdf",
    icon: "history",
    download: "Najmu-Syathir-Resume-v1.pdf",
  },
];

export function DownloadResume() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);
  const menuId = useId();

  // Close on outside click + Escape.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Move focus into the menu when it opens.
  useEffect(() => {
    if (open) firstItemRef.current?.focus();
  }, [open]);

  return (
    <div ref={wrapRef} className="dl-resume" style={{ position: "relative" }}>
      <div className="dl-resume-split">
        {/* Primary action: force-download the current résumé */}
        <a
          href="/resume.pdf"
          download="Najmu-Syathir-Resume.pdf"
          className="dl-resume-main"
        >
          <Icon name="download" size={16} /> Download PDF
        </a>
        {/* Chevron: open the version menu */}
        <button
          type="button"
          className="dl-resume-toggle"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label="Choose résumé version"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon
            name="chevron-down"
            size={16}
            style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 180ms ease" }}
          />
        </button>
      </div>

      {open && (
        <div id={menuId} role="menu" aria-label="Résumé versions" className="dl-resume-menu">
          {OPTIONS.map((opt, i) => (
            <a
              key={opt.href}
              ref={i === 0 ? firstItemRef : undefined}
              href={opt.href}
              download={opt.download}
              role="menuitem"
              className="dl-resume-item"
              onClick={() => setOpen(false)}
            >
              <span className="dl-resume-item-icon" aria-hidden="true">
                <Icon name={opt.icon} size={17} />
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "0.1rem", minWidth: 0 }}>
                <span className="dl-resume-item-label">{opt.label}</span>
                <span className="dl-resume-item-sub">{opt.sub}</span>
              </span>
            </a>
          ))}
        </div>
      )}

      <style>{`
        .dl-resume-split {
          display: inline-flex;
          align-items: stretch;
          border-radius: var(--radius-full);
          overflow: hidden;
          box-shadow: 0 12px 26px -14px color-mix(in srgb, var(--c-accent) 80%, transparent);
        }
        .dl-resume-main,
        .dl-resume-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--c-accent);
          color: var(--c-accent-ink);
          font-size: var(--text-sm);
          font-weight: 600;
          line-height: 1;
          border: none;
          cursor: pointer;
          transition: background 180ms ease;
        }
        .dl-resume-main {
          padding: 0.85rem 1.1rem 0.85rem 1.4rem;
          text-decoration: none;
        }
        .dl-resume-toggle {
          padding: 0 0.85rem;
          border-left: 1px solid color-mix(in srgb, var(--c-accent-ink) 30%, var(--c-accent));
        }
        .dl-resume-main:hover,
        .dl-resume-toggle:hover,
        .dl-resume-toggle[aria-expanded="true"] {
          background: color-mix(in srgb, var(--c-accent) 88%, #000);
        }
        .dl-resume-main:active { transform: translateY(1px); }
        .dl-resume-main:focus-visible,
        .dl-resume-toggle:focus-visible {
          outline: 2px solid var(--c-accent-2);
          outline-offset: 2px;
        }

        .dl-resume-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          z-index: 60;
          min-width: 250px;
          padding: 0.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          background: var(--c-surface);
          border: 1px solid var(--c-line);
          border-radius: var(--radius);
          box-shadow: 0 24px 50px -20px rgb(var(--c-shadow) / 0.5);
          animation: dl-resume-in 140ms ease;
        }
        @keyframes dl-resume-in {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dl-resume-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.6rem 0.7rem;
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: var(--c-ink);
          transition: background 140ms ease, color 140ms ease;
        }
        .dl-resume-item:hover,
        .dl-resume-item:focus-visible {
          background: var(--c-surface-2);
          outline: none;
        }
        .dl-resume-item-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border-radius: var(--radius-sm);
          background: color-mix(in srgb, var(--c-accent) 12%, transparent);
          color: var(--c-accent);
        }
        .dl-resume-item-label {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--c-ink);
        }
        .dl-resume-item-sub {
          font-size: var(--text-xs);
          color: var(--c-muted);
        }
      `}</style>
    </div>
  );
}
