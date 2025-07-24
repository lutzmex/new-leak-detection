// src/app/services/data/static/service-static-config.ts

import { ServiceStaticConfig } from '../types';

export const SERVICE_STATIC_CONFIG: ServiceStaticConfig = {
  // UI Configuration for all text and visual elements
  ui: {
    breadcrumb: {
      homeLink: '/',
      homeText: 'Home',
      servicesLink: '/services',
      servicesText: 'Services'
    },
    heroSection: {
      ctaButton: {
        text: 'Call Now'
      },
      availabilityBadge: {
        text: 'Available Right Now'
      }
    },
    ctaSections: {
      afterContent: {
        title: 'Ready to Find Your {serviceName} Leaks?',
        buttonText: 'Call Us'
      },
      afterReviews: {
        title: 'Get Help Today',
        buttonText: 'Call Now'
      },
      beforeRelatedServices: {
        badge: {
          icon: 'Globe',
          text: 'Ready to Get Started?'
        },
        title: 'Expert {serviceName} Help',
        description: 'Our {serviceName} experts are waiting to help you with your property.',
        buttonText: 'Call Service Team',
        features: [
          { text: 'Licensed & Insured' },
          { text: '25+ Years Experience' },
          { text: 'Same-Day Service' }
        ]
      },
      afterRelatedServices: {
        badge: {
          icon: 'Award',
          text: 'We Guarantee Our Work'
        },
        title: 'Need Something Different?',
        description: 'We handle over 44 different types of leaks. Whether it\'s your home, business, or something more complex - we\'ve got you covered with the right tools and know-how.',
        primaryButton: {
          text: 'Call Us'
        },
        secondaryButton: {
          icon: 'Globe',
          text: 'See All Services',
          link: '/services'
        }
      }
    },
    processSection: {
      badge: {
        icon: 'BarChart',
        text: 'How We Work'
      },
      title: {
        part1: 'How We Get',
        part2: 'Great Results'
      },
      subtitle: 'for {serviceName}',
      description: 'Our step-by-step approach makes sure we find your leak accurately every time.',
      stepLabel: 'Step'
    },
    technologySection: {
      badge: {
        icon: 'Zap',
        text: 'Latest Technology'
      },
      title: {
        part1: 'Advanced Detection',
        part2: 'Technology'
      },
      description: 'Our high-tech equipment is specially set up for {serviceName} to find leaks with pinpoint accuracy.'
    },
    reviewsSection: {
      badge: {
        icon: 'MessageCircle',
        text: 'Customer Reviews'
      },
      title: {
        part1: 'What Our',
        part2: 'Customers',
        part3: 'Are Saying'
      },
      description: 'Real reviews from real customers who we\'ve helped with {serviceName}.',
      verifiedBadge: {
        text: 'Verified'
      }
    },
    faqSection: {
      badge: {
        icon: 'HelpCircle',
        text: 'FAQ'
      },
      title: {
        part1: 'Get Your Questions',
        part2: 'Answered Right Now'
      },
      description: 'Everything you need to know about our {serviceName} - how it works, what to expect, and more.'
    },
    relatedServicesSection: {
      badge: {
        icon: 'Globe',
        text: 'Related Services'
      },
      title: {
        part1: 'Other Leak Detection',
        part2: 'Services'
      },
      description: 'Check out our complete range of home and business leak detection solutions.',
      initialDisplay: 12,
      showMoreButton: {
        text: 'Show All Services'
      },
      showLessButton: {
        text: 'Show Less'
      }
    }
  },

  // Trust Platforms Section
  trustPlatforms: {
    title: 'Trusted on these platforms',
    platforms: [
      { src: '/icon/google.svg', alt: 'Google' },
      { src: '/icon/yelp.svg', alt: 'Yelp' },
      { src: '/icon/BBB.svg', alt: 'BBB' },
      { src: '/icon/Angie.svg', alt: 'Angie\'s List' },
      { src: '/icon/homeadvisor.svg', alt: 'HomeAdvisor' },
      { src: '/icon/trustpilot.svg', alt: 'Trustpilot' },
      { src: '/icon/facebook.svg', alt: 'Facebook' },
      { src: '/icon/Nextdoor.svg', alt: 'Nextdoor' }
    ]
  },

  // Static hero elements - ✅ UPDATED - Better alt text for badge icon
  heroStatic: {
    badgeIcon: {
      src: '/icon/{serviceSlug}.svg',
      alt: 'Professional {serviceName} service certification badge'
    },
    trustIndicators: [
      { iconName: 'Shield', text: 'Licensed & Insured', color: 'text-green-500' },
      { iconName: 'Award', text: '25+ Years Experience', color: 'text-blue-500' },
      { iconName: 'Star', text: '4.9 Star Rating', color: 'text-yellow-500' },
      { iconName: 'Clock', text: '24/7 Emergency Help', color: 'text-orange-500' }
    ]
  },

  // Static stats and trust indicators
  staticData: {
    stats: {
      customers: '15,000+',
      success: '99.8%',
      response: '< 90 Min',
      rating: '4.9/5'
    },
    
    trustIndicators: {
      rating: '4.9/5',
      served: '15,000+',
      recommend: '98%'
    },

    statsTemplate: [
      { key: 'customers', label: 'Happy Customers', iconName: 'Users', color: 'text-blue-600' },
      { key: 'success', label: 'Detection Success', iconName: 'Target', color: 'text-green-600' },
      { key: 'response', label: 'Response Time', iconName: 'Clock', color: 'text-orange-600' },
      { key: 'rating', label: 'Customer Rating', iconName: 'Star', color: 'text-yellow-600' }
    ],

    trustIndicatorsTemplate: [
      { key: 'rating', label: 'Average Rating' },
      { key: 'served', label: 'Customers Helped' },
      { key: 'recommend', label: 'Would Recommend' }
    ]
  },

  // Contact template
  contactTemplate: {
    phone: '+1 (888) 875-9844',
    phoneDisplay: '+1 (888) 875-9844'
  },

  // Static process with icons
  processStatic: {
    steps: [
      {
        step: '1',
        iconName: 'Phone',
        iconPath: '/icon/smart-analysis.svg'
      },
      {
        step: '2', 
        iconName: 'Search',
        iconPath: '/icon/advanced-detection.svg'
      },
      {
        step: '3',
        iconName: 'Radar',
        iconPath: '/icon/precision-mapping.svg'
      },
      {
        step: '4',
        iconName: 'FileText',
        iconPath: '/icon/complete-documentation.svg'
      }
    ]
  },

  // Static technology with icons
  technologyStatic: {
    tools: [
      {
        iconName: 'Eye',
        iconPath: '/icon/advanced-detection.svg'
      },
      {
        iconName: 'Activity',
        iconPath: '/icon/precision-leak-mapping.svg'
      },
      {
        iconName: 'Droplets',
        iconPath: '/icon/smart-analysis.svg'
      },
      {
        iconName: 'Camera',
        iconPath: '/icon/advanced-detection-2.svg'
      }
    ]
  },

  // Default related services icon mapping by slug (fallback)
  relatedServicesStatic: {
    defaultIconPath: '/icon/default.svg',
    iconsBySlug: {
      'acoustic-leak-detection': '/icon/acoustic-leak-detection.svg',
      'backflow-preventer-leak-detection': '/icon/backflow-preventer-leak-detection.svg',
      'bathtub-leak-detection': '/icon/bathtub-leak-detection.svg',
      'boiler-leak-detection': '/icon/boiler-leak-detection.svg',
      'burst-pipe-detection': '/icon/burst-pipe-detection.svg',
      'camera-inspection-leak-detection': '/icon/camera-inspection-leak-detection.svg',
      'carbon-monoxide-leak-detection': '/icon/carbon-monoxide-leak-detection.svg',
      'commercial-water-leak-detection': '/icon/commercial-water-leak-detection.svg',
      'drain-line-leak-detection': '/icon/drain-line-leak-detection.svg',
      'drip-irrigation-leak-detection': '/icon/drip-irrigation-leak-detection.svg',
      'ejector-pump-leak-detection': '/icon/ejector-pump-leak-detection.svg',
      'emergency-leak-detection': '/icon/emergency-leak-detection.svg',
      'faucet-leak-detection': '/icon/faucet-leak-detection.svg',
      'foundation-leak-detection': '/icon/foundation-leak-detection.svg',
      'garbage-disposal-leak-detection': '/icon/garbage-disposal-leak-detection.svg',
      'gas-line-leak-detection': '/icon/gas-line-leak-detection.svg',
      'hose-bib-leak-detection': '/icon/hose-bib-leak-detection.svg',
      'infrared-leak-detection': '/icon/infrared-leak-detection.svg',
      'installation-of-smart-leak-sensors': '/icon/installation-of-smart-leak-sensors.svg',
      'monitoring-and-maintenance-of-leak-detection-systems': '/icon/monitoring-and-maintenance-of-leak-detection-systems.svg',
      'pipe-leak-detection': '/icon/pipe-leak-detection.svg',
      'pressure-testing': '/icon/pressure-testing.svg',
      'residential-water-leak-detection': '/icon/residential-water-leak-detection.svg',
      'roof-leak-detection': '/icon/roof-leak-detection.svg',
      'septic-system-leak-detection': '/icon/septic-system-leak-detection.svg',
      'sewer-gas-leak-detection': '/icon/sewer-gas-leak-detection.svg',
      'sewer-line-leak-detection': '/icon/sewer-line-leak-detection.svg',
      'shower-leak-detection': '/icon/shower-leak-detection.svg',
      'sink-leak-detection': '/icon/sink-leak-detection.svg',
      'slab-leak-detection': '/icon/slab-leak-detection.svg',
      'spa-and-hot-tub-leak-detection': '/icon/spa-and-hot-tub-leak-detection.svg',
      'sprinkler-system-leak-detection': '/icon/sprinkler-system-leak-detection.svg',
      'subsurface-leak-detection': '/icon/subsurface-leak-detection.svg',
      'sump-pump-leak-detection': '/icon/sump-pump-leak-detection.svg',
      'supply-line-leak-detection': '/icon/supply-line-leak-detection.svg',
      'swimming-pool-leak-detection': '/icon/swimming-pool-leak-detection.svg',
      'thermal-imaging-leak-detection': '/icon/thermal-imaging-leak-detection.svg',
      'toilet-leak-detection': '/icon/toilet-leak-detection.svg',
      'underground-leak-detection': '/icon/underground-leak-detection.svg',
      'wall-and-ceiling-leak-detection': '/icon/wall-and-ceiling-leak-detection.svg',
      'water-heater-leak-detection': '/icon/water-heater-leak-detection.svg',
      'water-line-leak-detection': '/icon/water-line-leak-detection.svg',
      'water-main-leak-detection': '/icon/water-main-leak-detection.svg',
      'water-softener-leak-detection': '/icon/water-softener-leak-detection.svg'
    }
  }
};