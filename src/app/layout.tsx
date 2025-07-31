import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { StickyCallButtons } from '@/components/layout/StickyCallButtons';
import Script from 'next/script';

// CRITICAL: Optimized font loading for better LCP
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  preload: true,
  fallback: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'monospace'],
  adjustFontFallback: true,
});

// Optimized Metadata for SEO and performance
export const metadata: Metadata = {
  metadataBase: new URL('https://discountleakdetection.com'),
  title: {
    default: 'Discount Leak Detection - Professional Leak Detection Services',
    template: '%s | Discount Leak Detection',
  },
  description: 'Professional leak detection services nationwide with advanced technology and 24/7 emergency response. Expert water, gas, and pool leak detection.',
  applicationName: 'Discount Leak Detection',
  referrer: 'origin-when-cross-origin',
  keywords: ['leak detection', 'water leak detection', 'gas leak detection', 'pool leak detection', 'slab leak detection', 'emergency leak detection'],
  authors: [{ name: 'Discount Leak Detection', url: 'https://discountleakdetection.com' }],
  creator: 'Discount Leak Detection',
  publisher: 'Discount Leak Detection',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://discountleakdetection.com',
    siteName: 'Discount Leak Detection',
    title: 'Discount Leak Detection - Professional Leak Detection Services',
    description: 'Professional leak detection services nationwide with advanced technology and 24/7 emergency response.',
    images: [
      {
        url: '/images/discount-leak-detection.webp',
        width: 1200,
        height: 630,
        alt: 'Discount Leak Detection - Professional Leak Detection Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DiscountLeak',
    creator: '@DiscountLeak',
    title: 'Discount Leak Detection - Professional Services',
    description: 'Professional leak detection services nationwide with advanced technology and 24/7 emergency response.',
    images: ['/images/discount-leak-detection.webp'],
  },
};

// Optimized Viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1976D2' },
    { media: '(prefers-color-scheme: dark)', color: '#1976D2' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${poppins.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* CRITICAL: Immediate font and connection preloads */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* CRITICAL: High priority logo preload for LCP optimization */}
        <link
          rel="preload"
          href="/logo/logo.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        
        {/* CRITICAL: Preload critical above-the-fold images - MOBILE FIRST */}
        <link
          rel="preload"
          href="/logo/logo.webp"
          as="image"
          type="image/webp"
          media="(max-width: 1279px)"
          fetchPriority="high"
        />

        {/* CRITICAL: Inline critical CSS for LCP optimization - MOBILE FIRST */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for LCP - Mobile First */
            .lcp-text {
              font-display: swap;
              contain: layout style;
              transform: translateZ(0);
              will-change: auto;
            }
            .header-container {
              contain: layout style;
              will-change: transform;
            }
            
            /* Prevent FOUT/FOIT - Mobile First */
            .font-poppins {
              font-family: var(--font-poppins), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              font-display: swap;
            }
            .font-ibm-plex-mono {
              font-family: var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
              font-display: swap;
            }
            
            /* Critical mobile header styles */
            @media (max-width: 1279px) {
              .header-container {
                position: sticky;
                top: 0.5rem;
                z-index: 50;
                width: 100%;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
              }
              
              .mobile-logo-container {
                height: 3rem;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(12px);
                border-radius: 1rem;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                border: 1px solid rgba(59, 130, 246, 0.2);
              }
              
              @media (min-width: 640px) {
                .header-container {
                  padding-left: 1rem;
                  padding-right: 1rem;
                }
                .mobile-logo-container {
                  height: 3.5rem;
                  border-radius: 1.5rem;
                }
              }
            }
            
            /* Desktop header styles */
            @media (min-width: 1280px) {
              .header-container {
                position: sticky;
                top: 1rem;
                z-index: 50;
                width: 100%;
              }
            }
            
            /* Logo optimization for LCP */
            .logo-image {
              height: auto;
              width: auto;
              max-height: 1.75rem;
              max-width: 100px;
            }
            
            @media (min-width: 640px) {
              .logo-image {
                max-height: 2rem;
                max-width: 115px;
              }
            }
            
            @media (min-width: 768px) {
              .logo-image {
                max-height: 2.25rem;
                max-width: 130px;
              }
            }
            
            @media (min-width: 1024px) {
              .logo-image {
                max-height: 2.5rem;
                max-width: 145px;
              }
            }
            
            @media (min-width: 1280px) {
              .logo-image {
                max-height: 3rem;
                max-width: 160px;
              }
            }
            
            /* Performance optimizations */
            * {
              -webkit-tap-highlight-color: transparent;
            }
            
            html {
              scroll-behavior: smooth;
            }
            
            body {
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
            }
            
            /* Reduce layout shift */
            img {
              font-size: 0;
            }
            
            /* Critical button styles */
            .mobile-call-button {
              background: linear-gradient(to right, rgb(96 165 250), rgb(59 130 246));
              color: white;
              padding: 0.5rem;
              border-radius: 0.75rem;
              box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
              transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
              transform: translateZ(0);
            }
            
            .mobile-call-button:hover {
              background: linear-gradient(to right, rgb(59 130 246), rgb(37 99 235));
              box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
              transform: scale(1.05) translateZ(0);
            }
            
            @media (min-width: 640px) {
              .mobile-call-button {
                padding: 0.625rem;
              }
            }
          `
        }} />

        {/* DEFERRED: Move structured data to prevent render blocking */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Discount Leak Detection",
              "image": "https://discountleakdetection.com/images/discount-leak-detection.webp",
              "telephone": "+18888759844",
              "email": "info@discountleakdetection.com",
              "url": "https://discountleakdetection.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              },
            })
          }}
        />
      </head>
      
      <body 
        className="flex flex-col min-h-screen bg-background text-foreground antialiased font-poppins"
        style={{
          fontFamily: poppins.style.fontFamily,
          fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-base"
        >
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="flex-grow focus:outline-none">
          {children}
        </main>
        
        <Footer />
        <Toaster />
        <StickyCallButtons />

        {/* OPTIMIZED: Google Analytics with better performance */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-R8W438QET6" 
          strategy="afterInteractive" 
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R8W438QET6', {
                page_title: document.title,
                page_location: window.location.href
              });
            `,
          }}
        />
      </body>
    </html>
  );
}