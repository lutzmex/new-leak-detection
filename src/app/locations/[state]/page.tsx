// src/app/locations/[state]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import StateTemplate from '../components/StateTemplate';
import { getStateData, getAllStateSlugs } from '../data';

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
  }>;
}

// Generate static params for all states (for static generation)
export async function generateStaticParams() {
  const stateSlugs = getAllStateSlugs();
  
  return stateSlugs.map((stateSlug) => ({
    state: stateSlug,
  }));
}

// Generate metadata for each state page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const stateData = getStateData(resolvedParams.state);
  
  if (!stateData) {
    return {
      title: 'State Not Found',
      description: 'The requested state page could not be found.',
    };
  }

  const { seo } = stateData;
  
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
      canonical: seo.canonicalUrl || `/locations/${resolvedParams.state}`,
    },
    
    // Additional meta tags
    other: {
      'geo.region': stateData.abbreviation,
      'geo.placename': stateData.name,
      'geo.position': `${stateData.coordinates.lat};${stateData.coordinates.lng}`,
      'ICBM': `${stateData.coordinates.lat}, ${stateData.coordinates.lng}`,
      'author': 'Leak Detection Experts',
      'coverage': 'Statewide',
      'distribution': 'Regional',
      'rating': 'General',
      'revisit-after': '7 days',
      'language': 'EN',
      'expires': 'never',
      'cache-control': 'public, max-age=3600',
      'og:region': stateData.abbreviation,
      'og:country-name': 'United States',
      'og:postal-code': '',
      'og:locality': stateData.name,
      'business:contact_data:street_address': '',
      'business:contact_data:locality': stateData.name,
      'business:contact_data:region': stateData.abbreviation,
      'business:contact_data:postal_code': '',
      'business:contact_data:country_name': 'United States',
      'business:contact_data:phone_number': stateData.contact.phoneDisplay,
      'business:contact_data:website': seo.openGraph.url,
    },
  };
}

export default async function StatePage({ params }: PageProps) {
  const resolvedParams = await params;
  const stateData = getStateData(resolvedParams.state);
  
  if (!stateData) {
    notFound();
  }

  return (
    <>
      {/* Custom Schemas Scripts - Dynamic from state data */}
      {stateData.customSchemas.map((schema) => (
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
                state: stateData.name,
                services: stateData.services.list.length,
                cities: stateData.cities.length,
                rating: stateData.trustIndicators.find(t => t.label === 'Avg Rating')?.value || '4.9/5',
                experience: stateData.stats.find(s => s.label.includes('Experience'))?.number || '25+ Years',
                coverage: 'statewide',
                customSchemas: stateData.customSchemas.length,
                contentSections: stateData.content.sections?.length || 0,
                totalFaqs: stateData.faqs.length,
                totalTestimonials: stateData.testimonials.length,
                totalCities: stateData.cities.length
              })};
              
              // Log available custom schemas for debugging
              console.log('Available Custom Schemas:', ${JSON.stringify(
                stateData.customSchemas.map(schema => ({
                  id: schema.id,
                  name: schema.name,
                  description: schema.description
                }))
              )});

              // Log state structure for debugging
              console.log('State Structure:', {
                stateName: '${stateData.name}',
                stateSlug: '${stateData.slug}',
                abbreviation: '${stateData.abbreviation}',
                region: '${stateData.region}',
                population: '${stateData.population}',
                sectionsCount: ${stateData.content.sections?.length || 0},
                citiesCount: ${stateData.cities.length},
                servicesCount: ${stateData.services.list.length},
                faqsCount: ${stateData.faqs.length},
                testimonialsCount: ${stateData.testimonials.length},
                whyChooseUsReasons: ${stateData.whyChooseUs.reasons.length},
                processSteps: ${stateData.process.steps.length}
              });

              // Analytics and tracking initialization
              if (window.gtag) {
                window.gtag('config', 'GA_MEASUREMENT_ID', {
                  page_title: '${stateData.seo.metaTitle}',
                  page_location: window.location.href,
                  custom_map: {
                    'custom_parameter_1': 'state_name',
                    'custom_parameter_2': 'service_type',
                    'custom_parameter_3': 'coverage_type'
                  },
                  state_name: '${stateData.name}',
                  service_type: 'leak_detection',
                  coverage_type: 'statewide'
                });
              }

              // Schema validation (in development)
              if (process.env.NODE_ENV === 'development') {
                console.log('SEO Validation:', {
                  hasMetaTitle: '${!!stateData.seo.metaTitle}',
                  hasMetaDescription: '${!!stateData.seo.metaDescription}',
                  hasOpenGraph: '${!!stateData.seo.openGraph}',
                  hasTwitterCard: '${!!stateData.seo.twitter}',
                  hasCanonicalUrl: '${!!stateData.seo.canonicalUrl}',
                  keywordsCount: ${stateData.seo.keywords.length},
                  customSchemasCount: ${stateData.customSchemas.length},
                  hasNeighboringStates: '${!!(stateData.neighboringStates && stateData.neighboringStates.length > 0)}',
                  neighboringStatesCount: ${stateData.neighboringStates?.length || 0}
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
            // Performance monitoring and UX improvements for state pages
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
                      event_label: '${stateData.name}',
                      value: 1
                    });
                  }
                });
              });

              // Track city navigation clicks
              const cityLinks = document.querySelectorAll('a[href^="/locations/${stateData.slug}/"]');
              cityLinks.forEach(link => {
                link.addEventListener('click', function() {
                  if (window.gtag) {
                    window.gtag('event', 'city_navigation', {
                      event_category: 'navigation',
                      event_label: this.href,
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
                console.error('State Page Error:', e.error);
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

              // State-specific content tracking
              const stateInfo = {
                stateName: '${stateData.name}',
                stateSlug: '${stateData.slug}',
                citiesCount: ${stateData.cities.length},
                sectionsCount: ${stateData.content.sections?.length || 0},
                hasMap: true,
                hasFaqs: ${stateData.faqs.length > 0},
                hasTestimonials: ${stateData.testimonials.length > 0}
              };

              if (window.gtag) {
                window.gtag('event', 'state_content_loaded', {
                  event_category: 'content',
                  state_name: stateInfo.stateName,
                  cities_count: stateInfo.citiesCount,
                  sections_count: stateInfo.sectionsCount,
                  has_map: stateInfo.hasMap,
                  has_faqs: stateInfo.hasFaqs,
                  has_testimonials: stateInfo.hasTestimonials
                });
              }

              // Track scroll depth for state pages
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
        <StateTemplate stateData={stateData} />
      </div>
    </>
  );
}