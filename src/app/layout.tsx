import type { Metadata } from "next";
import "./globals.css";

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
      </head>
      <body>{children}</body>
    </html>
  );
}
