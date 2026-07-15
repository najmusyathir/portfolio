import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "Alternate theme",
  description:
    "The same landing, re-skinned in the proposed 'Espresso Editorial' palette — a side-by-side design comparison.",
};

/**
 * /landing-2 — identical content and structure to `/`, re-skinned with the
 * proposed "Espresso Editorial" palette via the data-palette override. This
 * is the one place a design opinion is offered for side-by-side comparison.
 */
export default function LandingTwoPage() {
  return (
    <div data-palette="editorial" style={{ background: "var(--c-bg)" }}>
      <Landing />
    </div>
  );
}
