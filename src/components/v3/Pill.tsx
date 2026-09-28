import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

interface PillProps {
  href: string;
  children: ReactNode;
  icon?: IconName;
  ghost?: boolean;
  small?: boolean;
  external?: boolean;
  className?: string;
}

/**
 * Pill CTA with the trailing icon nested in its own circular island
 * (button-in-button). External links open in a new tab; internal ones use
 * next/link.
 */
export function Pill({ href, children, icon = "arrow-right", ghost, small, external, className = "" }: PillProps) {
  const cls = `v3-pill ${ghost ? "v3-pill-ghost" : ""} ${small ? "v3-pill-sm" : ""} ${className}`.trim();
  const inner = (
    <>
      <span>{children}</span>
      <span className="v3-pill-ic" aria-hidden="true">
        <Icon name={icon} size={small ? 13 : 15} />
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
