/**
 * Single source of truth for site content. Pages/components read from here so
 * copy stays consistent across the landing and inner pages.
 */

export const PROFILE = {
  name: "Najmu Syathir",
  fullName: "Muhammad Najmu Al Syathir Bin Azemi",
  role: "Full-Stack Developer",
  company: "myFirst Tech Sdn Bhd",
  companySince: "Mar 2025",
  location: "Johor Bahru, Malaysia",
  /** Personal tagline. Deliberately used in ONE place only — the About page's
   *  café section. It is not site-wide copy. */
  quote: "Code, Coffee & Chill",
  /** Site-wide one-liner for metadata + social cards. */
  tagline:
    "Full-stack products, self-hosted infrastructure, and an AI-assisted workflow I can reach from anywhere.",
  valueProp:
    "I build full-stack products end to end — and run the self-hosted infrastructure they live on.",
  siteUrl: "https://najmusyathir.dev",
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
  icon: "instagram" | "facebook" | "github" | "linkedin" | "whatsapp" | "leetcode";
}

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/najmusyathir", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/najmusyathir/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/njmsythr", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/njmsythr", icon: "facebook" },
  { label: "LeetCode", href: "https://leetcode.com/najmusyathir/", icon: "leetcode" },
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
    title: "AI-assisted delivery",
    blurb:
      "A self-hosted assistant with persistent context on my projects — directed from written specs, reviewed before anything ships.",
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
  image: "/current_project.png",
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
    description:
      "A real terminal in the browser, behind TOTP auth. Turns any device — phone included — into a working shell on the server.",
    tags: ["Next.js", "TypeScript", "node-pty"],
    url: null,
    live: true,
  },
  {
    name: "acadeon-pulse",
    description:
      "Uptime monitor PWA with escalating push alerts — I hear about an outage before anyone has to tell me.",
    tags: ["Next.js", "TypeScript", "PWA"],
    url: null,
    live: true,
  },
  {
    name: "ai_hub_bridge",
    description:
      "The gateway that lets me hand work to my assistant from the web or a chat app, with jobs queued and streamed back live.",
    tags: ["Next.js", "TypeScript", "Supabase Realtime"],
    url: null,
    live: false,
  },
];

/**
 * Earlier work — the junior era. Kept deliberately, and labelled honestly:
 * these are front-end builds from the start of the journey, still hosted, but
 * not representative of current work. `note` states the real limitation so a
 * visitor isn't left to discover it by resizing the window.
 */
export interface EarlierProject {
  name: string;
  description: string;
  tags: string[];
  date: string;
  url: string | null;
  image: string;
  /** Honest caveat shown on the card. */
  note: string;
}

export const EARLIER_WORK_ERA = {
  eyebrow: "The junior era",
  title: "Where it started — kept honest, not polished up.",
  intro:
    "Front-end work from my junior years, built while I was still learning the craft. They are hand-written HTML, CSS and JavaScript, desktop-first, and not responsive — so they are best viewed on a wide screen. I keep them hosted and linked because the starting line is part of the story, not because it reflects how I build today. For that, look at the ecosystem above.",
} as const;

export const EARLIER_WORK: EarlierProject[] = [
  {
    name: "Bakers Heist",
    description:
      "An e-commerce storefront for a cake shop and bakery, with a browse-and-order flow. My first real attempt at making a layout feel considered rather than assembled.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    date: "Jan 2024",
    url: "https://bakers-heist.vercel.app/",
    image: "/project1.png",
    note: "Front-end only · desktop-first, not responsive",
  },
  {
    name: "Astral Apparel",
    description:
      "An online store for Muslimah fashion — abaya, baju kurung and modest wear. Where I started caring about typography and restraint instead of adding more.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    date: "Mar 2024",
    url: "https://astral-apparel.vercel.app/",
    image: "/project2.png",
    note: "Front-end only · desktop-first, not responsive",
  },
  {
    name: "PetCare Clinic System",
    description:
      "A grooming and vet booking platform — appointments, pet profiles and service management. The first time I had to think about a data model, not just a page.",
    tags: ["Laravel", "Blade", "MySQL", "JavaScript"],
    date: "Mar 2025",
    url: null,
    image: "/petcare.jpg",
    note: "Coursework build · not publicly hosted",
  },
];

/**
 * Awards and invited roles. Newest first — the arc matters here: the same award
 * won as a student in 2024, then judged as an invited panel member in 2026.
 */
export interface Achievement {
  title: string;
  org: string;
  date: string;
  kind: "award" | "role";
  summary: string;
  /** Photos from the day, shown on /achievements. */
  images?: { src: string; alt: string; caption: string }[];
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Industry Jury (Juri Industri) — FYP Exhibition C²PI 2026",
    org: "Faculty of Computer and Mathematical Sciences, UiTM Melaka (Kampus Jasin)",
    date: "6–7 Aug 2026",
    kind: "role",
    summary:
      "Invited back to my own faculty as an industry jury member for the final-year project exhibition — evaluating student projects in the same category I was given the industrial panel award for as a student two years earlier. Two years after being judged, judging.",
    images: [
      {
        src: "/achievements/jury-badge.jpg",
        alt: "Industry Jury badge for FYP Exhibition C²PI 2026, UiTM Melaka Kampus Jasin",
        caption: "The badge — Juri Industri, C²PI 2026",
      },
      {
        src: "/achievements/jury-hall.jpg",
        alt: "Holding the jury badge inside the FYP exhibition hall",
        caption: "Exhibition hall, day of judging",
      },
      {
        src: "/achievements/jury-booth.jpg",
        alt: "At a student project booth during the FYP exhibition",
        caption: "At the project booths",
      },
    ],
  },
  {
    title: "Anugerah Panel Industri — Best Industrial Panel Final Year Project",
    org: "Kolej Pengkomputeran, Informatik dan Matematik, UiTM Melaka (Kampus Jasin)",
    date: "Feb 2024",
    kind: "award",
    summary:
      "Awarded by the industrial panel — the external assessors from industry, not the academic supervisors — for the CPU–Motherboard Compatibility Checker, at the Majlis Anugerah Projek Tahun Akhir (CS230, Bachelor of Computer Science Hons).",
    images: [
      {
        src: "/achievements/award-2024.jpg",
        alt: "Receiving the Anugerah Panel Industri at the Majlis Anugerah Projek Tahun Akhir, 2024",
        caption: "Majlis Anugerah Projek Tahun Akhir, 2024",
      },
    ],
  },
];

/**
 * The final-year project, in full. It is the subject of the 2024 award above,
 * so it gets a proper record rather than the one-line summary the résumé carries.
 */
export const FYP = {
  name: "CPU–Motherboard Compatibility Checker",
  context: "Final Year Project — UiTM Melaka (Kampus Jasin)",
  year: "2024",
  award: "Best Industrial Panel Final Year Project (2024)",
  summary:
    "A browser extension that reads a Lazada cart page and tells you whether the CPU and motherboard sitting in it are actually compatible — before the money leaves. The subject came straight out of the PC-building habit that got me into computing in the first place: it is a mistake that is easy to make and expensive to undo.",
  bullets: [
    "Browser extension that parses a live Lazada cart page, identifies the CPU and motherboard in it, and returns a compatibility verdict in place.",
    "Python and FastAPI service behind it holding the compatibility rules, containerised with Docker and deployed on Render.com.",
    "Compatibility dataset built by scraping and normalising manufacturer specifications — with regex parsing to survive how inconsistently sockets and chipsets are actually written in real listings.",
    "Published to the Microsoft Edge add-ons store, so it installed like any other extension rather than needing developer mode.",
  ],
  tags: ["JavaScript", "Python", "FastAPI", "Docker", "Data scraping", "Regex", "HTML5", "CSS3"],
} as const;

/**
 * Café-hunting trail — the "Code, Coffee & Chill" habit made concrete.
 * Rendered on /cafes as a scroll-driven map. Coordinates are approximate
 * city positions on the stylized peninsula map, not exact geolocation —
 * the Google Maps link is the precise source.
 */
export interface Cafe {
  name: string;
  city: string;
  state: string;
  mapsUrl: string;
  /** Real coordinates (from the Google Maps place link). */
  lat: number;
  lng: number;
  /** Position on the stylized SVG peninsula, projected from lat/lng. */
  x: number;
  y: number;
  /** Optional card photo (Abang's own shot of the place), under /public. */
  image?: string;
}

// Projection: x = (lng - 99.5) * 100, y = (6.9 - lat) * 100 — viewBox 0 0 500 600.
export const CAFES: Cafe[] = [
  {
    name: "Ikhwan Coffee",
    city: "Johor Bahru",
    state: "Johor",
    mapsUrl: "https://maps.app.goo.gl/ZaZ8SizQML6W352WA",
    lat: 1.4662,
    lng: 103.7501,
    x: 425,
    y: 543,
  },
  {
    name: "RUMI's Kafien",
    city: "Melaka",
    state: "Melaka",
    mapsUrl: "https://maps.app.goo.gl/WfPHjWFny1WNz4t9A",
    lat: 2.1584,
    lng: 102.338,
    x: 284,
    y: 474,
  },
  {
    name: "Muka Coffee",
    city: "Kuantan",
    state: "Pahang",
    mapsUrl: "https://maps.app.goo.gl/AasDdTKdJWZ7MezK6",
    lat: 3.8063,
    lng: 103.329,
    x: 383,
    y: 309,
  },
  {
    name: "Cafe Moara",
    city: "Alor Setar",
    state: "Kedah",
    mapsUrl: "https://maps.app.goo.gl/dC2BfAZXb6nW5oya9",
    lat: 6.0639,
    lng: 100.2631,
    x: 76,
    y: 84,
  },
];

/**
 * The "what I'm building now" story — the thesis that ties every project on the
 * server together. Deliberately surface-level: what it does for me and why,
 * never how it is wired internally.
 */
export const NOW = {
  eyebrow: "What I'm building now",
  title: "A workspace that follows me, instead of me having to be at it.",
  lead:
    "Everything I run on my own server points at one goal: being able to do real work from any device, in any place, at any time. A browser and a connection is the whole requirement — no laptop in the bag, no VPN client, no “I'll look at it when I'm back at my desk.”",
  paragraphs: [
    "Each project lives as its own supervised service on hardware I administer myself, with its own environment, its own subdomain and its own deploy path. Reaching any of them takes a browser: a full terminal session and a real shell on the machine, both behind authentication and access control. From a phone on the road, that is genuinely enough to ship a fix.",
    "The reason is simple and personal. Travelling, out for the evening, on leave — none of that should mean the work becomes unreachable. If something breaks or someone needs an answer, I want to be a couple of minutes away rather than a couple of days.",
    "The part I am most deliberate about is where AI sits in that loop. It is not a chat window I paste snippets into. It is a directed system with persistent, structured context on my own projects: it holds the state between sessions, works against specifications I write, and reports back for review. I keep the architecture decisions and the sign-off; it takes the repetition. That is the difference between owning a server and having a second pair of hands that is already up to speed.",
  ],
  capabilities: [
    {
      title: "Any device becomes the workstation",
      detail:
        "A real terminal and shell in the browser, access-gated. Phone, tablet, a borrowed laptop — if it can open a page, I can work.",
      icon: "map-pin",
    },
    {
      title: "Running whether I'm watching or not",
      detail:
        "Services supervised with health checks and auto-recovery, reached through tunnels rather than exposed ports. Uptime is not something I babysit.",
      icon: "server",
    },
    {
      title: "AI that already has the context",
      detail:
        "A self-hosted assistant with a structured, versioned memory of my projects — briefed once, useful every session after, and never guessing at the state.",
      icon: "spark",
    },
    {
      title: "I hear about it first",
      detail:
        "Escalating push alerts the moment a service drops, so a problem reaches my phone before it reaches anyone using it.",
      icon: "check",
    },
  ],
  /** Short version, for section intros where the full lead is too long. */
  short:
    "Every tool here exists so the work stays reachable — from any device, in any place, at any time.",
  closing:
    "None of this is a demo built for a portfolio. It is the environment I actually work in, every day — and the reason a holiday does not have to mean going quiet.",
} as const;

/** /ai page — strictly the engineering story, no persona/companion content. */
export const AI_INFRA = {
  intro:
    "Beyond shipping apps, I engineered and run my own AI infrastructure — an assistant hosted on my own server rather than a third-party wrapper. The interesting engineering was never the model. It is everything around it: keeping it dependable, giving it a large persistent context, and structuring that context so it stays genuinely useful to a human on day one hundred, not just day one.",
  points: [
    {
      title: "Self-hosted and dependable",
      detail:
        "Runs on infrastructure I administer myself — process supervision, health checks and auto-recovery, so it is available when I need it without being nursed.",
    },
    {
      title: "Persistent, structured context",
      detail:
        "A versioned memory layer means it does not start from zero each session. Project state, decisions and open threads carry forward, organised deliberately rather than dumped in.",
    },
    {
      title: "Directed by written specs",
      detail:
        "Work is scoped in writing before it starts — architecture, constraints, and what done means. The assistant executes against that document, which is also what makes its output reviewable.",
    },
    {
      title: "Reviewed, audited, owned",
      detail:
        "Nothing merges on its own. I hold the architecture calls and the sign-off; every change is verified against the running system rather than taken on trust.",
    },
    {
      title: "Reachable from anywhere",
      detail:
        "The same assistant is available from a browser or a chat app through a queued job gateway, so handing off a task does not require sitting at my machine.",
    },
    {
      title: "Applied to real day-to-day work",
      detail:
        "This is not a sandbox. It is in the loop on the projects listed on this site — drafting against specs, catching regressions, and keeping context I would otherwise be re-explaining.",
    },
  ],
} as const;
