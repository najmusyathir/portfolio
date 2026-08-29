import type { Metadata } from "next";
import { JOBS } from "@/lib/resume-data";

/**
 * Print-only résumé route — faithful rebuild of Abang's HAND-MADE resume
 * design (the 3-page Calibri layout that lived in public/resume.pdf on main):
 * centered name header, centered double-rule section titles, the level-table
 * skills matrix, and the referees block. Rendered in Carlito, Calibri's
 * metric-compatible clone, so proportions match the original.
 *
 * Content policy (Abang, 2026-08-29): ONLY the Skills table and the myFirst
 * experience entry carry updated content — myFirst pulls live from
 * resume-data JOBS[0]; everything else is transcribed verbatim from the
 * hand-made original (two typos fixed: "Mmotherboard", "Peronal").
 *
 * Playwright renders this page (JS disabled) to produce public/resume.pdf.
 */

export const metadata: Metadata = {
  title: "Résumé (print)",
  robots: { index: false, follow: false },
};

const MYFIRST = JOBS[0];

/** Skills matrix — presentation mapping of resume-data levels (Abang's calls). */
const SKILL_MATRIX: { label: string; items: string[] }[] = [
  { label: "Expert", items: ["TypeScript", "JavaScript", "Node.js", "Next.js", "React", "Vue.js", "FastAPI"] },
  { label: "Proficient", items: ["HTML5", "CSS3", "Tailwind CSS", "Go", "Python (Flask)", "PHP (Laravel)", "PostgreSQL", "MySQL", "Prisma", "Docker", "Git", "Linux server admin", "Cloudflare (Tunnels, Zero Trust)", "Supabase", "REST API design", "Figma", "Sentry"] },
  { label: "Intermediate", items: ["Stripe", "Airwallex", "Singpass", "Firestore / RTDB"] },
  { label: "Familiar", items: ["Flutter", "Android Studio (Java)", "SCSS/SASS"] },
  { label: "AI Tooling", items: ["Claude Code", "Cursor", "Antigravity"] },
];

/** Legacy sections, transcribed verbatim from the hand-made PDF. */
const PROJECTS = [
  {
    name: "CPU MOTHERBOARD COMPATIBILITY CHECKER",
    sub: "Final Year Project (UiTM Melaka, Jasin Campus)",
    bullets: [
      "Develop a web extension that integrated with Lazada Cart page to verify component (CPU/Motherboard) compatibility.",
      "Implemented FastAPI for the system's backend.",
      "Front End - Web extension hosted on the Microsoft Extension Store.",
      "Back End - System API hosted on Render.com using Dockerized environment",
    ],
    tech: "HTML, CSS, JavaScript, Python, Docker, FastAPI, Data Scraping, Regex",
    achievements: "Best Industrial Panel Final Year Project (2024)",
  },
  {
    name: "MNS TECH STORE",
    sub: "Internship Side-Project",
    bullets: [
      "Developed an e-commerce platform specializing in PC parts and accessories for PC builders.",
      "Developed the application using Laravel's MVC framework with Blade templates for the frontend.",
      "Utilized a MySQL database for data management.",
      "Leveraged Tailwind CSS for rapid styling",
      "Deployed the project on InfinityFree for hosting.",
    ],
    tech: "HTML, CSS, PHP, Laravel, MySQL, Tailwind",
  },
  {
    name: "PERSONAL PORTFOLIO",
    sub: "Post University Side-Project",
    bullets: [
      "Developed a simple online portfolio to showcase my skills and projects, using React.js to dive deeper into front-end engineering.",
      "Gained hands-on experience with React Router for navigation and created reusable components.",
      "Learned to build responsive designs with TailwindCSS, enhancing my understanding of modern styling techniques.",
    ],
    tech: "ReactJS, TailwindCSS, JavaScript",
    link: "https://najmusyathir.dev",
  },
  {
    name: "BAKERS HEIST",
    sub: "University Group Project",
    bullets: [
      "Reimplemented a bakery shop app designed from Wix to HTML and CSS.",
      "Focused on implementing a design, emphasizing visual appeal and layout",
    ],
    tech: "HTML, CSS, JavaScript",
    link: "https://bakers-heist.vercel.app",
  },
  {
    name: "PROJECT MANAGEMENT SYSTEM (MOBILE APPLICATION)",
    sub: "University Group Project",
    bullets: [
      "Mobile app development debut mastering concepts like RecyclerView",
      "Focused on implementing a design, emphasizing visual appeal and layout",
      "Successfully integrate Firebase for push notifications, enhancing app functionality.",
    ],
    tech: "Android Studio, CSS, JavaScript",
  },
];

const LEGACY_JOBS = [
  {
    head: "Junior Software Developer and Operations (FE) - Guardgenius Sdn Bhd",
    period: "Aug 2024 - Mar 2025",
    bullets: [
      "Developed and optimized responsive web applications using Vue.js and TailwindCSS, ensuring cross-device compatibility and a seamless user experience on all devices.",
      "Collaborated with cross-functional teams to integrate RESTful APIs, enhancing data flow and optimizing application performance.",
      "Maintained code quality through Git version control, utilizing branching strategies (e.g., staging and development) for efficient development and integration.",
      "Redesigned and restructured the company's website using Figma, improving user experience and aligning the design with current business objectives.",
      "Utilized Sentry for bug tracking and resolution, significantly improving application performance and reducing load times.",
      "Implemented email automation via a mail server API, enhancing customer communication by automating email notifications.",
      "Refactored and cleaned up legacy code, improving maintainability and readability of previously developed features.",
    ],
    tech: "VueJS, Flask, MySQL, Git, Figma",
  },
  {
    head: "Software Developer Intern - AQ Wise Sdn Bhd",
    period: "March 2024 - June 2024",
    bullets: [
      "Completed a short course led by internship supervisor, gaining hands-on experience in Flutter development.",
      "Contributed to a Flutter project by adding a responsive sidebar, improving navigation.",
      "Developed an e-commerce platform using Laravel, including product management and shopping cart features.",
      "Designed and managed MySQL databases for handling product catalogs, user profiles, and order histories.",
      "Built dynamic interfaces with Blade templates and managed MySQL databases for product catalogs and user data.",
    ],
    tech: "Flutter, Laravel, HTML, CSS, PHP, Tailwind CSS.",
  },
];

const REFEREES = [
  {
    name: "Mohd Taufik Bin Mishan (FYP Supervisor)",
    lines: ["Pensyarah Kanan", "Fakuti Sains Komputer dan Matematik", "UiTM Cawangan Melaka Kampus Jasin 77300 Merlimau, Melaka", "mtaufik@uitm.edu.my"],
  },
  {
    name: "Fadilah Ezlina Binti Shahbudin (Academic Advisor)",
    lines: ["Pensyarah Kanan", "Fakuti Sains Komputer dan Matematik", "UiTM Cawangan Melaka Kampus Jasin 77300 Merlimau, Melaka", "fadilahezlina@uitm.edu.my"],
  },
];

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="sec">
      <h2>{children}</h2>
    </div>
  );
}

export default function ResumePrintPage() {
  return (
    <div className="sheet">
      {/* Header */}
      <header className="head">
        <h1>Muhammad Najmu Al Syathir Bin Azemi</h1>
        <p className="contact">
          Johor Bahru | +60 13-735 3215 | alsyathir@gmail.com |{" "}
          <a href="https://najmusyathir.dev">najmusyathir.dev</a> | Linkedin:{" "}
          <a href="https://www.linkedin.com/in/najmusyathir/">najmusyathir</a>
        </p>
      </header>

      <SectionTitle>Professional Summary</SectionTitle>
      <p className="para">
        Full-stack software developer with a strong focus on front-end technologies like HTML5,
        CSS3, Vue.js, and Tailwind CSS. Proficient in backend development with Flask. Currently
        contributing as a full-stack developer at myFirst Tech Sdn Bhd and as a freelancer.
        Passionate about writing reliable, readable, and maintainable code, and committed to
        continuous learning and collaboration in team environments.
      </p>

      <SectionTitle>Education</SectionTitle>
      <div className="edu">
        <div className="row-head">
          <h3>Bachelor of Computer Science (HONS.)</h3>
          <span className="period">June 2023</span>
        </div>
        <p>CGPA: 3.18</p>
        <p>Universiti Teknologi Mara Melaka, Kampus Jasin</p>
      </div>
      <div className="edu">
        <div className="row-head">
          <h3>Diploma in Applied Science</h3>
          <span className="period">Feb 2021</span>
        </div>
        <p>CGPA: 3.21</p>
        <p>Universiti Teknologi Mara Perlis, Kampus Arau</p>
      </div>

      <SectionTitle>Skills</SectionTitle>
      <table className="skills">
        <tbody>
          {SKILL_MATRIX.map((row) => (
            <tr key={row.label}>
              <th>{row.label}:</th>
              <td>
                <ul className="skill-cols">
                  {row.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <SectionTitle>Relevant Projects</SectionTitle>
      {PROJECTS.map((p) => (
        <div key={p.name} className="entry">
          <h3 className="proj-name">{p.name}</h3>
          <p className="proj-sub">{p.sub}</p>
          <ul>
            {p.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {p.link && (
            <p className="meta-line">
              <strong>Hosted Link:</strong> <a href={p.link}>Visit</a>
            </p>
          )}
          <p className="meta-line"><strong>Tech Stacks:</strong> {p.tech}</p>
          {p.achievements && (
            <p className="meta-line"><strong>Achievements:</strong> {p.achievements}</p>
          )}
        </div>
      ))}

      <SectionTitle>Working Experiences</SectionTitle>
      {/* myFirst — the one experience entry that carries UPDATED content */}
      <div className="entry">
        <div className="row-head">
          <h3>{MYFIRST.title} - {MYFIRST.company}</h3>
          <span className="period">Mar 2025 - Current</span>
        </div>
        <ul>
          {MYFIRST.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {MYFIRST.tech && (
          <p className="meta-line"><strong>Tech Stacks:</strong> {MYFIRST.tech.join(", ")}</p>
        )}
      </div>
      {LEGACY_JOBS.map((j) => (
        <div key={j.head} className="entry">
          <div className="row-head">
            <h3>{j.head}</h3>
            <span className="period">{j.period}</span>
          </div>
          <ul>
            {j.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p className="meta-line"><strong>Tech Stacks:</strong> {j.tech}</p>
        </div>
      ))}

      <SectionTitle>Referees</SectionTitle>
      <div className="ref-grid">
        {REFEREES.map((r) => (
          <div key={r.name}>
            <h3>{r.name}</h3>
            {r.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @page { size: A4; margin: 15mm 16mm; }
        :root { color-scheme: light; }
        html, body { background: #ffffff; }

        .sheet {
          background: #ffffff;
          color: #000000;
          /* Carlito is metric-compatible with Calibri (the original's face) */
          font-family: Calibri, Carlito, "Segoe UI", sans-serif;
          font-size: 14px;
          /* Explicit line-heights throughout: globals.css's heading 1.12 makes
             Chromium ghost-paint heading fragments at page breaks. */
          line-height: 1.5;
          max-width: 178mm;
          margin: 0 auto;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .sheet h1, .sheet h2, .sheet h3 { margin: 0; color: #000; line-height: 1.4; }
        .sheet p { margin: 0; }
        .sheet a { color: #0563c1; text-decoration: underline; }

        .head { text-align: center; margin-bottom: 10px; }
        .head h1 { font-size: 21px; font-weight: 700; margin-bottom: 4px; }
        .head .contact { font-size: 13px; }

        .sec {
          border-top: 1.6px solid #000;
          border-bottom: 1px solid #000;
          text-align: center;
          margin: 14px 0 10px;
          padding: 2px 0;
          break-inside: avoid;
          break-after: avoid-page;
        }
        .sec h2 { font-size: 13.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }

        .para { text-align: justify; }

        .edu { margin-bottom: 10px; break-inside: avoid; }
        .row-head { display: flex; justify-content: space-between; gap: 12px; align-items: baseline; }
        .row-head h3 { font-size: 14px; font-weight: 700; }
        .period { white-space: nowrap; font-size: 13.5px; }

        .skills { width: 100%; border-collapse: collapse; }
        .skills tr { border-top: 1px solid #000; border-bottom: 1px solid #000; break-inside: avoid; }
        .skills th {
          width: 105px; text-align: left; vertical-align: top;
          font-weight: 700; padding: 6px 8px 6px 4px; font-size: 14px;
        }
        .skills td { padding: 6px 0; }
        .skill-cols {
          margin: 0; padding: 0; list-style: none;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px 10px;
        }
        .skill-cols li { padding-left: 14px; position: relative; }
        .skill-cols li::before { content: "•"; position: absolute; left: 2px; }

        .entry { margin-bottom: 12px; break-inside: avoid; }
        .proj-name { font-size: 14px; font-weight: 700; text-transform: uppercase; }
        .proj-sub { text-decoration: underline; margin-bottom: 2px; }
        .entry ul { margin: 2px 0 4px; padding-left: 18px; list-style: disc; }
        .entry li { margin-bottom: 2px; text-align: justify; list-style: disc; }
        .meta-line { margin-top: 2px; }
        .meta-line strong { font-weight: 700; }

        .ref-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; break-inside: avoid; }
        .ref-grid h3 { font-size: 14px; font-weight: 700; margin-bottom: 3px; }
      `}</style>
    </div>
  );
}
