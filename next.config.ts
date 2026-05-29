import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "/get-involved#donate",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/programmes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
