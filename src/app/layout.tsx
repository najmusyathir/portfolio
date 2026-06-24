import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Najmu Syathir — Full-Stack Engineer & Solution Architect',
  description:
    'Solo full-stack engineer based in Malaysia. Building production-grade tools: PTY terminals, uptime monitors, multi-tenant SaaS, async AI pipelines — all self-hosted.',
  keywords: [
    'Najmu Syathir',
    'full-stack engineer',
    'solution architect',
    'Next.js',
    'TypeScript',
    'Malaysia',
    'developer portfolio',
    'Acadeon',
  ],
  authors: [{ name: 'Najmu Syathir' }],
  openGraph: {
    title: 'Najmu Syathir — Full-Stack Engineer & Solution Architect',
    description:
      'Solo full-stack engineer based in Malaysia. Building production-grade tools: PTY terminals, uptime monitors, multi-tenant SaaS, async AI pipelines — all self-hosted.',
    url: 'https://najmusyathir.dev',
    siteName: 'Najmu Syathir',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Najmu Syathir — Full-Stack Engineer & Solution Architect',
    description:
      'Solo full-stack engineer based in Malaysia. Building production-grade tools: PTY terminals, uptime monitors, multi-tenant SaaS, async AI pipelines — all self-hosted.',
  },
  metadataBase: new URL('https://najmusyathir.dev'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
