import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure the JSON seed content ships with every serverless function
  // (used to seed the database and as read-only fallback).
  outputFileTracingIncludes: {
    "/**": ["./content/**"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
