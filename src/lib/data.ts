export interface Project {
  name: string;
  oneLiner: string;
  tags: string[];
  url: string | null;
}

export interface Stat {
  number: string;
  label: string;
}

export interface StackItem {
  label: string;
  mono?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: 'acadeon-cli',
    oneLiner: 'Browser PTY terminal with TOTP auth',
    tags: ['Next.js', 'TypeScript', 'node-pty', 'Supabase'],
    url: 'https://cli.najmusyathir.dev',
  },
  {
    name: 'acadeon-pulse',
    oneLiner: 'Uptime monitor PWA with escalating push alerts',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PWA'],
    url: 'https://pulse.najmusyathir.dev',
  },
  {
    name: 'personal-dashboard',
    oneLiner: 'Multi-tenant SaaS — finance, vault, kanban, AI chat',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    url: null,
  },
  {
    name: 'ai_hub_bridge',
    oneLiner: 'Async AI job queue — Claude CLI to web & Telegram',
    tags: ['Next.js', 'TypeScript', 'Supabase Realtime'],
    url: null,
  },
  {
    name: 'ssh-web-server',
    oneLiner: 'Browser SSH client, zero install',
    tags: ['Next.js', 'TypeScript', 'WebSocket'],
    url: 'https://ssh.najmusyathir.dev',
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
