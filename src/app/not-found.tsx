// app/not-found.tsx
import { Metadata } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import NotFoundClient from './not-found-client';

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

// Structured data for the 404 page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "404 - Page Not Found | Discount Leak Detection",
  "description": "The page you are looking for could not be found. Return to Discount Leak Detection homepage or contact our expert leak detection team for assistance.",
  "url": "https://discountleakdetection.com/404",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Discount Leak Detection",
    "url": "https://discountleakdetection.com"
  },
  "mainEntity": {
    "@type": "Organization",
    "name": "Discount Leak Detection",
    "telephone": "+1 (888) 875-9844",
    "url": "https://discountleakdetection.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (888) 875-9844",
      "contactType": "customer service",
      "availableLanguage": "English",
      "hoursAvailable": "Mo-Su 00:00-23:59"
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://discountleakdetection.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "404 Error",
        "item": "https://discountleakdetection.com/404"
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "404 - Page Not Found | Discount Leak Detection",
  description: "The page you are looking for could not be found. Return to Discount Leak Detection homepage or contact our expert leak detection team for assistance.",
  keywords: "404 error, page not found, discount leak detection, leak detection services, contact support, emergency leak detection",
  authors: [{ name: "Discount Leak Detection" }],
  creator: "Discount Leak Detection",
  publisher: "Discount Leak Detection",
  robots: {
    index: false, // Don't index 404 pages
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "404 - Page Not Found | Discount Leak Detection",
    description: "The page you are looking for could not be found. Return to Discount Leak Detection homepage or contact our expert leak detection team for assistance.",
    type: "website",
    url: "https://discountleakdetection.com/404",
    siteName: "Discount Leak Detection",
    locale: "en_US",
    images: [
      {
        url: "https://discountleakdetection.com/images/discount-leak-detection.webp",
        width: 1200,
        height: 630,
        alt: "Discount Leak Detection - 404 Page Not Found",
        type: "image/webp"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 - Page Not Found | Discount Leak Detection", 
    description: "The page you are looking for could not be found. Return to Discount Leak Detection homepage or contact our expert leak detection team for assistance.",
    images: ["https://discountleakdetection.com/images/discount-leak-detection.webp"],
    creator: "@DiscountLeakDetection",
    site: "@DiscountLeakDetection"
  },
  alternates: {
    canonical: "https://discountleakdetection.com/404",
    languages: {
      'en-US': 'https://discountleakdetection.com/404',
    }
  },
  category: "Error Page",
  classification: "404 Not Found",
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://discountleakdetection.com'),
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': '404 - Discount Leak Detection',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
  }
};

export default function NotFoundPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Font wrapper with clean typography */}
      <div 
        className={`${poppins.variable} ${ibmPlexMono.variable}`}
        style={{
          fontFamily: poppins.style.fontFamily,
          fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <NotFoundClient />
      </div>
    </>
  );
}