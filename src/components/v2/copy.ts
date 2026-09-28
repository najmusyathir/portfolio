/**
 * Copy for the v2 routes (/landing-v2, /cafes-v2). Everything here is derived
 * from src/lib/content.ts: names, tags, links and facts are imported, and the
 * prose is the same claims tightened for a shorter page. Nothing is invented.
 */
import {
  PROFILE,
  PILLARS,
  STACK,
  FLAGSHIP,
  ECOSYSTEM,
  NOW,
  ACHIEVEMENTS,
  SOCIALS,
  CAFES,
} from "@/lib/content";

/** One label per intent, used identically in nav, hero, bento and contact. */
export const LABELS = {
  message: "Message me",
  projects: "All projects",
} as const;

export const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/achievements", label: "Achievements" },
  { href: "/cafes-v2", label: "Cafés" },
  { href: "/resume", label: "Résumé" },
] as const;

export const HERO = {
  byline: `${PROFILE.name}, ${PROFILE.role}`,
  headline: "Built end to end, on a server I run myself.",
  sub: "Full-stack products, the self-hosted infrastructure they live on, and an AI-assisted workflow I can reach from anywhere.",
  portrait: {
    src: PROFILE.profileImg,
    alt: `${PROFILE.name}, ${PROFILE.role}`,
  },
} as const;

export const WORK = {
  title: "Three things, done properly.",
  pillars: [
    {
      title: PILLARS[0].title,
      blurb:
        "Product work front to back: interfaces, APIs, data models and the database underneath.",
    },
    {
      title: PILLARS[1].title,
      blurb:
        "Real apps in production on a Linux server I administer myself, with tunnels, monitoring and uptime alerts.",
    },
    {
      title: PILLARS[2].title,
      blurb:
        "A self-hosted assistant with persistent context on my projects, directed from written specs and reviewed before anything ships.",
    },
  ],
  flagship: {
    name: FLAGSHIP.name,
    tagline: FLAGSHIP.tagline,
    description:
      "The biggest thing I run: a personal assistant that keeps you ahead of your own life, from finances and scheduling to meetings, career and day-to-day tasks.",
    tags: FLAGSHIP.tags,
    image: FLAGSHIP.image,
    alt: `${FLAGSHIP.name} dashboard preview`,
  },
  ecosystem: [
    {
      name: ECOSYSTEM[0].name,
      line: "A real terminal in the browser, behind TOTP auth.",
      live: ECOSYSTEM[0].live,
    },
    {
      name: ECOSYSTEM[1].name,
      line: "Uptime monitor PWA with escalating push alerts.",
      live: ECOSYSTEM[1].live,
    },
    {
      name: ECOSYSTEM[2].name,
      line: "Queued AI jobs from the web or a chat app, streamed back live.",
      live: ECOSYSTEM[2].live,
    },
  ],
  aiLink: { label: "How the AI side is built", href: "/ai" },
  stack: STACK,
} as const;

export const NOW_V2 = {
  title: NOW.title,
  lead: "Everything on my server points at one goal: doing real work from any device, in any place, at any time. A browser and a connection is the whole requirement.",
  image: {
    src: "/aboutme_bkg.jpeg",
    alt: "Najmu’s workstation setup",
    caption: "The home setup.",
  },
  capabilities: [
    {
      title: NOW.capabilities[0].title,
      detail:
        "A real terminal and shell in the browser, access-gated. If it can open a page, I can work.",
    },
    {
      title: NOW.capabilities[1].title,
      detail:
        "Services supervised with health checks and auto-recovery, reached through tunnels rather than exposed ports.",
    },
    {
      title: NOW.capabilities[2].title,
      detail:
        "A self-hosted assistant with a structured, versioned memory of my projects. Briefed once, useful every session after.",
    },
    {
      title: NOW.capabilities[3].title,
      detail:
        "Escalating push alerts the moment a service drops, so a problem reaches my phone before it reaches anyone using it.",
    },
  ],
  closing:
    "None of this is a demo built for a portfolio. It is the environment I work in every day, and the reason a holiday does not have to mean going quiet.",
} as const;

const jury = ACHIEVEMENTS[0];
const award = ACHIEVEMENTS[1];

export const ARC = {
  title: "Two years after being judged, judging.",
  body: "The industrial panel award for my final-year project in 2024, then an invitation back in 2026 to judge the same category.",
  link: { label: "The full story", href: "/achievements" },
  photos: [
    {
      src: award.images?.[0].src ?? "",
      alt: award.images?.[0].alt ?? "",
      caption: "Feb 2024. Anugerah Panel Industri, UiTM Melaka.",
    },
    {
      src: jury.images?.[0].src ?? "",
      alt: jury.images?.[0].alt ?? "",
      caption: "Aug 2026. Industry jury, FYP Exhibition C²PI.",
    },
  ],
} as const;

export const CONTACT = {
  title: "Let’s build something.",
  body: "Open to interesting work and good conversations. WhatsApp is the fastest way to reach me.",
  whatsapp: PROFILE.whatsapp,
  email: PROFILE.email,
  socials: SOCIALS.map((s) => ({
    label: s.label,
    href: s.href,
    host: s.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
  })),
} as const;

export const FOOTER = {
  name: PROFILE.name,
  line: `${PROFILE.role}, ${PROFILE.location}`,
} as const;

/** Four stops, four states: each state gets one of the four spot tints. */
export const TINTS = ["green", "red", "blue", "yellow"] as const;

export const CAFES_V2 = {
  title: PROFILE.quote,
  intro:
    "I do my best work away from a desk. Four cafés so far, in four states, each pinned where it really is.",
  mapNote: "Pins sit at each café’s real coordinates.",
  closing: "More stops as I find them.",
  stops: CAFES,
} as const;
