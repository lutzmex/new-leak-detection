// src/app/locations/[state]/[city]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import CityTemplate from '../../components/CityTemplate';
import { getCityData, getAllStateAndCitySlugs } from '../../data';

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
    state: string;
    city: string;
  }>;
}

// Generate static params for all cities (for static generation)
export async function generateStaticParams() {
  const stateAndCitySlugs = getAllStateAndCitySlugs();
  
  return stateAndCitySlugs.map(({ state, city }) => ({
    state,
    city,
  }));
}

// Generate metadata for each city page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const cityData = getCityData(resolvedParams.state, resolvedParams.city);
  
  if (!cityData) {
    return {
      title: 'City Not Found',
      description: 'The requested city page could not be found.',
    };
  }

  const { seo } = cityData;

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
      canonical: seo.canonicalUrl || `/locations/${resolvedParams.state}/${resolvedParams.city}`,
    },
    
    // Additional meta tags
    other: {
      'geo.region': cityData.stateSlug.toUpperCase(),
      'geo.placename': cityData.name,
      'geo.position': `${cityData.coordinates.lat};${cityData.coordinates.lng}`,
      'ICBM': `${cityData.coordinates.lat}, ${cityData.coordinates.lng}`,
      'author': 'Leak Detection Experts',
      'coverage': 'Worldwide',
      'distribution': 'Global',
      'rating': 'General',
      'revisit-after': '7 days',
      'language': 'EN',
      'expires': 'never',
      'cache-control': 'public, max-age=3600',
      'og:region': cityData.stateSlug.toUpperCase(),
      'og:country-name': 'United States',
      'og:postal-code': '',
      'og:locality': cityData.name,
      'business:contact_data:street_address': '',
      'business:contact_data:locality': cityData.name,
      'business:contact_data:region': cityData.stateSlug.toUpperCase(),
      'business:contact_data:postal_code': '',
      'business:contact_data:country_name': 'United States',
      'business:contact_data:phone_number': cityData.contact.phoneDisplay,
      'business:contact_data:website': seo.openGraph.url,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const cityData = getCityData(resolvedParams.state, resolvedParams.city);
  
  if (!cityData) {
    notFound();
  }

  // Check if we have simplified content structure
  const hasSimplifiedContent = (cityData.content as any).sections && 
    Array.isArray((cityData.content as any).sections) && 
    (cityData.content as any).sections.length > 0 && 
    typeof (cityData.content as any).sections[0].heading2 === 'string';

  return (
    <>
      {/* Custom Schemas Scripts - Dynamic from city data */}
      {cityData.customSchemas.map((schema) => (
        <Script
          key={schema.id}
          id={schema.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.data) }}
          strategy="beforeInteractive"
        />
      ))}
      
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
                city: cityData.name,
                state: cityData.state,
                services: cityData.services.list.length,
                nearbyCities: cityData.nearbyCities.length,
                rating: cityData.trustIndicators.find(t => t.label === 'Avg Rating')?.value || '4.9/5',
                responseTime: cityData.stats.find(s => s.label === 'Avg Response')?.number || '35 Min',
                experience: cityData.stats.find(s => s.label.includes('Experience'))?.number || '25+ Years',
                customSchemas: cityData.customSchemas.length,
                hasSimplifiedContent: hasSimplifiedContent,
                contentSections: hasSimplifiedContent ? 
                  (cityData.content as any).sections.length : 
                  cityData.content.sections?.length || 0,
                hasIntroduction: hasSimplifiedContent ? 
                  !!(cityData.content as any).introduction :
                  !!(cityData.content as any).introduction,
                totalFaqs: cityData.faqs.length,
                totalTestimonials: cityData.testimonials.length
              })};
              
              // Log available custom schemas for debugging
              console.log('Available Custom Schemas:', ${JSON.stringify(
                cityData.customSchemas.map(schema => ({
                  id: schema.id,
                  name: schema.name,
                  description: schema.description
                }))
              )});

              // Log content structure for debugging
              if (${hasSimplifiedContent}) {
                console.log('NEW Simplified Content Structure:', {
                  hasIntroduction: ${!!(cityData.content as any).introduction},
                  sectionsCount: ${(cityData.content as any).sections?.length || 0},
                  contentType: 'simplified',
                  sampleSection: ${JSON.stringify((cityData.content as any).sections?.[0] || {})}
                });
              } else {
                console.log('LEGACY Content Structure:', {
                  mainHeading: '${(cityData.content as any).mainHeading?.text || 'N/A'}',
                  sectionsCount: ${(cityData.content as any).sections?.length || 0},
                  hasIntroduction: ${!!(cityData.content as any).introduction},
                  contentType: 'legacy'
                });
              }

              // Analytics and tracking initialization
              if (window.gtag) {
                window.gtag('config', 'GA_MEASUREMENT_ID', {
                  page_title: '${cityData.seo.metaTitle}',
                  page_location: window.location.href,
                  custom_map: {
                    'custom_parameter_1': 'city_name',
                    'custom_parameter_2': 'service_type',
                    'custom_parameter_3': 'content_type'
                  },
                  city_name: '${cityData.name}',
                  service_type: 'leak_detection',
                  content_type: ${hasSimplifiedContent ? "'simplified'" : "'legacy'"}
                });
              }

              // Schema validation (in development)
              if (process.env.NODE_ENV === 'development') {
                console.log('SEO Validation:', {
                  hasMetaTitle: '${!!cityData.seo.metaTitle}',
                  hasMetaDescription: '${!!cityData.seo.metaDescription}',
                  hasOpenGraph: '${!!cityData.seo.openGraph}',
                  hasTwitterCard: '${!!cityData.seo.twitter}',
                  hasCanonicalUrl: '${!!cityData.seo.canonicalUrl}',
                  keywordsCount: ${cityData.seo.keywords.length},
                  customSchemasCount: ${cityData.customSchemas.length},
                  contentStructure: ${hasSimplifiedContent ? "'simplified'" : "'legacy'"}
                });
              }
            }
          `
        }}
      />

      {/* Performance and UX Enhancements */}
      <Script
        id="performance-enhancements"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring and UX improvements
            if (typeof window !== 'undefined') {
              // Smooth scrolling for anchor links
              document.addEventListener('click', function(e) {
                const target = e.target.closest('a[href^="#"]');
                if (target) {
                  e.preventDefault();
                  const id = target.getAttribute('href').substring(1);
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }
              });

              // Add loading states for better UX
              const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
              phoneLinks.forEach(link => {
                link.addEventListener('click', function() {
                  // Track phone call clicks
                  if (window.gtag) {
                    window.gtag('event', 'phone_call', {
                      event_category: 'engagement',
                      event_label: '${cityData.name}',
                      value: 1
                    });
                  }
                });
              });

              // Lazy load images with intersection observer
              const images = document.querySelectorAll('img[loading="lazy"]');
              const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                      img.src = img.dataset.src;
                      img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                  }
                });
              }, {
                rootMargin: '50px 0px',
                threshold: 0.01
              });
              
              images.forEach(img => imageObserver.observe(img));

              // Add error boundary for better error handling
              window.addEventListener('error', function(e) {
                console.error('Page Error:', e.error);
                // Report to error tracking service if configured
              });

              // Performance metrics
              if ('performance' in window && 'PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                      console.log('FID:', entry.processingStart - entry.startTime);
                    }
                  });
                });
                observer.observe({entryTypes: ['largest-contentful-paint', 'first-input']});
              }

              // Content structure tracking
              const contentInfo = {
                hasSimplifiedContent: ${hasSimplifiedContent},
                sectionsCount: ${hasSimplifiedContent ? (cityData.content as any).sections?.length : cityData.content.sections?.length} || 0,
                mapSectionAdded: true // NEW: Map section is now included
              };

              if (window.gtag) {
                window.gtag('event', 'content_structure_loaded', {
                  event_category: 'content',
                  content_type: contentInfo.hasSimplifiedContent ? 'simplified' : 'legacy',
                  sections_count: contentInfo.sectionsCount,
                  has_map_section: contentInfo.mapSectionAdded
                });
              }

              // Track scroll depth for city pages with throttling
              let maxScroll = 0;
              const throttledScrollHandler = (() => {
                let isThrottled = false;
                return () => {
                  if (isThrottled) return;
                  isThrottled = true;
                  requestAnimationFrame(() => {
                    const scrollPercent = Math.round(
                      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
                    );
                    if (scrollPercent > maxScroll) {
                      maxScroll = scrollPercent;
                      if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                        if (window.gtag) {
                          window.gtag('event', 'scroll_depth', {
                            event_category: 'engagement',
                            event_label: maxScroll + '%',
                            value: maxScroll
                          });
                        }
                      }
                    }
                    isThrottled = false;
                  });
                };
              })();
              
              window.addEventListener('scroll', throttledScrollHandler, { passive: true });
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
        <CityTemplate cityData={cityData} />
      </div>
    </>
  );
}