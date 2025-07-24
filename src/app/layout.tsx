import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { StickyCallButtons } from '@/components/layout/StickyCallButtons';
import Script from 'next/script';

// Primary font: Poppins with lighter weights for clean look
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], // Light to medium weights only
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
});

// Technical/monospace font for numbers, phone numbers, codes
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  preload: false,
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
  // Favicon configuration
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://discountleakdetection.com',
    siteName: 'Discount Leak Detection',
    title: 'Discount Leak Detection - Professional Leak Detection Services',
    description: 'Professional leak detection services nationwide with advanced technology and 24/7 emergency response.',
    images: [
      {
        url: '/images/discount-leak-detection.webp', // Use a relative path
        width: 1200,
        height: 630,
        alt: 'Discount Leak Detection - Professional Leak Detection Services',
      },
    ],
  },
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@DiscountLeak',
    creator: '@DiscountLeak',
    title: 'Discount Leak Detection - Professional Services',
    description: 'Professional leak detection services nationwide with advanced technology and 24/7 emergency response.',
    images: ['/images/discount-leak-detection.webp'], // Use a relative path
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
      className={`${poppins.variable} ${ibmPlexMono.variable} antialiased`}
      suppressHydrationWarning
      style={{
        fontFamily: poppins.style.fontFamily,
        fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      <head>
        {/* Preconnect to Google Fonts and GTM for faster connection setup */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* PERFORMANCE: Preload the LCP image (logo) to prioritize its loading */}
        <link
          rel="preload"
          href="/logo/logo.webp"
          as="image"
          type="image/webp"
        />

        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
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
        className="flex flex-col min-h-screen bg-background text-foreground"
      >
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md font-poppins font-medium text-base"
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

        {/* Google Analytics using gtag.js */}
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
              gtag('config', 'G-R8W438QET6');
            `,
          }}
        />
      </body>
    </html>
  );
}