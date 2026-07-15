import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "Alternate theme — Timber & Stone",
  description:
    "The same landing, re-skinned in the dark-first 'Timber & Stone' palette — warm charcoal, stone grey, smoked walnut and a single brass accent.",
};

/**
 * /landing-3 — identical content and structure to `/` and `/landing-2`, re-skinned
 * with the dark-first "Timber & Stone" palette via the data-palette override. Same
 * <Landing/> tree; only the skin differs. minHeight keeps the charcoal bg covering
 * the viewport so no default-light body shows through at overscroll/edges.
 */
export default function LandingThreePage() {
  return (
    <div
      data-palette="timber"
      style={{ background: "var(--c-bg)", minHeight: "100vh" }}
    >
      <Landing />
    </div>
  );
}
