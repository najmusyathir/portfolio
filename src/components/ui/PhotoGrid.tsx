"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Captioned photo grid where any photo opens in a full-screen lightbox —
 * blurred backdrop, arrow-key / swipe-through navigation, Escape or backdrop
 * click to close. Body scroll locks while open.
 */
export interface GridPhoto {
  src: string;
  alt: string;
  caption: string;
}

export function PhotoGrid({ photos }: { photos: GridPhoto[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIdx((cur) => (cur === null ? cur : (cur + dir + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIdx, close, step]);

  const open = openIdx !== null ? photos[openIdx] : null;

  return (
    <>
      <div className="pg-grid">
        {photos.map((img, i) => (
          <figure key={img.src} style={{ margin: 0 }}>
            <button
              type="button"
              onClick={() => setOpenIdx(i)}
              aria-label={`View larger: ${img.caption}`}
              className="pg-thumb"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 720px) 90vw, 240px"
                style={{ objectFit: "cover" }}
              />
              <span className="pg-zoom" aria-hidden>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
                </svg>
              </span>
            </button>
            <figcaption
              style={{
                marginTop: "0.45rem",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                color: "var(--c-muted)",
              }}
            >
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {open && (
        <div
          className="pg-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          onClick={close}
        >
          <button type="button" className="pg-close" aria-label="Close" onClick={close}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                className="pg-nav pg-prev"
                aria-label="Previous photo"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="pg-nav pg-next"
                aria-label="Next photo"
                onClick={(e) => { e.stopPropagation(); step(1); }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}

          <figure className="pg-stage" onClick={(e) => e.stopPropagation()}>
            {/* Plain img: source files are already optimized ≤1200px, and the
                lightbox needs natural sizing rather than a fill box. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={open.src} alt={open.alt} className="pg-full" />
            <figcaption className="pg-caption">
              {open.caption}
              {photos.length > 1 && openIdx !== null && (
                <span style={{ opacity: 0.6 }}> · {openIdx + 1}/{photos.length}</span>
              )}
            </figcaption>
          </figure>
        </div>
      )}

      <style>{`
        .pg-grid {
          margin-top: 1.25rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.9rem;
        }
        @media (min-width: 560px) {
          .pg-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .pg-thumb {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          padding: 0;
          border: 1px solid var(--c-line);
          border-radius: 10px;
          overflow: hidden;
          background: var(--c-surface-2);
          cursor: zoom-in;
          transition: border-color 200ms ease, transform 200ms ease;
        }
        .pg-thumb:hover {
          border-color: color-mix(in srgb, var(--c-accent) 45%, var(--c-line));
          transform: translateY(-2px);
        }
        .pg-zoom {
          position: absolute;
          right: 0.5rem;
          bottom: 0.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: color-mix(in srgb, var(--c-bg) 72%, transparent);
          backdrop-filter: blur(4px);
          color: var(--c-ink);
          opacity: 0;
          transition: opacity 200ms ease;
        }
        .pg-thumb:hover .pg-zoom, .pg-thumb:focus-visible .pg-zoom { opacity: 1; }
        .pg-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 4vw, 3rem);
          background: color-mix(in srgb, var(--c-bg) 78%, transparent);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          animation: pg-fade 220ms ease;
        }
        @keyframes pg-fade { from { opacity: 0; } to { opacity: 1; } }
        .pg-stage {
          margin: 0;
          max-width: min(1100px, 100%);
          max-height: 100%;
          display: flex;
          flex-direction: column;
          animation: pg-rise 300ms cubic-bezier(0.22, 1, 0.24, 1);
        }
        @keyframes pg-rise {
          from { opacity: 0; transform: translateY(14px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pg-full {
          max-width: 100%;
          max-height: calc(100vh - 9rem);
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 14px;
          border: 1px solid var(--c-line);
          box-shadow: 0 40px 90px -40px rgb(var(--c-shadow) / 0.7);
        }
        .pg-caption {
          margin-top: 0.85rem;
          text-align: center;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--c-muted);
        }
        .pg-close, .pg-nav {
          position: fixed;
          z-index: 101;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--c-line);
          border-radius: var(--radius-full);
          background: color-mix(in srgb, var(--c-surface) 85%, transparent);
          backdrop-filter: blur(6px);
          color: var(--c-ink);
          cursor: pointer;
          transition: border-color 200ms ease, color 200ms ease;
        }
        .pg-close:hover, .pg-nav:hover { border-color: var(--c-accent); color: var(--c-accent); }
        .pg-close { top: 1.1rem; right: 1.1rem; width: 44px; height: 44px; }
        .pg-nav { top: 50%; transform: translateY(-50%); width: 46px; height: 46px; }
        .pg-prev { left: 0.9rem; }
        .pg-next { right: 0.9rem; }
        @media (prefers-reduced-motion: reduce) {
          .pg-overlay, .pg-stage, .pg-thumb { animation: none !important; transition: none !important; }
        }
      `}</style>
    </>
  );
}
