"use client";

import { useEffect, useRef, useState } from "react";
import { CAFES } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";

/**
 * Scroll-driven café map. A stylized SVG of Peninsular Malaysia stays pinned
 * while café cards scroll past; the card in view drives the map — it pans,
 * zooms and "pings" that café's pin, with a slight 3D tilt for depth.
 *
 * The peninsula outline is deliberately stylized (hand-traced, not GIS data);
 * precise locations live behind each card's Google Maps link.
 */

/** Simplified Peninsular Malaysia outline, viewBox 0 0 500 600. */
const PENINSULA =
  "M65 20 L120 35 L180 55 L235 60 L262 72 L340 140 L364 157 L395 240 " +
  "L385 310 L395 390 L412 425 L434 447 L452 535 L460 552 L426 544 " +
  "L410 550 L389 540 L343 505 L307 485 L265 470 L230 438 L220 430 " +
  "L185 390 L148 313 L128 292 L113 267 L113 205 L88 150 L85 115 " +
  "L80 80 L68 35 Z";

const VIEW_W = 500;
const VIEW_H = 600;
const ZOOM = 2.6;

export function CafeTrail() {
  // -1 = intro (whole map), 0..n-1 = that café focused
  const [active, setActive] = useState(-1);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          setActive(idx);
        }
      },
      // A narrow band around the viewport's vertical center decides focus.
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const focused = active >= 0 ? CAFES[active] : null;
  const k = focused ? ZOOM : 1;
  const tx = focused ? VIEW_W / 2 - k * focused.x : 0;
  const ty = focused ? VIEW_H / 2 - k * focused.y : 0;

  return (
    <div className="cafe-layout">
      {/* Sticky map pane */}
      <div className="cafe-map-pane">
        <div
          className="cafe-map-tilt"
          style={{
            transform: focused
              ? "rotateX(6deg) rotateZ(-1.5deg) scale(1.02)"
              : "rotateX(0deg) rotateZ(0deg) scale(1)",
          }}
        >
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            role="img"
            aria-label="Stylized map of Peninsular Malaysia with café locations"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            <g
              style={{
                transform: `translate(${tx}px, ${ty}px) scale(${k})`,
                transformOrigin: "0 0",
                transition: "transform 950ms cubic-bezier(0.22, 1, 0.24, 1)",
              }}
            >
              <path
                d={PENINSULA}
                fill="color-mix(in srgb, var(--c-accent) 7%, var(--c-surface-2))"
                stroke="var(--c-line)"
                strokeWidth={1.6}
                strokeLinejoin="round"
              />
              {CAFES.map((cafe, i) => {
                const isOn = i === active;
                return (
                  <g key={cafe.name} style={{ opacity: focused && !isOn ? 0.35 : 1, transition: "opacity 500ms ease" }}>
                    {isOn && (
                      <>
                        <circle className="cafe-ping" cx={cafe.x} cy={cafe.y} r={10} fill="none" stroke="var(--c-accent)" strokeWidth={1.4} />
                        <circle className="cafe-ping cafe-ping-late" cx={cafe.x} cy={cafe.y} r={10} fill="none" stroke="var(--c-accent)" strokeWidth={1.4} />
                      </>
                    )}
                    <circle cx={cafe.x} cy={cafe.y} r={isOn ? 5.5 : 4} fill="var(--c-accent)" stroke="var(--c-bg)" strokeWidth={1.4} style={{ transition: "r 400ms ease" }} />
                    <text
                      x={cafe.x + 10}
                      y={cafe.y + 1}
                      fontSize={isOn ? 10.5 : 9}
                      fontWeight={isOn ? 700 : 500}
                      fill={isOn ? "var(--c-ink)" : "var(--c-muted)"}
                      style={{ fontFamily: "var(--font-mono)", transition: "fill 400ms ease" }}
                    >
                      {cafe.city}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
          <p className="cafe-map-note">Stylized map — pins are approximate; tap a card for the exact spot.</p>
        </div>
      </div>

      {/* Scrolling cards */}
      <div className="cafe-cards">
        <div className="cafe-intro">
          <p style={{ margin: 0, fontSize: "var(--text-lg)", color: "var(--c-body)", maxWidth: "40ch" }}>
            Scroll — each stop zooms the map to where it lives. {CAFES.length} cafés, {new Set(CAFES.map((c) => c.state)).size} states, more to find.
          </p>
        </div>
        {CAFES.map((cafe, i) => (
          <section
            key={cafe.name}
            data-idx={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="cafe-card-slot"
          >
            <article className={`surface cafe-card ${active === i ? "cafe-card-on" : ""}`}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--c-accent)",
                }}
              >
                Stop {String(i + 1).padStart(2, "0")}
              </span>
              <h2 style={{ fontSize: "var(--text-2xl)", margin: "0.6rem 0 0.25rem" }}>{cafe.name}</h2>
              <p style={{ margin: "0 0 1.25rem", color: "var(--c-muted)", fontSize: "var(--text-sm)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <Icon name="map-pin" size={14} /> {cafe.city}, {cafe.state}
              </p>
              <div>
                <a href={cafe.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  Open in Google Maps <Icon name="arrow-up-right" size={15} />
                </a>
              </div>
            </article>
          </section>
        ))}
        <div className="cafe-outro">
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
            The list grows whenever the coffee is good.
          </p>
        </div>
      </div>

      <style>{`
        .cafe-layout {
          display: grid;
          grid-template-columns: 1fr;
        }
        .cafe-map-pane {
          position: sticky;
          top: 68px;
          z-index: 1;
          height: min(48vh, 420px);
          background: var(--c-bg);
          border-bottom: 1px solid var(--c-line-soft);
          display: flex;
          justify-content: center;
          perspective: 900px;
        }
        .cafe-map-tilt {
          height: 100%;
          aspect-ratio: 5 / 6;
          transition: transform 950ms cubic-bezier(0.22, 1, 0.24, 1);
          transform-style: preserve-3d;
          position: relative;
        }
        .cafe-map-note {
          position: absolute;
          bottom: 0.4rem;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          max-width: 90%;
          margin: 0;
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: var(--c-muted);
          opacity: 0.75;
        }
        .cafe-cards { padding-bottom: 4rem; }
        .cafe-intro, .cafe-outro {
          min-height: 30vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem 1.25rem;
        }
        .cafe-card-slot {
          min-height: 62vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 1.25rem;
        }
        .cafe-card {
          padding: clamp(1.5rem, 4vw, 2.25rem);
          width: min(440px, 100%);
          opacity: 0.55;
          transform: translateY(10px) scale(0.985);
          transition: opacity 500ms ease, transform 500ms ease, box-shadow 500ms ease;
        }
        .cafe-card-on {
          opacity: 1;
          transform: translateY(0) scale(1);
          box-shadow: 0 24px 50px -28px rgb(var(--c-shadow) / 0.45);
        }
        .cafe-ping {
          transform-box: fill-box;
          transform-origin: center;
          animation: cafe-ping 2.2s cubic-bezier(0, 0.4, 0.4, 1) infinite;
        }
        .cafe-ping-late { animation-delay: 1.1s; }
        @keyframes cafe-ping {
          0% { transform: scale(0.5); opacity: 0.9; }
          80% { transform: scale(3.2); opacity: 0; }
          100% { transform: scale(3.2); opacity: 0; }
        }
        @media (min-width: 900px) {
          .cafe-layout { grid-template-columns: 1fr 1fr; }
          .cafe-map-pane {
            height: calc(100vh - 68px);
            border-bottom: none;
            border-right: 1px solid var(--c-line-soft);
            align-items: center;
          }
          .cafe-map-tilt { height: min(80vh, 640px); }
          .cafe-card-slot { min-height: 78vh; }
          .cafe-intro, .cafe-outro { min-height: 45vh; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cafe-map-tilt, .cafe-card, .cafe-ping { transition: none !important; animation: none !important; }
        }
      `}</style>
    </div>
  );
}
