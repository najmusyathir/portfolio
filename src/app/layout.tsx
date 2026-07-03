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
  title: 'Najmu Syathir — I build with an AI team',
  description:
    "Hi! I'm Najmu — a full-stack developer in Malaysia who treats AI as a creative partner. Together with my AI team, I ship terminals, dashboards, and tools that make daily life lighter.",
  keywords: [
    'Najmu Syathir',
    'full-stack developer',
    'AI collaboration',
    'AI orchestration',
    'Next.js',
    'TypeScript',
    'Malaysia',
    'developer portfolio',
    'Acadeon',
  ],
  authors: [{ name: 'Najmu Syathir' }],
  openGraph: {
    title: 'Najmu Syathir — I build with an AI team',
    description:
      "Full-stack developer in Malaysia who treats AI as a creative partner. Shipping terminals, dashboards, and tools that make daily life lighter.",
    url: 'https://najmusyathir.dev',
    siteName: 'Najmu Syathir',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Najmu Syathir — I build with an AI team',
    description:
      "Full-stack developer in Malaysia who treats AI as a creative partner. Shipping tools that make daily life lighter.",
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
