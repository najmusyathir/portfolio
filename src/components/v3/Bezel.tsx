import type { ReactNode } from "react";

interface BezelProps {
  children: ReactNode;
  /** Extra classes on the outer shell (grid placement, deck slots). */
  className?: string;
  /** Extra classes on the inner core (tint, padding). */
  coreClassName?: string;
  /** Lighter ambient shadow for secondary cards. */
  small?: boolean;
  as?: "div" | "article" | "figure";
}

/**
 * Double bezel: an outer tray (`.v3-shell`) holding an inner plate
 * (`.v3-core`) with a concentric smaller radius, so cards read as machined
 * hardware rather than a flat rectangle on the canvas.
 */
export function Bezel({ children, className = "", coreClassName = "", small, as = "div" }: BezelProps) {
  const Tag = as;
  return (
    <Tag className={`v3-shell ${small ? "v3-shell-sm" : ""} ${className}`.trim()}>
      <div className={`v3-core ${coreClassName}`.trim()}>{children}</div>
    </Tag>
  );
}
