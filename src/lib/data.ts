export interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string | null;
  status: 'live' | 'internal' | 'wip';
  image?: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface StackItem {
  label: string;
  mono?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Persona {
  name: string;
  role: string;
  blurb: string;
  /** CSS variable holding the persona's color */
  colorVar: string;
}

/**
 * The AI team — real, named agents running on my own server.
 * Each one is a persona with a scope, not a chatbot with a costume.
 */
export const PERSONAS: Persona[] = [
  {
    name: 'Umai',
    role: 'Orchestrator & right hand',
    blurb: 'Holds the full picture, keeps context alive between sessions, and dispatches the right specialist for every job.',
    colorVar: '--color-umai',
  },
  {
    name: 'Bastian',
    role: 'Code & delivery',
    blurb: 'Writes, refactors, and ships. Every feature branch, migration, and build pass goes through him.',
    colorVar: '--color-bastian',
  },
  {
    name: 'Steward',
    role: 'Server & infrastructure',
    blurb: 'Keeps the self-hosted Debian box healthy — tunnels, watchdogs, deployments, uptime.',
    colorVar: '--color-steward',
  },
  {
    name: 'Lex',
    role: 'Finance',
    blurb: 'Watches budgets, cash flow, and the numbers side of every venture.',
    colorVar: '--color-lex',
  },
  {
    name: 'Onyx',
    role: 'Vault & security',
    blurb: 'Guards secrets, credentials, and everything that must never leak.',
    colorVar: '--color-onyx',
  },
  {
    name: 'Atlas',
    role: 'Tasks & planning',
    blurb: 'Turns big ideas into ordered, trackable steps so nothing falls through.',
    colorVar: '--color-atlas',
  },
];

export interface WorkflowStep {
  title: string;
  detail: string;
}

/**
 * "How I work with AI" — restored from v2 (Nebula). The framing and the
 * five steps are the actual differentiator; meaning must survive verbatim.
 */
export const WORKFLOW_INTRO: string[] = [
  'I work with multiple AI agents as part of my development workflow. The distinction matters: I design the architecture and write the context documentation. The agents execute within that structure — with code review, git discipline, and human sign-off.',
];

export const WORKFLOW_CLOSING =
  'This isn’t AI doing my job. It’s AI as a precision instrument — directed, audited, owned.';

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    title: 'Design & architecture',
    detail: 'Every build starts with me — the system shape, the data model, the call on what gets built and why.',
  },
  {
    title: 'Context docs + system specs',
    detail: 'I write the documentation the agents work from: specs, protocols, and guardrails, versioned in the repo.',
  },
  {
    title: 'Agent executes',
    detail: 'A named teammate picks up the brief and builds within that structure — scoped, on its own branch.',
  },
  {
    title: 'Human review + git commit',
    detail: 'Nothing lands unseen. I review every diff, and every change ships with a human sign-off.',
  },
  {
    title: 'Ship',
    detail: 'Deployed to infrastructure I run myself — tunnels, monitoring, uptime, the whole story.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/najmusyathir' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/najmusyathir/' },
  { label: 'Instagram', href: 'https://www.instagram.com/najmusyathir' },
  { label: 'Facebook', href: 'https://www.facebook.com/najmusyathir' },
  { label: 'WhatsApp', href: 'https://wa.link/k7r72h' },
];

export const PROJECTS: Project[] = [
  // Acadeon Ecosystem
  {
    name: 'acadeon-cli',
    description: 'Browser PTY terminal with TOTP auth',
    tags: ['Next.js', 'TypeScript', 'node-pty', 'Supabase'],
    url: 'https://cli.najmusyathir.dev',
    status: 'live',
  },
  {
    name: 'acadeon-pulse',
    description: 'Uptime monitor PWA with escalating push alerts',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PWA'],
    url: 'https://pulse.najmusyathir.dev',
    status: 'live',
  },
  {
    name: 'personal-dashboard',
    description: 'Multi-tenant SaaS — finance, vault, kanban, AI chat',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    url: null,
    status: 'internal',
  },
  {
    name: 'ai_hub_bridge',
    description: 'Async AI job queue — Claude CLI to web & Telegram',
    tags: ['Next.js', 'TypeScript', 'Supabase Realtime'],
    url: null,
    status: 'internal',
  },
  {
    name: 'ssh-web-server',
    description: 'Browser SSH client, zero install',
    tags: ['Next.js', 'TypeScript', 'WebSocket'],
    url: 'https://ssh.najmusyathir.dev',
    status: 'live',
  },
  // Old delivered projects (from portfolio-v1)
  {
    name: 'Acadeon Academy',
    description: 'Multi-school management platform — students, staff, classes, co-curriculars, sports, exams, scores, and records.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind', 'Docker'],
    url: null,
    status: 'wip',
    image: '/current_project.png',
  },
  {
    name: 'Bakers Heist',
    description: 'E-commerce platform for a cake shop and bakery — modern design, seamless shopping experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    url: 'https://bakers-heist.vercel.app/',
    status: 'live',
    image: '/project1.png',
  },
  {
    name: 'Astral Apparel',
    description: 'Online store for Muslimah fashion — abaya, baju kurung, and modest wear with an elegant interface.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    url: 'https://astral-apparel.vercel.app/',
    status: 'live',
    image: '/project2.png',
  },
  {
    name: 'PetCare Clinic System',
    description: 'Grooming and vet booking platform — appointments, pet profiles, service management.',
    tags: ['Laravel', 'Blade', 'MySQL', 'JavaScript'],
    url: null,
    status: 'live',
    image: '/project3.mp4',
  },
];

export const STATS: Stat[] = [
  { number: '2+', label: 'Years experience' },
  { number: '6', label: 'Live projects' },
  { number: '6', label: 'AI teammates' },
  { number: '1', label: 'Self-hosted server' },
];

export const STACK_ITEMS: StackItem[] = [
  { label: 'Next.js' },
  { label: 'TypeScript' },
  { label: 'React' },
  { label: 'Tailwind CSS' },
  { label: 'Prisma' },
  { label: 'PostgreSQL' },
  { label: 'Supabase' },
  { label: 'Cloudflare' },
  { label: 'Linux' },
  { label: 'Node.js' },
  { label: 'Git' },
];
