import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Performance optimizations - FIXED: Don't ignore errors in production
  typescript: {
    ignoreBuildErrors: false, // ❌ Was true - should catch TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: false, // ❌ Was true - should catch linting errors
  },
  
  // Enable compression
  compress: true,

  // React configuration
  reactStrictMode: true,
  poweredByHeader: false,

  // Production optimizations
  productionBrowserSourceMaps: false, // Don't expose source maps
  
  // Output for deployment
  output: 'standalone', // Good for Docker deployment
  
  // Server external packages
  serverExternalPackages: ['sharp'], // ✅ ADDED - Required for image optimization
  
  // Experimental optimizations - ENHANCED
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-accordion',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      'recharts', // ✅ ADDED - You're using this
      'date-fns'  // ✅ ADDED - You're using this
    ],
    optimizeCss: true, // ✅ ADDED - Better CSS optimization
    scrollRestoration: true, // ✅ ADDED - Better UX
  },
  
  // Image optimization - FIXED multiple issues
  images: {
    loader: 'default',
    formats: ['image/webp', 'image/avif'], // ✅ FIXED - Order matters (WebP first for compatibility)
    minimumCacheTTL: 31536000, // 1 year cache
    
    // ✅ FIXED - Reduced device sizes (your original had too many)
    deviceSizes: [480,640, 750, 828, 1080, 1200, 1920], // Removed excessive sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Removed excessive sizes
    
    // ✅ FIXED - Removed invalid property
    // contentDispositionType: 'attachment', // ❌ This is not a valid Next.js image config property
    
    // SVG support with proper CSP
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Remote patterns - CLEANED UP
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'discountleakdetection.com',
        port: '',
        pathname: '/**', // ✅ SIMPLIFIED - covers both /images/** and /icon/**
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      }
    ],
    
    unoptimized: false, // ✅ ADDED - Ensure optimization is enabled
  },
  
  // ✅ SIMPLIFIED - Webpack config (yours was good but this is cleaner)
  webpack: (config, { dev, isServer }) => {
    // Only add optimizations for production client builds
    if (!dev && !isServer) {
      // Simplified bundle splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk for all node_modules
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
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
    
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  


  // FIXED: Enhanced headers with Google services support
  async headers() {
    return [
      // Security headers for all pages with Google support
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // ✅ FIXED: Allow Google services
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleapis.com https://www.google.com https://www.gstatic.com https://*.doubleclick.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
              "img-src 'self' data: blob: https: http:", // Allow all images for development
              "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:",
              // ✅ FIXED: Enhanced connect-src for Google services
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://region1.google-analytics.com https://*.doubleclick.net",
              // ✅ FIXED: Allow Google iframes
              "frame-src 'self' https://*.google.com https://*.doubleclick.net https://www.googletagmanager.com",
              "media-src 'self' data: blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              // ✅ REMOVED: frame-ancestors 'none' (blocks Google embedding)
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
            value: 'SAMEORIGIN', // ✅ CHANGED: Allow same origin framing
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
          // ✅ ADDED: Proper MIME type headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
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
        source: '/icon/:path*',
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
    ];
  },
  
  // Compilation optimizations - ENHANCED
  compiler: {
    // Remove console.log in production (keep errors and warnings)
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn', 'info'],
    } : false,
    
    // ✅ REMOVED - reactRemoveProperties (can cause issues in Next.js 15)
  },
  
  // ✅ REMOVED - pageExtensions (using defaults is better)
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://discountleakdetection.com',
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Discount Leak Detection',
  },
};

export default nextConfig;