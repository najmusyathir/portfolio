/**
 * v3 copy. Re-exports the truthful v2 copy (all derived from
 * src/lib/content.ts) and adds only the strings the high-end layout needs:
 * a shorter headline that fits two lines at display scale, and one eyebrow.
 * Same rule: nothing invented, only rephrased.
 */
import { PROFILE } from "@/lib/content";

export { ARC, CONTACT, FOOTER, LABELS, NAV_LINKS, NOW_V2, WORK } from "@/components/v2/copy";

export const HERO_V3 = {
  eyebrow: PROFILE.role,
  headline: "I build it, and I run it.",
  sub: "Full-stack products, the self-hosted infrastructure they live on, and an AI-assisted workflow I can reach from anywhere.",
  portrait: {
    src: PROFILE.profileImg,
    alt: `${PROFILE.name}, ${PROFILE.role}`,
  },
} as const;
