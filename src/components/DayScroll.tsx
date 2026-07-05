'use client';

import { useEffect } from 'react';

/**
 * DayScroll — the spine of the "one continuous day" concept.
 *
 * Scroll position IS time of day. This driver maps scroll progress
 * (0 → 1) onto a palette of day-phases and writes the interpolated
 * colors as CSS variables, which the horizon scene (AuroraBackground)
 * paints. Dawn at the top of the page, deep night at the bottom.
 *
 * Theme-aware (separate palettes for light/dark), rAF-throttled,
 * and safe for reduced motion — color following scroll position is
 * not vestibular motion, but we skip any transitions regardless.
 */

interface Phase {
  /** scroll progress 0..1 where this phase peaks */
  at: number;
  /** low horizon glow color [r,g,b] */
  horizon: [number, number, number];
  /** upper sky wash color [r,g,b] */
  sky: [number, number, number];
  /** glow strength 0..1 */
  strength: number;
}

const LIGHT_PHASES: Phase[] = [
  { at: 0.0,  horizon: [255, 141, 60],  sky: [255, 93, 138],  strength: 0.55 }, // 06:12 dawn
  { at: 0.28, horizon: [255, 185, 61],  sky: [61, 107, 255],  strength: 0.34 }, // morning
  { at: 0.52, horizon: [125, 170, 255], sky: [61, 107, 255],  strength: 0.26 }, // 13:00 clear day
  { at: 0.74, horizon: [255, 158, 77],  sky: [255, 93, 58],   strength: 0.42 }, // 17:30 golden hour
  { at: 1.0,  horizon: [122, 90, 248],  sky: [26, 21, 53],    strength: 0.5  }, // 23:47 night
];

const DARK_PHASES: Phase[] = [
  { at: 0.0,  horizon: [255, 122, 85],  sky: [255, 123, 163], strength: 0.4  }, // dawn embers
  { at: 0.28, horizon: [255, 198, 92],  sky: [109, 140, 255], strength: 0.28 },
  { at: 0.52, horizon: [109, 140, 255], sky: [56, 189, 248],  strength: 0.22 },
  { at: 0.74, horizon: [255, 158, 77],  sky: [255, 122, 85],  strength: 0.34 },
  { at: 1.0,  horizon: [155, 138, 251], sky: [23, 18, 25],    strength: 0.46 }, // deep night
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function samplePalette(phases: Phase[], p: number) {
  let lo = phases[0];
  let hi = phases[phases.length - 1];
  for (let i = 0; i < phases.length - 1; i++) {
    if (p >= phases[i].at && p <= phases[i + 1].at) {
      lo = phases[i];
      hi = phases[i + 1];
      break;
    }
  }
  const span = hi.at - lo.at || 1;
  const t = Math.min(Math.max((p - lo.at) / span, 0), 1);
  const mix = (a: [number, number, number], b: [number, number, number]) =>
    `${Math.round(lerp(a[0], b[0], t))}, ${Math.round(lerp(a[1], b[1], t))}, ${Math.round(lerp(a[2], b[2], t))}`;
  return {
    horizon: mix(lo.horizon, hi.horizon),
    sky: mix(lo.sky, hi.sky),
    strength: lerp(lo.strength, hi.strength, t),
  };
}

export function DayScroll() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const paint = () => {
      raf = 0;
      const max = root.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      const dark = root.getAttribute('data-theme') === 'dark';
      const { horizon, sky, strength } = samplePalette(dark ? DARK_PHASES : LIGHT_PHASES, p);
      root.style.setProperty('--day-horizon', horizon);
      root.style.setProperty('--day-sky', sky);
      root.style.setProperty('--day-strength', String(strength.toFixed(3)));
      root.style.setProperty('--day-progress', String(p.toFixed(4)));
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });

    // repaint when the theme flips
    const observer = new MutationObserver(schedule);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
      root.style.removeProperty('--day-horizon');
      root.style.removeProperty('--day-sky');
      root.style.removeProperty('--day-strength');
      root.style.removeProperty('--day-progress');
    };
  }, []);

  return null;
}
