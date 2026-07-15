import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { AITeaser } from "@/components/sections/AITeaser";
import { Contact } from "@/components/sections/Contact";

/**
 * The full landing, composed once. `/` renders it with the default (v1)
 * palette; `/landing-2` renders the exact same tree inside a
 * data-palette="editorial" wrapper — same content, different skin.
 */
export function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <FeaturedWork />
        <AITeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
