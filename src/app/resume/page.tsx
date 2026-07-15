import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ChipRow } from "@/components/ui/Chip";
import { PROFILE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Najmu Syathir — Full-Stack Engineer. Experience, projects, education and skills.",
};

interface Job {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tech?: string[];
}

const JOBS: Job[] = [
  {
    title: "Full-Stack Engineer",
    company: "myFirst Tech Sdn Bhd",
    period: "Mar 2025 – Present",
    bullets: [
      "Building production web applications with Next.js and TypeScript across the full stack — architecture, component design, and shipping features end to end.",
      "Integrated payment gateways — Stripe and Airwallex — for transactions and cross-border payments.",
      "Worked with Go for backend services alongside the TypeScript stack.",
    ],
    tech: ["Next.js", "TypeScript", "Go", "Stripe", "Airwallex"],
  },
  {
    title: "Junior Software Developer & Operations (FE)",
    company: "Guard Genius Sdn Bhd",
    period: "Aug 2024 – Mar 2025",
    bullets: [
      "Developed and optimised responsive web applications with Vue.js and Tailwind CSS, ensuring cross-device compatibility.",
      "Integrated RESTful APIs with cross-functional teams to improve data flow and performance.",
      "Maintained code quality through Git branching strategies (staging/development).",
      "Redesigned the company website in Figma, improving UX and aligning with business goals.",
      "Used Sentry for bug tracking and resolution; implemented email automation via a mail server API.",
    ],
    tech: ["Vue.js", "Flask", "MySQL", "Git", "Figma"],
  },
  {
    title: "Software Developer Intern",
    company: "AQ Wise Sdn Bhd",
    period: "Mar 2024 – Jun 2024",
    bullets: [
      "Built an e-commerce platform in Laravel with product management and shopping-cart features.",
      "Designed and managed MySQL databases for catalogs, user profiles and order histories.",
      "Contributed a responsive sidebar to a Flutter project; built dynamic interfaces with Blade.",
    ],
    tech: ["Flutter", "Laravel", "PHP", "Tailwind CSS"],
  },
];

interface ResumeProject {
  name: string;
  desc: string;
  tags: string[];
  url?: string;
  note?: string;
}

const PROJECT_GROUPS: { label: string; items: ResumeProject[] }[] = [
  {
    label: "Personal / Self-Hosted",
    items: [
      { name: "personal-dashboard", desc: "AI-connected personal life assistant — finance, scheduling, meetings, career, tasks.", tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"] },
      { name: "acadeon-cli", desc: "Browser-based PTY terminal with TOTP auth.", tags: ["Next.js", "TypeScript", "node-pty"], url: "https://cli.najmusyathir.dev" },
      { name: "acadeon-pulse", desc: "Uptime monitor PWA with escalating push alerts.", tags: ["Next.js", "TypeScript", "PWA"], url: "https://pulse.najmusyathir.dev" },
      { name: "ssh-web-server", desc: "Browser-based SSH client, zero install.", tags: ["Next.js", "TypeScript", "WebSocket"], url: "https://ssh.najmusyathir.dev" },
      { name: "ai_hub_bridge", desc: "Async AI job queue bridging the Claude CLI to web and Telegram.", tags: ["Next.js", "TypeScript", "Supabase Realtime"] },
      { name: "CPU–Motherboard Compatibility Checker", desc: "Final Year Project — browser extension on Lazada's cart to verify CPU/motherboard compatibility. Awarded Best Industrial Panel FYP (2024).", tags: ["Python", "FastAPI", "Docker", "Data scraping"] },
    ],
  },
  {
    label: "Client / Freelance",
    items: [
      { name: "MNS Tech Store", desc: "E-commerce platform for PC parts and accessories.", tags: ["Laravel", "Blade", "MySQL", "Tailwind CSS"] },
      { name: "Bakers Heist", desc: "E-commerce storefront for a cake shop and bakery.", tags: ["HTML5", "CSS3", "JavaScript"], url: "https://bakers-heist.vercel.app" },
      { name: "Astral Apparel", desc: "Online store for Muslimah fashion — abaya, baju kurung, modest wear.", tags: ["HTML5", "CSS3", "JavaScript"], url: "https://astral-apparel.vercel.app" },
      { name: "PetCare Clinic System", desc: "Grooming and vet booking — appointments, pet profiles, service management.", tags: ["Laravel", "Blade", "MySQL", "JavaScript"] },
    ],
  },
];

const SKILL_GROUPS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "PHP", "HTML5", "CSS3"] },
  { label: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "SCSS/SASS"] },
  { label: "Backend", items: ["Node.js", "Go", "FastAPI", "Flask", "Laravel", "REST API design"] },
  { label: "Payments", items: ["Stripe", "Airwallex"] },
  { label: "Database & ORM", items: ["PostgreSQL", "MySQL", "Prisma"] },
  { label: "Infra & DevOps", items: ["Docker", "Git", "Linux server admin", "Cloudflare (Tunnels, Zero Trust)", "Supabase", "tmux"] },
  { label: "AI Tools", items: ["Claude Code", "Cursor"] },
  { label: "Tools", items: ["Figma", "Sentry", "Android Studio", "Flutter"] },
];

const EDUCATION = [
  { title: "Bachelor of Computer Science (Hons.)", school: "Universiti Teknologi MARA, Melaka (Kampus Jasin)", meta: "Jun 2023 · CGPA 3.18" },
  { title: "Diploma in Applied Science", school: "Universiti Teknologi MARA, Perlis (Kampus Arau)", meta: "Feb 2021 · CGPA 3.21" },
];

const cardStyle: React.CSSProperties = { padding: "1.5rem" };

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="section-tight" style={{ background: "var(--hero-wash)", borderBottom: "1px solid var(--c-line-soft)" }}>
          <div className="container">
            <Reveal>
              <span className="eyebrow" style={{ marginBottom: "1rem" }}>Résumé</span>
              <h1 style={{ fontSize: "var(--text-4xl)", margin: "1rem 0 0.4rem", lineHeight: 1.05 }}>
                {PROFILE.fullName}
              </h1>
              <p style={{ fontSize: "var(--text-xl)", fontWeight: 600, color: "var(--c-accent)", margin: "0 0 1.25rem" }}>
                {PROFILE.role}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", color: "var(--c-body)", fontSize: "var(--text-sm)", marginBottom: "1.5rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}><Icon name="map-pin" size={15} /> {PROFILE.location}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}><Icon name="phone" size={15} /> {PROFILE.phone}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}><Icon name="mail" size={15} /> {PROFILE.email}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a href={PROFILE.resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Icon name="download" size={16} /> Download PDF
                </a>
                <a href="https://github.com/najmusyathir" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <Icon name="github" size={16} /> GitHub
                </a>
                <Link href="/" className="btn btn-ghost">najmusyathir.dev</Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Summary */}
        <section className="section-tight">
          <div className="container" style={{ maxWidth: "900px" }}>
            <Reveal>
              <div className="surface" style={{ padding: "1.75rem" }}>
                <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-lg)", lineHeight: 1.7 }}>
                  Full-stack engineer with 2+ years of professional experience across front-end and
                  back-end development, plus a growing personal infrastructure of self-hosted
                  projects — browser-based terminals, uptime monitoring, multi-tenant SaaS, and
                  async AI orchestration, all running on infrastructure I manage myself. Comfortable
                  owning the full stack: front-end (React, Vue.js, Next.js), back-end (Node.js,
                  Python, PHP), and infrastructure (Linux, Docker, Cloudflare). Currently a
                  Full-Stack Engineer at {PROFILE.company}.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Experience */}
        <section className="section-tight">
          <div className="container" style={{ maxWidth: "900px" }}>
            <Reveal><SectionHeading eyebrow="Experience" title="Work experience" /></Reveal>
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {JOBS.map((job, i) => (
                <Reveal key={job.company} delay={i * 70}>
                  <div className="surface" style={cardStyle}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.25rem" }}>
                      <h3 style={{ fontSize: "var(--text-lg)" }}>{job.title}</h3>
                      <span style={{ fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)", color: "var(--c-muted)", whiteSpace: "nowrap" }}>{job.period}</span>
                    </div>
                    <p style={{ margin: "0 0 0.9rem", color: "var(--c-accent)", fontWeight: 600, fontSize: "var(--text-sm)" }}>{job.company}</p>
                    <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {job.bullets.map((b, bi) => (
                        <li key={bi} style={{ color: "var(--c-body)", fontSize: "var(--text-sm)", lineHeight: 1.6 }}>{b}</li>
                      ))}
                    </ul>
                    {job.tech && <div style={{ marginTop: "1rem" }}><ChipRow items={job.tech} /></div>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-tight">
          <div className="container" style={{ maxWidth: "900px" }}>
            <Reveal><SectionHeading eyebrow="Work" title="Projects" /></Reveal>
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
              {PROJECT_GROUPS.map((group, gi) => (
                <Reveal key={group.label} delay={gi * 60}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-muted)", margin: "0 0 1rem" }}>
                    {group.label}
                  </p>
                  <div className="resume-proj-grid">
                    {group.items.map((p) => (
                      <div key={p.name} className="surface" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <h4 style={{ fontSize: "var(--text-base)", fontFamily: "var(--font-mono)", color: "var(--c-ink)" }}>{p.name}</h4>
                        <p style={{ margin: 0, color: "var(--c-body)", fontSize: "var(--text-sm)", flex: 1 }}>{p.desc}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                          {p.tags.map((t) => (
                            <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--c-muted)" }}>{t}</span>
                          ))}
                        </div>
                        {p.url && (
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-underline" style={{ fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)" }}>
                            {p.url.replace("https://", "")}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Education + Skills */}
        <section className="section" style={{ background: "var(--c-bg-soft)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <Reveal><SectionHeading eyebrow="Education" title="Education" /></Reveal>
            <div className="resume-edu-grid" style={{ marginTop: "1.75rem" }}>
              {EDUCATION.map((e) => (
                <div key={e.title} className="surface" style={cardStyle}>
                  <h3 style={{ fontSize: "var(--text-base)", marginBottom: "0.3rem" }}>{e.title}</h3>
                  <p style={{ margin: "0 0 0.5rem", color: "var(--c-body)", fontSize: "var(--text-sm)" }}>{e.school}</p>
                  <p style={{ margin: 0, color: "var(--c-muted)", fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)" }}>{e.meta}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3rem" }}>
              <Reveal><SectionHeading eyebrow="Tools" title="Skills" /></Reveal>
              <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {SKILL_GROUPS.map((g, i) => (
                  <Reveal key={g.label} delay={i * 50}>
                    <div className="surface" style={{ padding: "1.25rem" }}>
                      <p style={{ margin: "0 0 0.75rem", fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c-accent)" }}>{g.label}</p>
                      <ChipRow items={g.items} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .resume-proj-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 700px) { .resume-proj-grid { grid-template-columns: repeat(2, 1fr); } }
        .resume-edu-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 640px) { .resume-edu-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
