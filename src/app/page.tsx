import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { HowIWorkTeaser } from '@/components/sections/HowIWorkTeaser';
import { Stack } from '@/components/sections/Stack';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { ScrollRevealInit } from '@/components/ScrollRevealInit';
import { HashScroll } from '@/components/HashScroll';
import { DayScroll } from '@/components/DayScroll';

/**
 * The homepage leads as an engineer: real shipped, self-hosted
 * production work first. The AI orchestration is revealed as the
 * answer to "how does one person run all this," not the opening
 * claim — see HowIWorkTeaser, which doors to /ai for the full story.
 *
 * The ambient dawn→night scroll background (DayScroll) stays as the
 * page's atmospheric signature; the per-section timestamp labels
 * that used to caption it were dropped in favor of clean eyebrows.
 */
export default function Home() {
  return (
    <>
      <AuroraBackground />
      <DayScroll />
      <ScrollProgress />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Projects />
        <HowIWorkTeaser />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollRevealInit />
      <HashScroll />
    </>
  );
}
