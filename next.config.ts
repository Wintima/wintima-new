import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
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
      {
        source: '/get-involved',
        destination: '/donate',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
