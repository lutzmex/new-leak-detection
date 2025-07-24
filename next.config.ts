import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable production optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // TypeScript and ESLint - Enable for production quality
  typescript: {
    ignoreBuildErrors: false, // Catch TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: false, // Catch linting errors
  },

  // Output configuration - comment out if using 'pnpm start'
  // output: 'standalone', // Uncomment for Docker/standalone deployment
  
  // External packages for server
  serverExternalPackages: ['sharp'],
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-sheet',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-accordion',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-visually-hidden',
      'recharts',
      'date-fns'
    ],
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    
    // SVG support with security
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // External image sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'discountleakdetection.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
      // Add any other image domains you use
    ],
    
    unoptimized: false, // Enable optimization
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Framework chunk
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Lucide React separate chunk (you use it heavily)
          lucide: {
            name: 'lucide',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            priority: 35,
            enforce: true,
          },
          // Radix UI chunk
          radix: {
            name: 'radix',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            priority: 30,
            enforce: true,
          },
          // Vendor chunk for other node_modules
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
            enforce: true,
          },
          // Common code chunk
          common: {
            name: 'common',
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
    }
    
    return config;
  },

  // Security headers optimized for Google services
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts - Allow Google services
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleapis.com https://www.google.com https://www.gstatic.com https://*.doubleclick.net https://maps.googleapis.com https://maps.gstatic.com",
              // Styles - Allow Google Fonts and inline styles
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
              // Images - Allow all for flexibility
              "img-src 'self' data: blob: https: http:",
              // Fonts - Allow Google Fonts
              "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:",
              // Connect - Allow Google services
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://region1.google-analytics.com https://*.doubleclick.net https://maps.googleapis.com",
              // Frames - Allow Google Maps and other Google services
              "frame-src 'self' https://*.google.com https://*.doubleclick.net https://www.googletagmanager.com https://maps.google.com https://www.google.com/maps/",
              // Media
              "media-src 'self' data: blob:",
              // Objects
              "object-src 'none'",
              // Base URI
              "base-uri 'self'",
              // Form actions
              "form-action 'self'",
              // Upgrade insecure requests
              "upgrade-insecure-requests"
            ].join('; ')
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Allow same-origin framing for Google Maps
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
          },
        ],
      },
      
      // Cache static assets aggressively
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/logo/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // Cache API routes briefly
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=300',
          },
        ],
      },
    ];
  },
  
  // Redirects for common patterns (if needed)
  async redirects() {
    return [
      // Add any redirects you need
      // Example:
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ];
  },
  
  // Rewrites for clean URLs (if needed)
  async rewrites() {
    return [
      // Add any rewrites you need
      // Example for sitemap:
      // {
      //   source: '/sitemap.xml',
      //   destination: '/api/sitemap',
      // },
    ];
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console.log in production (keep errors and warnings)
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn', 'info'],
    } : false,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://discountleakdetection.com',
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Discount Leak Detection',
  },
  
  // Production source maps (disabled for security and size)
  productionBrowserSourceMaps: false,
  
  // Generate build ID for cache busting
  generateBuildId: async () => {
    // Use timestamp for build ID in development, commit hash in production
    return process.env.NODE_ENV === 'development' 
      ? `dev-${Date.now()}`
      : process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || `build-${Date.now()}`;
  },
  
  // Bundle analyzer (enable when needed)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // },
};

/* 
DEPLOYMENT INSTRUCTIONS:

1. For development: 
   pnpm dev

2. For production with regular Next.js server:
   pnpm build && pnpm start

3. For standalone deployment (Docker/VPS):
   - Uncomment 'output: standalone' above
   - pnpm build
   - node .next/standalone/server.js

4. Fix lockfile warning:
   Remove duplicate lockfile: C:\Users\oqudo\Documents\GitHub\leak detechtion\pnpm-lock.yaml

5. Optimize large bundle (blog pages are 318kB):
   Consider lazy loading heavy components in blog templates

6. Bundle analysis:
   ANALYZE=true pnpm build
*/

export default nextConfig;