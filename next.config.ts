import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimize production builds
  compress: true,

  // Disable source maps in production for smaller bundles
  productionBrowserSourceMaps: false,

  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Modularize imports for better tree shaking
  modularizeImports: {
    // Example: if you add lodash in future
    'lodash': {
      transform: 'lodash/{{member}}',
    },
  },

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['aos', 'react', 'react-dom'],
  },

  // Turbopack configuration (Next.js 16 default)
  // Empty config to acknowledge we're using Turbopack
  turbopack: {},
};

export default nextConfig;
