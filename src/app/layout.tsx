import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Najmu Syathir — Full-stack engineer, solo, in production',
  description:
    "Hi! I'm Najmu — a full-stack engineer in Malaysia building production tools front-to-back and running them myself. Six services live right now, on infrastructure I manage solo.",
  keywords: [
    'Najmu Syathir',
    'full-stack engineer',
    'self-hosted infrastructure',
    'Next.js',
    'TypeScript',
    'Malaysia',
    'developer portfolio',
    'Acadeon',
  ],
  authors: [{ name: 'Najmu Syathir' }],
  openGraph: {
    title: 'Najmu Syathir — Full-stack engineer, solo, in production',
    description:
      'Full-stack engineer in Malaysia building production tools front-to-back and running them myself. Six services live, one self-hosted server.',
    url: 'https://najmusyathir.dev',
    siteName: 'Najmu Syathir',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Najmu Syathir — Full-stack engineer, solo, in production',
    description:
      'Full-stack engineer in Malaysia building production tools front-to-back and running them myself.',
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
      <body className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
