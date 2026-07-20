import type { Metadata } from "next";
import { PROFILE } from "@/lib/content";
import { JOBS, PROJECT_GROUPS, SKILL_GROUPS, EDUCATION, SUMMARY } from "@/lib/resume-data";

/**
 * Print-only résumé route. Renders ONLY the résumé content — no navbar,
 * footer, download buttons, or site chrome — with A4-optimized, black-on-white
 * CSS and page-break-avoidance on cards. This is the exact page Playwright
 * renders to produce public/resume.pdf. It shares its data with the styled
 * /resume page (src/lib/resume-data.ts) so the PDF never drifts from the site.
 */

export const metadata: Metadata = {
  title: "Résumé (print)",
  robots: { index: false, follow: false },
};

export default function ResumePrintPage() {
  return (
    <div className="sheet">
      {/* Header */}
      <header className="head">
        <h1>{PROFILE.fullName}</h1>
        <p className="role">{PROFILE.role}</p>
        <p className="contact">
          <span>{PROFILE.location}</span>
          <span className="dot">·</span>
          <span>{PROFILE.phone}</span>
          <span className="dot">·</span>
          <span>{PROFILE.email}</span>
          <span className="dot">·</span>
          <span>najmusyathir.dev</span>
          <span className="dot">·</span>
          <span>github.com/najmusyathir</span>
        </p>
      </header>

      {/* Summary */}
      <section className="block">
        <h2>Summary</h2>
        <p className="summary">{SUMMARY}</p>
      </section>

      {/* Experience */}
      <section className="block">
        <h2>Experience</h2>
        {JOBS.map((job) => (
          <div key={job.company} className="card">
            <div className="card-head">
              <h3>{job.title}</h3>
              <span className="period">{job.period}</span>
            </div>
            <p className="company">{job.company}</p>
            <ul>
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {job.tech && <p className="tech">{job.tech.join("  ·  ")}</p>}
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="block">
        <h2>Projects</h2>
        {PROJECT_GROUPS.map((group) => (
          <div key={group.label} className="group">
            <p className="group-label">{group.label}</p>
            <div className="proj-grid">
              {group.items.map((p) => (
                <div key={p.name} className="proj card">
                  <h4>{p.name}</h4>
                  <p className="proj-desc">{p.desc}</p>
                  <p className="tech">{p.tags.join("  ·  ")}</p>
                  {p.url && <p className="proj-url">{p.url.replace("https://", "")}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="block">
        <h2>Education</h2>
        <div className="edu-grid">
          {EDUCATION.map((e) => (
            <div key={e.title} className="card">
              <h3>{e.title}</h3>
              <p className="company">{e.school}</p>
              <p className="meta">{e.meta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="block">
        <h2>Skills</h2>
        <div className="skills">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label} className="skill-row">
              <span className="skill-label">{g.label}</span>
              <span className="skill-items">{g.items.join("  ·  ")}</span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @page { size: A4; margin: 14mm 14mm; }

        :root { color-scheme: light; }
        html, body { background: #ffffff; }

        .sheet {
          --ink: #1f2733;
          --body: #3f4855;
          --muted: #6b7480;
          --accent: #8a6350;
          --line: #e2ded7;
          --mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
          background: #ffffff;
          color: var(--body);
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          font-size: 12px;
          line-height: 1.55;
          max-width: 190mm;
          margin: 0 auto;
          padding: 4mm 0 2mm;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .sheet h1, .sheet h2, .sheet h3, .sheet h4 { color: var(--ink); margin: 0; }
        .sheet p { margin: 0; }

        /* Header */
        .head { border-bottom: 2px solid var(--accent); padding-bottom: 8px; margin-bottom: 14px; }
        .head h1 { font-size: 25px; letter-spacing: -0.01em; }
        .head .role { font-size: 14px; font-weight: 600; color: var(--accent); margin-top: 2px; }
        .head .contact {
          display: flex; flex-wrap: wrap; gap: 4px 6px; align-items: center;
          font-size: 11px; color: var(--muted); margin-top: 6px;
          font-family: var(--mono);
        }
        .head .contact .dot { color: var(--line); }

        /* Section */
        .block { margin-bottom: 13px; break-inside: avoid; }
        .block > h2 {
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 7px;
          padding-bottom: 3px; border-bottom: 1px solid var(--line);
        }
        .summary { font-size: 12px; line-height: 1.6; }

        /* Cards */
        .card { break-inside: avoid; margin-bottom: 9px; }
        .card:last-child { margin-bottom: 0; }
        .card-head { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
        .card-head h3 { font-size: 14px; }
        .card .period { font-family: var(--mono); font-size: 10.5px; color: var(--muted); white-space: nowrap; }
        .card .company { font-size: 11.5px; font-weight: 600; color: var(--accent); margin-top: 1px; }
        .card ul { margin: 5px 0 0; padding-left: 16px; }
        .card li { margin-bottom: 3px; line-height: 1.5; }
        .tech { font-family: var(--mono); font-size: 10px; color: var(--muted); margin-top: 5px; }

        /* Education card headings a touch smaller */
        .edu-grid .card h3 { font-size: 12.5px; }
        .card .meta { font-family: var(--mono); font-size: 10px; color: var(--muted); margin-top: 3px; }

        /* Projects */
        .group { margin-bottom: 10px; break-inside: avoid; }
        .group-label {
          font-family: var(--mono); font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 5px;
        }
        .proj-grid, .edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px 14px; }
        .proj {
          margin-bottom: 0; padding: 7px 9px;
          border: 1px solid var(--line); border-radius: 7px; break-inside: avoid;
        }
        .proj h4 { font-family: var(--mono); font-size: 11.5px; }
        .proj-desc { font-size: 10.5px; line-height: 1.45; margin-top: 2px; }
        .proj-url { font-family: var(--mono); font-size: 10px; color: var(--accent); margin-top: 3px; }
        .edu-grid .card {
          padding: 8px 10px; border: 1px solid var(--line); border-radius: 7px;
        }

        /* Skills */
        .skills { display: flex; flex-direction: column; gap: 4px; }
        .skill-row { display: grid; grid-template-columns: 110px 1fr; gap: 10px; align-items: baseline; break-inside: avoid; }
        .skill-label {
          font-family: var(--mono); font-size: 10px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase; color: var(--accent);
        }
        .skill-items { font-size: 11px; color: var(--body); }
      `}</style>
    </div>
  );
}
