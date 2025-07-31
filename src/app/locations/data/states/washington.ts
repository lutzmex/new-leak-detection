import { StateDynamicData } from '../types';

export const washingtonDynamicData: StateDynamicData = {
  // Basic Info
  id: 'washington-001',
  name: 'Washington',
  slug: 'washington',
  abbreviation: 'WA',
  region: 'West',
  population: '7,785,786',
  coordinates: { lat: 47.444, lng: -120.5718 },

  // Hero Content
  hero: {
    title: 'Find Hidden Leaks Fast Throughout Washington | Expert Leak Detection & Repair Services Statewide',
    subtitle: 'Full statewide coverage for homes and businesses across Washington',
    description: 'Our team covers every region of Washington with fast response and clear pricing. We use the latest tools to find leaks and fix them with minimal disruption, keeping your property safe and dry.',
    badge: 'Top Leak Detection in WA',
    image: '/images/leak-detection-in-washington.webp',
    imageAlt: 'Skilled plumbers use pressure testing for kitchen pipe leak detection, finding and repairing water leaks.'
  },

  // Main Content Structure
  content: {
    sections: [
      {
        heading2: 'Complete Leak Detection Services in Washington',
        content: 'We find water, gas, pool, slab, and underground leaks across Washington. Our statewide team responds fast with smart tools that limit damage. We fix leaks in homes and businesses in Seattle, Spokane, Tacoma, Vancouver, and beyond. Every job comes with full coverage and clear cost estimates. Enjoy peace of mind from start to finish.',
        subsections: [
          {
            heading3: 'Water Leak Detection',
            content: 'We locate leaks in walls, floors, and pipes with acoustic and thermal tools. This method avoids tearing up drywall or flooring. In Yakima and Olympia, we pinpoint slab leaks using noise detectors. You get fast fixes that stop water waste and protect your foundation.'
          },
          {
            heading3: 'Pool Leak Detection',
            content: 'We find leaks in pools, spas, and fountains around Bellingham, Tacoma, and the Tri-Cities. Our team uses pressure tests and dye boats to spot cracks or pinholes in pool shells. We save water and lower your repair costs. Enjoy a leak-free pool fast.'
          },
          {
            heading3: 'Slab Leak Detection',
            content: 'Slab leaks can harm foundations in Everett and Kennewick. We use sound detectors and infrared cameras to find leaks fast. We mark the exact spot so your plumber cuts minimal concrete. You save time and money on repairs.'
          },
          {
            heading3: 'Gas Leak Detection',
            content: 'Our team uses gas sensors to find leaks in lines and tanks. We test pipelines in Bellevue, Redmond, and Kirkland to keep homes and businesses safe. We locate leaks without digging up yards. You get clear repair recommendations fast.'
          },
          {
            heading3: 'Underground Leak Detection',
            content: 'Hidden leaks in yard lines can waste thousands of gallons in Spokane and Moses Lake. We use ground listening gear and water line maps to zero in on leaks. We guide your plumber to the exact spot. You avoid big trenches and save your grass.'
          },
          {
            heading3: 'Plumbing Leak Detection',
            content: 'We detect leaks in supply, sewer, and drain lines from Walla Walla to Longview. Our state team uses camera inspections and smoke tests for sewer leaks. We find leaks behind walls, under floors, and in crawl spaces. You get a detailed report and repair plan.'
          }
        ]
      },
      {
        heading2: 'Warning Signs of a Leak in Washington',
        content: 'Leaks can hike your water bill and harm your home across Washington. You may see water stains on ceilings or hear dripping with all taps off. Damp spots on walls, floors, or in crawl spaces signal hidden leaks. A sudden drop in pressure can mean a broken pipe. Musty smells in basements or near pools also warn of water leaks. Our team checks these signs in Seattle, Spokane, Yakima, and beyond.',
        subsections: [
          {
            heading3: 'Visible Leak Signs',
            content: 'Look for wet spots on walls, ceilings, or floors. Rust stains or peeling paint around water lines can appear. Puddles in basements, crawl spaces, or under sinks often mean a leak. Check your meter for a spinning dial when all water is off.'
          },
          {
            heading3: 'Hidden Leak Clues',
            content: 'A sudden spike in your water bill can signal a slab leak. Warm spots on cold floors or damp carpets hide leaks in concrete. Dripping sounds behind walls call for digital listening tests. Musty mold or mildew near cabinets or trim often signals a hidden leak.'
          },
          {
            heading3: 'Pool Leak Alerts',
            content: 'If your pool level drops more than a few inches in a day, you may have a leak. Check tile grout cracks and loose fittings around pumps. Watch water levels near jets and skimmers after 24 hours. Dye tests help spot small cracks and fissures fast.'
          },
          {
            heading3: 'Gas Leak Warning',
            content: 'A rotten egg smell near gas lines signals a leak that needs fast checks. Hissing or whistling by your meter or tank calls for immediate tests. Never ignore a gas odor in Tacoma, Bellevue, or Vancouver. Our team responds day or night to secure your line.'
          }
        ]
      },
      {
        heading2: 'Why Choose Our Washington Team for Leak Detection',
        content: 'We have served every community in Washington for years with local teams in major cities. Our statewide dispatch center answers calls day and night for fast service. We use smart tools to find leaks without harming walls, floors, or lawns. You get clear cost estimates before we start. Our full satisfaction warranty covers all repairs and call-backs.',
        subsections: [
          {
            heading3: 'Fast Response Statewide',
            content: 'Our teams in Seattle, Spokane, Olympia, and the Tri-Cities are ready when you call. We aim to arrive in hours, not days, across Washington. You get help fast when every drop counts.'
          },
          {
            heading3: 'No Damage Methods',
            content: 'Our smart tools listen for leaks under concrete and behind walls. We use thermal cameras to find water under flooring. You avoid big repair bills and messy demo work.'
          },
          {
            heading3: 'Clear Pricing and Warranty',
            content: 'We share costs upfront with no hidden fees. Our price covers travel, tools, reports, and repairs. All work includes a full satisfaction warranty in Washington.'
          }
        ]
      }
    ]
  },

  // Generate Testimonials (create 6 realistic state-wide testimonials)
  testimonials: [
    {
      name: 'John D.',
      location: 'Seattle, WA',
      text: 'Our kitchen sink was flooding from a hidden pipe leak. Their team arrived in under two hours and found the spot with no demo work. I felt relieved and saved hundreds of dollars.',
      rating: 5,
      verified: true,
      date: '2025-06-10'
    },
    {
      name: 'Maria S.',
      location: 'Spokane, WA',
      text: 'We had a pool leak no one could find. They used dye and a listening tool to spot it in under an hour. Our pool is full again, and our bill dropped.',
      rating: 5,
      verified: true,
      date: '2025-05-22'
    },
    {
      name: 'Lee W.',
      location: 'Tacoma, WA',
      text: 'A slab leak flooded my basement, and I did not know where to dig. They marked the exact spot so I cut a small hole and fixed the pipe. I saved thousands on concrete repairs.',
      rating: 5,
      verified: true,
      date: '2025-04-15'
    },
    {
      name: 'Emily K.',
      location: 'Vancouver, WA',
      text: 'I smelled gas in my home late at night. They came out that evening and found a leak in the line behind the wall. I feel safe now and can sleep again.',
      rating: 5,
      verified: true,
      date: '2025-03-30'
    },
    {
      name: 'Carlos R.',
      location: 'Bellevue, WA',
      text: 'My yard had a burst underground line. They used ground listening gear and water maps to locate the break. I avoided digging up my entire lawn and saved a bundle.',
      rating: 5,
      verified: true,
      date: '2025-02-28'
    },
    {
      name: 'Susan M.',
      location: 'Olympia, WA',
      text: 'Our water bill shot up because of a hidden leak. They scanned under our slab and found the leak in minutes. We fixed it, and our costs are back to normal.',
      rating: 5,
      verified: true,
      date: '2025-01-12'
    }
  ],

  // Generate FAQs (8-10 state-specific FAQs)
  faqs: [
    {
      question: 'What areas of Washington do you serve?',
      answer: 'We serve every region of Washington, from Seattle and Spokane to the Tri-Cities and the coast. Our local teams cover major cities and small towns with fast service. You get help in both urban and rural areas.'
    },
    {
      question: 'How fast can you respond to a leak emergency?',
      answer: 'We aim to arrive in hours, not days, for any leak in Washington. Our dispatch center coordinates teams in Seattle, Tacoma, Spokane, and beyond. You get help fast when every drop counts.'
    },
    {
      question: 'Do you damage my walls or floors to find leaks?',
      answer: 'No. We use listening gear, infrared cameras, and water pressure tests to locate leaks. We mark the spot so your repair work is minimal. You avoid big demolition and repair costs.'
    },
    {
      question: 'How do you find leaks under concrete slabs?',
      answer: 'We use sound sensors on slab surfaces and thermal cameras to find water under concrete. Our team listens for leak noise and pinpoints the exact spot. You cut only a small hole for repair.'
    },
    {
      question: 'Is your pricing clear and upfront?',
      answer: 'Yes. We provide a full cost estimate before any work starts. Our price includes travel, tools, scan time, and reporting. You know the cost with no hidden fees.'
    },
    {
      question: 'Do you fix the leak after you find it?',
      answer: 'We locate and pinpoint the leak, then guide your plumber to the exact spot. We can also offer repair services in many areas of Washington. You choose what fits your needs.'
    },
    {
      question: 'What tools do you use for gas leak detection?',
      answer: 'We use gas sniff sensors and digital monitors to find natural gas or propane leaks. Our team tests lines and fittings to keep your home safe. We find leaks without digging.'
    },
    {
      question: 'Are you licensed and insured in Washington?',
      answer: 'Yes. Discount Leak Detection is fully licensed and insured in Washington. We follow all state codes and safety rules. You get a certified team and full liability coverage.'
    }
  ],

  // Major Cities List (30 major cities across the state)
  // Major Cities List
  cities: [
    { name: "Aberdeen", slug: "aberdeen" },
    { name: "Anacortes", slug: "anacortes" },
    { name: "Auburn", slug: "auburn" },
    { name: "Bellevue", slug: "bellevue" },
    { name: "Bellingham", slug: "bellingham" },
    { name: "Bremerton", slug: "bremerton" },
    { name: "Centralia", slug: "centralia" },
    { name: "Coulee Dam", slug: "coulee-dam" },
    { name: "Coupeville", slug: "coupeville" },
    { name: "Ellensburg", slug: "ellensburg" },
    { name: "Ephrata", slug: "ephrata" },
    { name: "Everett", slug: "everett" },
    { name: "Hoquiam", slug: "hoquiam" },
    { name: "Kelso", slug: "kelso" },
    { name: "Kennewick", slug: "kennewick" },
    { name: "Longview", slug: "longview" },
    { name: "Moses Lake", slug: "moses-lake" },
    { name: "Oak Harbor", slug: "oak-harbor" },
    { name: "Olympia", slug: "olympia" },
    { name: "Pasco", slug: "pasco" },
    { name: "Point Roberts", slug: "point-roberts" },
    { name: "Port Angeles", slug: "port-angeles" },
    { name: "Pullman", slug: "pullman" },
    { name: "Puyallup", slug: "puyallup" },
    { name: "Redmond", slug: "redmond" },
    { name: "Renton", slug: "renton" },
    { name: "Richland", slug: "richland" },
    { name: "Seattle", slug: "seattle" },
    { name: "Spokane", slug: "spokane" },
    { name: "Tacoma", slug: "tacoma" },
    { name: "Vancouver", slug: "vancouver" },
    { name: "Walla Walla", slug: "walla-walla" },
    { name: "Wenatchee", slug: "wenatchee" },
    { name: "Yakima", slug: "yakima" },
  ],
  // Map Embed URL for entire state
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d650000!2d-120.5718!3d47.444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sChIJd8Blahblah12345!2sWashington%2C%20USA!5e0!3m2!1sen!2sus!4v1690000000000'
,

  // State-specific Local Factors and SEO Data
  localFactors: {
  commonIssues: [
    "Frozen pipe bursts due to cold winters",
    "Seismic activity causing slab foundation leaks",
    "Tree root intrusion in urban neighborhoods",
    "Corrosive mineral-rich groundwater leaks",
    "High groundwater table affecting underground lines",
    "Aging municipal supply line leaks in Seattle",
    "Coastal salt exposure corroding pipes",
    "Freeze-thaw cycle cracks in exposed pipes",
    "Inadequate winterization pipe damage",
    "Pressure fluctuations in mountain communities"
  ],
  geography: "Washington encompasses coastal zones along the Pacific and Puget Sound, the Cascade Mountain ranges, the arid eastern plains of the Columbia Plateau, and dense forested valleys.",
  climateFactors: [
    "High rainfall and damp conditions in western WA",
    "Cold winter freezes leading to pipe bursts",
    "Dry, hot summers increasing soil contraction",
    "Seasonal humidity variations along Puget Sound",
    "Variable snowmelt runoff affecting groundwater levels"
  ],
  buildingTypes: [
    "Wood-framed single-family homes",
    "Brick townhouses in Seattle",
    "Log cabins in mountain regions",
    "Concrete slab foundations in new developments",
    "Historic masonry buildings in Spokane",
    "Mobile homes on rural properties"
  ]
  },
  seo: {
  metaTitle: "Leak Detection Services in Washington | Discount Leak",
  metaDescription: "Fast, accurate leak detection services across Washington. Our licensed team finds water, gas & pool leaks in homes and businesses 24/7. Call now!",
  keywords: [
    "Washington leak detection",
    "WA leak detection",
    "leak detection Washington",
    "leak repair Washington",
    "water leak detection Washington",
    "gas leak detection Washington",
    "slab leak detection WA",
    "pool leak detection WA",
    "underground leak detection Washington",
    "emergency leak repair Washington",
    "24/7 leak detection WA",
    "residential leak detection Washington",
    "commercial leak detection WA",
    "foundation leak detection Washington",
    "pipe leak detection WA",
    "leak detection contractors Washington",
    "discount leak detection WA",
    "affordable leak detection Washington"
  ],
  canonicalUrl: "https://discountleakdetection.com/locations/washington",
  robots: "index, follow",
  openGraph: {
    title: "Leak Detection Services in Washington | Discount Leak",
    description: "Fast, accurate leak detection services across Washington. Our licensed team finds water, gas & pool leaks in homes and businesses 24/7. Call now!",
    image: "https://discountleakdetection.com/images/leak-detection-services-washington.webp",
    imageAlt: "Skilled plumbers use pressure testing for kitchen pipe leak detection, finding and repairing water leaks.",
    url: "https://discountleakdetection.com/locations/washington",
    type: "website",
    siteName: "Discount Leak Detection"
  },
  twitter: {
    card: "summary_large_image",
    title: "Leak Detection Services in Washington | Discount Leak",
    description: "Fast, accurate leak detection services across Washington. Our licensed team finds water, gas & pool leaks in homes and businesses 24/7. Call now!",
    image: "https://discountleakdetection.com/images/leak-detection-services-washington.webp",
    imageAlt: "Skilled plumbers use pressure testing for kitchen pipe leak detection, finding and repairing water leaks."
  }
  },
  customSchemas: [
  {
    id: "local-business-schema",
    name: "Local Business Schema",
    description: "Main LocalBusiness schema for washington services",
    data: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Washington Leak Detection Services",
      "description": "Professional leak detection and repair services across the state of Washington",
      "image": "https://discountleakdetection.com/images/leak-detection-services-washington.webp",
      "logo": "https://discountleakdetection.com/logo/logo.webp",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Visa, MC, PayPal, Amex, Discover, Cash, Check",
      "url": "https://discountleakdetection.com/locations/washington",
      "telephone": "+1 (888) 875-9844",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "WA",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.4009,
        "longitude": -121.4905
      },
      "areaServed": {
        "@type": "State",
        "name": "Washington"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Comprehensive Leak Detection Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Water Leak Detection in Washington", "description": "Precise residential water leak detection using acoustic and thermal tools to protect your home in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Water Leak Detection in Washington", "description": "Comprehensive water leak detection solutions for businesses across Washington with minimal downtime." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Underground Leak Detection in Washington", "description": "Advanced underground leak detection using ground microphones and soil probes throughout Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Main Leak Detection in Washington", "description": "Expert water main leak detection services to locate and repair municipal and private mains in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Line Leak Detection in Washington", "description": "Professional water line leak detection with non-invasive methods for homes and businesses in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Slab Leak Detection in Washington", "description": "Non-destructive slab leak detection using infrared imaging to find leaks beneath concrete foundations in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Foundation Leak Detection in Washington", "description": "Accurate foundation leak detection to stop water intrusion and protect building structures statewide." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Supply Line Leak Detection in Washington", "description": "Efficient supply line leak detection for residential and commercial properties across Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Line Leak Detection in Washington", "description": "Comprehensive drain line leak detection using cameras and air pressure testing in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewer Line Leak Detection in Washington", "description": "Expert sewer line leak detection to identify cracks and blockages with minimal excavation in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Leak Detection in Washington", "description": "Quick water heater leak detection service to prevent water damage and ensure safe operation in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boiler Leak Detection in Washington", "description": "Specialized boiler leak detection for residential and commercial systems across Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Toilet Leak Detection in Washington", "description": "Fast toilet leak detection and repair to prevent water waste and reduce utility bills in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shower Leak Detection in Washington", "description": "Targeted shower leak detection using moisture meters and cameras to find hidden leaks statewide." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathtub Leak Detection in Washington", "description": "Professional bathtub leak detection to locate and repair leaks under tubs with minimal damage in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sink Leak Detection in Washington", "description": "Efficient sink leak detection including under-sink and trap inspection for Washington residents." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Faucet Leak Detection in Washington", "description": "Precise faucet leak detection and repair to eliminate drips and conserve water in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garbage Disposal Leak Detection in Washington", "description": "Specialized garbage disposal leak detection to identify and fix hidden leaks under the unit in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Softener Leak Detection in Washington", "description": "Detailed water softener leak detection to prevent system damage and water loss across Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sump Pump Leak Detection in Washington", "description": "Comprehensive sump pump leak detection and inspection to protect basements from flooding in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hose Bib Leak Detection in Washington", "description": "Accurate hose bib leak detection to fix outdoor spigot leaks and avoid water waste in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sprinkler System Leak Detection in Washington", "description": "Expert sprinkler system leak detection using pressure tests and flow analysis across Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drip Irrigation Leak Detection in Washington", "description": "Specialized drip irrigation leak detection to maintain garden efficiency statewide." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backflow Preventer Leak Detection in Washington", "description": "Certified backflow preventer leak detection to protect water supply and ensure compliance in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Septic System Leak Detection in Washington", "description": "Thorough septic system leak detection using cameras and probes for rural properties in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ejector Pump Leak Detection in Washington", "description": "Professional ejector pump leak detection to prevent sewer backups and water damage in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Line Leak Detection in Washington", "description": "Safe gas line leak detection with combustible gas sensors and strict safety protocols in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewer Gas Leak Detection in Washington", "description": "Expert sewer gas leak detection to identify hazardous methane leaks in Washington homes." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carbon Monoxide Leak Detection in Washington", "description": "Professional carbon monoxide leak detection to safeguard indoor air quality statewide." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Leak Detection in Washington", "description": "Non-invasive roof leak detection using infrared and moisture scanning across Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Swimming Pool Leak Detection in Washington", "description": "Specialized swimming pool leak detection to conserve water and maintain pool integrity in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spa and Hot Tub Leak Detection in Washington", "description": "Comprehensive spa and hot tub leak detection using pressure tests in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wall and Ceiling Leak Detection in Washington", "description": "Precise wall and ceiling leak detection to locate hidden water damage in Washington buildings." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Subsurface Leak Detection in Washington", "description": "Advanced subsurface leak detection for buried pipes and structures across Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pressure Testing in Washington", "description": "Comprehensive pressure testing services to identify leaks in plumbing systems in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Acoustic Leak Detection in Washington", "description": "Precision acoustic leak detection to find noisy and hidden leaks rapidly in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Camera Inspection Leak Detection in Washington", "description": "High-resolution camera inspection for pinpointing pipe blockages and leaks in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Infrared Leak Detection in Washington", "description": "Non-invasive infrared leak detection to visualize moisture patterns across Washington facilities." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thermal Imaging Leak Detection in Washington", "description": "Advanced thermal imaging leak detection for rapid moisture detection in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Leak Detection in Washington", "description": "24/7 emergency leak detection and repair services ready anytime in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Burst Pipe Detection in Washington", "description": "Immediate burst pipe detection to minimize damage and restore service in Washington." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Leak Sensor Installation in Washington", "description": "Installation of smart leak sensors for early leak alerts and prevention across Washington." } }
        ]
      },
      "serviceType": ["Leak Detection","Water Leak Repair","Gas Leak Detection","Emergency Plumbing"],
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
          "name": "Washington",
          "item": "https://discountleakdetection.com/locations/washington"
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
          "name": "How quickly does Discount Leak Detection respond in Seattle, WA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 24/7 emergency response across Washington with typical arrival times under 90 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "Do you service rural areas in eastern Washington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our statewide team covers Spokane, Yakima, Tri-Cities and remote communities throughout Washington."
          }
        },
        {
          "@type": "Question",
          "name": "What methods are used for hidden leak detection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use acoustic sensors, thermal imaging, camera inspections and pressure testing to locate hidden leaks."
          }
        },
        {
          "@type": "Question",
          "name": "Are your technicians licensed and insured in WA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All technicians are fully licensed, insured and trained to Washington state plumbing and safety standards."
          }
        },
        {
          "@type": "Question",
          "name": "Can you detect slab leaks under concrete foundations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in non-invasive slab leak detection using infrared imaging and moisture meters."
          }
        },
        {
          "@type": "Question",
          "name": "What are your rates for residential leak detection in Washington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residential leak detection starts at $99, with upfront estimates and no hidden fees for Washington customers."
          }
        },
        {
          "@type": "Question",
          "name": "Is emergency leak detection available during winter freezes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely, our emergency teams are equipped for cold weather and freeze-thaw challenges across Washington."
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
      "name": "Leak Detection Services in Washington",
      "description": "Comprehensive leak detection and repair services for water, gas, and pool systems across Washington state.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Discount Leak Detection"
      },
      "serviceType": "Leak Detection Services",
      "areaServed": {
        "@type": "State",
        "name": "Washington"
      }
    }
  }
  ],
  neighboringStates: ["oregon","idaho"]
};