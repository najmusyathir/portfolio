/**
 * Wordmark logo, inline (not next/image) so the ink text can inherit
 * currentColor and adapt across the light/dark theme — same convention as
 * Icon.tsx. Letterforms use hand-tuned per-pair kerning (tspan dx, tightest
 * on N→a) rather than a single letter-spacing value, since default
 * system-font spacing reads loose at logo weight. The trailing mark is a
 * small rounded square, not a period — it echoes logo-mark.svg's own
 * container shape, so the wordmark and the monogram read as one system.
 * Brass is hardcoded since it reads fine on both themes. A fixed two-tone
 * snapshot of this mark also lives at
 * public/logo-wordmark.svg for standalone use (e.g. embeds that can't carry
 * theme context); that file can't use currentColor safely because a
 * standalone SVG has no page to inherit color from, and the dark theme's
 * background is the literal charcoal ink color, so a single fixed color
 * would go invisible in one of the two themes.
 */
import type { CSSProperties } from "react";

interface LogoWordmarkProps {
  height?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export function LogoWordmark({ height = 22, className, style, title }: LogoWordmarkProps) {
  const width = (100 / 40) * height;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 40"
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
        fill="currentColor"
      >
        N<tspan dx="-2">a</tspan><tspan dx="-0.5">j</tspan><tspan dx="-0.8">m</tspan><tspan dx="-0.6">u</tspan>
      </text>
      {/* Brand mark, not punctuation: a small rounded square echoing the
          monogram's own container shape (same corner-radius-to-side ratio
          as logo-mark.svg), tucked hard against the wordmark. Ties the two
          lockups together as one system instead of a generic trailing dot. */}
      <rect x="87.2" y="21.3" width="8.2" height="8.2" rx="1.8" fill="#c6923e" />
    </svg>
  );
}
