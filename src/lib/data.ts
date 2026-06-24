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
  { number: '5', label: 'AI agents orchestrated' },
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
