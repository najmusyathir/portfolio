import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { PROFILE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "From building PCs to shipping full-stack products — Najmu Syathir's path into engineering, and the sportbike-and-café habit behind Code, Coffee & Chill.",
};

interface Activity {
  title: string;
  desc: string;
  href: string;
  image: string;
}

const ACTIVITIES: Activity[] = [
  {
    title: "Design, watched closely",
    desc: "I keep an eye on modern UI/UX work and love turning strong visual ideas into things that actually run.",
    href: "https://www.instagram.com/arshakirpk/",
    image: "/aboutme_1.jpg",
  },
  {
    title: "Building machines",
    desc: "The habit that started it all — assembling high-end PCs and shaping workstations that make focused work feel good.",
    href: "/about",
    image: "/aboutme_2.jpeg",
  },
  {
    title: "Coding & problem-solving",
    desc: "Sharpening fundamentals, shipping real products, and staying curious about the tools that make the web better.",
    href: "https://leetcode.com/najmusyathir/",
    image: "/aboutme_3.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Intro / origin story */}
        <section className="section" style={{ background: "var(--hero-wash)", borderBottom: "1px solid var(--c-line-soft)" }}>
          <div className="container about-hero">
            <div>
              <Reveal>
                <SectionHeading eyebrow="About me" title="From building machines to building software." />
              </Reveal>
              <Reveal delay={90}>
                <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "1.1rem", color: "var(--c-body)", fontSize: "var(--text-lg)", maxWidth: "62ch" }}>
                  <p style={{ margin: 0 }}>
                    I came into computing sideways — through PC building. Assembling machines
                    and crafting comfortable, productive workstations pulled me toward the
                    field that could make the most of them: computer science.
                  </p>
                  <p style={{ margin: 0 }}>
                    My first real taste of code was Python in 2019, exploring it through
                    mathematical logic. That clicked hard enough that I changed direction
                    entirely — from a medical and health track to a Computer Science degree,
                    which I started in 2021.
                  </p>
                  <p style={{ margin: 0 }}>
                    Today I work as a <strong style={{ color: "var(--c-ink)" }}>full-stack engineer</strong> at{" "}
                    {PROFILE.company} (since {PROFILE.companySince}). The job has grown well past
                    execution: designing system architecture, modularising code, defining
                    components properly, and making real calls on structure and UI. That mid-level
                    judgment — knowing <em>why</em>, not just <em>how</em> — is the part I enjoy most.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140} className="about-hero-img">
              <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--c-line)", boxShadow: "0 30px 60px -34px rgb(var(--c-shadow) / 0.5)" }}>
                <Image
                  src="/aboutme_bkg.jpeg"
                  alt="Najmu's workstation setup"
                  width={620}
                  height={620}
                  sizes="(max-width: 900px) 90vw, 460px"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Code, Coffee & Chill — the human thread */}
        <section className="section">
          <div className="container">
            <Reveal>
              <div
                className="surface"
                style={{ padding: "clamp(1.75rem, 4vw, 2.75rem)", position: "relative", overflow: "hidden" }}
              >
                <span className="eyebrow" style={{ marginBottom: "1rem" }}>
                  <Icon name="coffee" size={14} /> Code, Coffee &amp; Chill
                </span>
                <h2 style={{ fontSize: "var(--text-2xl)", margin: "1rem 0 0.9rem", maxWidth: "24ch" }}>
                  Best code happens somewhere with good coffee.
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", color: "var(--c-body)", fontSize: "var(--text-lg)", maxWidth: "64ch" }}>
                  <p style={{ margin: 0 }}>
                    Since joining {PROFILE.company} I picked up a new habit that quietly became
                    part of how I work: a <strong style={{ color: "var(--c-ink)" }}>Kawasaki Ninja 250</strong>. I
                    ride a lot — and increasingly, I ride <em>to code</em>.
                  </p>
                  <p style={{ margin: 0 }}>
                    &ldquo;Coffee&rdquo; isn&apos;t decoration here. I&apos;m a café hunter: I&apos;ll take the bike
                    further out to find a spot with the right chill vibe, settle in, and work. That
                    mix — a good ride, a good brew, a quiet corner — is genuinely where my best
                    focus shows up. I&apos;ve chased cafés across a few states now (around Johor Bahru,
                    Melaka, and Kuantan), and I plan to keep exploring more of them by sportbike.
                  </p>
                </div>

                {/* Future feature: a "cafés visited" map/list once the list is
                    confirmed. Kept general for now — no hardcoded café names yet. */}
                <p
                  style={{
                    margin: "1.5rem 0 0",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--c-muted)",
                  }}
                >
                  {/* TODO: cafés-visited map coming soon */}
                  A map of every café I&apos;ve worked from is on the way.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Activities */}
        <section className="section" style={{ background: "var(--c-bg-soft)" }}>
          <div className="container">
            <Reveal>
              <SectionHeading eyebrow="Off the clock" title="What keeps me curious." align="center" />
            </Reveal>
            <div className="activities-grid" style={{ marginTop: "2.5rem" }}>
              {ACTIVITIES.map((a, i) => {
                const external = a.href.startsWith("http");
                const card = (
                  <div className="surface card-hover" style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        sizes="(max-width: 720px) 90vw, 360px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ padding: "1.5rem", flex: 1 }}>
                      <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "0.5rem" }}>{a.title}</h3>
                      <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-base)" }}>{a.desc}</p>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={a.title} delay={i * 90} as="article" style={{ height: "100%" }}>
                    {external ? (
                      <a href={a.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", height: "100%" }}>
                        {card}
                      </a>
                    ) : (
                      <Link href={a.href} style={{ display: "block", height: "100%" }}>
                        {card}
                      </Link>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .about-hero {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        .about-hero-img { order: -1; }
        @media (min-width: 900px) {
          .about-hero { grid-template-columns: 1.15fr 0.85fr; }
          .about-hero-img { order: 0; }
        }
        .activities-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 720px) {
          .activities-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </>
  );
}
