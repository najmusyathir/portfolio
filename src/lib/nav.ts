/**
 * Shared navigation model — the single source of truth for every
 * nav surface (desktop row, mobile menu, footer, CTAs).
 *
 * Link rules (see .docs/10 §3.1):
 * - Section links are ALWAYS absolute + hash (`/#work`), never bare `#work`,
 *   so they work from `/ai` and `/resume` too.
 * - Page links are real routes (`/ai`, `/resume`).
 */

export interface SectionLink {
  label: string;
  /** DOM id of the target section on the homepage */
  id: string;
  /** absolute link, safe from any page */
  href: string;
}

export interface PageLink {
  label: string;
  href: string;
}

export const SECTION_LINKS: SectionLink[] = [
  { label: 'Work', id: 'work', href: '/#work' },
  { label: 'About', id: 'about', href: '/#about' },
  { label: 'Contact', id: 'contact', href: '/#contact' },
];

export const PAGE_LINKS: PageLink[] = [
  { label: 'The Team', href: '/ai' },
  { label: 'Resume', href: '/resume' },
];

/**
 * Scroll offset for the sticky navbar (56px) + breathing room.
 * Must stay in sync with `scroll-padding-top` in globals.css.
 */
export const NAV_OFFSET = 64;

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Sections start hidden via `.reveal` (opacity 0 + translate) until the
 * IntersectionObserver fires. Transforms don't shift layout, but forcing
 * the target visible before we jump means the user never lands on an
 * invisible section waiting for its observer tick.
 */
export function forceReveal(target: HTMLElement) {
  if (target.classList.contains('reveal') || target.classList.contains('reveal-scale')) {
    target.classList.add('is-visible');
  }
  target
    .querySelectorAll<HTMLElement>('.reveal, .reveal-scale')
    .forEach((el) => el.classList.add('is-visible'));
}

/**
 * Scroll to a homepage section by id, accounting for the sticky navbar.
 * Returns false when the element doesn't exist (caller can fall back).
 *
 * Note: `behavior: 'auto'` defers to the CSS `scroll-behavior: smooth`
 * set on <html>, so anything that must jump (hash landing, reduced
 * motion) has to pass/get `'instant'` explicitly.
 */
export function scrollToSection(
  id: string,
  behavior: ScrollBehavior = 'smooth'
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  forceReveal(el);

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: prefersReducedMotion() ? 'instant' : behavior,
  });
  return true;
}
