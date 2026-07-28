import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["portfolio-dev.najmusyathir.dev"],
  // better-sqlite3 is a native module (used by the throwaway /ctc checklist
  // route) — keep it out of the server bundle rather than letting webpack
  // try to bundle its .node binding.
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
