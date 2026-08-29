/**
 * Résumé content — single source of truth shared by the styled /resume page
 * and the print-optimized /resume/print route (used to generate resume.pdf).
 * Keeping both in sync means the downloadable PDF never drifts from the site.
 */

export interface Job {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tech?: string[];
}

export const JOBS: Job[] = [
  {
    title: "Full-Stack Developer",
    company: "myFirst Tech Sdn Bhd",
    period: "Mar 2025 – Present",
    bullets: [
      "Maintain and support the company's internal web portal, keeping production systems reliable.",
      "Designed and built the base architecture for Portal 3.0, the next-generation portal rebuild.",
      "Designed the customer journey for the company's subscription platform \u2014 mapping the end-to-end flow, not just implementing it.",
      "Designed and delivered the integration workflows for third-party systems \u2014 Singpass for national digital identity, and Airwallex and Stripe for payments, over webhook-driven event flows.",
      "Built a real-time, AI-integrated customer-support chat.",
      "Work AI-assisted day to day \u2014 Cursor and Anthropic's Claude in the editor, plus CLI-driven agents to automate routine tasks where the task suits it.",
    ],
    tech: ["Next.js", "TypeScript", "Go", "Singpass", "Stripe", "Airwallex", "Webhooks", "Firestore", "RTDB", "PostgreSQL"],
  },
  {
    title: "Junior Software Developer & Operations (FE)",
    company: "Guard Genius Sdn Bhd",
    period: "Aug 2024 – Mar 2025",
    bullets: [
      "Built and optimised responsive web applications, verified across devices.",
      "Integrated REST APIs with cross-functional teams to improve data flow and performance.",
      "Kept code quality with a staging/development Git branching strategy.",
      "Redesigned the company website in Figma, improving UX against business goals.",
      "Ran bug tracking and resolution in Sentry; automated email through a mail-server API.",
    ],
    tech: ["Vue.js", "Tailwind CSS", "Flask", "MySQL", "Git", "Figma", "Sentry"],
  },
  {
    title: "Software Developer Intern",
    company: "AQ Wise Sdn Bhd",
    period: "Mar 2024 – Jun 2024",
    bullets: [
      "Built an e-commerce platform with product management and shopping-cart features.",
      "Designed and managed the MySQL schema for catalogs, user profiles and order history.",
      "Shipped a responsive sidebar into a Flutter project; built dynamic interfaces in Blade.",
    ],
    tech: ["Flutter", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
  },
];

export interface ResumeProject {
  name: string;
  desc: string;
  tags: string[];
  url?: string;
  note?: string;
}

export const PROJECT_GROUPS: { label: string; items: ResumeProject[] }[] = [
  {
    label: "Personal / Self-Hosted",
    items: [
      { name: "personal-dashboard", desc: "AI-connected personal life assistant — finance, scheduling, meetings, career, tasks.", tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"] },
      { name: "acadeon-cli", desc: "Browser-based PTY terminal with TOTP auth.", tags: ["Next.js", "TypeScript", "node-pty"] },
      { name: "acadeon-pulse", desc: "Uptime monitor PWA with escalating push alerts.", tags: ["Next.js", "TypeScript", "PWA"] },
      { name: "ai_hub_bridge", desc: "Async AI job queue bridging the Claude CLI to web and Telegram.", tags: ["Next.js", "TypeScript", "Supabase Realtime"] },
      { name: "CPU–Motherboard Compatibility Checker", desc: "Final Year Project (UiTM Melaka) — browser extension that reads a live Lazada cart page and verifies CPU/motherboard compatibility before purchase. FastAPI rules service in Docker on Render.com; compatibility data scraped and normalised from manufacturer specs. Published to the Microsoft Edge add-ons store.", tags: ["JavaScript", "Python", "FastAPI", "Docker", "Data scraping", "Regex"], note: "Awarded Best Industrial Panel Final Year Project (2024)" },
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

export type SkillLevel = "expert" | "intermediate";
export interface SkillItem {
  name: string;
  /** Only stated where it means something — unmarked skills carry no claim. */
  level?: SkillLevel;
}

export const SKILL_GROUPS: { label: string; items: SkillItem[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "Go" },
      { name: "Python" },
      { name: "PHP" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Next.js", level: "expert" },
      { name: "React", level: "expert" },
      { name: "Vue.js", level: "expert" },
      { name: "Tailwind CSS" },
      { name: "SCSS/SASS" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", level: "expert" },
      { name: "Go" },
      { name: "FastAPI", level: "expert" },
      { name: "Flask" },
      { name: "Laravel" },
      { name: "REST API design" },
    ],
  },
  {
    label: "Integrations",
    items: [
      { name: "Stripe", level: "intermediate" },
      { name: "Airwallex", level: "intermediate" },
      { name: "Singpass" },
    ],
  },
  {
    label: "Database & ORM",
    items: [
      { name: "PostgreSQL" },
      { name: "Firestore", level: "intermediate" },
      { name: "Firebase Realtime Database", level: "intermediate" },
      { name: "MySQL" },
      { name: "Prisma" },
    ],
  },
  {
    label: "Infra & DevOps",
    items: [
      { name: "Docker" },
      { name: "Git" },
      { name: "Linux server admin" },
      { name: "Cloudflare (Tunnels, Zero Trust)" },
      { name: "Supabase" },
      { name: "tmux" },
    ],
  },
  {
    label: "AI Tools",
    items: [{ name: "Claude Code" }, { name: "Cursor" }, { name: "Antigravity" }],
  },
  {
    label: "Tools",
    items: [{ name: "Figma" }, { name: "Sentry" }, { name: "Android Studio" }, { name: "Flutter" }],
  },
];

export const EDUCATION = [
  { title: "Bachelor of Computer Science (Hons.)", school: "Universiti Teknologi MARA, Melaka (Kampus Jasin)", meta: "Jun 2023 · CGPA 3.18" },
  { title: "Diploma in Applied Science", school: "Universiti Teknologi MARA, Perlis (Kampus Arau)", meta: "Feb 2021 · CGPA 3.21" },
];

export const SUMMARY =
  "Full-stack developer with 2+ years of professional experience across front-end and back-end development, plus a growing personal infrastructure of self-hosted projects — browser-based terminals, uptime monitoring, multi-tenant SaaS, and async AI orchestration, all running on infrastructure I manage myself. Comfortable owning the full stack: front-end (React, Vue.js, Next.js), back-end (Node.js, Python, PHP), and infrastructure (Linux, Docker, Cloudflare). Currently a Full-Stack Developer at myFirst Tech Sdn Bhd.";
