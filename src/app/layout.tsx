import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://najmusyathir.dev"),
  title: {
    default: "Najmu Syathir — Full-Stack Engineer",
    template: "%s — Najmu Syathir",
  },
  description:
    "Najmu Syathir — Full-Stack Engineer. I build full-stack products end to end and run the self-hosted infrastructure they live on. Code, Coffee & Chill.",
  keywords: [
    "Najmu Syathir",
    "Full-Stack Engineer",
    "Next.js",
    "TypeScript",
    "self-hosted",
    "Malaysia developer",
  ],
  authors: [{ name: "Najmu Syathir" }],
  openGraph: {
    title: "Najmu Syathir — Full-Stack Engineer",
    description:
      "Full-stack products, self-hosted infrastructure, and AI orchestration. Code, Coffee & Chill.",
    url: "https://najmusyathir.dev",
    siteName: "Najmu Syathir",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Mark JS as active before paint so scroll-reveal only hides content
            when it can actually reveal it again (no-JS = content visible). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {/* Set the theme class before paint (no-flash). An explicit saved
            choice always wins; with no saved preference, follow the
            visitor's OS/browser prefers-color-scheme — same no-flash
            approach as the retired texture flag. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');" +
              "var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);" +
              "document.documentElement.classList.toggle('dark', d);" +
              "}catch(e){}",
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
