import { StateDynamicData } from '../types';

export const texasDynamicData: StateDynamicData = {
  // Basic Info
  id: "texas-001",
  name: "Texas",
  slug: "texas",
  abbreviation: "TX",
  region: "South",
  population: "29,183,290",
  coordinates: { lat: 31.9686, lng: -99.9018 },

  // Hero Content
  hero: {
    title: "Find Hidden Leaks Fast Across Texas - Expert Leak Detection & Repair Services Statewide",
    subtitle: "Complete coverage in every region from the Panhandle to the Gulf Coast",
    description: "Our team spots hidden water, gas, pool, and slab leaks in homes and businesses across Texas. Call us for same-day service and protect your property with trusted experts.",
    badge: "Top Leak Detection Company in Texas",
    image: "/images/leak-detection-in-texas.webp",
    imageAlt: "Team of leak detection experts using acoustic tools to pinpoint hidden water leaks under a concrete slab."
  },

  // Main Content Structure
  content: {
    sections: [
      {
        heading2: "Detect & Repair Leaks Across Texas",
        content: "Our Leak Detection services in Texas cover every corner of the Lone Star State. From urban apartments in Houston to farmhouses in West Texas, we find and fix water, gas, pool, and slab leaks. Call now for same-day service and protect your property.",
        subsections: [
          {
            heading3: "Water Leak Detection",
            content: "We use moisture meters and acoustic tools to pinpoint hidden water leaks in walls, floors, and underground lines across Texas. Our licensed techs solve leaks fast to avoid damage and high bills."
          },
          {
            heading3: "Gas Leak Location",
            content: "Our crews use gas sniffers and pressure tests to locate leaks in homes and businesses. We serve El Paso, the Piney Woods, and all Texas regions. We meet safety codes and shut off lines fast."
          },
          {
            heading3: "Pool & Slab Leak Services",
            content: "We find pool leaks in clear or cloudy water using pressure testing and dive inspections. We also locate slab leaks under concrete footers without heavy digging. Service areas include Austin, Dallas, and beyond."
          }
        ]
      },
      {
        heading2: "Why Texans Trust Discount Leak Detection",
        content: "When you look for leak detection services in Texas, you’ll find our family-owned business with honest pricing and fast response. We know state permits and local codes. Our work carries a satisfaction guarantee so you feel secure with our team.",
        subsections: [
          {
            heading3: "Local Teams Statewide",
            content: "Our trained teams live in your community. We know north Texas soils, Gulf Coast humidity, and Hill Country rock. That helps us detect leaks faster and repair them right."
          },
          {
            heading3: "24/7 Emergency Response",
            content: "We answer calls day or night across all Texas time zones. Our fast response teams arrive within hours in major cities and remote areas when you need us most."
          },
          {
            heading3: "Transparent Pricing",
            content: "We offer clear, flat rates for each service. No hidden fees for after-hours or travel within the state. You get honest estimates before we start work."
          }
        ]
      },
      {
        heading2: "Emergency Leak Services in Every Region",
        content: "Do not wait if you detect a leak or smell gas. Our state hotline covers Texas wide. Call 24 hours a day for emergency leak detection services in Texas and avoid costly damage.",
        subsections: [
          {
            heading3: "Gas Leak Shutoff & Repair",
            content: "If you smell gas, we act fast. Our state-licensed plumbers shut off gas at the meter, fix the leak, and test pressure again. We follow all Texas utility rules."
          },
          {
            heading3: "Flood & Water Leak Cleanup",
            content: "When water floods your home, we stop the leak and dry the area. We work with your insurance to speed claims and protect against mold in humid Texas weather."
          }
        ]
      }
    ]
  },

  // Testimonials
  testimonials: [
    {
      name: "Lisa M.",
      location: "Houston, TX",
      text: "I called Discount Leak Detection when my meter showed a leak at night. They arrived in three hours and fixed a slab leak under my kitchen floor. I feel safe, and my bill has already dropped.",
      rating: 5,
      verified: true,
      date: "2025-06-10"
    },
    {
      name: "Jose G.",
      location: "Dallas, TX",
      text: "A crack under my pool lights was draining our pool in Garland. The team found it fast and fixed it the same day. Great price and friendly service.",
      rating: 5,
      verified: true,
      date: "2025-05-22"
    },
    {
      name: "Emily R.",
      location: "San Antonio, TX",
      text: "My home had a gas odor, and a technician from Discount Leak Detection arrived quickly. They found a small gas line leak outside and fixed it within hours. I trust them completely.",
      rating: 5,
      verified: true,
      date: "2025-04-15"
    },
    {
      name: "Michael S.",
      location: "Austin, TX",
      text: "Our old farmhouse had hidden water leaks in the foundation. Discount Leak Detection used moisture sensors to find the leaks and fixed them under our porch. The crew was neat and professional.",
      rating: 5,
      verified: true,
      date: "2025-03-23"
    },
    {
      name: "Sarah T.",
      location: "El Paso, TX",
      text: "I had a slab leak under my bathroom, and the floor was warping. They stopped the leak and repaired pipes without breaking much concrete. Fast and fair service.",
      rating: 5,
      verified: true,
      date: "2025-02-10"
    },
    {
      name: "David B.",
      location: "Fort Worth, TX",
      text: "A busted pipe flooded my garage after midnight. The emergency team arrived before sunrise and fixed it. They matched the price they quoted. I felt very relieved.",
      rating: 5,
      verified: true,
      date: "2025-01-28"
    }
  ],

  // FAQs
  faqs: [
    {
      question: "What areas do you cover in Texas?",
      answer: "We cover major cities and rural areas across Texas, from Houston to El Paso and Amarillo. Our local teams serve every county. Call today for same-day leak detection services."
    },
    {
      question: "How fast can you respond to an emergency leak?",
      answer: "We answer 24-hour calls and dispatch nearby teams within two hours in major cities. Rural areas may take longer, but we aim to arrive same day to stop damage."
    },
    {
      question: "Do you offer same day bookings?",
      answer: "Yes, we book most Texas leak detection services same day. Call before 3 PM local time to schedule a visit that day. After-hours service is available for a small fee."
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "All our plumbers are Texas state licensed and fully insured. We follow plumbing codes and safety rules for water and gas lines."
    },
    {
      question: "How do you find hidden leaks?",
      answer: "We use moisture meters, acoustic listening devices, pressure tests, and video cameras. This lets us pinpoint leaks in walls, pools, or under slabs with minimal digging."
    },
    {
      question: "Will you work with my insurance company?",
      answer: "Yes, we document damage and send reports to your insurer. We coordinate claims for water loss or gas leaks to help speed reimbursement."
    },
    {
      question: "What does your warranty cover?",
      answer: "We offer a limited lifetime warranty on leak repairs. If the same leak returns, we fix it at no cost. This guarantee applies to water and pool leak repairs."
    },
    {
      question: "How much does leak detection cost?",
      answer: "Our detection starts at a flat fee that covers the first hour. We provide clear pricing up front and a full report. Repairs cost extra but only after you approve the estimate."
    },
    {
      question: "Can you detect slab foundation leaks?",
      answer: "Yes, we specialize in finding slab leaks under concrete foundations. We use electronic leak detectors and thermal cameras to find leaks with no damage."
    },
    {
      question: "Do you offer gas line detection?",
      answer: "Yes, our certified technicians detect and repair gas leaks in homes and businesses. We meet all Texas utility and safety regulations for natural gas lines."
    }
  ],

  // Major Cities List
  cities: [
    { name: "Abilene", slug: "abilene" },
    { name: "Alpine", slug: "alpine" },
    { name: "Amarillo", slug: "amarillo" },
    { name: "Arlington", slug: "arlington" },
    { name: "Austin", slug: "austin" },
    { name: "Baytown", slug: "baytown" },
    { name: "Beaumont", slug: "beaumont" },
    { name: "Borger", slug: "borger" },
    { name: "Brownsville", slug: "brownsville" },
    { name: "Bryan", slug: "bryan" },
    { name: "Canyon", slug: "canyon" },
    { name: "Cleburne", slug: "cleburne" },
    { name: "College Station", slug: "college-station" },
    { name: "Corpus Christi", slug: "corpus-christi" },
    { name: "Crystal City", slug: "crystal-city" },
    { name: "Dallas", slug: "dallas" },
    { name: "Del Rio", slug: "del-rio" },
    { name: "Denison", slug: "denison" },
    { name: "Denton", slug: "denton" },
    { name: "Eagle Pass", slug: "eagle-pass" },
    { name: "Edinburg", slug: "edinburg" },
    { name: "El Paso", slug: "el-paso" },
    { name: "Fort Worth", slug: "fort-worth" },
    { name: "Freeport", slug: "freeport" },
    { name: "Galveston", slug: "galveston" },
    { name: "Garland", slug: "garland" },
    { name: "Goliad", slug: "goliad" },
    { name: "Greenville", slug: "greenville" },
    { name: "Harlingen", slug: "harlingen" },
    { name: "Houston", slug: "houston" },
    { name: "Huntsville", slug: "huntsville" },
    { name: "Irving", slug: "irving" },
    { name: "Johnson City", slug: "johnson-city" },
    { name: "Kilgore", slug: "kilgore" },
    { name: "Killeen TX", slug: "killeen" },
    { name: "Kingsville", slug: "kingsville" },
    { name: "Laredo", slug: "laredo" },
    { name: "Longview", slug: "longview" },
    { name: "Lubbock", slug: "lubbock" },
    { name: "Lufkin", slug: "lufkin" },
    { name: "Marshall", slug: "marshall" },
    { name: "McAllen", slug: "mcallen" },
    { name: "McKinney", slug: "mckinney" },
    { name: "Mesquite", slug: "mesquite" },
    { name: "Midland", slug: "midland" },
    { name: "Mission", slug: "mission" },
    { name: "Nacogdoches", slug: "nacogdoches" },
    { name: "New Braunfels TX", slug: "new-braunfels" },
    { name: "Odessa", slug: "odessa" },
    { name: "Orange", slug: "orange" },
    { name: "Pampa", slug: "pampa" },
    { name: "Paris", slug: "paris" },
    { name: "Pasadena", slug: "pasadena" },
    { name: "Pecos", slug: "pecos" },
    { name: "Pharr", slug: "pharr" },
    { name: "Plainview", slug: "plainview" },
    { name: "Plano", slug: "plano" },
    { name: "Port Arthur", slug: "port-arthur" },
    { name: "Port Lavaca", slug: "port-lavaca" },
    { name: "Richardson", slug: "richardson" },
    { name: "San Angelo", slug: "san-angelo" },
    { name: "San Antonio", slug: "san-antonio" },
    { name: "San Felipe", slug: "san-felipe" },
    { name: "San Marcos", slug: "san-marcos" },
    { name: "Sherman", slug: "sherman" },
    { name: "Sweetwater", slug: "sweetwater" },
    { name: "Temple", slug: "temple" },
    { name: "Texarkana", slug: "texarkana" },
    { name: "Texas City", slug: "texas-city" },
    { name: "Tyler", slug: "tyler" },
    { name: "Uvalde", slug: "uvalde" },
    { name: "Victoria", slug: "victoria" },
    { name: "Waco", slug: "waco" },
    { name: "Weatherford", slug: "weatherford" },
    { name: "Wichita Falls", slug: "wichita-falls" },
    { name: "Ysleta", slug: "ysleta" },
    { name: "of Big Spring TX", slug: "big-spring" },
  ],
  // Map Embed URL
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396334.667!2d-99.9018!3d31.9686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cdfd2a8987bb:0x8c4572f6a4972cd5!2sTexas%2C%20USA!5e0!3m2!1sen!2sus!4v1719700000000"
,

  // State-specific Local Factors and SEO Data
  localFactors: {
  commonIssues: [
    "Foundation slab leaks due to expansive clay soils",
    "Slab-on-grade pipe leaks in residential homes",
    "Corrosion in aging iron water mains",
    "Tree root intrusions in sewer and drain lines",
    "Sprinkler and irrigation system leaks from high usage",
    "Pool and spa leaks from soil shifting",
    "Gas line leaks in rural properties",
    "Well supply line leaks in remote areas",
    "Burst pipes from occasional freeze events",
    "Hard water corrosion causing fixture leaks"
  ],
  geography: "Texas features coastal plains along the Gulf, piney woods in the east, rolling hill country, arid deserts, and expansive high plains, with major rivers like the Rio Grande.",
  climateFactors: [
    "Hot, dry summers causing soil shrinkage under foundations",
    "High humidity and heavy rainfall along the Gulf Coast",
    "Occasional winter freezes leading to burst pipes",
    "Severe storms and flooding impacting underground lines",
    "Wide temperature swings affecting pipe expansion"
  ],
  buildingTypes: [
    "Slab-on-grade residential homes",
    "Wood-frame suburban houses",
    "Brick and masonry commercial buildings",
    "Historic masonry and limestone homes",
    "Mobile and manufactured housing",
    "Rural farm and ranch properties"
  ]
  },
  seo: {
  metaTitle: "Leak Detection Services in Texas | 24/7 Same-Day Repair",
  metaDescription: "24/7 leak detection in Texas. Experts find and repair water, gas, pool & slab leaks statewide. Same-day emergency service. Call now!",
  keywords: [
    "Leak detection Texas",
    "Texas leak detection services",
    "water leak detection Texas",
    "gas leak detection Texas",
    "slab leak repair TX",
    "pool leak detection Texas",
    "emergency leak detection Texas",
    "24 hour leak detection TX",
    "underground leak detection Texas",
    "commercial leak detection Texas",
    "residential leak detection TX",
    "foundation leak detection Texas",
    "sewer leak detection Texas",
    "sprinkler leak detection TX",
    "infrared leak detection Texas",
    "acoustic leak detection TX",
    "thermal imaging leak detection Texas",
    "same-day leak repair Texas",
    "discount leak detection Texas",
    "leak detection services TX"
  ],
  canonicalUrl: "https://discountleakdetection.com/locations/texas",
  robots: "index, follow",
  openGraph: {
    title: "Leak Detection Services in Texas | 24/7 Same-Day Repair",
    description: "24/7 leak detection in Texas. Experts find and repair water, gas, pool & slab leaks statewide. Same-day emergency service. Call now!",
    image: "https://discountleakdetection.com/images/leak-detection-in-texas.webp",
    imageAlt: "Team of leak detection experts using acoustic tools to pinpoint hidden water leaks under a concrete slab.",
    url: "https://discountleakdetection.com/locations/texas",
    type: "website",
    siteName: "Discount Leak Detection"
  },
  twitter: {
    card: "summary_large_image",
    title: "Leak Detection Services in Texas | 24/7 Same-Day Repair",
    description: "24/7 leak detection in Texas. Experts find and repair water, gas, pool & slab leaks statewide. Same-day emergency service. Call now!",
    image: "https://discountleakdetection.com/images/leak-detection-in-texas.webp",
    imageAlt: "Team of leak detection experts using acoustic tools to pinpoint hidden water leaks under a concrete slab."
  }
  },
  customSchemas: [
  {
    id: "local-business-schema",
    name: "Local Business Schema",
    description: "Main LocalBusiness schema for texas services",
    data: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Discount Leak Detection Texas",
      "description": "Expert leak detection and repair services across Texas for water, gas, pool & slab leaks.",
      "image": "https://discountleakdetection.com/images/leak-detection-services-texas.webp",
      "logo": "https://discountleakdetection.com/logo/logo.webp",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Visa, MC, PayPal, Amex, Discover, Cash, Check",
      "url": "https://discountleakdetection.com/locations/texas",
      "telephone": "+1-888-875-9844",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.0545,
        "longitude": -97.5635
      },
      "areaServed": {
        "@type": "State",
        "name": "Texas"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Comprehensive Leak Detection Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Water Leak Detection in Texas",
              "description": "Expert residential water leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Water Leak Detection in Texas",
              "description": "Expert commercial water leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Underground Leak Detection in Texas",
              "description": "Expert underground leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Main Leak Detection in Texas",
              "description": "Expert water main leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Line Leak Detection in Texas",
              "description": "Expert water line leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Slab Leak Detection in Texas",
              "description": "Expert slab leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Foundation Leak Detection in Texas",
              "description": "Expert foundation leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Supply Line Leak Detection in Texas",
              "description": "Expert supply line leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drain Line Leak Detection in Texas",
              "description": "Expert drain line leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sewer Line Leak Detection in Texas",
              "description": "Expert sewer line leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Heater Leak Detection in Texas",
              "description": "Expert water heater leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Boiler Leak Detection in Texas",
              "description": "Expert boiler leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Toilet Leak Detection in Texas",
              "description": "Expert toilet leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shower Leak Detection in Texas",
              "description": "Expert shower leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bathtub Leak Detection in Texas",
              "description": "Expert bathtub leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sink Leak Detection in Texas",
              "description": "Expert sink leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Faucet Leak Detection in Texas",
              "description": "Expert faucet leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garbage Disposal Leak Detection in Texas",
              "description": "Expert garbage disposal leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Softener Leak Detection in Texas",
              "description": "Expert water softener leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sump Pump Leak Detection in Texas",
              "description": "Expert sump pump leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hose Bib Leak Detection in Texas",
              "description": "Expert hose bib leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sprinkler System Leak Detection in Texas",
              "description": "Expert sprinkler system leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drip Irrigation Leak Detection in Texas",
              "description": "Expert drip irrigation leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Backflow Preventer Leak Detection in Texas",
              "description": "Expert backflow preventer leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Septic System Leak Detection in Texas",
              "description": "Expert septic system leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ejector Pump Leak Detection in Texas",
              "description": "Expert ejector pump leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gas Line Leak Detection in Texas",
              "description": "Expert gas line leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sewer Gas Leak Detection in Texas",
              "description": "Expert sewer gas leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Carbon Monoxide Leak Detection in Texas",
              "description": "Expert carbon monoxide leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roof Leak Detection in Texas",
              "description": "Expert roof leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Swimming Pool Leak Detection in Texas",
              "description": "Expert swimming pool leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Spa and Hot Tub Leak Detection in Texas",
              "description": "Expert spa and hot tub leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wall and Ceiling Leak Detection in Texas",
              "description": "Expert wall and ceiling leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Subsurface Leak Detection in Texas",
              "description": "Expert subsurface leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pressure Testing in Texas",
              "description": "Expert pressure testing service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Acoustic Leak Detection in Texas",
              "description": "Expert acoustic leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Camera Inspection Leak Detection in Texas",
              "description": "Expert camera inspection leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Infrared Leak Detection in Texas",
              "description": "Expert infrared leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thermal Imaging Leak Detection in Texas",
              "description": "Expert thermal imaging leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Leak Detection in Texas",
              "description": "Expert emergency leak detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Burst Pipe Detection in Texas",
              "description": "Expert burst pipe detection service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smart Leak Sensor Installation in Texas",
              "description": "Expert smart leak sensor installation service using advanced equipment for accurate detection and minimal disruption across Texas properties."
            }
          }
        ]
      },
      "serviceType": [
        "Leak Detection",
        "Water Leak Repair",
        "Gas Leak Detection",
        "Emergency Plumbing"
      ],
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
          "name": "Texas",
          "item": "https://discountleakdetection.com/locations/texas"
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
          "name": "What areas in Texas do you serve for leak detection services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve all regions across Texas, from urban centers like Houston, Dallas, and Austin to rural and border areas, providing statewide coverage."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to an emergency leak detection request in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer same-day emergency response statewide, typically arriving within a few hours of your call to minimize damage and downtime."
          }
        },
        {
          "@type": "Question",
          "name": "What types of leaks can you detect and repair in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our certified technicians locate and repair water, gas, pool, slab, foundation, sewer, and gas leaks using non-invasive acoustic, thermal, and video inspection tools."
          }
        },
        {
          "@type": "Question",
          "name": "Are your leak detection technicians licensed and insured to work in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all of our technicians are fully licensed, bonded, and insured, and they comply with Texas state safety and building codes."
          }
        },
        {
          "@type": "Question",
          "name": "Do you require access to a property for leak detection services in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use advanced non-destructive methods whenever possible. We may need brief access to utility rooms, meters, or minimal wall/floor openings to pinpoint leaks."
          }
        },
        {
          "@type": "Question",
          "name": "How much does leak detection in Texas cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing varies by service type and location. We provide free estimates with transparent, upfront pricing before any work begins."
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
      "name": "Leak Detection Services in Texas",
      "description": "Comprehensive leak detection services in Texas including water, gas, pool, slab, and pipeline leak location and repair with advanced technology.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Discount Leak Detection"
      },
      "serviceType": "Leak Detection Services",
      "areaServed": {
        "@type": "State",
        "name": "Texas"
      }
    }
  }
  ],
  neighboringStates: [
  "new-mexico",
  "oklahoma",
  "arkansas",
  "louisiana"
  ]
};