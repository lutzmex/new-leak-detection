// app/locations/page.tsx
import { Metadata } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import LocationsClient from './locations-client';

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

// Structured data for the locations page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Discount Leak Detection",
  "description": "Professional leak detection specialists serving all 50 states with advanced technology and 24/7 emergency response. Licensed team finds leaks fast in homes and businesses with 44+ specialized solutions.",
  "image": "https://discountleakdetection.com/images/discount-leak-detection.webp",
  "logo": "https://discountleakdetection.com/logo/logo.webp",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Visa, MC, PayPal, Amex, Discover, Cash, Check",
  "url": "https://discountleakdetection.com/locations",
  "telephone": "+1 (888) 875-9844",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "areaServed": [
    "United States",
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
    "West Virginia", "Wisconsin", "Wyoming", "District of Columbia"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Comprehensive Leak Detection Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Water Leak Detection",
          "description": "Professional residential water leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Heater Leak Detection",
          "description": "Professional water heater leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Boiler Leak Detection",
          "description": "Professional boiler leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Softener Leak Detection",
          "description": "Professional water softener leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sump Pump Leak Detection",
          "description": "Professional sump pump leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Water Leak Detection",
          "description": "Professional commercial water leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ejector Pump Leak Detection",
          "description": "Professional ejector pump leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Underground Leak Detection",
          "description": "Professional underground leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Main Leak Detection",
          "description": "Professional water main leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Line Leak Detection",
          "description": "Professional water line leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Supply Line Leak Detection",
          "description": "Professional supply line leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Drain Line Leak Detection",
          "description": "Professional drain line leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sewer Line Leak Detection",
          "description": "Professional sewer line leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pipe Leak Detection",
          "description": "Professional pipe leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Subsurface Leak Detection",
          "description": "Professional subsurface leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Slab Leak Detection",
          "description": "Professional slab leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Foundation Leak Detection",
          "description": "Professional foundation leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wall and Ceiling Leak Detection",
          "description": "Professional wall and ceiling leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Leak Detection",
          "description": "Professional roof leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Toilet Leak Detection",
          "description": "Professional toilet leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shower Leak Detection",
          "description": "Professional shower leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathtub Leak Detection",
          "description": "Professional bathtub leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sink Leak Detection",
          "description": "Professional sink leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Faucet Leak Detection",
          "description": "Professional faucet leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garbage Disposal Leak Detection",
          "description": "Professional garbage disposal leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hose Bib Leak Detection",
          "description": "Professional hose bib leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sprinkler System Leak Detection",
          "description": "Professional sprinkler system leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Drip Irrigation Leak Detection",
          "description": "Professional drip irrigation leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Swimming Pool Leak Detection",
          "description": "Professional swimming pool leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Spa and Hot Tub Leak Detection",
          "description": "Professional spa and hot tub leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Backflow Preventer Leak Detection",
          "description": "Professional backflow preventer leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Septic System Leak Detection",
          "description": "Professional septic system leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gas Line Leak Detection",
          "description": "Professional gas line leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sewer Gas Leak Detection",
          "description": "Professional sewer gas leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Carbon Monoxide Leak Detection",
          "description": "Professional carbon monoxide leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pressure Testing",
          "description": "Professional pressure testing featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Acoustic Leak Detection",
          "description": "Professional acoustic leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Camera Inspection Leak Detection",
          "description": "Professional camera inspection leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Infrared Leak Detection",
          "description": "Professional infrared leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Thermal Imaging Leak Detection",
          "description": "Professional thermal imaging leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Emergency Leak Detection",
          "description": "Professional emergency leak detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Burst Pipe Detection",
          "description": "Professional burst pipe detection featuring noninvasive diagnostic techniques to locate and repair leaks efficiently."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Installation of Smart Leak Sensors",
          "description": "Professional smart leak sensor installation featuring IoT monitoring to detect and alert on leaks instantly."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Monitoring and Maintenance of Leak Detection Systems",
          "description": "Professional leak detection system monitoring featuring ongoing maintenance and performance optimization."
        }
      }
    ]
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$"
};

export const metadata: Metadata = {
  title: "Professional Leak Detection Services - All 50 States | Discount Leak Detection",
  description: "Find certified leak detection specialists in your area. Serving all 50 states with 24/7 emergency response, advanced technology, and 1961+ cities covered. Call (888) 875-9844 for immediate assistance.",
  keywords: "leak detection, plumbing services, emergency plumbing, water leak detection, pipe leak repair, professional plumbers, 24/7 emergency, leak detection near me",
  openGraph: {
    title: "Professional Leak Detection Services - All 50 States | Discount Leak Detection",
    description: "Find certified leak detection specialists in your area. Serving all 50 states with 24/7 emergency response, advanced technology, and 1961+ cities covered. Call (888) 875-9844 for immediate assistance.",
    type: "website",
    url: "https://discountleakdetection.com/locations",
    images: [
      {
        url: "https://discountleakdetection.com/images/discount-leak-detection.webp",
        width: 1200,
        height: 630,
        alt: "Discount Leak Detection - Professional Services"
      }
    ],
    siteName: "Discount Leak Detection"
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Leak Detection Services - All 50 States | Discount Leak Detection",
    description: "Find certified leak detection specialists in your area. Serving all 50 states with 24/7 emergency response, advanced technology, and 1961+ cities covered. Call (888) 875-9844 for immediate assistance.",
    images: ["https://discountleakdetection.com/images/discount-leak-detection.webp"]
  },
  alternates: {
    canonical: "https://discountleakdetection.com/locations"
  }
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Font wrapper with optimization settings */}
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
        <LocationsClient />
      </div>
    </>
  );
}