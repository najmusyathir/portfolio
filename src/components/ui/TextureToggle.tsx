"use client";

import { useEffect, useState } from "react";

/**
 * Accessible on/off control for the stone-vein ("rekahan batu") background
 * texture. The actual toggle is a `data-texture` attribute on <html> (set
 * pre-paint from localStorage in the root layout, default ON); this control
 * just flips it and persists the choice. Rendered as an ARIA switch so it's
 * keyboard-operable (Enter/Space via the native <button>) and announced
 * correctly. Icon is inline SVG (house rule — no emoji).
 */
export function TextureToggle() {
  const [on, setOn] = useState(true);
  const [ready, setReady] = useState(false);

  // Sync from the attribute the pre-paint script already resolved, so the
  // control reflects the real state (avoids assuming ON after a hydrate).
  // Deferred to the next frame (async, not a synchronous effect-body setState)
  // to match the repo's Reveal pattern and satisfy react-hooks lint.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setOn(document.documentElement.getAttribute("data-texture") !== "off");
      setReady(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  function toggle() {
    const next = !on;
    setOn(next);
    document.documentElement.setAttribute("data-texture", next ? "on" : "off");
    try {
      localStorage.setItem("pw-texture", next ? "on" : "off");
    } catch {
      /* storage may be unavailable (private mode); the attribute still flips */
    }
  }

  return (
    <button
      type="button"
      className="texture-toggle"
      role="switch"
      aria-checked={ready ? on : true}
      aria-label="Stone texture background"
      onClick={toggle}
    >
      <span className="texture-toggle-dot" aria-hidden="true">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="false"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M3 10c3 0 4 3 7 3M14 3c0 3 3 4 3 7M10 21c0-3 2-4 4-4" />
        </svg>
      </span>
      Texture {ready ? (on ? "on" : "off") : "on"}
    </button>
  );
}
