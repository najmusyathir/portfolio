/**
 * Single source of truth for site content. Pages/components read from here so
 * copy stays consistent across the landing, /landing-2, and inner pages.
 */

export const PROFILE = {
  name: "Najmu Syathir",
  fullName: "Muhammad Najmu Al Syathir Bin Azemi",
  role: "Full-Stack Engineer",
  company: "myFirst Tech Sdn Bhd",
  companySince: "Mar 2025",
  location: "Kuala Lumpur, Malaysia",
  quote: "Code, Coffee & Chill",
  valueProp:
    "I build full-stack products end to end — and run the self-hosted infrastructure they live on.",
  whatsapp: "https://wa.link/k7r72h",
  email: "alsyathir@gmail.com",
  phone: "+60 13-735 3215",
  profileImg: "/profile_pic.jpg",
  qrImg: "/qr_ws.png",
  resumePdf: "/resume.pdf",
} as const;

export interface Social {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "github" | "linkedin" | "whatsapp";
}

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/najmusyathir", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/najmusyathir/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/najmusyathir", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/najmusyathir", icon: "facebook" },
];

/** Landing "What I do" — three pillars, one glance. */
export interface Pillar {
  title: string;
  blurb: string;
  icon: "layers" | "server" | "spark";
}

export const PILLARS: Pillar[] = [
  {
    title: "Full-stack apps",
    blurb:
      "Product work front to back — interfaces, APIs, data models and the database underneath.",
    icon: "layers",
  },
  {
    title: "Self-hosted infrastructure",
    blurb:
      "Real apps in production on a Linux server I administer myself — tunnels, monitoring, uptime.",
    icon: "server",
  },
  {
    title: "AI orchestration",
    blurb:
      "A reliable, self-hosted AI with persistent context, structured and directed for real human use.",
    icon: "spark",
  },
];

/** Landing stack chips. */
export const STACK: string[] = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Supabase",
  "Docker",
];

/** Flagship project — the landing headline. */
export const FLAGSHIP = {
  name: "personal-dashboard",
  tagline: "AI-connected personal life assistant",
  description:
    "The biggest thing I run: a personal assistant that keeps you ahead of your own life — finances, event scheduling, meetings, career, and day-to-day tasks. Built around one idea: use software, and AI, to genuinely boost human productivity.",
  tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "AI"],
} as const;

/** Self-hosted ecosystem grid on the landing + projects page. */
export interface EcosystemProject {
  name: string;
  description: string;
  tags: string[];
  url: string | null;
  live: boolean;
}

export const ECOSYSTEM: EcosystemProject[] = [
  {
    name: "acadeon-cli",
    description: "Browser-based PTY terminal with TOTP auth — a real shell from anywhere.",
    tags: ["Next.js", "TypeScript", "node-pty"],
    url: null,
    live: true,
  },
  {
    name: "acadeon-pulse",
    description: "Uptime monitor PWA with escalating push alerts when a service goes down.",
    tags: ["Next.js", "TypeScript", "PWA"],
    url: null,
    live: true,
  },
  {
    name: "ssh-web-server",
    description: "Browser-based SSH client — full terminal access, zero install.",
    tags: ["Next.js", "TypeScript", "WebSocket"],
    url: null,
    live: true,
  },
  {
    name: "ai_hub_bridge",
    description: "Async AI job queue bridging the Claude CLI to web and Telegram in real time.",
    tags: ["Next.js", "TypeScript", "Supabase Realtime"],
    url: null,
    live: false,
  },
];

/** Earlier delivered work (carried over from v1, sits below flagship). */
export interface EarlierProject {
  name: string;
  description: string;
  tags: string[];
  date: string;
  url: string | null;
  image: string;
}

export const EARLIER_WORK: EarlierProject[] = [
  {
    name: "Bakers Heist",
    description:
      "An elegant e-commerce storefront for a cake shop and bakery, with a smooth browse-and-order flow.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    date: "Jan 2024",
    url: "https://bakers-heist.vercel.app/",
    image: "/project1.png",
  },
  {
    name: "Astral Apparel",
    description:
      "An online store for Muslimah fashion — abaya, baju kurung and modest wear — with a clean, elegant interface.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    date: "Mar 2024",
    url: "https://astral-apparel.vercel.app/",
    image: "/project2.png",
  },
  {
    name: "PetCare Clinic System",
    description:
      "A grooming and vet booking platform — appointments, pet profiles and service management for a clinic.",
    tags: ["Laravel", "Blade", "MySQL", "JavaScript"],
    date: "Mar 2025",
    url: null,
    image: "/current_project.png",
  },
];

/** /ai page — strictly the engineering story, no persona/companion content. */
export const AI_INFRA = {
  intro:
    "Beyond shipping apps, I engineered and run my own AI infrastructure — a reliable assistant hosted on my own server, not a third-party wrapper. The interesting engineering isn't the model; it's everything around it: keeping it dependable, giving it a large persistent context, and structuring that context so it's actually useful to a human day after day.",
  points: [
    {
      title: "Self-hosted & reliable",
      detail:
        "Runs on infrastructure I administer myself — process supervision, health checks and auto-recovery so it stays up without babysitting.",
    },
    {
      title: "Persistent context",
      detail:
        "A structured, versioned memory layer means it doesn't start from zero every session — it carries the state that matters forward.",
    },
    {
      title: "Structured for human use",
      detail:
        "Context is organised and optimised deliberately, so the assistant is genuinely helpful for real day-to-day work rather than a novelty.",
    },
    {
      title: "Directed, audited, owned",
      detail:
        "I design the architecture and write the specs the system works from; work is scoped, reviewed, and committed under human sign-off.",
    },
  ],
} as const;
