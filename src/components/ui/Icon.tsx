/**
 * Inline SVG icon set. House rule: no emoji anywhere in the UI — every glyph
 * is an inline SVG. Brand marks (Instagram/Facebook/GitHub/LinkedIn) are the
 * exact paths carried over from the true-v1 site. Icons inherit currentColor.
 */
import type { CSSProperties } from "react";

export type IconName =
  | "instagram"
  | "facebook"
  | "github"
  | "linkedin"
  | "whatsapp"
  | "layers"
  | "server"
  | "spark"
  | "arrow-right"
  | "arrow-up-right"
  | "coffee"
  | "download"
  | "map-pin"
  | "mail"
  | "phone"
  | "check"
  | "chevron-down"
  | "file-text"
  | "history";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export function Icon({ name, size = 20, className, style, title }: IconProps) {
  const common = {
    width: size,
    height: size,
    className,
    style,
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
    focusable: false as const,
  };

  switch (name) {
    /* ---- Brand marks (filled, from v1) ---- */
    case "instagram":
      return (
        <svg {...common} viewBox="0 0 30 30" fill="currentColor">
          {title && <title>{title}</title>}
          <path d="M 9.998 3 C 6.139 3 3 6.142 3 10.002 L 3 20.002 C 3 23.861 6.142 27 10.002 27 L 20.002 27 C 23.861 27 27 23.858 27 19.998 L 27 9.998 C 27 6.139 23.858 3 19.998 3 L 9.998 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 C 12.791 11 11 12.791 11 15 C 11 17.209 12.791 19 15 19 C 17.209 19 19 17.209 19 15 C 19 12.791 17.209 11 15 11 z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} viewBox="0 0 30 30" fill="currentColor">
          {title && <title>{title}</title>}
          <path d="M 24 4 L 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 16 26 L 16 17 L 13 17 L 13 14 L 16 14 L 16 12.389 C 16 9.339 17.486 8 20.021 8 C 21.235 8 21.877 8.09 22.181 8.131 L 22.181 11 L 20.452 11 C 19.376 11 19 11.568 19 12.718 L 19 14 L 22.154 14 L 21.726 17 L 19 17 L 19 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.104 4 24 4 z" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} viewBox="0 0 30 30" fill="currentColor">
          {title && <title>{title}</title>}
          <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 20.623 6.872 25.328 12.092 26.63 C 12.036 26.468 12 26.28 12 26.047 L 12 23.996 C 11.513 23.996 10.697 23.996 10.492 23.996 C 9.671 23.996 8.941 23.643 8.587 22.987 C 8.194 22.258 8.126 21.143 7.152 20.461 C 6.863 20.234 7.083 19.975 7.416 20.01 C 8.031 20.184 8.541 20.606 9.021 21.232 C 9.499 21.859 9.724 22.001 10.617 22.001 C 11.05 22.001 11.698 21.976 12.308 21.88 C 12.636 21.047 13.203 20.28 13.896 19.918 C 9.9 19.507 7.993 17.519 7.993 14.82 C 7.993 13.658 8.488 12.534 9.329 11.587 C 9.053 10.647 8.706 8.73 9.435 8 C 11.233 8 12.32 9.166 12.581 9.481 C 13.477 9.174 14.461 9 15.495 9 C 16.531 9 17.519 9.174 18.417 9.483 C 18.675 9.17 19.763 8 21.565 8 C 22.297 8.731 21.946 10.656 21.667 11.594 C 22.503 12.539 22.995 13.66 22.995 14.82 C 22.995 17.517 21.091 19.504 17.101 19.917 C 18.199 20.49 19 22.1 19 23.313 L 19 26.047 C 19 26.151 18.977 26.226 18.965 26.315 C 23.641 24.676 27 20.236 27 15 C 27 8.373 21.627 3 15 3 z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor">
          {title && <title>{title}</title>}
          <path d="M 19 3 L 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 z M 9 17 L 6.477 17 L 6.477 10 L 9 10 L 9 17 z M 7.694 8.717 C 6.923 8.717 6.408 8.203 6.408 7.517 C 6.408 6.831 6.922 6.317 7.779 6.317 C 8.55 6.317 9.065 6.831 9.065 7.517 C 9.065 8.203 8.551 8.717 7.694 8.717 z M 18 17 L 15.558 17 L 15.558 13.174 C 15.558 12.116 14.907 11.872 14.663 11.872 C 14.419 11.872 13.605 12.035 13.605 13.174 C 13.605 13.337 13.605 17 13.605 17 L 11.082 17 L 11.082 10 L 13.605 10 L 13.605 10.977 C 13.93 10.407 14.581 10 15.802 10 C 17.023 10 18 10.977 18 13.174 L 18 17 z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor">
          {title && <title>{title}</title>}
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );

    /* ---- UI icons (stroked, lucide-style) ---- */
    case "layers":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M12 2 2 7l10 5 10-5-10-5Z" />
          <path d="m2 17 10 5 10-5" />
          <path d="m2 12 10 5 10-5" />
        </svg>
      );
    case "server":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <rect x="2" y="3" width="20" height="7" rx="2" />
          <rect x="2" y="14" width="20" height="7" rx="2" />
          <path d="M6 6.5h.01M6 17.5h.01" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <path d="M6 2v2M10 2v2M14 2v2" />
        </svg>
      );
    case "download":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 6 10-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "check":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "file-text":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    case "history":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          {title && <title>{title}</title>}
          <path d="M3 3v5h5" />
          <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
          <path d="M12 7v5l4 2" />
        </svg>
      );
    default:
      return null;
  }
}
