// app/privacy/page.tsx
import { Metadata } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import PrivacyPageClient from './privacy-client';

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

// Structured data for privacy policy page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy - Discount Leak Detection",
  "description": "Learn how Discount Leak Detection protects your personal information. Our privacy policy explains data collection, usage, sharing, and your rights in simple, clear language.",
  "url": "https://discountleakdetection.com/privacy",
  "mainEntity": {
    "@type": "PrivacyPolicy",
    "name": "Discount Leak Detection Privacy Policy",
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
        "email": "privacy@discountleakdetection.com"
      }
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Data Collection",
        "description": "Information about what personal data we collect from customers"
      },
      {
        "@type": "Thing", 
        "name": "Data Usage",
        "description": "How we use customer personal information to provide services"
      },
      {
        "@type": "Thing",
        "name": "Data Sharing",
        "description": "When and with whom we share customer information"
      },
      {
        "@type": "Thing",
        "name": "Data Security",
        "description": "How we protect customer personal information"
      },
      {
        "@type": "Thing",
        "name": "Customer Rights",
        "description": "Your rights regarding your personal information"
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
        "name": "Privacy Policy",
        "item": "https://discountleakdetection.com/privacy"
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Information | Discount Leak Detection",
  description: "Learn how Discount Leak Detection protects your personal information. Our privacy policy explains data collection, usage, sharing, and your rights in simple, clear language.",
  keywords: "privacy policy, data protection, personal information, customer privacy, data security, CCPA, privacy rights, leak detection privacy",
  openGraph: {
    title: "Privacy Policy - How We Protect Your Information | Discount Leak Detection",
    description: "Learn how Discount Leak Detection protects your personal information. Our privacy policy explains data collection, usage, sharing, and your rights in simple, clear language.",
    type: "website",
    url: "https://discountleakdetection.com/privacy",
    images: [
      {
        url: "https://discountleakdetection.com/images/privacy-policy.webp",
        width: 1200,
        height: 630,
        alt: "Discount Leak Detection Privacy Policy - Your Information Protection"
      }
    ],
    siteName: "Discount Leak Detection"
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - How We Protect Your Information | Discount Leak Detection",
    description: "Learn how Discount Leak Detection protects your personal information. Our privacy policy explains data collection, usage, sharing, and your rights in simple, clear language.",
    images: ["https://discountleakdetection.com/images/privacy-policy.webp"]
  },
  alternates: {
    canonical: "https://discountleakdetection.com/privacy"
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
  category: "Privacy Policy"
};

export default function PrivacyPage() {
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
        <PrivacyPageClient />
      </div>
    </>
  );
}