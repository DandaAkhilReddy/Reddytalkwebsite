import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://reddytalk.ai',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.reddytalk.ai',
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@radix-ui/react-dialog'],
  },
};

export default nextConfig;