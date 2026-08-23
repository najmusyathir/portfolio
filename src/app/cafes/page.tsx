import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CafeTrail } from "@/components/sections/CafeTrail";

export const metadata: Metadata = {
  title: "Café Trail",
  description:
    "Code, Coffee & Chill — the cafés I've worked from across Malaysia, on a scroll-driven map.",
};

export default function CafesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="section-tight"
          style={{ background: "var(--hero-wash)", borderBottom: "1px solid var(--c-line-soft)" }}
        >
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Code, Coffee & Chill"
                title="The café trail."
                intro="I do my best work away from a desk — café-hunting for a good spot and a quiet corner is genuinely part of how I stay focused. These are the stops so far."
              />
            </Reveal>
          </div>
        </section>
        <CafeTrail />
      </main>
      <Footer />
    </>
  );
}
