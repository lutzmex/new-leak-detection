// src/app/contact/page.tsx
import { Metadata, Viewport } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import ContactClient from './contact-client';

// --- CLEAN FONT CONFIGURATION ---
// Poppins with lighter weights for cleaner look
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], // Lighter weights for cleaner look
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
});

// IBM Plex Mono for phone numbers and technical data
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  preload: false,
  fallback: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'monospace'],
  adjustFontFallback: true,
});

// Structured data for the contact page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Discount Leak Detection",
  "description": "Contact our expert leak detection specialists 24/7. Emergency response available across all 50 states with certified technicians and guaranteed results.",
  "url": "https://discountleakdetection.com/contact",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Discount Leak Detection",
    "telephone": "+1 (888) 875-9844",
    "email": "contact@discountleakdetection.com",
    "url": "https://discountleakdetection.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1 (888) 875-9844",
        "contactType": "customer service",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "email": "contact@discountleakdetection.com",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    ],
    "areaServed": [
      "United States",
      "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
      "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
      "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
      "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
      "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
      "West Virginia", "Wisconsin", "Wyoming", "District of Columbia"
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "500"
    }
  }
};

// Viewport configuration - moved from metadata
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2563eb',
};

// Enhanced metadata (viewport removed)
export const metadata: Metadata = {
  title: "Contact Expert Leak Detection Specialists 24/7 | Discount Leak Detection",
  description: "Contact our expert leak detection specialists 24/7. Emergency response available across all 50 states with certified technicians and guaranteed results. Call (888) 875-9844 now for immediate assistance.",
  keywords: [
    "contact leak detection",
    "emergency plumbing", 
    "24/7 leak detection",
    "professional plumbers",
    "water leak emergency",
    "leak detection specialists",
    "plumbing contact",
    "leak detection phone number",
    "emergency water leak repair",
    "certified leak detection technicians"
  ].join(", "),
  authors: [{ name: "Discount Leak Detection" }],
  creator: "Discount Leak Detection",
  publisher: "Discount Leak Detection",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Contact Expert Leak Detection Specialists 24/7 | Discount Leak Detection",
    description: "Contact our expert leak detection specialists 24/7. Emergency response available across all 50 states with certified technicians and guaranteed results. Call (888) 875-9844 now.",
    type: "website",
    url: "https://discountleakdetection.com/contact",
    siteName: "Discount Leak Detection",
    locale: "en_US",
    images: [
      {
        url: "https://discountleakdetection.com/images/discount-leak-detection-contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact Discount Leak Detection - 24/7 Emergency Service",
        type: "image/webp"
      },
      {
        url: "https://discountleakdetection.com/images/contact-leak-detection-experts.webp",
        width: 800,
        height: 600,
        alt: "Professional Leak Detection Contact Information",
        type: "image/webp"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Expert Leak Detection Specialists 24/7 | Discount Leak Detection",
    description: "Contact our expert leak detection specialists 24/7. Emergency response available across all 50 states with certified technicians and guaranteed results. Call (888) 875-9844 now.",
    images: ["https://discountleakdetection.com/images/discount-leak-detection-contact.webp"],
    creator: "@DiscountLeakDetection",
    site: "@DiscountLeakDetection"
  },
  alternates: {
    canonical: "https://discountleakdetection.com/contact",
    languages: {
      'en-US': 'https://discountleakdetection.com/contact',
    }
  },
  category: "Business Services",
  classification: "Leak Detection Services",
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
    'apple-mobile-web-app-title': 'Contact Discount Leak Detection',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
  }
};

function generateStructuredData() {
  return {
    __html: JSON.stringify(structuredData, null, 0)
  };
}

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData()}
      />
      
      {/* Page wrapper with font variables and optimization */}
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
        <ContactClient />
      </div>
    </>
  );
}

// Performance optimizations
export const dynamic = 'auto';
export const revalidate = false;