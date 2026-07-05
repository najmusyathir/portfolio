import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Hero } from '@/components/sections/Hero';
import { Standup } from '@/components/sections/Standup';
import { Projects } from '@/components/sections/Projects';
import { Stack } from '@/components/sections/Stack';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { ScrollRevealInit } from '@/components/ScrollRevealInit';
import { HashScroll } from '@/components/HashScroll';
import { DayScroll } from '@/components/DayScroll';

/**
 * The homepage is one continuous day — scroll position is time.
 * 06:12 first light → 09:04 standup → 13:00 deep work →
 * 15:20 tool check → 17:30 off the clock → 23:47 the server hums.
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
        <Standup />
        <Projects />
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
