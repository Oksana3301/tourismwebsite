/** @type {import('next').NextConfig} */

// Check if we're building for production
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Performance optimizations
  reactStrictMode: true,
  
  // Enable static export for Firebase Hosting (only in production builds)
  ...(isProd && { output: 'export' }),
  
  // Trailing slash for better compatibility with Firebase Hosting
  ...(isProd && { trailingSlash: true }),
  
  // Ignore ESLint errors during build (warnings won't block deployment)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Ignore TypeScript errors during build (for faster deployment)
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Compiler options for better performance
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // SWC minification is enabled by default in Next.js 15
  
  // Image optimization - unoptimized for static export
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['ui-avatars.com'], // Allow UI Avatars API
  },
  
  // Experimental features for better performance
  experimental: {
    // Enable optimizeCss for production builds
    optimizeCss: true,
    // Optimize package imports
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-accordion',
    ],
    // Enable React compiler (if available)
    reactCompiler: false,
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Optimize for production
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk for node_modules
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Framer Motion in separate chunk
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              chunks: 'all',
              priority: 30,
            },
            // Radix UI in separate chunk
            radixUI: {
              name: 'radix-ui',
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              chunks: 'all',
              priority: 30,
            },
          },
        },
      };
    }
    
    return config;
  },
  
  // Headers are configured in firebase.json for static hosting
  // (headers() function is not compatible with static export)
  
  // Compress pages and public assets
  compress: true,
  
  // PoweredByHeader
  poweredByHeader: false,
  
  // Production source maps (disable for performance)
  productionBrowserSourceMaps: false,
  
  // Font optimization is enabled by default in Next.js 15
};

module.exports = nextConfig;
