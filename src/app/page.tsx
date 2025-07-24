import { Metadata } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import { Hero } from "@/components/home/Hero";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { TopServiceStates } from "@/components/home/TopServiceStates";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HomeFaqs } from "@/components/home/HomeFaqs";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeBlogSection } from "@/components/home/HomeBlogSection";
import ContentSection from "@/components/home/ContentSection";

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

// Local Factors Data
const localFactors = {
  commonIssues: [
    "Slab foundation leaks due to soil movement",
    "Underground irrigation line breaches",
    "Swimming pool plumbing cracks",
    "Gas line corrosion in older neighborhoods",
    "Water main breaks on aging pipes",
    "Sprinkler system failures",
    "Water heater and boiler seepage",
    "Sewer line obstructions and leaks",
    "Backflow preventer malfunctions",
    "Roof gutter and downspout leaks"
  ],
  soilType: "Varied soil compositions across United States with expansive clay soils in many regions",
  climateFactors: [
    "Seasonal temperature fluctuations causing pipe stress",
    "Freeze-thaw cycles in northern climates",
    "Drought conditions leading to soil movement",
    "Heavy rainfall and flooding events",
    "High humidity causing corrosion acceleration"
  ],
  buildingTypes: [
    "Slab-on-grade single-family homes",
    "Traditional basement foundation houses",
    "Modern condominium and apartment complexes",
    "Commercial and industrial buildings",
    "Historic structures requiring specialized care"
  ]
};

// SEO Keywords
const keywords = [
  "leak detection services",
  "water leak detection",
  "gas leak detection",
  "pool leak detection",
  "slab leak detection",
  "emergency leak detection",
  "infrared leak detection",
  "acoustic leak detection",
  "underground leak detection",
  "residential leak detection",
  "commercial leak detection",
  "24/7 leak detection",
  "non-invasive leak detection",
  "thermal imaging leak detection",
  "Discount Leak Detection",
  "leak detection company",
  "pipe leak detection",
  "professional leak detection",
  "licensed leak detection",
  "nationwide leak detection"
];

// Structured Data Schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://discountleakdetection.com/#organization",
  "name": "Discount Leak Detection",
  "description": "America's trusted leak detection company serving homeowners and businesses coast to coast with advanced non-invasive leak detection technology.",
  "url": "https://discountleakdetection.com/",
  "logo": "https://discountleakdetection.com/logo/logo.webp",
  "image": "https://discountleakdetection.com/images/discount-leak-detection.webp",
  "telephone": "+18888759844",
  "email": "info@discountleakdetection.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 39.8283,
      "longitude": -98.5795
    },
    "geoRadius": "2500000"
  },
  "foundingDate": "2010",
  "numberOfEmployees": "850+",
  "slogan": "America's Most Trusted Leak Detection Company",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "15000",
    "bestRating": "5",
    "worstRating": "1"
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://discountleakdetection.com/#website",
  "name": "Discount Leak Detection",
  "description": "Professional leak detection services nationwide with 24/7 emergency response and advanced non-invasive technology.",
  "url": "https://discountleakdetection.com/",
  "publisher": {
    "@id": "https://discountleakdetection.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://discountleakdetection.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://discountleakdetection.com/#localbusiness",
  "name": "Discount Leak Detection - Nationwide Service",
  "description": "Licensed leak detection specialists serving all 50 states with advanced technology and 24/7 emergency response.",
  "image": "https://discountleakdetection.com/images/discount-leak-detection.webp",
  "logo": "https://discountleakdetection.com/logo/logo.webp",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Visa, MC, PayPal, Amex, Discover, Cash, Check",
  "url": "https://discountleakdetection.com/",
  "telephone": "+18888759844",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    }
  ],
   "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Comprehensive Leak Detection Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Water Leak Detection in California",
              "description": "Comprehensive detection and repair of residential water leaks across California with minimal disruption."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Water Leak Detection in California",
              "description": "Expert detection and repair of commercial water leaks across California for businesses of all sizes."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Underground Leak Detection in California",
              "description": "Specialized detection of underground leaks using advanced equipment across California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Main Leak Detection in California",
              "description": "Precise detection and repair of municipal water main leaks throughout California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Line Leak Detection in California",
              "description": "Accurate detection of water line leaks in residential and commercial properties statewide."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Slab Leak Detection in California",
              "description": "Non-invasive detection and prompt repair of slab leaks across California homes and businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Foundation Leak Detection in California",
              "description": "Advanced techniques to locate and fix foundation leaks throughout California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Supply Line Leak Detection in California",
              "description": "Quick identification and repair of supply line leaks in California properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drain Line Leak Detection in California",
              "description": "Thorough detection and clearing of drain line leaks across California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sewer Line Leak Detection in California",
              "description": "Expert sewer line leak detection and repair services statewide in California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Heater Leak Detection in California",
              "description": "Fast detection and repair of water heater leaks throughout California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Boiler Leak Detection in California",
              "description": "Professional boiler leak detection and maintenance service across California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Toilet Leak Detection in California",
              "description": "Efficient toilet leak detection and repair services in California homes and businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shower Leak Detection in California",
              "description": "Specialized detection and repair of shower leaks in California properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bathtub Leak Detection in California",
              "description": "Comprehensive bathtub leak detection services across California residences."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sink Leak Detection in California",
              "description": "Accurate detection and repair of sink leaks throughout California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Faucet Leak Detection in California",
              "description": "Quick identification and repair of faucet leaks in California homes and businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garbage Disposal Leak Detection in California",
              "description": "Expert detection and repair of garbage disposal leaks across California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Softener Leak Detection in California",
              "description": "Professional identification and repair of water softener leaks statewide."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sump Pump Leak Detection in California",
              "description": "Reliable sump pump leak detection and repair services in California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hose Bib Leak Detection in California",
              "description": "Efficient hose bib leak detection across California residential and commercial properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sprinkler System Leak Detection in California",
              "description": "Comprehensive sprinkler system leak detection for California landscapes."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drip Irrigation Leak Detection in California",
              "description": "Precise drip irrigation leak detection services across California farms and gardens."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Backflow Preventer Leak Detection in California",
              "description": "Specialized backflow preventer leak detection and service throughout California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Septic System Leak Detection in California",
              "description": "Thorough septic system leak detection for rural and suburban California properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ejector Pump Leak Detection in California",
              "description": "Expert ejector pump leak detection and repair services across California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gas Line Leak Detection in California",
              "description": "Professional gas line leak detection and emergency response statewide in California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sewer Gas Leak Detection in California",
              "description": "Specialized detection of hazardous sewer gas leaks throughout California properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Carbon Monoxide Leak Detection in California",
              "description": "Reliable carbon monoxide leak detection services across California homes and businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roof Leak Detection in California",
              "description": "Advanced roof leak detection and repair services statewide in California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Swimming Pool Leak Detection in California",
              "description": "Precise swimming pool leak detection for California pools using non-invasive methods."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Spa and Hot Tub Leak Detection in California",
              "description": "Expert detection and repair of spa and hot tub leaks across California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wall and Ceiling Leak Detection in California",
              "description": "Comprehensive wall and ceiling leak detection services throughout California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Subsurface Leak Detection in California",
              "description": "Specialized subsurface leak detection using modern technology across California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pressure Testing in California",
              "description": "Accurate pressure testing services for leak identification statewide in California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Acoustic Leak Detection in California",
              "description": "Advanced acoustic leak detection for pinpoint accuracy across California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Camera Inspection Leak Detection in California",
              "description": "Professional camera inspection services to locate hidden leaks in California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Infrared Leak Detection in California",
              "description": "State-of-the-art infrared leak detection services across California properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thermal Imaging Leak Detection in California",
              "description": "Precise thermal imaging leak detection for California residential and commercial sites."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Leak Detection in California",
              "description": "24/7 emergency leak detection services throughout California."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Burst Pipe Detection in California",
              "description": "Fast burst pipe detection and repair services across California properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smart Leak Sensor Installation in California",
              "description": "Expert installation of smart leak sensors for real-time monitoring in California."
            }
          }
        ]
      },
      
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "15000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHours": "Mo-Su 00:00-23:59"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does leak detection cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most leak detection jobs cost between $150 and $400. The final price depends on your home's size and the type of leak. We give you the exact price before we start, with no hidden fees. Many customers find our service pays for itself by preventing costly water damage and high bills."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured to work in my state?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are fully licensed and insured in all 50 states. Our technicians are trained professionals who follow all local and state safety rules. We carry $2 million in coverage for your peace of mind. You can see our license numbers on our trucks and paperwork."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can you help me with an emergency leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We answer emergency calls 24/7 and usually arrive within one to two hours. For urgent situations like gas leaks or major water damage, we arrive even faster. Most non-emergency leaks get same-day service. We have teams ready across the country to help you quickly."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you cover in America?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve customers in all 50 states, from big cities to small towns. We have over 500 trained professionals nationwide, so someone is always close by to help with leaks. Visit our website to find the team closest to you."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with my home insurance company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we work with all major insurance companies and help you with the claim paperwork. We provide detailed reports with photos and measurements that insurers need. Our documentation is accepted by 95 percent of insurers. We can often bill your insurance company directly."
      }
    },
    {
      "@type": "Question",
      "name": "What tools do you use to find leaks without damaging my home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use modern equipment such as listening devices, thermal cameras, moisture meters, and ground radar. These tools find leaks behind walls, under floors, or underground without causing damage. We can pinpoint leaks with 99 percent accuracy."
      }
    },
    {
      "@type": "Question",
      "name": "What kinds of leaks can you find and fix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We find all types of leaks, including water pipes, gas lines, sewer lines, pool plumbing, sprinkler systems, and heating systems. We work in homes, apartments, offices, and commercial buildings. No leak is too big or too small for our experienced team."
      }
    },
    {
      "@type": "Question",
      "name": "Do you fix the leak after you find it, or just locate it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We both locate and fix leaks. After we pinpoint the leak, our licensed plumbers can repair it the same day in most cases. We carry common parts and tools on our trucks. For larger jobs, we provide a clear estimate and schedule the repair quickly."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://discountleakdetection.com/"
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Leak Detection Services",
  "description": "Comprehensive leak detection services for water, gas, pool, and underground leaks using advanced non-invasive technology.",
  "provider": {
    "@id": "https://discountleakdetection.com/#organization"
  },
  "serviceType": "Leak Detection Services",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Leak Detection Service Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Leak Detection",
          "description": "24/7 emergency leak detection with rapid response teams"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Leak Detection",
          "description": "Home leak detection using non-invasive methods"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Leak Detection",
          "description": "Business and commercial property leak detection"
        }
      }
    ]
  },
  "category": "Plumbing Services",
  "audience": {
    "@type": "Audience",
    "audienceType": "Homeowners, Property Managers, Business Owners"
  }
};

// Metadata for the home page
export const metadata: Metadata = {
  title: "Expert Leak Detection Services USA | Discount Leak Detection",
  description: "Professional leak detection services nationwide. Find water, gas, pool & slab leaks fast with our licensed experts. 24/7 emergency response. Call (888) 875-9844.",
  keywords: keywords,
  authors: [{ name: "Discount Leak Detection" }],
  creator: "Discount Leak Detection",
  publisher: "Discount Leak Detection",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://discountleakdetection.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Expert Leak Detection Services USA | Discount Leak Detection",
    description: "Professional leak detection services nationwide. Find water, gas, pool & slab leaks fast with our licensed experts. 24/7 emergency response. Call (888) 875-9844.",
    url: 'https://discountleakdetection.com/',
    siteName: 'Discount Leak Detection',
    images: [
      {
        url: 'https://discountleakdetection.com/images/discount-leak-detection.webp',
        width: 1200,
        height: 630,
        alt: 'Professional leak detection technician using advanced equipment to find hidden leaks',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Expert Leak Detection Services USA | Discount Leak Detection",
    description: "Professional leak detection services nationwide. Find water, gas, pool & slab leaks fast with our licensed experts. 24/7 emergency response. Call (888) 875-9844.",
    images: ['https://discountleakdetection.com/images/discount-leak-detection.webp'],
  },
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    other: {
      'msvalidate.01': 'bing-verification-code',
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Font wrapper with clean typography */}
      <div 
        className={`${poppins.variable} ${ibmPlexMono.variable} font-poppins`}
        style={{
          fontFamily: poppins.style.fontFamily,
          fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <Hero />
        <ContentSection />
        <ServiceHighlights />
        <TopServiceStates />
        <WhyChooseUs />
        <Testimonials />
        <HomeFaqs />
        <HomeBlogSection />
      </div>
    </>
  );
}