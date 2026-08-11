/**
 * Wordmark logo, inline (not next/image) so the ink text can inherit
 * currentColor and adapt across the light/dark theme — same convention as
 * Icon.tsx. This is Sonnet's original "Najmu." construction: a single
 * letter-spacing value (no per-pair tspan kerning) and a literal trailing
 * period, echoed by the added dot on logo-mark.svg's monogram. Brass is
 * hardcoded on the period since it reads fine on both themes; the "Najmu"
 * text uses currentColor so it flips dark/light with the page theme instead
 * of going invisible on one of them. A fixed two-tone snapshot of this mark
 * also lives at public/logo-wordmark.svg for standalone use (e.g. embeds
 * that can't carry theme context); that file hardcodes charcoal ink since a
 * standalone SVG has no page to inherit color from.
 */
import type { CSSProperties } from "react";

interface LogoWordmarkProps {
  height?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export function LogoWordmark({ height = 22, className, style, title }: LogoWordmarkProps) {
  const width = (144 / 40) * height;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 144 40"
      className={className}
      style={style}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable={false}
    >
      {title && <title>{title}</title>}
      <text
        x="4"
        y="29"
        fontFamily="var(--font-sans, system-ui), system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        Najmu<tspan fill="#c6923e">.</tspan>
      </text>
    </svg>
  );
}
