"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** stagger in ms */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li" | "section" | "article";
}

/**
 * Progressive-enhancement scroll reveal. Content is fully in the DOM at all
 * times; the observer only toggles opacity/transform. If the observer never
 * runs (SSR, no-JS, reduced-motion), CSS keeps content visible.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Legacy fallback: reveal on next frame (async, not a synchronous
      // effect-body setState) so content is never left hidden.
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
