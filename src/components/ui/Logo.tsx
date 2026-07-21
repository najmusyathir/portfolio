/**
 * Wordmark logo, inline (not next/image) so the ink text can inherit
 * currentColor and adapt across the light/dark theme — same convention as
 * Icon.tsx. The brass accent dot is hardcoded since brass reads fine on
 * both themes. A fixed two-tone snapshot of this mark also lives at
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
