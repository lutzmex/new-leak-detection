// src/app/services/[slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import ServiceTemplate from '../components/ServiceTemplate';
import { getServiceData, getAllServiceSlugs, getServiceCustomSchemas } from '../data';

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

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services (for static generation)
export async function generateStaticParams() {
  const serviceSlugs = getAllServiceSlugs();
  
  return serviceSlugs.map((serviceSlug) => ({
    slug: serviceSlug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // ✅ FIXED - Await params before accessing properties
  const { slug } = await params;
  const serviceData = getServiceData(slug);
  
  if (!serviceData) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.',
    };
  }

  const { seo } = serviceData;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords.join(', '),
    robots: seo.robots || 'index, follow',
    
    // Open Graph tags
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: [
        {
          url: seo.openGraph.image,
          width: 1200,
          height: 630,
          alt: seo.openGraph.imageAlt,
        },
      ],
      type: 'website',
      locale: 'en_US',
      siteName: seo.openGraph.siteName,
      url: seo.openGraph.url,
    },
    
    // Twitter Card tags
    twitter: {
      card: 'summary_large_image',
      title: seo.twitter.title,
      description: seo.twitter.description,
      images: [
        {
          url: seo.twitter.image,
          alt: seo.twitter.imageAlt,
        }
      ],
    },
    
    // Canonical URL
    alternates: {
      canonical: seo.canonicalUrl || `/services/${slug}`,
    },
    
    // Additional meta tags
    other: {
      'service.category': serviceData.category,
      'service.name': serviceData.name,
      'author': 'Professional Leak Detection Services',
      'coverage': 'Nationwide',
      'distribution': 'Global',
      'rating': 'General',
      'revisit-after': '7 days',
      'language': 'EN',
      'expires': 'never',
      'cache-control': 'public, max-age=3600',
      'service:type': serviceData.category,
      'service:availability': '24/7',
      'service:price_range': serviceData.pricing.priceRange,
      'business:contact_data:phone_number': serviceData.contact.phoneDisplay,
      'business:contact_data:website': seo.openGraph.url,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  // ✅ FIXED - Await params before accessing properties
  const { slug } = await params;
  const serviceData = getServiceData(slug);
  
  if (!serviceData) {
    notFound();
  }

  // Get custom schemas for the service
  const customSchemas = getServiceCustomSchemas(slug);
  
  // Sort schemas by priority (lower number = higher priority)
  const sortedSchemas = customSchemas.sort((a, b) => {
    const priorityA = a.priority || 999;
    const priorityB = b.priority || 999;
    return priorityA - priorityB;
  });

  return (
    <>
      {/* Custom Schema Scripts - Render all custom schemas */}
      {sortedSchemas.length > 0 && (
        <>
          {sortedSchemas.map((customSchema) => (
            <Script
              key={customSchema.id}
              id={`custom-schema-${customSchema.id}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ 
                __html: JSON.stringify(customSchema.schema, null, 0) 
              }}
              strategy="beforeInteractive"
            />
          ))}
        </>
      )}
      
      {/* Additional SEO Tags via Script for custom meta */}
      <Script
        id="additional-seo-tags"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Add custom tracking or SEO initialization here if needed
            if (typeof window !== 'undefined') {
              // Initialize any SEO-related tracking
              window.seoData = ${JSON.stringify({
                service: serviceData.name,
                category: serviceData.category,
                pricing: serviceData.pricing.startingPrice,
                responseTime: '< 90 minutes',
                experience: '25+ years',
                coverage: serviceData.coverage.propertyTypes.length + ' property types',
                customSchemasCount: customSchemas.length
              })};
            }
          `
        }}
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
        {/* Main Component */}
        <ServiceTemplate serviceData={serviceData} />
      </div>
    </>
  );
}