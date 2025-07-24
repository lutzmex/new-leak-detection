// src/app/locations/data/static/state-static-config.ts

export const STATE_STATIC_CONFIG = {
  // UI Configuration - static for all states, uses {stateName} placeholders
  ui: {
    breadcrumb: {
      homeLink: '/',
      homeText: 'Home',
      locationsLink: '/locations',
      locationsText: 'Locations'
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
        title: 'Ready to Fix Your Leak?',
        buttonText: 'Call Us'
      },
      afterServices: {
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
      },
      afterReviews: {
        title: 'Get Help Today',
        buttonText: 'Call Now'
      },
      beforeMap: {
        badge: {
          icon: 'Globe',
          text: 'Ready to Get Started?'
        },
        title: 'Get Expert Help in {stateName}',
        description: 'Our {stateName} leak experts are waiting to help you out.',
        buttonText: 'Call {stateName} Team',
        features: [
          { text: 'Licensed in {stateName}' },
          { text: '25+ Years of Experience' }
        ]
      }
    },
    servicesSection: {
      badge: {
        icon: 'Settings',
        text: '{stateName} Leak Services'
      },
      initialDisplay: 18,
      showMoreButton: {
        text: 'Show More'
      },
      showLessButton: {
        text: 'Show Less'
      }
    },
    whyChooseUsSection: {
      badge: {
        icon: 'Star',
        text: 'Why Pick Us'
      }
    },
    reviewsSection: {
      badge: {
        icon: 'MessageCircle',
        text: '{stateName} Customer Reviews'
      },
      title: {
        part1: 'What',
        part2: 'Customers',
        part3: 'Are Saying'
      },
      description: 'Real reviews from real {stateName} customers who we\'ve helped with their leaks.',
      verifiedBadge: {
        text: 'Verified'
      }
    },
    processSection: {
      badge: {
        icon: 'BarChart',
        text: 'How We Work'
      },
      stepLabel: 'Step'
    },
    faqSection: {
      badge: {
        icon: 'HelpCircle',
        text: '{stateName} FAQ'
      },
      title: {
        suffix: 'Questions',
        highlight: 'Answered'
      },
      description: 'Common questions about finding leaks in {stateName} homes and businesses.'
    },
    citiesSection: {
      badge: {
        icon: 'Globe',
        text: '{stateName} Coverage'
      },
      title: {
        part1: 'Serving',
        part2: 'Cities',
        part3: 'Across'
      },
      description: 'Professional leak detection services throughout {stateName}',
      initialDisplay: 16,
      showAllButton: {
        text: 'Show All Cities'
      },
      showLessButton: {
        text: 'Show Less Cities'
      }
    },
    mapSection: {
      badge: {
        icon: 'MapPin',
        text: 'Service Coverage Map'
      },
      title: 'Statewide Coverage',
      subtitle: 'Map',
      description: 'See where we work throughout all of {stateName}'
    }
  },

  // Typography and styling configuration (matching ServiceTemplate.tsx)
  typography: {
    headings: {
      h1: 'text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight',
      h2: 'text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight',
      h3: 'text-xl font-bold text-slate-800 mb-4',
      h4: 'text-base sm:text-lg font-bold text-slate-800 mb-3',
      h5: 'text-sm sm:text-base font-bold text-slate-800 mb-2',
      h6: 'text-sm font-bold text-slate-800 mb-2'
    },
    paragraphs: {
      intro: 'text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-4', // For introduction paragraphs
      body: 'text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-4',  // For regular body text
      highlight: 'text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed font-medium mb-4' // For highlighted text
    }
  },

  // Static data that doesn't change per state
  staticData: {
    // Default stats values (can be overridden by dynamic data)
    stats: {
      customers: '25,000+',
      experience: '25+ Years',
      accuracy: '99.9%',
      response: '< 90 Min'
    },
    
    // Default trust indicators values
    trustIndicators: {
      rating: '4.9/5',
      jobs: '25,000+',
      recommend: '98%'
    },

    // Stats display template
    statsTemplate: [
      { key: 'customers', labelSuffix: 'Happy Customers', iconName: 'Users', color: 'text-blue-600' },
      { key: 'experience', labelSuffix: 'Years Experience', iconName: 'Award', color: 'text-purple-600' },
      { key: 'accuracy', label: 'Detection Accuracy', iconName: 'Target', color: 'text-green-600' },
      { key: 'response', label: 'Emergency Response', iconName: 'Clock', color: 'text-orange-600' }
    ],

    // Trust indicators display template
    trustIndicatorsTemplate: [
      { key: 'rating', label: 'Average Rating' },
      { key: 'jobs', label: 'Jobs Completed' },
      { key: 'recommend', label: 'Would Recommend' }
    ]
  },

  // Trust Platforms - ✅ UPDATED - Better alt text for accessibility
  trustPlatforms: {
    title: 'Trusted on these platforms',
    platforms: [
      { src: '/icon/google.svg', alt: 'Google review platform logo' },
      { src: '/icon/yelp.svg', alt: 'Yelp review platform logo' },
      { src: '/icon/BBB.svg', alt: 'Better Business Bureau accreditation logo' },
      { src: '/icon/Angie.svg', alt: 'Angie\'s List review platform logo' },
      { src: '/icon/homeadvisor.svg', alt: 'HomeAdvisor service provider logo' },
      { src: '/icon/trustpilot.svg', alt: 'Trustpilot review platform logo' },
      { src: '/icon/facebook.svg', alt: 'Facebook business page logo' },
      { src: '/icon/Nextdoor.svg', alt: 'Nextdoor neighborhood platform logo' }
    ]
  },

  // Hero static elements - ✅ UPDATED - Better alt text
  heroStatic: {
    badgeIcon: {
      src: '/icon/pipe-leak-detection.svg',
      alt: 'Professional leak detection service certification badge'
    },
    trustIndicators: [
      { iconName: 'Shield', text: 'Licensed & Insured', color: 'text-green-500' },
      { iconName: 'Award', text: '25+ Years Experience', color: 'text-blue-500' },
      { iconName: 'Star', text: '4.9 Star Rating', color: 'text-yellow-500' },
      { iconName: 'Clock', text: '24/7 Emergency Help', color: 'text-orange-500' }
    ]
  },

  // Static contact structure
  contactTemplate: {
    phone: '+1 (888) 875-9844',
    phoneDisplay: '+1 (888) 875-9844'
  },

  // Services list - ✅ UPDATED - Better alt text for service icons
  services: {
    title: 'Complete Leak Solutions',
    subtitle: 'for {stateName} Properties',
    description: 'Whether you own a home or business in {stateName}, we\'ve got the right tools and experience to find any leak.',
    list: [
      { name: 'Home Water Leak Detection', description: 'Complete leak finding for homes including pipes, faucets, and all water systems.', iconName: 'Home', iconPath: '/icon/residential-water-leak-detection.svg', iconAlt: 'Residential water leak detection equipment icon', slug: 'residential-water-leak-detection' },
      { name: 'Business Water Leak Detection', description: 'Professional leak detection for commercial buildings and businesses.', iconName: 'Building', iconPath: '/icon/commercial-water-leak-detection.svg', iconAlt: 'Commercial leak detection equipment icon', slug: 'commercial-water-leak-detection' },
      { name: 'Underground Leak Detection', description: 'Advanced detection for underground water system leaks and pipes.', iconName: 'Mountain', iconPath: '/icon/underground-leak-detection.svg', iconAlt: 'Underground leak detection radar equipment icon', slug: 'underground-leak-detection' },
      { name: 'Water Main Leak Detection', description: 'Specialized detection for water main line failures and leaks.', iconName: 'Layers', iconPath: '/icon/water-main-leak-detection.svg', iconAlt: 'Water main leak detection equipment icon', slug: 'water-main-leak-detection' },
      { name: 'Water Line Leak Detection', description: 'Finding leaks in all types of water lines.', iconName: 'Droplets', iconPath: '/icon/water-line-leak-detection.svg', iconAlt: 'Water line leak detection probe icon', slug: 'water-line-leak-detection' },
      { name: 'Foundation Slab Leak Detection', description: 'Expert detection for foundation slab leaks using the latest technology.', iconName: 'Layers', iconPath: '/icon/slab-leak-detection.svg', iconAlt: 'Foundation slab leak detection tool icon', slug: 'slab-leak-detection' },
      { name: 'Foundation Leak Detection', description: 'Complete foundation leak detection and analysis.', iconName: 'Mountain', iconPath: '/icon/foundation-leak-detection.svg', iconAlt: 'Foundation leak detection scanner icon', slug: 'foundation-leak-detection' },
      { name: 'Supply Line Leak Detection', description: 'Detection services for water supply line leaks and problems.', iconName: 'Settings', iconPath: '/icon/supply-line-leak-detection.svg', iconAlt: 'Supply line leak detection tool icon', slug: 'supply-line-leak-detection' },
      { name: 'Drain Line Leak Detection', description: 'Professional detection for drain line leaks and blockages.', iconName: 'Settings', iconPath: '/icon/drain-line-leak-detection.svg', iconAlt: 'Drain line inspection equipment icon', slug: 'drain-line-leak-detection' },
      { name: 'Sewer Line Leak Detection', description: 'Advanced sewer line leak detection and inspection.', iconName: 'Target', iconPath: '/icon/sewer-line-leak-detection.svg', iconAlt: 'Sewer line inspection camera icon', slug: 'sewer-line-leak-detection' },
      { name: 'Pipe Leak Detection', description: 'Complete pipe leak detection for all pipe materials.', iconName: 'Settings', iconPath: '/icon/pipe-leak-detection.svg', iconAlt: 'Pipe leak detection tool icon', slug: 'pipe-leak-detection' },
      { name: 'Water Heater Leak Detection', description: 'Specialized detection for water heater leaks and problems.', iconName: 'Thermometer', iconPath: '/icon/water-heater-leak-detection.svg', iconAlt: 'Water heater leak detection equipment icon', slug: 'water-heater-leak-detection' },
      { name: 'Boiler Leak Detection', description: 'Professional boiler leak detection and diagnostic services.', iconName: 'Thermometer', iconPath: '/icon/boiler-leak-detection.svg', iconAlt: 'Boiler leak detection diagnostic equipment icon', slug: 'boiler-leak-detection' },
      { name: 'Toilet Leak Detection', description: 'Expert detection for toilet leaks and water waste.', iconName: 'Droplets', iconPath: '/icon/toilet-leak-detection.svg', iconAlt: 'Toilet leak detection tool icon', slug: 'toilet-leak-detection' },
      { name: 'Shower Leak Detection', description: 'Complete shower leak detection and water damage prevention.', iconName: 'Droplets', iconPath: '/icon/shower-leak-detection.svg', iconAlt: 'Shower leak detection equipment icon', slug: 'shower-leak-detection' },
      { name: 'Bathtub Leak Detection', description: 'Professional bathtub leak detection and repair advice.', iconName: 'Droplets', iconPath: '/icon/bathtub-leak-detection.svg', iconAlt: 'Bathtub leak detection probe icon', slug: 'bathtub-leak-detection' },
      { name: 'Sink Leak Detection', description: 'Expert detection for sink leaks and plumbing problems.', iconName: 'Droplets', iconPath: '/icon/sink-leak-detection.svg', iconAlt: 'Sink leak detection equipment icon', slug: 'sink-leak-detection' },
      { name: 'Faucet Leak Detection', description: 'Finding faucet leaks to save water and money.', iconName: 'Droplets', iconPath: '/icon/faucet-leak-detection.svg', iconAlt: 'Faucet leak detection tool icon', slug: 'faucet-leak-detection' },
      { name: 'Garbage Disposal Leak Detection', description: 'Specialized detection for garbage disposal leaks.', iconName: 'Settings', iconPath: '/icon/garbage-disposal-leak-detection.svg', iconAlt: 'Garbage disposal leak detection equipment icon', slug: 'garbage-disposal-leak-detection' },
      { name: 'Water Softener Leak Detection', description: 'Professional water softener leak detection and system check.', iconName: 'Droplets', iconPath: '/icon/water-softener-leak-detection.svg', iconAlt: 'Water softener leak detection tool icon', slug: 'water-softener-leak-detection' },
      { name: 'Sump Pump Leak Detection', description: 'Expert sump pump leak detection and performance check.', iconName: 'Settings', iconPath: '/icon/sump-pump-leak-detection.svg', iconAlt: 'Sump pump leak detection equipment icon', slug: 'sump-pump-leak-detection' },
      { name: 'Outdoor Faucet Leak Detection', description: 'Complete outdoor faucet leak detection and plumbing services.', iconName: 'Droplets', iconPath: '/icon/hose-bib-leak-detection.svg', iconAlt: 'Outdoor faucet leak detection tool icon', slug: 'hose-bib-leak-detection' },
      { name: 'Sprinkler System Leak Detection', description: 'Advanced sprinkler system leak detection and yard irrigation analysis.', iconName: 'Droplets', iconPath: '/icon/sprinkler-system-leak-detection.svg', iconAlt: 'Sprinkler system leak detection equipment icon', slug: 'sprinkler-system-leak-detection' },
      { name: 'Drip Irrigation Leak Detection', description: 'Specialized detection for drip irrigation system leaks.', iconName: 'Droplets', iconPath: '/icon/drip-irrigation-leak-detection.svg', iconAlt: 'Drip irrigation leak detection tool icon', slug: 'drip-irrigation-leak-detection' },
      { name: 'Backflow Preventer Leak Detection', description: 'Professional backflow preventer leak detection and testing.', iconName: 'Shield', iconPath: '/icon/backflow-preventer-leak-detection.svg', iconAlt: 'Backflow preventer testing equipment icon', slug: 'backflow-preventer-leak-detection' },
      { name: 'Septic System Leak Detection', description: 'Expert septic system leak detection and environmental protection.', iconName: 'Settings', iconPath: '/icon/septic-system-leak-detection.svg', iconAlt: 'Septic system leak detection equipment icon', slug: 'septic-system-leak-detection' },
      { name: 'Ejector Pump Leak Detection', description: 'Specialized ejector pump leak detection and system check.', iconName: 'Settings', iconPath: '/icon/ejector-pump-leak-detection.svg', iconAlt: 'Ejector pump leak detection tool icon', slug: 'ejector-pump-leak-detection' },
      { name: 'Gas Line Leak Detection', description: 'Safe gas line leak detection for safety and compliance.', iconName: 'AlertTriangle', iconPath: '/icon/gas-line-leak-detection.svg', iconAlt: 'Gas line leak detection sensor icon', slug: 'gas-line-leak-detection' },
      { name: 'Sewer Gas Leak Detection', description: 'Professional sewer gas leak detection for health and safety.', iconName: 'AlertTriangle', iconPath: '/icon/sewer-gas-leak-detection.svg', iconAlt: 'Sewer gas leak detection sensor icon', slug: 'sewer-gas-leak-detection' },
      { name: 'Carbon Monoxide Leak Detection', description: 'Life-saving carbon monoxide leak detection services.', iconName: 'AlertTriangle', iconPath: '/icon/carbon-monoxide-leak-detection.svg', iconAlt: 'Carbon monoxide detection sensor icon', slug: 'carbon-monoxide-leak-detection' },
      { name: 'Roof Leak Detection', description: 'Complete roof leak detection and water damage prevention.', iconName: 'Home', iconPath: '/icon/roof-leak-detection.svg', iconAlt: 'Roof leak detection equipment icon', slug: 'roof-leak-detection' },
      { name: 'Swimming Pool Leak Detection', description: 'Expert swimming pool leak detection and water conservation.', iconName: 'Waves', iconPath: '/icon/swimming-pool-leak-detection.svg', iconAlt: 'Swimming pool leak detection equipment icon', slug: 'swimming-pool-leak-detection' },
      { name: 'Spa and Hot Tub Leak Detection', description: 'Specialized spa and hot tub leak detection services.', iconName: 'Waves', iconPath: '/icon/spa-and-hot-tub-leak-detection.svg', iconAlt: 'Spa leak detection equipment icon', slug: 'spa-and-hot-tub-leak-detection' },
      { name: 'Wall and Ceiling Leak Detection', description: 'Advanced wall and ceiling leak detection using thermal cameras.', iconName: 'Eye', iconPath: '/icon/wall-and-ceiling-leak-detection.svg', iconAlt: 'Wall leak detection thermal camera icon', slug: 'wall-and-ceiling-leak-detection' },
      { name: 'Underground Leak Detection', description: 'Professional underground leak detection with ground-scanning radar.', iconName: 'Search', iconPath: '/icon/subsurface-leak-detection.svg', iconAlt: 'Ground-penetrating radar equipment icon', slug: 'subsurface-leak-detection' },
      { name: 'Pressure Testing', description: 'Testing your water pressure to find leaks and check system health.', iconName: 'Gauge', iconPath: '/icon/pressure-testing.svg', iconAlt: 'Water pressure testing gauge icon', slug: 'pressure-testing' },
      { name: 'Sound-Based Leak Detection', description: 'Advanced listening equipment to hear where leaks are hiding.', iconName: 'Activity', iconPath: '/icon/acoustic-leak-detection.svg', iconAlt: 'Acoustic leak detection microphone icon', slug: 'acoustic-leak-detection' },
      { name: 'Camera Inspection Leak Detection', description: 'High-definition cameras to see exactly where leaks are.', iconName: 'Camera', iconPath: '/icon/camera-inspection-leak-detection.svg', iconAlt: 'Inspection camera equipment icon', slug: 'camera-inspection-leak-detection' },
      { name: 'Infrared Leak Detection', description: 'High-tech infrared technology to find leaks without digging.', iconName: 'Eye', iconPath: '/icon/infrared-leak-detection.svg', iconAlt: 'Infrared leak detection scanner icon', slug: 'infrared-leak-detection' },
      { name: 'Thermal Imaging Leak Detection', description: 'Advanced thermal cameras for accurate leak detection and analysis.', iconName: 'Thermometer', iconPath: '/icon/thermal-imaging-leak-detection.svg', iconAlt: 'Thermal imaging camera detection icon', slug: 'thermal-imaging-leak-detection' },
      { name: 'Emergency Leak Detection', description: '24/7 emergency leak detection services for urgent situations.', iconName: 'AlertTriangle', iconPath: '/icon/emergency-leak-detection.svg', iconAlt: 'Emergency leak detection response icon', slug: 'emergency-leak-detection' },
      { name: 'Burst Pipe Detection', description: 'Immediate burst pipe detection and emergency response.', iconName: 'AlertTriangle', iconPath: '/icon/burst-pipe-detection.svg', iconAlt: 'Emergency pipe burst detection equipment icon', slug: 'burst-pipe-detection' },
      { name: 'Smart Leak Sensor Installation', description: 'Professional installation of smart leak sensors and monitoring.', iconName: 'Settings', iconPath: '/icon/installation-of-smart-leak-sensors.svg', iconAlt: 'Smart leak sensor installation tool icon', slug: 'installation-of-smart-leak-sensors' },
      { name: 'Leak Detection System Monitoring', description: 'Ongoing monitoring and maintenance for your leak detection systems.', iconName: 'Activity', iconPath: '/icon/monitoring-and-maintenance-of-leak-detection-systems.svg', iconAlt: 'Leak detection monitoring system icon', slug: 'monitoring-and-maintenance-of-leak-detection-systems' }
    ]
  },

  // Complete static why choose us data - ✅ UPDATED - Better alt text for icons
  whyChooseUsStatic: {
    title: '{stateName} Trusts',
    subtitle: 'Our Experience',
    description: 'Over 25 years helping {stateName} residents, the latest technology, and thousands of happy customers make us the go-to leak experts.',
    reasons: [
      {
        title: '{stateName} Local Experts',
        description: 'Our team knows {stateName} inside and out - from the soil conditions to the weather patterns that affect your pipes.',
        iconName: 'Target',
        iconPath: '/icon/residential-water-leak-detection.svg',
        iconAlt: 'Local expertise residential leak detection icon'
      },
      {
        title: 'Latest Technology',
        description: 'We use the newest, non-invasive equipment including thermal cameras and ground-scanning radar to find leaks fast.',
        iconName: 'Brain',
        iconPath: '/icon/thermal-imaging-leak-detection.svg',
        iconAlt: 'Advanced thermal imaging technology icon'
      },
      {
        title: 'Earthquake-Smart Detection',
        description: 'We understand {stateName}\'s earthquake activity and can tell the difference between earthquake damage and normal wear.',
        iconName: 'Activity',
        iconPath: '/icon/acoustic-leak-detection.svg',
        iconAlt: 'Seismic-aware leak detection equipment icon'
      },
      {
        title: 'Save Water & Money',
        description: 'We help {stateName} property owners save on water bills and follow state water conservation rules.',
        iconName: 'Droplets',
        iconPath: '/icon/water-line-leak-detection.svg',
        iconAlt: 'Water conservation leak detection tool icon'
      },
      {
        title: 'We Cover All of {stateName}',
        description: 'From big cities to small towns, we provide the same great service everywhere in {stateName}.',
        iconName: 'Globe',
        iconPath: '/icon/commercial-water-leak-detection.svg',
        iconAlt: 'Statewide coverage service map icon'
      },
      {
        title: '24/7 Emergency Help',
        description: 'Our emergency teams are available around the clock throughout {stateName}.',
        iconName: 'AlertTriangle',
        iconPath: '/icon/emergency-leak-detection.svg',
        iconAlt: '24-hour emergency leak detection service icon'
      }
    ]
  },

  // Complete static process data - ✅ UPDATED - Better alt text for process icons
  processStatic: {
    title: 'Our systematic approach combines high-tech tools',
    subtitle: 'with expert analysis for guaranteed results',
    description: 'Our step-by-step approach gets results fast while taking into account everything that makes {stateName} unique.',
    steps: [
      {
        step: '1',
        title: 'Smart Analysis',
        description: 'AI-powered initial check and complete risk evaluation of your property',
        iconName: 'Phone',
        iconPath: '/icon/smart-analysis.svg',
        iconAlt: 'Step 1 smart property analysis system icon'
      },
      {
        step: '2', 
        title: 'Advanced Detection',
        description: 'Multi-sensor scanning with real-time data processing and thermal imaging',
        iconName: 'Search',
        iconPath: '/icon/advanced-detection.svg',
        iconAlt: 'Step 2 advanced multi-sensor detection equipment icon'
      },
      {
        step: '3',
        title: 'Precision Mapping',
        description: '3D visualization and exact location coordinates with depth measurements',
        iconName: 'Radar',
        iconPath: '/icon/precision-mapping.svg',
        iconAlt: 'Step 3 precision leak mapping technology icon'
      },
      {
        step: '4',
        title: 'Complete Documentation',
        description: 'Detailed reports with repair recommendations and insurance support',
        iconName: 'FileText',
        iconPath: '/icon/complete-documentation.svg',
        iconAlt: 'Step 4 comprehensive leak detection report icon'
      }
    ]
  }
};