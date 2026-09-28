"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { CAFES_V2, TINTS } from "./copy";

/**
 * Café trail, v2. Same data and the same real-coordinate pins as
 * `sections/CafeTrail.tsx`; the storytelling changes. The map is sticky and
 * the stops scroll past it as tall entries: whichever stop sits in the middle
 * of the viewport lights its pin (IntersectionObserver, no scroll listener).
 * Hover or keyboard focus on a stop overrides the scroll position. On phones
 * the map pins to the top of the screen and the stops scroll underneath it.
 */

const VIEW_W = 500;
const VIEW_H = 600;

/** Simplified coastline polygon: shapes the dot grid only, never drawn.
 *  Copied from sections/CafeTrail.tsx so the two routes stay independent. */
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

const STOPS = CAFES_V2.stops;

const ROUTE =
  `M ${STOPS[0].x} ${STOPS[0].y}` +
  ` C 380 525, 330 505, ${STOPS[1].x} ${STOPS[1].y}` +
  ` C 310 430, 365 372, ${STOPS[2].x} ${STOPS[2].y}` +
  ` C 385 225, 245 145, ${STOPS[3].x} ${STOPS[3].y}`;

export function CafeTrailV2() {
  const [scrolled, setScrolled] = useState(0);
  const [hovered, setHovered] = useState(-1);
  const stopRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    // The active band is the middle of the viewport on desktop; on phones the
    // sticky map covers the top, so the band moves down to the visible part.
    const narrow = window.matchMedia("(max-width: 899px)").matches;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = Number((e.target as HTMLElement).dataset.index);
          if (!Number.isNaN(i)) setScrolled(i);
        }
      },
      { rootMargin: narrow ? "-52% 0px -28% 0px" : "-42% 0px -42% 0px", threshold: 0 },
    );
    for (const el of stopRefs.current) if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const lit = hovered >= 0 ? hovered : scrolled;

  return (
    <div className="v2-container v2-trail">
      <div className="v2-trail-map">
        <div className="v2-map">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            role="img"
            aria-label="Dot map of Peninsular Malaysia with the four café stops pinned at their real coordinates"
          >
            {DOTS.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={1.6} fill="var(--v-line-strong)" />
            ))}
            <path
              d={ROUTE}
              fill="none"
              stroke="var(--v-line-strong)"
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeDasharray="3 6"
            />
            {STOPS.map((cafe, i) => {
              const tint = TINTS[i % TINTS.length];
              const flip = cafe.x > VIEW_W - 90;
              return (
                <g key={cafe.name} className={`v2-pin ${lit === i ? "is-on" : ""}`}>
                  <circle
                    className="v2-pin-ring"
                    cx={cafe.x}
                    cy={cafe.y}
                    r={12}
                    fill={`var(--v-${tint}-bg)`}
                    stroke={`var(--v-${tint}-ink)`}
                    strokeWidth={1.2}
                  />
                  <circle cx={cafe.x} cy={cafe.y} r={3.6} fill="var(--v-ink)" />
                  <text
                    className="v2-pin-label"
                    x={cafe.x + (flip ? -18 : 18)}
                    y={cafe.y + 4}
                    textAnchor={flip ? "end" : "start"}
                  >
                    {cafe.city}
                  </text>
                </g>
              );
            })}
          </svg>
          <p className="v2-map-note">{CAFES_V2.mapNote}</p>
        </div>
      </div>

      <div className="v2-stops" onMouseLeave={() => setHovered(-1)}>
        {STOPS.map((cafe, i) => {
          const tint = TINTS[i % TINTS.length];
          return (
            <article
              key={cafe.name}
              ref={(el) => {
                stopRefs.current[i] = el;
              }}
              data-index={i}
              className={`v2-stop ${lit === i ? "is-on" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(-1)}
              aria-labelledby={`v2-stop-${i}`}
            >
              <span className={`v2-tag v2-tag-${tint}`}>{cafe.state}</span>
              <h2 id={`v2-stop-${i}`}>{cafe.name}</h2>
              <p className="v2-stop-loc">
                {cafe.city}, {cafe.state}
              </p>
              <p className="v2-mono v2-muted">
                {cafe.lat.toFixed(4)}° N, {cafe.lng.toFixed(4)}° E
              </p>
              <a href={cafe.mapsUrl} target="_blank" rel="noopener noreferrer" className="v2-link v2-link-up">
                Open in Google Maps <Icon name="arrow-up-right" size={15} />
              </a>
            </article>
          );
        })}
      </div>

      <p className="v2-trail-close v2-mono v2-muted">{CAFES_V2.closing}</p>
    </div>
  );
}
