import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ChipRow } from "@/components/ui/Chip";
import { DownloadResume } from "@/components/ui/DownloadResume";
import { PROFILE, SOCIALS } from "@/lib/content";
import { JOBS, PROJECT_GROUPS, SKILL_GROUPS, EDUCATION, SUMMARY } from "@/lib/resume-data";

const GITHUB = SOCIALS.find((s) => s.icon === "github")!;

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Najmu Syathir — Full-Stack Engineer. Experience, projects, education and skills.",
};

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
                <DownloadResume />
                <a href={GITHUB.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <Icon name="github" size={16} /> GitHub
                </a>
                <Link href="/" className="btn btn-ghost">{PROFILE.siteUrl.replace("https://", "")}</Link>
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
                  {SUMMARY}
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
