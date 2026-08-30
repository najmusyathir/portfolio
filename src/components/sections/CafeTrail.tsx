"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CAFES } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";

/**
 * The café trail — calm edition. No scroll-jacking, no zooming: a static
 * dot-matrix peninsula with the route drawn between stops, and a card list
 * beside it. Hovering (or focusing) a card lights its pin; when nothing is
 * hovered, a slow idle cycle breathes through the stops so the map never
 * feels dead. Pins sit at real coordinates projected from each place's
 * Google Maps location.
 */

const VIEW_W = 500;
const VIEW_H = 600;

/** Simplified coastline polygon — shapes the dot grid only, never drawn. */
const COAST: [number, number][] = [
  [65, 20], [120, 35], [180, 55], [235, 60], [262, 72], [340, 140],
  [364, 157], [395, 240], [385, 310], [395, 390], [412, 425], [434, 447],
  [452, 535], [460, 552], [426, 544], [410, 550], [389, 540], [343, 505],
  [307, 485], [265, 470], [230, 438], [220, 430], [185, 390], [148, 313],
  [128, 292], [113, 267], [113, 205], [88, 150], [85, 115], [80, 80], [68, 35],
];

function inside(x: number, y: number): boolean {
  let ok = false;
  for (let i = 0, j = COAST.length - 1; i < COAST.length; j = i++) {
    const [xi, yi] = COAST[i];
    const [xj, yj] = COAST[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ok = !ok;
  }
  return ok;
}

/** Deterministic hex-grid dots (module scope: computed once, SSR-safe). */
const DOTS: [number, number][] = (() => {
  const pts: [number, number][] = [];
  for (let row = 0; row * 9.5 < VIEW_H; row++) {
    const y = 12 + row * 9.5;
    for (let col = 0; col * 11 < VIEW_W; col++) {
      const x = 8 + col * 11 + (row % 2 ? 5.5 : 0);
      if (inside(x, y)) pts.push([x, y]);
    }
  }
  return pts;
})();

/** One smooth route through the stops, south → north. */
const ROUTE =
  `M ${CAFES[0].x} ${CAFES[0].y}` +
  ` C 380 525, 330 505, ${CAFES[1].x} ${CAFES[1].y}` +
  ` C 310 430, 365 372, ${CAFES[2].x} ${CAFES[2].y}` +
  ` C 385 225, 245 145, ${CAFES[3].x} ${CAFES[3].y}`;

export function CafeTrail() {
  const [hovered, setHovered] = useState(-1);
  const [idle, setIdle] = useState(0);

  // Slow breathing cycle while nothing is hovered.
  useEffect(() => {
    if (hovered >= 0) return;
    const t = setInterval(() => setIdle((v) => (v + 1) % CAFES.length), 3000);
    return () => clearInterval(t);
  }, [hovered]);

  const lit = hovered >= 0 ? hovered : idle;

  return (
    <div className="container cafe-layout">
      {/* ——— Map panel ——— */}
      <div className="cafe-map-side">
        <div className="cafe-map-panel">
          <div className="cafe-map-meta">
            <span>PENINSULAR · MY</span>
            <span>{String(lit + 1).padStart(2, "0")} / {String(CAFES.length).padStart(2, "0")}</span>
          </div>

          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            role="img"
            aria-label="Stylized dot map of Peninsular Malaysia with café stops"
            style={{ width: "100%", flex: 1, display: "block" }}
          >
            <defs>
              <filter id="cafe-glow" x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur stdDeviation="7" />
              </filter>
            </defs>

            {DOTS.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={1.7} fill="var(--c-line)" />
            ))}

            {/* Route: quietly drifting dashes */}
            <path
              className="cafe-route"
              d={ROUTE}
              fill="none"
              stroke="var(--c-accent)"
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeDasharray="4 7"
              opacity={0.55}
            />

            {CAFES.map((cafe, i) => {
              const isLit = i === lit;
              return (
                <g key={cafe.name} style={{ opacity: isLit ? 1 : 0.55, transition: "opacity 600ms ease" }}>
                  {isLit && (
                    <>
                      <circle cx={cafe.x} cy={cafe.y} r={15} fill="var(--c-accent)" opacity={0.2} filter="url(#cafe-glow)" />
                      <circle className="cafe-ping" cx={cafe.x} cy={cafe.y} r={8} fill="none" stroke="var(--c-accent)" strokeWidth={1.1} />
                    </>
                  )}
                  <circle
                    cx={cafe.x}
                    cy={cafe.y}
                    r={isLit ? 5 : 3.5}
                    fill="var(--c-accent)"
                    stroke="var(--c-bg)"
                    strokeWidth={1.5}
                    style={{ transition: "r 400ms ease" }}
                  />
                  <text
                    x={cafe.x + (cafe.x > VIEW_W - 90 ? -13 : 13)}
                    y={cafe.y + 4}
                    textAnchor={cafe.x > VIEW_W - 90 ? "end" : "start"}
                    fontSize={11}
                    fontWeight={isLit ? 700 : 500}
                    fill={isLit ? "var(--c-ink)" : "var(--c-muted)"}
                    style={{ fontFamily: "var(--font-mono)", transition: "fill 400ms ease" }}
                  >
                    {cafe.city}
                  </text>
                </g>
              );
            })}
          </svg>

          <p className="cafe-map-note">Stylized — exact pins live in each card</p>
        </div>
      </div>

      {/* ——— Stops ——— */}
      <div className="cafe-list" onMouseLeave={() => setHovered(-1)}>
        {CAFES.map((cafe, i) => (
          <a
            key={cafe.name}
            href={cafe.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`cafe-card ${lit === i ? "cafe-card-on" : ""}`}
            onMouseEnter={() => setHovered(i)}
            onFocus={() => setHovered(i)}
            onBlur={() => setHovered(-1)}
          >
            {cafe.image && (
              <span className="cafe-card-img">
                <Image src={cafe.image} alt={cafe.name} fill sizes="(max-width: 900px) 90vw, 420px" style={{ objectFit: "cover" }} />
              </span>
            )}
            <span className="cafe-card-body">
              <span className="cafe-card-top">
                <span className="cafe-card-eyebrow">Stop {String(i + 1).padStart(2, "0")}</span>
                <span className="cafe-card-coords">
                  {cafe.lat.toFixed(4)}°N {cafe.lng.toFixed(4)}°E
                </span>
              </span>
              <span className="cafe-card-name">{cafe.name}</span>
              <span className="cafe-card-loc">
                <Icon name="map-pin" size={13} /> {cafe.city}, {cafe.state}
              </span>
              <span className="cafe-card-cta">
                Open in Google Maps <Icon name="arrow-up-right" size={13} />
              </span>
            </span>
          </a>
        ))}
        <p style={{ margin: "0.75rem 0 0", fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--c-muted)", textAlign: "center" }}>
          The list grows whenever the coffee is good.
        </p>
      </div>

      <style>{`
        .cafe-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding-block: clamp(2rem, 5vw, 3.5rem);
        }
        .cafe-map-side { display: flex; justify-content: center; }
        .cafe-map-panel {
          width: min(400px, 100%);
          aspect-ratio: 5 / 6;
          display: flex;
          flex-direction: column;
          padding: 1rem 1.1rem 0.7rem;
          border: 1px solid var(--c-line-soft);
          border-radius: var(--radius-lg);
          background:
            radial-gradient(ellipse 70% 60% at 50% 42%, color-mix(in srgb, var(--c-accent) 6%, transparent), transparent 72%),
            color-mix(in srgb, var(--c-surface-2) 45%, transparent);
          box-shadow: 0 30px 70px -42px rgb(var(--c-shadow) / 0.5);
        }
        .cafe-map-meta {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          color: var(--c-muted);
          margin-bottom: 0.5rem;
        }
        .cafe-map-note {
          margin: 0.5rem 0 0;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.06em;
          color: var(--c-muted);
          opacity: 0.7;
        }
        .cafe-route { animation: cafe-route-drift 26s linear infinite; }
        @keyframes cafe-route-drift { to { stroke-dashoffset: -220; } }
        .cafe-ping {
          transform-box: fill-box;
          transform-origin: center;
          animation: cafe-ping 2.4s cubic-bezier(0, 0.4, 0.4, 1) infinite;
        }
        @keyframes cafe-ping {
          0% { transform: scale(0.5); opacity: 0.85; }
          80%, 100% { transform: scale(3.2); opacity: 0; }
        }
        .cafe-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }
        .cafe-card {
          position: relative;
          display: block;
          overflow: hidden;
          border: 1px solid var(--c-line);
          border-radius: var(--radius-lg);
          background: var(--c-surface);
          transition: border-color 350ms ease, transform 350ms ease, box-shadow 350ms ease;
        }
        .cafe-card-on {
          border-color: color-mix(in srgb, var(--c-accent) 40%, var(--c-line));
          transform: translateY(-2px);
          box-shadow: 0 22px 45px -28px rgb(var(--c-shadow) / 0.45);
        }
        .cafe-card-img {
          position: relative;
          display: block;
          aspect-ratio: 16 / 7;
          background: var(--c-surface-2);
          border-bottom: 1px solid var(--c-line-soft);
        }
        .cafe-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 1.15rem 1.35rem 1.25rem;
        }
        .cafe-card-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 0.75rem;
          margin-bottom: 0.35rem;
        }
        .cafe-card-eyebrow {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--c-accent);
        }
        .cafe-card-coords {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.04em;
          color: var(--c-muted);
          white-space: nowrap;
        }
        .cafe-card-name {
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--c-ink);
          line-height: 1.15;
        }
        .cafe-card-loc {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: var(--text-sm);
          color: var(--c-muted);
        }
        .cafe-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.75rem;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--c-accent);
          opacity: 0;
          transform: translateY(3px);
          transition: opacity 300ms ease, transform 300ms ease;
        }
        .cafe-card-on .cafe-card-cta { opacity: 1; transform: translateY(0); }
        @media (min-width: 900px) {
          .cafe-layout { grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center; }
          .cafe-map-side { position: sticky; top: 92px; }
          .cafe-map-panel { width: min(440px, 100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cafe-route, .cafe-ping { animation: none !important; }
          .cafe-card, .cafe-card-cta { transition: none !important; }
        }
      `}</style>
    </div>
  );
}
