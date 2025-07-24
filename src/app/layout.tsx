import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { StickyCallButtons } from '@/components/layout/StickyCallButtons';
import Script from 'next/script';

// Primary font: Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// Technical/monospace font
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  preload: false,
  fallback: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'monospace'],
});

// Clean metadata - only essentials
export const metadata: Metadata = {
  metadataBase: new URL('https://discountleakdetection.com'),
  title: {
    default: 'Discount Leak Detection - Professional Leak Detection Services',
    template: '%s | Discount Leak Detection',
  },
  description: 'Professional leak detection services nationwide with advanced technology and 24/7 emergency response. Expert water, gas, and pool leak detection.',
  keywords: ['leak detection', 'water leak detection', 'gas leak detection', 'pool leak detection', 'slab leak detection'],
  authors: [{ name: 'Discount Leak Detection' }],
  
  // Favicon
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  
  // Social sharing
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
};

// Simple viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1976D2',
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
        {/* ONLY Google Fonts preconnect - needed for your fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload your logo for performance */}
        <link
          rel="preload"
          href="/logo/logo.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Simple business info for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Discount Leak Detection",
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
        className="flex flex-col min-h-screen bg-background text-foreground antialiased"
      >
        {/* Accessibility skip link */}
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

        {/* SIMPLIFIED Google Analytics - only for verification */}
        <Script 
          src={`https://www.googletagmanager.com/gtag/js?id=G-R8W438QET6`}
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
                send_page_view: true
              });
            `,
          }}
        />
      </body>
    </html>
  );
}