'use client';

import { useEffect } from 'react';
import { NAV_OFFSET, scrollToSection } from '@/lib/nav';

/**
 * Cross-page hash landing (.docs/10 §3.3).
 *
 * Next.js App Router's own hash handling races us: it calls
 * `scrollIntoView()` on navigation, which animates smoothly (CSS
 * `scroll-behavior: smooth` on <html>) and ignores late layout
 * shifts (font swap, reveal timing). A single corrective jump can
 * itself be overtaken by that in-flight animation.
 *
 * So instead of a one-shot, this runs a short settle-and-correct
 * loop (~3s max):
 *   1. wait until the scroll position stops moving (any smooth
 *      animation finished),
 *   2. if the target section isn't sitting at the navbar offset,
 *      jump it there instantly (force-revealing `.reveal` content
 *      first),
 *   3. require a few consecutive stable-and-correct checks, then stop.
 * The loop accepts "short" landings when the page simply can't
 * scroll any further (last section), and aborts the moment the
 * user scrolls on their own.
 *
 * Mounted on every page that has in-page section ids (`/`, `/ai`).
 */
export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const id = decodeURIComponent(hash);

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    // The user taking over always wins — never fight their scroll.
    const abort = () => {
      cancelled = true;
    };
    window.addEventListener('wheel', abort, { once: true, passive: true });
    window.addEventListener('touchstart', abort, { once: true, passive: true });

    const started = performance.now();
    let prevY = window.scrollY;
    let stableAndCorrect = 0;

    const step = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (!el) return;

      const y = window.scrollY;
      const animating = Math.abs(y - prevY) > 1;
      prevY = y;

      if (!animating) {
        const offBy = el.getBoundingClientRect().top - NAV_OFFSET;
        const atMaxScroll =
          window.innerHeight + y >= document.documentElement.scrollHeight - 2;
        // `offBy > 0 && atMaxScroll`: the section sits below the offset but
        // the page physically can't scroll further — that IS the correct
        // landing (e.g. #contact at the end of the page).
        if (Math.abs(offBy) > 4 && !(offBy > 0 && atMaxScroll)) {
          scrollToSection(id, 'instant');
          stableAndCorrect = 0;
        } else {
          stableAndCorrect++;
          if (stableAndCorrect >= 3) return; // settled — done
        }
      }

      if (performance.now() - started < 3000) {
        timer = setTimeout(step, 120);
      }
    };

    // Double rAF: let React paint and the reveal observer attach
    // before the first measurement.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        timer = setTimeout(step, 60);
      });
    });

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      window.removeEventListener('wheel', abort);
      window.removeEventListener('touchstart', abort);
    };
  }, []);

  return null;
}
