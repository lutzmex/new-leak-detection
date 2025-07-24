import { StateDynamicData } from '../types';

export const newhampshireDynamicData: StateDynamicData = {
  // Basic Info
  id: "new-hampshire-001",
  name: "New Hampshire",
  slug: "new-hampshire",
  abbreviation: "NH",
  region: "Northeast",
  population: "1380000",
  coordinates: { lat: 43.1939, lng: -71.5724 },

  // Hero Content
  hero: {
    title: "Expert Leak Detection Services in New Hampshire - Professional Water, Gas & Pool Specialists Statewide",
    subtitle: "We serve every town and city in New Hampshire",
    description: "We help you find and fix water, gas, or pool leaks fast anywhere in New Hampshire. Our team uses advanced tools to spot hidden leaks and protect your property across the whole state.",
    badge: "New Hampshire's #1 Leak Detection Company",
    image: "/images/leak-detection-in-new_hampshire.webp",
    imageAlt: "Plumbers doing pool leak detection in a hot tub. They use tools to find water leaks to fix."
  },

  // Main Content Structure
  content: {
    sections: [
      {
        heading2: "Complete Leak Detection Solutions Across New Hampshire",
        content: "Our family team serves every corner of New Hampshire—from Manchester to Littleton. We find water, gas, and pool leaks in homes, businesses, and farms. You get same-day service along the Seacoast and in the Lakes Region. We work through winter cold or summer heat to protect your pipes. Trust our licensed crew across New Hampshire’s cities and rural towns.",
        subsections: [
          {
            heading3: "Water Leak Detection & Repair",
            content: "We find pipe leaks under floors, behind walls, and in crawl spaces. You get a clear report and honest cost before work begins. Our team uses advanced listening gear and wet-spot cameras to avoid heavy digging."
          },
          {
            heading4: "Pool Leak Detection",
            content: "We locate leaks in inground pools, outdoor spas, and water features across the Seacoast and the Lakes Region. Our crew seals cracks and repairs fittings quickly so you can dive in again by sunset."
          },
          {
            heading5: "Slab Leak Detection & Foundation Repair",
            content: "We detect slab leaks under concrete throughout New Hampshire. Our narrow-beam acoustic tools pinpoint leaks without major concrete work. You save time and avoid foundation damage."
          }
        ]
      }
    ]
  },

  // Testimonials
  testimonials: [
    {
      name: "Emily R.",
      location: "Manchester",
      text: "I panicked when my kitchen pipe burst, but they arrived in just two hours. They found the leak under the tile floor and fixed it that day. I was so relieved!",
      rating: 5,
      verified: true,
      date: "2025-04-12"
    },
    {
      name: "Michael S.",
      location: "Nashua",
      text: "Our pool was losing water fast in the summer heat. They came on a weekend and found a crack in the liner. Now our pool is full, and we saved hundreds on our water bills.",
      rating: 5,
      verified: true,
      date: "2025-03-22"
    },
    {
      name: "Laura M.",
      location: "Concord",
      text: "I heard dripping under my slab foundation. Their team used smart sensors and found the leak in minutes. The repair was fast, and my basement stays dry.",
      rating: 5,
      verified: true,
      date: "2025-05-17"
    },
    {
      name: "James P.",
      location: "Portsmouth",
      text: "I called this family-owned business at 2 AM when I smelled gas. They kept us safe, found a loose joint, and fixed it right away. It felt like our neighbors were watching out for us.",
      rating: 5,
      verified: true,
      date: "2025-02-25"
    },
    {
      name: "Sarah K.",
      location: "Laconia",
      text: "Our barn water lines froze and cracked. They arrived just after sunrise, repaired the pipes, and insulated them. We saved on hay costs and kept our animals safe in the cold.",
      rating: 5,
      verified: true,
      date: "2025-01-30"
    },
    {
      name: "Robert L.",
      location: "Dover",
      text: "Our restaurant's sewer line had a slow leak. They used a remote camera to pinpoint it under the concrete. They fixed it at night to avoid business downtime.",
      rating: 5,
      verified: true,
      date: "2025-06-05"
    }
  ],

  // FAQs
  faqs: [
    {
      question: "Do you serve every town in New Hampshire?",
      answer: "Yes! We cover every region, from the Seacoast towns to the White Mountains. No matter your zip code, we reach you quickly for leak help."
    },
    {
      question: "How quickly can you respond in an emergency?",
      answer: "We answer calls 24/7 and aim to arrive within two hours in major metro areas. Rural calls may take a bit longer, but we still come that same day."
    },
    {
      question: "Are your technicians licensed in NH?",
      answer: "All our technicians hold valid New Hampshire plumbing and gas fitter licenses. We follow state codes and carry full insurance on every job."
    },
    {
      question: "What tools do you use to find hidden leaks?",
      answer: "We use acoustic listening gear, infrared sensors, and camera-fed cables. This helps us find leaks without digging large holes or causing damage."
    },
    {
      question: "Can you fix slab leaks without breaking concrete?",
      answer: "Yes. Our trenchless detection and repair keep concrete intact in most cases. We drill small access points, then seal or reroute the pipe."
    },
    {
      question: "Do you offer a cost estimate before work?",
      answer: "Yes. We inspect first and give you a clear, written price. No hidden fees or surprise charges when we start repairs."
    },
    {
      question: "Is there a warranty on your leak repairs?",
      answer: "Yes. We back all repairs with a one-year warranty on parts and labor. You get peace of mind for every service in New Hampshire."
    },
    {
      question: "How do I book same-day service?",
      answer: "Call our toll-free number or book online before noon. We fit you into our schedule and dispatch the nearest unit to your area."
    }
  ],

  // Major Cities List
  cities: [
    { name: "Berlin", slug: "berlin" },
    { name: "Claremont", slug: "claremont" },
    { name: "Concord", slug: "concord" },
    { name: "Derry", slug: "derry" },
    { name: "Dover", slug: "dover" },
    { name: "Durham", slug: "durham" },
    { name: "Exeter", slug: "exeter" },
    { name: "Franklin", slug: "franklin" },
    { name: "Hanover NH", slug: "hanover" },
    { name: "Hillsborough", slug: "hillsborough" },
    { name: "Keene", slug: "keene" },
    { name: "Laconia", slug: "laconia" },
    { name: "Lebanon", slug: "lebanon" },
    { name: "Manchester", slug: "manchester" },
    { name: "Nashua", slug: "nashua" },
    { name: "Peterborough", slug: "peterborough" },
    { name: "Plymouth", slug: "plymouth" },
    { name: "Portsmouth", slug: "portsmouth" },
    { name: "Rochester", slug: "rochester" },
    { name: "Salem", slug: "salem" },
    { name: "Somersworth", slug: "somersworth" },
  ],
  // Map Embed URL
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1717135.7747838826!2d-71.5724!3d43.1939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sChIJoY6yqD7BtlkRS3nRnmaQ4Rs!2sNew%20Hampshire%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
,

  // State-specific Local Factors and SEO Data
  localFactors: {
  commonIssues: [
    "Frozen or burst pipes due to harsh winter freezing",
    "Slab leaks from freeze-thaw ground shifts",
    "Corrosion in aging cast-iron underground pipes",
    "Leaking septic and well systems in rural areas",
    "Freeze damage to outdoor faucets and hose bibs",
    "Pool and spa leaks from shifting soils",
    "Roof and gutter leaks from heavy snowfall and ice dams",
    "Foundation leaks from rain-saturated soils",
    "Gas line cracks from soil settlement",
    "Hidden pipe leaks in historic homes"
  ],
  geography: "From the Atlantic Seacoast and tidal marshes to the White Mountains and dense forests, New Hampshire features rocky soils, rolling hills, lakes, and river valleys.",
  climateFactors: [
    "Severe winter freeze-thaw cycles",
    "Heavy snowfall and ice dam formation",
    "Spring thaw and runoff saturation",
    "Summer thunderstorms and heavy rains",
    "Seasonal temperature extremes"
  ],
  buildingTypes: [
    "Historic colonial and Victorian homes",
    "Cape Cod and ranch-style houses",
    "Lakefront cottages and cabins",
    "Multi-family apartments in urban areas",
    "Commercial buildings in Manchester and Nashua",
    "Agricultural barns and farmhouses",
    "Septic-dependent rural properties",
    "High-rise condos along the Seacoast"
  ]
  },
  seo: {
  metaTitle: "Leak Detection in New Hampshire | Discount Leak Detection",
  metaDescription: "Fast, professional leak detection services across New Hampshire. Certified technicians quickly locate water, gas & pool leaks statewide. Call +1 (888) 875-9844 24/7.",
  keywords: [
    "Leak Detection Services in New Hampshire",
    "New Hampshire water leak detection",
    "Gas leak detection NH",
    "Pool leak detection New Hampshire",
    "Emergency leak detection NH",
    "Residential leak detection New Hampshire",
    "Commercial leak detection NH",
    "Underground leak detection New Hampshire",
    "Slab leak detection NH",
    "Septic leak detection New Hampshire",
    "Pipe leak repair NH",
    "Roof leak detection New Hampshire",
    "Foundation leak detection NH",
    "24/7 leak detection New Hampshire",
    "Infrared leak detection NH",
    "Thermal imaging leak detection New Hampshire",
    "Smart leak sensor installation NH",
    "Acoustic leak detection New Hampshire",
    "Drain line leak detection NH"
  ],
  canonicalUrl: "https://discountleakdetection.com/locations/new-hampshire",
  robots: "index, follow",
  openGraph: {
    title: "Leak Detection in New Hampshire | Discount Leak Detection",
    description: "Fast, professional leak detection services across New Hampshire. Certified technicians quickly locate water, gas & pool leaks statewide. Call +1 (888) 875-9844 24/7.",
    image: "https://discountleakdetection.com/images/leak-detection-in-new_hampshire.webp",
    imageAlt: "Plumbers doing pool leak detection in a hot tub. They use tools to find water leaks to fix.",
    url: "https://discountleakdetection.com/locations/new-hampshire",
    type: "website",
    siteName: "Discount Leak Detection"
  },
  twitter: {
    card: "summary_large_image",
    title: "Leak Detection in New Hampshire | Discount Leak Detection",
    description: "Fast, professional leak detection services across New Hampshire. Certified technicians quickly locate water, gas & pool leaks statewide. Call +1 (888) 875-9844 24/7.",
    image: "https://discountleakdetection.com/images/leak-detection-in-new_hampshire.webp",
    imageAlt: "Plumbers doing pool leak detection in a hot tub. They use tools to find water leaks to fix."
  }
  },
  customSchemas: [
  {
    id: "local-business-schema",
    name: "Local Business Schema",
    description: "Main LocalBusiness schema for new hampshire services",
    data: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "New Hampshire Leak Detection Services",
      "description": "Professional leak detection services across New Hampshire",
      "image": "https://discountleakdetection.com/images/leak-detection-services-new-hampshire.webp",
      "logo": "https://discountleakdetection.com/logo/logo.webp",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Visa, MC, PayPal, Amex, Discover, Cash, Check",
      "url": "https://discountleakdetection.com/locations/new-hampshire",
      "telephone": "+1 (888) 875-9844",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "NH",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.4525,
        "longitude": -71.5639
      },
      "areaServed": {
        "@type": "State",
        "name": "New Hampshire"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Comprehensive Leak Detection Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Water Leak Detection in New Hampshire",
              "description": "We use specialized equipment to detect and repair residential water leaks across New Hampshire quickly and effectively."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Water Leak Detection in New Hampshire",
              "description": "We use state-of-the-art acoustic and thermal tools to locate and fix commercial water leaks in New Hampshire with minimal downtime."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Underground Leak Detection in New Hampshire",
              "description": "Our techs employ advanced ground microphones and tracers to pinpoint underground leaks anywhere in New Hampshire accurately."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Main Leak Detection in New Hampshire",
              "description": "We inspect and detect water main breaks in New Hampshire swiftly using pressure testing and acoustic monitoring."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Line Leak Detection in New Hampshire",
              "description": "Using non-invasive methods, we identify leaks in water supply lines across New Hampshire to prevent water loss."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Slab Leak Detection in New Hampshire",
              "description": "Our specialized sensors locate slab leaks beneath concrete floors in New Hampshire homes without extensive demolition."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Foundation Leak Detection in New Hampshire",
              "description": "We detect leaks in foundation walls and footings statewide in New Hampshire to protect structural integrity."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Supply Line Leak Detection in New Hampshire",
              "description": "We trace and repair supply line leaks in New Hampshire residences and businesses using leak correlation technology."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drain Line Leak Detection in New Hampshire",
              "description": "Our team inspects and detects drain line leaks in New Hampshire using CCTV cameras for precise diagnosis."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sewer Line Leak Detection in New Hampshire",
              "description": "We locate and repair sewer line leaks in New Hampshire, preventing contamination and costly damage."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Heater Leak Detection in New Hampshire",
              "description": "We diagnose and repair leaks around water heaters throughout New Hampshire to ensure safe operation."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Boiler Leak Detection in New Hampshire",
              "description": "Our technicians find and fix boiler leaks in New Hampshire commercial and residential systems promptly."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Toilet Leak Detection in New Hampshire",
              "description": "We test and detect hidden toilet leaks in New Hampshire homes to reduce waste and lower bills."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shower Leak Detection in New Hampshire",
              "description": "Using moisture meters and imaging, we locate shower leaks behind tiles in New Hampshire properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bathtub Leak Detection in New Hampshire",
              "description": "We pinpoint bathtub leaks in New Hampshire bathrooms using dye testing and pressure checks."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sink Leak Detection in New Hampshire",
              "description": "Our experts quickly find and repair sink leaks under cabinets in New Hampshire households."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Faucet Leak Detection in New Hampshire",
              "description": "We diagnose and fix faucet leaks in New Hampshire kitchens and baths to prevent water damage."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garbage Disposal Leak Detection in New Hampshire",
              "description": "Our team locates and repairs leaks in garbage disposals in New Hampshire homes efficiently."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Softener Leak Detection in New Hampshire",
              "description": "We inspect and repair water softener leaks across New Hampshire to maintain water quality."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sump Pump Leak Detection in New Hampshire",
              "description": "We test and detect leaks around sump pumps in New Hampshire basements to prevent flooding."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hose Bib Leak Detection in New Hampshire",
              "description": "Our technicians locate frozen or cracked hose bib leaks in New Hampshire exteriors and repair them."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sprinkler System Leak Detection in New Hampshire",
              "description": "We detect leaks in irrigation and sprinkler systems across New Hampshire landscapes accurately."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drip Irrigation Leak Detection in New Hampshire",
              "description": "Our team pinpoints leaks in drip irrigation lines in New Hampshire gardens to conserve water."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Backflow Preventer Leak Detection in New Hampshire",
              "description": "We test and repair backflow preventer leaks statewide in New Hampshire to ensure safe water supply."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Septic System Leak Detection in New Hampshire",
              "description": "We diagnose and repair leaks in septic tanks and fields in rural New Hampshire properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ejector Pump Leak Detection in New Hampshire",
              "description": "Our techs locate leaks in ejector pumps throughout New Hampshire basements for reliable drainage."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gas Line Leak Detection in New Hampshire",
              "description": "We use combustible gas sensors to quickly locate and repair gas line leaks in New Hampshire safely."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sewer Gas Leak Detection in New Hampshire",
              "description": "Our team detects and fixes sewer gas leaks in New Hampshire properties to protect air quality."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Carbon Monoxide Leak Detection in New Hampshire",
              "description": "We offer testing and detection for carbon monoxide leaks in New Hampshire homes for safety."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roof Leak Detection in New Hampshire",
              "description": "Using infrared imaging, we locate roof leaks in New Hampshire properties even under snow cover."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Swimming Pool Leak Detection in New Hampshire",
              "description": "We find leaks in swimming pools across New Hampshire using pressure testing and dye injection."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Spa and Hot Tub Leak Detection in New Hampshire",
              "description": "Our experts detect and repair leaks in spas and hot tubs statewide in New Hampshire."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wall and Ceiling Leak Detection in New Hampshire",
              "description": "We use thermal cameras to locate hidden wall and ceiling leaks throughout New Hampshire homes."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Subsurface Leak Detection in New Hampshire",
              "description": "Our team identifies leaks beneath driveways and patios in New Hampshire using non-invasive methods."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pressure Testing in New Hampshire",
              "description": "We perform pressure tests on plumbing systems statewide in New Hampshire to detect hidden leaks."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Acoustic Leak Detection in New Hampshire",
              "description": "We use acoustic sensors to detect pipe leaks in New Hampshire with high accuracy."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Camera Inspection Leak Detection in New Hampshire",
              "description": "Our CCTV camera inspections locate leaks inside pipes in New Hampshire homes and businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Infrared Leak Detection in New Hampshire",
              "description": "We use infrared thermography to pinpoint water leaks behind walls in New Hampshire properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thermal Imaging Leak Detection in New Hampshire",
              "description": "Our thermal imaging technology finds temperature anomalies indicating leaks across New Hampshire."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Leak Detection in New Hampshire",
              "description": "We provide 24/7 emergency leak detection services statewide in New Hampshire for immediate response."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Burst Pipe Detection in New Hampshire",
              "description": "Our team locates burst pipes quickly in New Hampshire to minimize water damage and downtime."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smart Leak Sensor Installation in New Hampshire",
              "description": "We install smart leak detection sensors in New Hampshire homes for real-time monitoring and alerts."
            }
          }
        ]
      },
      "serviceType": ["Leak Detection", "Water Leak Repair", "Gas Leak Detection", "Emergency Plumbing"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2500"
      },
      "openingHours": "Mo-Su 00:00-23:59"
    }
  },
  {
    id: "breadcrumb-schema",
    name: "Breadcrumb Navigation Schema",
    data: {
      "@context": "https://schema.org",
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
          "name": "Locations",
          "item": "https://discountleakdetection.com/locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "New Hampshire",
          "item": "https://discountleakdetection.com/locations/new-hampshire"
        }
      ]
    }
  },
  {
    id: "faq-schema",
    name: "FAQ Page Schema",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know if I have a hidden water leak in New Hampshire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Signs include unexplained water bills, damp areas, mold, or sounds of running water. Our technicians use advanced tools to find hidden leaks anywhere in New Hampshire."
          }
        },
        {
          "@type": "Question",
          "name": "Can you detect leaks under frozen ground in winter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we use specialized acoustic and thermal equipment that works even in freezing conditions to locate underground leaks in New Hampshire."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to an emergency leak in New Hampshire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 24/7 emergency leak detection statewide in New Hampshire. Our certified team typically responds within hours of your call."
          }
        },
        {
          "@type": "Question",
          "name": "Are your leak detection services non-invasive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we use non-invasive methods like acoustic testing, infrared imaging, and tracer gas to pinpoint leaks without major demolition in New Hampshire."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle both residential and commercial leak detection in New Hampshire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We specialize in residential, commercial, and industrial leak detection across all cities and towns in New Hampshire."
          }
        },
        {
          "@type": "Question",
          "name": "What are the costs for slab leak detection in New Hampshire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs vary based on property size and leak complexity. We provide transparent, upfront quotes for slab leak detection in New Hampshire without hidden fees."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer service in rural areas like the White Mountains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we serve rural regions statewide, including the White Mountains, Lakes Region, Seacoast, and all local towns in New Hampshire."
          }
        }
      ]
    }
  },
  {
    id: "service-schema",
    name: "Service Schema",
    data: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Leak Detection Services in New Hampshire",
      "description": "Professional leak detection services across New Hampshire, including water, gas, and pool leak detection with advanced technology and 24/7 emergency response.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Discount Leak Detection"
      },
      "serviceType": "Leak Detection Services",
      "areaServed": {
        "@type": "State",
        "name": "New Hampshire"
      }
    }
  }
  ],
  neighboringStates: ["maine", "massachusetts", "vermont"]
};