// app/terms/page.tsx
import { Metadata } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import TermsPageClient from './terms-client';

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

// Structured data for terms of service page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms and Conditions - Discount Leak Detection",
  "description": "Read the terms and conditions for Discount Leak Detection services. Understand your rights, responsibilities, and our service agreements for professional leak detection services.",
  "url": "https://discountleakdetection.com/terms",
  "mainEntity": {
    "@type": "TermsOfService",
    "name": "Discount Leak Detection Terms of Service",
    "dateModified": "2024-01-01",
    "datePublished": "2024-01-01",
    "publisher": {
      "@type": "Organization",
      "name": "Discount Leak Detection",
      "url": "https://discountleakdetection.com",
      "logo": "https://discountleakdetection.com/logo/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-888-875-9844",
        "contactType": "customer service",
        "email": "legal@discountleakdetection.com"
      }
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Service Agreement",
        "description": "Terms governing leak detection services"
      },
      {
        "@type": "Thing", 
        "name": "User Responsibilities",
        "description": "Customer obligations and requirements"
      },
      {
        "@type": "Thing",
        "name": "Service Limitations",
        "description": "Scope and limitations of leak detection services"
      },
      {
        "@type": "Thing",
        "name": "Liability Terms",
        "description": "Limitation of liability and warranty information"
      },
      {
        "@type": "Thing",
        "name": "Payment Terms",
        "description": "Pricing, payment, and billing terms"
      }
    ]
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
        "name": "Terms of Service",
        "item": "https://discountleakdetection.com/terms"
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "Terms of Service - Legal Agreement | Discount Leak Detection",
  description: "Read the terms and conditions for Discount Leak Detection services. Understand your rights, responsibilities, and our service agreements for professional leak detection services.",
  keywords: "terms of service, legal agreement, service terms, leak detection agreement, customer terms, service conditions, liability terms, warranty terms",
  openGraph: {
    title: "Terms of Service - Legal Agreement | Discount Leak Detection",
    description: "Read the terms and conditions for Discount Leak Detection services. Understand your rights, responsibilities, and our service agreements for professional leak detection services.",
    type: "website",
    url: "https://discountleakdetection.com/terms",
    images: [
      {
        url: "https://discountleakdetection.com/images/terms-of-service.webp",
        width: 1200,
        height: 630,
        alt: "Discount Leak Detection Terms of Service - Legal Agreement"
      }
    ],
    siteName: "Discount Leak Detection"
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Legal Agreement | Discount Leak Detection",
    description: "Read the terms and conditions for Discount Leak Detection services. Understand your rights, responsibilities, and our service agreements for professional leak detection services.",
    images: ["https://discountleakdetection.com/images/terms-of-service.webp"]
  },
  alternates: {
    canonical: "https://discountleakdetection.com/terms"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
  },
  authors: [{ name: "Discount Leak Detection" }],
  publisher: "Discount Leak Detection",
  category: "Terms of Service"
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
        <TermsPageClient />
      </div>
    </>
  );
}