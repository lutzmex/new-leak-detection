// app/about/page.tsx
import { Metadata } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import AboutClient from './about-client';

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

// Structured data for the about page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Discount Leak Detection",
  "description": "America's most trusted leak detection experts with 25+ years of experience, serving all 50 states with advanced technology and certified technicians. Over 250,000 properties served.",
  "url": "https://discountleakdetection.com/about",
  "logo": "https://discountleakdetection.com/logo/logo.webp",
  "image": "https://discountleakdetection.com/images/discount-leak-detection.webp",
  "telephone": "+1 (888) 875-9844",
  "foundingDate": "1999",
  "founders": [
    {
      "@type": "Person",
      "name": "Discount Leak Detection Founders"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "numberOfEmployees": "850+",
  "slogan": "America's Most Trusted Leak Detection Experts",
  "knowsAbout": [
    "Leak Detection",
    "Water Damage Prevention", 
    "Thermal Imaging",
    "Acoustic Detection",
    "Non-Invasive Testing",
    "Property Protection"
  ],
  "hasCredential": [
    "EPA Certified",
    "IICRC Certified", 
    "NACHI Certified",
    "ASSE Certified",
    "BBB A+ Rating",
    "Licensed in 50 States"
  ],
  "award": [
    "BBB A+ Rating",
    "Industry Leader Recognition",
    "Customer Service Excellence"
  ],
  "serviceType": "Leak Detection Services",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Comprehensive Leak Detection Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Leak Detection",
          "description": "Professional residential leak detection services using advanced non-invasive technology"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Leak Detection",
          "description": "Expert commercial leak detection services for businesses and large properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Emergency Leak Detection",
          "description": "24/7 emergency leak detection services with rapid response nationwide"
        }
      }
    ]
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/discountleakdetection",
    "https://www.linkedin.com/company/discount-leak-detection"
  ]
};

export const metadata: Metadata = {
  title: "About Us - 25+ Years of Expert Leak Detection | Discount Leak Detection",
  description: "Learn about America's most trusted leak detection company. 25+ years of experience, 850+ certified technicians, 250,000+ properties served across all 50 states. Industry-leading 99.9% accuracy rate.",
  keywords: "about leak detection company, leak detection experts, water damage prevention, certified technicians, BBB A+ rated, leak detection experience, professional plumbers, property protection services",
  openGraph: {
    title: "About Us - 25+ Years of Expert Leak Detection | Discount Leak Detection",
    description: "Learn about America's most trusted leak detection company. 25+ years of experience, 850+ certified technicians, 250,000+ properties served across all 50 states. Industry-leading 99.9% accuracy rate.",
    type: "website",
    url: "https://discountleakdetection.com/about",
    images: [
      {
        url: "https://discountleakdetection.com/images/discount-leak-detection.webp",
        width: 1200,
        height: 630,
        alt: "Discount Leak Detection - About Our Expert Team"
      }
    ],
    siteName: "Discount Leak Detection"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - 25+ Years of Expert Leak Detection | Discount Leak Detection", 
    description: "Learn about America's most trusted leak detection company. 25+ years of experience, 850+ certified technicians, 250,000+ properties served across all 50 states. Industry-leading 99.9% accuracy rate.",
    images: ["https://discountleakdetection.com/images/discount-leak-detection.webp"]
  },
  alternates: {
    canonical: "https://discountleakdetection.com/about"
  }
};

export default function AboutPage() {
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
        <AboutClient />
      </div>
    </>
  );
}