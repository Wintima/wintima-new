import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: '/donate',
        destination: '/get-involved#donate',
        permanent: true,
      },
      {
        source: '/programmes',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/programmes/:path*',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
