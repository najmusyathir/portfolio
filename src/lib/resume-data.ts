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
    title: "Full-Stack Engineer",
    company: "myFirst Tech Sdn Bhd",
    period: "Mar 2025 – Present",
    bullets: [
      "Maintain and support the company's internal-use web portal, keeping existing systems reliable in production — Next.js and TypeScript on the front end, Go services on the back end.",
      "Designed and developed the base architecture for Portal 3.0 — the next-generation rebuild of the internal portal.",
      "Helped design the customer journey for the company's subscription platform, integrating Stripe and Airwallex for transactions and cross-border payments via webhook-driven event flows.",
      "Built a real-time, AI-integrated customer-support chat, backed by Firestore, Firebase Realtime Database, and PostgreSQL.",
    ],
    tech: ["Next.js", "TypeScript", "Go", "Stripe", "Airwallex", "Webhooks", "Firestore", "RTDB", "PostgreSQL"],
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
      { name: "ssh-web-server", desc: "Browser-based SSH client, zero install.", tags: ["Next.js", "TypeScript", "WebSocket"] },
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

export const SKILL_GROUPS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "PHP", "HTML5", "CSS3"] },
  { label: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "SCSS/SASS"] },
  { label: "Backend", items: ["Node.js", "Go", "FastAPI", "Flask", "Laravel", "REST API design", "Webhooks"] },
  { label: "Payments", items: ["Stripe", "Airwallex"] },
  { label: "Database & ORM", items: ["PostgreSQL", "Firestore", "Firebase Realtime Database", "MySQL", "Prisma"] },
  { label: "Infra & DevOps", items: ["Docker", "Git", "Linux server admin", "Cloudflare (Tunnels, Zero Trust)", "Supabase", "tmux"] },
  { label: "AI Tools", items: ["Claude Code", "Cursor", "Antigravity"] },
  { label: "Tools", items: ["Figma", "Sentry", "Android Studio", "Flutter"] },
];

export const EDUCATION = [
  { title: "Bachelor of Computer Science (Hons.)", school: "Universiti Teknologi MARA, Melaka (Kampus Jasin)", meta: "Jun 2023 · CGPA 3.18" },
  { title: "Diploma in Applied Science", school: "Universiti Teknologi MARA, Perlis (Kampus Arau)", meta: "Feb 2021 · CGPA 3.21" },
];

export const SUMMARY =
  "Full-stack engineer with 2+ years of professional experience across front-end and back-end development, plus a growing personal infrastructure of self-hosted projects — browser-based terminals, uptime monitoring, multi-tenant SaaS, and async AI orchestration, all running on infrastructure I manage myself. Comfortable owning the full stack: front-end (React, Vue.js, Next.js), back-end (Node.js, Python, PHP), and infrastructure (Linux, Docker, Cloudflare). Currently a Full-Stack Engineer at myFirst Tech Sdn Bhd.";
