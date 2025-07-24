// src/app/locations/data/types.ts

// Simplified Content Structure for easier data input
export interface SimpleContentSection {
  heading2: string; // H2 - main section heading
  content?: string; // Optional main content for the section
  subsections?: SimpleContentSubsection[];
}

export interface SimpleContentSubsection {
  heading3?: string; // H3
  heading4?: string; // H4  
  heading5?: string; // H5
  heading6?: string; // H6
  content: string; // Content for this subsection
  subsections?: SimpleContentSubsection[]; // Nested subsections
}

// New simplified city content structure
export interface SimpleCityContent {
  introduction?: string; // Single intro paragraph
  sections: SimpleContentSection[];
}

// NEW: Simplified State Content Structure
export interface SimpleStateContent {
  introduction?: string; // Single intro paragraph
  sections: SimpleContentSection[];
}

// Simplified Dynamic Data Interfaces
export interface CityDynamicData {
  // Basic Info
  id: string;
  name: string;
  slug: string;
  state: string;
  stateSlug: string;
  county: string;
  population: string;
  coordinates: { lat: number; lng: number };

  // Hero Content (now includes H1 title)
  hero: {
    title: string; // Main H1 title
    subtitle: string;
    description: string;
    badge: string;
    image: string;
    imageAlt: string;
  };

  // Contact (if different from static)
  contact?: {
    phone: string;
    phoneDisplay: string;
  };

  // Simplified content structure
  content: SimpleCityContent;

  // Simplified testimonials
  testimonials: {
    name: string;
    location: string;
    text: string;
    rating: number;
    verified: boolean;
    date: string;
  }[];

  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];

  // Nearby Cities
  nearbyCities: {
    name: string;
    slug: string;
  }[];

  // Map
  mapEmbedUrl: string;

  // Local Factors
  localFactors: {
    commonIssues: string[];
    soilType: string;
    climateFactors: string[];
    buildingTypes: string[];
  };

  // SEO
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
    robots?: string;
    openGraph: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      url: string;
      type: string;
      siteName: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    };
  };

  // Custom Schemas
  customSchemas: {
    id: string;
    name: string;
    description?: string;
    data: Record<string, any>;
  }[];
}

// State Dynamic Data Interface
export interface StateDynamicData {
  // Basic Info
  id: string;
  name: string;
  slug: string;
  abbreviation: string;
  region: string;
  population: string;
  coordinates: { lat: number; lng: number };

  // Hero Content
  hero: {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    image: string;
    imageAlt: string;
  };

  // Contact (if different from static)
  contact?: {
    phone: string;
    phoneDisplay: string;
  };

  // Content Sections - Simplified structure only
  content: SimpleStateContent;

  // Optional "Why Choose Us" - falls back to static if not provided
  whyChooseUs?: {
    title: string;
    subtitle: string;
    description: string;
    reasons: {
      title: string;
      description: string;
    }[];
  };

  // Testimonials
  testimonials: {
    name: string;
    location: string;
    text: string;
    rating: number;
    verified: boolean;
    date: string;
  }[];

  // Optional process - falls back to static if not provided
  process?: {
    title: string;
    subtitle: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
  };

  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];

  // Cities List
  cities: {
    name: string;
    slug: string;
  }[];

  // Map
  mapEmbedUrl: string;

  // Local Factors
  localFactors: {
    commonIssues: string[];
    geography: string;
    climateFactors: string[];
    buildingTypes: string[];
  };

  // SEO
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
    robots?: string;
    openGraph: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      url: string;
      type: string;
      siteName: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    };
  };

  // Custom Schemas
  customSchemas: {
    id: string;
    name: string;
    description?: string;
    data: Record<string, any>;
  }[];

  // State-specific properties
  neighboringStates?: string[];
}

// Enhanced Static Configuration interfaces
export interface CityStaticConfig {
  ui: {
    breadcrumb: {
      homeLink: string;
      homeText: string;
      locationsLink: string;
      locationsText: string;
    };
    heroSection: {
      ctaButton: { text: string };
      availabilityBadge: { text: string };
    };
    ctaSections: {
      afterContent: {
        title: string;
        buttonText: string;
      };
      afterServices: {
        badge: { icon: string; text: string };
        title: string;
        description: string;
        primaryButton: { text: string };
        secondaryButton: { icon: string; text: string; link: string };
      };
      afterReviews: {
        title: string;
        buttonText: string;
      };
      beforeMap: {
        badge: { icon: string; text: string };
        title: string;
        description: string;
        buttonText: string;
        features: { text: string }[];
      };
    };
    servicesSection: {
      badge: { icon: string; text: string };
      initialDisplay: number;
      showMoreButton: { text: string };
      showLessButton: { text: string };
    };
    whyChooseUsSection: {
      badge: { icon: string; text: string };
    };
    reviewsSection: {
      badge: { icon: string; text: string };
      title: { part1: string; part2: string; part3: string };
      description: string;
      verifiedBadge: { text: string };
    };
    processSection: {
      badge: { icon: string; text: string };
      stepLabel: string;
    };
    faqSection: {
      badge: { icon: string; text: string };
      title: { suffix: string; highlight: string };
      description: string;
    };
    nearbyCitiesSection: {
      badge: { icon: string; text: string };
      title: { part1: string; part2: string };
      description: string;
      initialDisplay: number;
      showAllButton: { text: string };
      showLessButton: { text: string };
    };
    mapSection: {
      badge: { icon: string; text: string };
      title: string;
      subtitle: string;
      description: string;
    };
  };
  
  // Typography and styling
  typography: {
    headings: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    paragraphs: {
      intro: string;
      body: string;
      highlight: string;
    };
  };

  // Static data that doesn't change
  staticData: {
    stats: {
      customers: string;
      response: string;
      success: string;
      experience: string;
    };
    
    trustIndicators: {
      rating: string;
      jobs: string;
      recommend: string;
    };

    statsTemplate: {
      key: string;
      label?: string;
      labelSuffix?: string;
      iconName: string;
      color: string;
    }[];

    trustIndicatorsTemplate: {
      key: string;
      label: string;
    }[];
  };

  trustPlatforms: {
    title: string;
    platforms: { src: string; alt: string }[];
  };

  heroStatic: {
    badgeIcon: { src: string; alt: string };
    trustIndicators: {
      iconName: string;
      text: string;
      color: string;
    }[];
  };

  contactTemplate: {
    phone: string;
    phoneDisplay: string;
  };

  services: {
    title: string;
    subtitle: string;
    description: string;
    list: {
      name: string;
      description: string;
      iconName: string;
      iconPath: string;
      slug: string;
    }[];
  };

  // Static why choose us data
  whyChooseUsStatic: {
    title: string;
    subtitle: string;
    description: string;
    reasons: {
      title: string;
      description: string;
      iconName: string;
      iconPath: string;
    }[];
  };

  // Static process data
  processStatic: {
    title: string;
    subtitle: string;
    description: string;
    steps: {
      step: string;
      title: string;
      description: string;
      iconName: string;
      iconPath: string;
    }[];
  };
}

// State Static Configuration - same structure
export interface StateStaticConfig {
  ui: {
    breadcrumb: {
      homeLink: string;
      homeText: string;
      locationsLink: string;
      locationsText: string;
    };
    heroSection: {
      ctaButton: { text: string };
      availabilityBadge: { text: string };
    };
    ctaSections: {
      afterContent: {
        title: string;
        buttonText: string;
      };
      afterServices: {
        badge: { icon: string; text: string };
        title: string;
        description: string;
        primaryButton: { text: string };
        secondaryButton: { icon: string; text: string; link: string };
      };
      afterReviews: {
        title: string;
        buttonText: string;
      };
      beforeMap: {
        badge: { icon: string; text: string };
        title: string;
        description: string;
        buttonText: string;
        features: { text: string }[];
      };
    };
    servicesSection: {
      badge: { icon: string; text: string };
      initialDisplay: number;
      showMoreButton: { text: string };
      showLessButton: { text: string };
    };
    whyChooseUsSection: {
      badge: { icon: string; text: string };
    };
    reviewsSection: {
      badge: { icon: string; text: string };
      title: { part1: string; part2: string; part3: string };
      description: string;
      verifiedBadge: { text: string };
    };
    processSection: {
      badge: { icon: string; text: string };
      stepLabel: string;
    };
    faqSection: {
      badge: { icon: string; text: string };
      title: { suffix: string; highlight: string };
      description: string;
    };
    citiesSection: {
      badge: { icon: string; text: string };
      title: { part1: string; part2: string; part3: string };
      description: string;
      initialDisplay: number;
      showAllButton: { text: string };
      showLessButton: { text: string };
    };
    mapSection: {
      badge: { icon: string; text: string };
      title: string;
      subtitle: string;
      description: string;
    };
  };

  typography: {
    headings: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    paragraphs: {
      intro: string;
      body: string;
      highlight: string;
    };
  };

  staticData: {
    stats: {
      customers: string;
      experience: string;
      accuracy: string;
      response: string;
    };
    
    trustIndicators: {
      rating: string;
      jobs: string;
      recommend: string;
    };

    statsTemplate: {
      key: string;
      label?: string;
      labelSuffix?: string;
      iconName: string;
      color: string;
    }[];

    trustIndicatorsTemplate: {
      key: string;
      label: string;
    }[];
  };

  trustPlatforms: {
    title: string;
    platforms: { src: string; alt: string }[];
  };

  heroStatic: {
    badgeIcon: { src: string; alt: string };
    trustIndicators: {
      iconName: string;
      text: string;
      color: string;
    }[];
  };

  contactTemplate: {
    phone: string;
    phoneDisplay: string;
  };

  services: {
    title: string;
    subtitle: string;
    description: string;
    list: {
      name: string;
      description: string;
      iconName: string;
      iconPath: string;
      slug: string;
    }[];
  };

  whyChooseUsStatic: {
    title: string;
    subtitle: string;
    description: string;
    reasons: {
      title: string;
      description: string;
      iconName: string;
      iconPath: string;
    }[];
  };

  processStatic: {
    title: string;
    subtitle: string;
    description: string;
    steps: {
      step: string;
      title: string;
      description: string;
      iconName: string;
      iconPath: string;
    }[];
  };
}

// Combined data interfaces (what components receive)
export interface CityData extends CityDynamicData {
  ui: CityStaticConfig['ui'];
  typography: CityStaticConfig['typography'];
  trustPlatforms?: CityStaticConfig['trustPlatforms'];
  hero: CityDynamicData['hero'] & {
    badgeIcon?: { src: string; alt: string };
    trustIndicators: {
      iconName: string;
      text: string;
      color: string;
    }[];
  };
  stats: {
    number: string;
    label: string;
    iconName: string;
    color: string;
  }[];
  trustIndicators: {
    value: string;
    label: string;
  }[];
  services: {
    title: string;
    subtitle: string;
    description: string;
    list: {
      name: string;
      description: string;
      iconName: string;
      iconPath: string;
      slug: string;
    }[];
  };
  contact: {
    phone: string;
    phoneDisplay: string;
  };
  // Complete why choose us data from static
  whyChooseUs: {
    title: string;
    subtitle: string;
    description: string;
    reasons: {
      title: string;
      description: string;
      iconName: string;
      iconPath: string;
    }[];
  };
  // Complete process data from static
  process: {
    title: string;
    subtitle: string;
    description: string;
    steps: {
      step: string;
      title: string;
      description: string;
      iconName: string;
      iconPath: string;
    }[];
  };
}

export interface StateData extends StateDynamicData {
  ui: StateStaticConfig['ui'];
  typography: StateStaticConfig['typography'];
  trustPlatforms: StateStaticConfig['trustPlatforms'];
  hero: StateDynamicData['hero'] & {
    badgeIcon: { src: string; alt: string };
    trustIndicators: {
      iconName: string;
      text: string;
      color: string;
    }[];
  };
  stats: {
    number: string;
    label: string;
    iconName: string;
    color: string;
  }[];
  trustIndicators: {
    value: string;
    label: string;
  }[];
  services: {
    title: string;
    subtitle: string;
    description: string;
    list: {
      name: string;
      description: string;
      iconName: string;
      iconPath: string;
      slug: string;
    }[];
  };
  contact: {
    phone: string;
    phoneDisplay: string;
  };
  // Always present in final StateData (merged from dynamic or static)
  whyChooseUs: {
    title: string;
    subtitle: string;
    description: string;
    reasons: Array<{
      title: string;
      description: string;
      iconName: string;
      iconPath: string;
    }>;
  };
  // Always present in final StateData (merged from dynamic or static)
  process: {
    title: string;
    subtitle: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
      step: string;
      iconName: string;
      iconPath: string;
    }>;
  };
}

// Service Data Interface (from ServiceTemplate.tsx reference)
export interface ServiceData {
  // Basic Info
  id: string;
  name: string;
  slug: string;
  category: string;

  // Hero Content
  hero: {
    title: string;
    subtitle?: string;
    description: string;
    badge: string;
    heroImage: string;
    heroImageAlt: string;
    badgeIcon: { src: string; alt: string };
    trustIndicators: {
      iconName: string;
      text: string;
      color: string;
    }[];
  };

  // UI Configuration
  ui: {
    breadcrumb: {
      homeLink: string;
      homeText: string;
      servicesLink: string;
      servicesText: string;
    };
    heroSection: {
      ctaButton: { text: string };
      availabilityBadge: { text: string };
    };
    ctaSections: {
      afterContent: {
        title: string;
        buttonText: string;
      };
      afterReviews: {
        title: string;
        buttonText: string;
      };
      beforeRelatedServices: {
        badge: { icon: string; text: string };
        title: string;
        description: string;
        buttonText: string;
        features: { text: string }[];
      };
      afterRelatedServices: {
        badge: { icon: string; text: string };
        title: string;
        description: string;
        primaryButton: { text: string };
        secondaryButton: { icon: string; text: string; link: string };
      };
    };
    processSection: {
      badge: { icon: string; text: string };
      title: { part1: string; part2: string };
      stepLabel: string;
    };
    technologySection: {
      badge: { icon: string; text: string };
      title: { part1: string; part2: string };
    };
    reviewsSection: {
      badge: { icon: string; text: string };
      title: { part1: string; part2: string; part3: string };
      description: string;
      verifiedBadge: { text: string };
    };
    faqSection: {
      badge: { icon: string; text: string };
      title: { part1: string; part2: string };
      description: string;
    };
    relatedServicesSection: {
      badge: { icon: string; text: string };
      title: { part1: string; part2: string };
      description: string;
      initialDisplay: number;
      showMoreButton: { text: string };
      showLessButton: { text: string };
    };
  };

  // Trust Platforms
  trustPlatforms: {
    title: string;
    platforms: { src: string; alt: string }[];
  };

  // Content
  content: {
    introduction?: string;
    sections: SimpleContentSection[];
  };

  // Process
  process: {
    description: string;
    steps: {
      step: string;
      title: string;
      description: string;
      iconPath: string;
    }[];
  };

  // Technology
  technology: {
    description: string;
    tools: {
      name: string;
      description: string;
      iconPath: string;
    }[];
  };

  // Testimonials
  testimonials: {
    name: string;
    location: string;
    text: string;
    rating: number;
    verified: boolean;
    date: string;
  }[];

  // Trust Indicators
  trustIndicators: {
    value: string;
    label: string;
  }[];

  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];

  // Related Services
  relatedServices: {
    name: string;
    description: string;
    iconPath: string;
    slug: string;
  }[];

  // Contact
  contact: {
    phone: string;
    phoneDisplay: string;
  };

  // SEO
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
    robots?: string;
    openGraph: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      url: string;
      type: string;
      siteName: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    };
  };

  // Custom Schemas
  customSchemas: {
    id: string;
    name: string;
    description?: string;
    data: Record<string, any>;
  }[];
}

// Helper function type
export type PlaceholderReplacer = (text: string, cityName: string) => string;