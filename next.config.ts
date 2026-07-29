import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["portfolio-dev.najmusyathir.dev"],
  // better-sqlite3 is a native module (used by the throwaway /ctc checklist
  // route) — keep it out of the server bundle rather than letting webpack
  // try to bundle its .node binding.
  serverExternalPackages: ["better-sqlite3"],
  // /ctc is edited live and re-visited by abah on his own device — force
  // every request (browser + Cloudflare edge) to always fetch the current
  // version instead of a stale cached one.
  async headers() {
    return [
      {
        source: "/ctc/:path*",
        headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }],
      },
      {
        source: "/api/ctc/:path*",
        headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;
