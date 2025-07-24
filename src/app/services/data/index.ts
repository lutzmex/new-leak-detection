// src/app/services/data/index.ts - Fixed version

import { ServiceData, ServiceDynamicData, ServiceStaticConfig, LegacyServiceData } from './types';
import { SERVICE_STATIC_CONFIG } from './static/service-static-config';

// Import service data
import { acousticleakdetectionDynamicData } from './services/acoustic-leak-detection';
import { backflowpreventerleakdetectionDynamicData } from './services/backflow-preventer-leak-detection';
import { bathtubleakdetectionDynamicData } from './services/bathtub-leak-detection';
import { boilerleakdetectionDynamicData } from './services/boiler-leak-detection';
import { burstpipedetectionDynamicData } from './services/burst-pipe-detection';
import { camerainspectionleakdetectionDynamicData } from './services/camera-inspection-leak-detection';
import { carbonmonoxideleakdetectionDynamicData } from './services/carbon-monoxide-leak-detection';
import { commercialwaterleakdetectionDynamicData } from './services/commercial-water-leak-detection';
import { drainlineleakdetectionDynamicData } from './services/drain-line-leak-detection';
import { dripirrigationleakdetectionDynamicData } from './services/drip-irrigation-leak-detection';
import { ejectorpumpleakdetectionDynamicData } from './services/ejector-pump-leak-detection';
import { emergencyleakdetectionDynamicData } from './services/emergency-leak-detection';
import { faucetleakdetectionDynamicData } from './services/faucet-leak-detection';
import { foundationleakdetectionDynamicData } from './services/foundation-leak-detection';
import { garbagedisposalleakdetectionDynamicData } from './services/garbage-disposal-leak-detection';
import { gaslineleakdetectionDynamicData } from './services/gas-line-leak-detection';
import { hosebibleakdetectionDynamicData } from './services/hose-bib-leak-detection';
import { infraredleakdetectionDynamicData } from './services/infrared-leak-detection';
import { installationofsmartleaksensorsDynamicData } from './services/installation-of-smart-leak-sensors';
import { monitoringandmaintenanceofleakdetectionsystemsDynamicData } from './services/monitoring-and-maintenance-of-leak-detection-systems';
import { pipeleakdetectionDynamicData } from './services/pipe-leak-detection';
import { pressuretestingDynamicData } from './services/pressure-testing';
import { residentialwaterleakdetectionDynamicData } from './services/residential-water-leak-detection';
import { roofleakdetectionDynamicData } from './services/roof-leak-detection';
import { septicsystemleakdetectionDynamicData } from './services/septic-system-leak-detection';
import { sewergasleakdetectionDynamicData } from './services/sewer-gas-leak-detection';
import { sewerlineleakdetectionDynamicData } from './services/sewer-line-leak-detection';
import { showerleakdetectionDynamicData } from './services/shower-leak-detection';
import { sinkleakdetectionDynamicData } from './services/sink-leak-detection';
import { slableakdetectionDynamicData } from './services/slab-leak-detection';
import { spaandhottubleakdetectionDynamicData } from './services/spa-and-hot-tub-leak-detection';
import { sprinklersystemleakdetectionDynamicData } from './services/sprinkler-system-leak-detection';
import { subsurfaceleakdetectionDynamicData } from './services/subsurface-leak-detection';
import { sumppumpleakdetectionDynamicData } from './services/sump-pump-leak-detection';
import { supplylineleakdetectionDynamicData } from './services/supply-line-leak-detection';
import { swimmingpoolleakdetectionDynamicData } from './services/swimming-pool-leak-detection';
import { thermalimagingleakdetectionDynamicData } from './services/thermal-imaging-leak-detection';
import { toiletleakdetectionDynamicData } from './services/toilet-leak-detection';
import { undergroundleakdetectionDynamicData } from './services/underground-leak-detection';
import { wallandceilingleakdetectionDynamicData } from './services/wall-and-ceiling-leak-detection';
import { waterheaterleakdetectionDynamicData } from './services/water-heater-leak-detection';
import { waterlineleakdetectionDynamicData } from './services/water-line-leak-detection';
import { watermainleakdetectionDynamicData } from './services/water-main-leak-detection';
import { watersoftenerleakdetectionDynamicData } from './services/water-softener-leak-detection';

// Legacy services registry (existing structure for backward compatibility)
const LEGACY_SERVICES_REGISTRY: { [key: string]: LegacyServiceData } = {
  // Keep existing legacy services here if any
  // 'legacy-service-slug': legacyServiceData,
};

// New dynamic services registry (new structure)
const SERVICES_DYNAMIC_REGISTRY: { [key: string]: ServiceDynamicData } = {
  'acoustic-leak-detection': acousticleakdetectionDynamicData,
  'backflow-preventer-leak-detection': backflowpreventerleakdetectionDynamicData,
  'bathtub-leak-detection': bathtubleakdetectionDynamicData,
  'boiler-leak-detection': boilerleakdetectionDynamicData,
  'burst-pipe-detection': burstpipedetectionDynamicData,
  'camera-inspection-leak-detection': camerainspectionleakdetectionDynamicData,
  'carbon-monoxide-leak-detection': carbonmonoxideleakdetectionDynamicData,
  'commercial-water-leak-detection': commercialwaterleakdetectionDynamicData,
  'drain-line-leak-detection': drainlineleakdetectionDynamicData,
  'drip-irrigation-leak-detection': dripirrigationleakdetectionDynamicData,
  'ejector-pump-leak-detection': ejectorpumpleakdetectionDynamicData,
  'emergency-leak-detection': emergencyleakdetectionDynamicData,
  'faucet-leak-detection': faucetleakdetectionDynamicData,
  'foundation-leak-detection': foundationleakdetectionDynamicData,
  'garbage-disposal-leak-detection': garbagedisposalleakdetectionDynamicData,
  'gas-line-leak-detection': gaslineleakdetectionDynamicData,
  'hose-bib-leak-detection': hosebibleakdetectionDynamicData,
  'infrared-leak-detection': infraredleakdetectionDynamicData,
  'installation-of-smart-leak-sensors': installationofsmartleaksensorsDynamicData,
  'monitoring-and-maintenance-of-leak-detection-systems': monitoringandmaintenanceofleakdetectionsystemsDynamicData,
  'pipe-leak-detection': pipeleakdetectionDynamicData,
  'pressure-testing': pressuretestingDynamicData,
  'residential-water-leak-detection': residentialwaterleakdetectionDynamicData,
  'roof-leak-detection': roofleakdetectionDynamicData,
  'septic-system-leak-detection': septicsystemleakdetectionDynamicData,
  'sewer-gas-leak-detection': sewergasleakdetectionDynamicData,
  'sewer-line-leak-detection': sewerlineleakdetectionDynamicData,
  'shower-leak-detection': showerleakdetectionDynamicData,
  'sink-leak-detection': sinkleakdetectionDynamicData,
  'slab-leak-detection': slableakdetectionDynamicData,
  'spa-and-hot-tub-leak-detection': spaandhottubleakdetectionDynamicData,
  'sprinkler-system-leak-detection': sprinklersystemleakdetectionDynamicData,
  'subsurface-leak-detection': subsurfaceleakdetectionDynamicData,
  'sump-pump-leak-detection': sumppumpleakdetectionDynamicData,
  'supply-line-leak-detection': supplylineleakdetectionDynamicData,
  'swimming-pool-leak-detection': swimmingpoolleakdetectionDynamicData,
  'thermal-imaging-leak-detection': thermalimagingleakdetectionDynamicData,
  'toilet-leak-detection': toiletleakdetectionDynamicData,
  'underground-leak-detection': undergroundleakdetectionDynamicData,
  'wall-and-ceiling-leak-detection': wallandceilingleakdetectionDynamicData,
  'water-heater-leak-detection': waterheaterleakdetectionDynamicData,
  'water-line-leak-detection': waterlineleakdetectionDynamicData,
  'water-main-leak-detection': watermainleakdetectionDynamicData,
  'water-softener-leak-detection': watersoftenerleakdetectionDynamicData,
  // Add more services here as you create them
};

// Service categories for organization
export const SERVICE_CATEGORIES = {
  RESIDENTIAL: 'Residential',
  COMMERCIAL: 'Commercial', 
  EMERGENCY: 'Emergency',
  SPECIALTY: 'Specialty',
  UNDERGROUND: 'Underground',
  GAS_DETECTION: 'Gas Detection',
  POOL_SPA: 'Pool & Spa',
  TECHNOLOGY: 'Technology Services'
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// ✅ FIXED: Define the correct type inline to avoid import issues
type ServicePlaceholderReplacer = (text: string, serviceName: string, serviceSlug?: string) => string;

// ✅ FIXED: Helper function with correct type signature
export const replaceServicePlaceholders: ServicePlaceholderReplacer = (text: string, serviceName: string, serviceSlug?: string): string => {
  return text
    .replace(/\{serviceName\}/g, serviceName)
    .replace(/\{serviceSlug\}/g, serviceSlug || '');
};

// ✅ FIXED: Helper function to recursively replace placeholders in objects
const replaceObjectPlaceholders = (obj: any, serviceName: string, serviceSlug?: string): any => {
  if (typeof obj === 'string') {
    // ✅ This now matches the function signature exactly
    return replaceServicePlaceholders(obj, serviceName, serviceSlug);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => replaceObjectPlaceholders(item, serviceName, serviceSlug));
  }
  
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = replaceObjectPlaceholders(value, serviceName, serviceSlug);
    }
    return result;
  }
  
  return obj;
};

// Helper function to merge stats from template and static data
const mergeServiceStats = (template: ServiceStaticConfig['staticData']['statsTemplate'], staticStats: ServiceStaticConfig['staticData']['stats'], serviceName: string) => {
  if (!template || !Array.isArray(template)) {
    console.error('Invalid statsTemplate provided to mergeServiceStats');
    return [];
  }
  
  return template.map(stat => ({
    number: staticStats[stat.key as keyof typeof staticStats] || 'N/A',
    label: stat.label || `${serviceName} ${stat.labelSuffix || ''}`.trim(),
    iconName: stat.iconName,
    color: stat.color
  }));
};

// Helper function to merge trust indicators
const mergeServiceTrustIndicators = (template: ServiceStaticConfig['staticData']['trustIndicatorsTemplate'], staticData: ServiceStaticConfig['staticData']['trustIndicators']) => {
  if (!template || !Array.isArray(template)) {
    console.error('Invalid trustIndicatorsTemplate provided to mergeServiceTrustIndicators');
    return [];
  }
  
  return template.map(indicator => ({
    value: staticData[indicator.key as keyof typeof staticData] || 'N/A',
    label: indicator.label
  }));
};

// Helper function to get icon path for related services
const getRelatedServiceIconPath = (service: ServiceDynamicData['relatedServices'][0]): string => {
  // Use custom iconPath if provided in service data
  if (service.iconPath) {
    return service.iconPath;
  }
  
  // Use slug-based mapping from static config
  const iconsBySlug = SERVICE_STATIC_CONFIG.relatedServicesStatic.iconsBySlug;
  if (iconsBySlug[service.slug]) {
    return iconsBySlug[service.slug];
  }
  
  // Fallback to default or generated path
  return SERVICE_STATIC_CONFIG.relatedServicesStatic.defaultIconPath;
};

// Helper function to convert legacy content to new format
const convertLegacyContent = (legacyContent: any): any => {
  if (legacyContent && legacyContent.mainTitle && legacyContent.sections) {
    return {
      introduction: '',
      sections: legacyContent.sections.map((section: any) => ({
        heading2: section.title,
        content: section.content,
        subsections: []
      }))
    };
  }
  return legacyContent;
};

// =============================================================================
// SERVICE MANAGEMENT FUNCTIONS
// =============================================================================

// Main function to get complete service data (handles both legacy and new structure)
export const getServiceData = (slug: string): ServiceData | null => {
  // ✅ FIXED - Removed client-side process.env check that was causing the error
  // Debug logging would go here in development, but we avoid process references

  // Try new dynamic structure first
  const dynamicData = SERVICES_DYNAMIC_REGISTRY[slug];
  if (dynamicData) {
    try {
      // Replace placeholders in static config
      const staticConfigWithPlaceholders = replaceObjectPlaceholders(SERVICE_STATIC_CONFIG, dynamicData.name, dynamicData.slug);

      // Merge stats and trust indicators
      const mergedStats = mergeServiceStats(
        SERVICE_STATIC_CONFIG.staticData.statsTemplate, 
        SERVICE_STATIC_CONFIG.staticData.stats, 
        dynamicData.name
      );
      const mergedTrustIndicators = mergeServiceTrustIndicators(
        SERVICE_STATIC_CONFIG.staticData.trustIndicatorsTemplate, 
        SERVICE_STATIC_CONFIG.staticData.trustIndicators
      );

      // Use static contact if dynamic doesn't exist
      const contact = dynamicData.contact || SERVICE_STATIC_CONFIG.contactTemplate;

      // Merge process steps with static icons
      const mergedProcessSteps = dynamicData.process.steps.map((step, index) => ({
        ...step,
        step: SERVICE_STATIC_CONFIG.processStatic.steps[index]?.step || (index + 1).toString(),
        iconName: SERVICE_STATIC_CONFIG.processStatic.steps[index]?.iconName || 'Settings',
        iconPath: SERVICE_STATIC_CONFIG.processStatic.steps[index]?.iconPath || '/icon/default.svg'
      }));

      // Merge technology tools with static icons
      const mergedTechnologyTools = dynamicData.technology.tools.map((tool, index) => ({
        ...tool,
        iconName: SERVICE_STATIC_CONFIG.technologyStatic.tools[index]?.iconName || 'Settings',
        iconPath: SERVICE_STATIC_CONFIG.technologyStatic.tools[index]?.iconPath || '/icon/default.svg'
      }));

      // Merge related services with proper icon handling
      const mergedRelatedServices = dynamicData.relatedServices.map((service) => ({
        ...service,
        iconPath: getRelatedServiceIconPath(service)
      }));

      // Merge static and dynamic data with proper null checks
      const mergedData: ServiceData = {
        ...dynamicData,
        // Static elements
        ui: staticConfigWithPlaceholders.ui,
        trustPlatforms: staticConfigWithPlaceholders.trustPlatforms,
        
        // Merged hero with safety checks
        hero: {
          title: dynamicData.hero.title,
          subtitle: dynamicData.hero.subtitle,
          description: dynamicData.hero.description,
          badge: dynamicData.hero.badge,
          heroImage: dynamicData.hero.heroImage,
          heroImageAlt: dynamicData.hero.heroImageAlt,
          badgeIcon: {
            src: SERVICE_STATIC_CONFIG.heroStatic.badgeIcon.src.replace('{serviceSlug}', dynamicData.slug),
            alt: SERVICE_STATIC_CONFIG.heroStatic.badgeIcon.alt.replace('{serviceName}', dynamicData.name)
          },
          trustIndicators: SERVICE_STATIC_CONFIG.heroStatic.trustIndicators
        },
        
        // Merged stats and trust indicators
        stats: mergedStats,
        trustIndicators: mergedTrustIndicators,
        
        // Contact
        contact,
        
        // Merged process with static icons
        process: {
          ...dynamicData.process,
          steps: mergedProcessSteps
        },

        // Merged technology with static icons
        technology: {
          ...dynamicData.technology,
          tools: mergedTechnologyTools
        },

        // Merged related services with proper icon paths
        relatedServices: mergedRelatedServices
      };

      return mergedData;
    } catch (error) {
      console.error(`[getServiceData] Error processing dynamic data for service ${slug}:`, error);
      console.error('Dynamic data structure:', JSON.stringify(dynamicData, null, 2));
      return null;
    }
  }

  // Fall back to legacy structure for backward compatibility
  const legacyData = LEGACY_SERVICES_REGISTRY[slug];
  if (legacyData) {
    try {
      // Convert legacy content format to new format if needed
      const convertedContent = convertLegacyContent(legacyData.content);
      
      const convertedLegacyData: ServiceData = {
        ...legacyData,
        content: convertedContent,
        // Ensure all required properties exist
        ui: legacyData.ui || SERVICE_STATIC_CONFIG.ui,
        trustPlatforms: legacyData.trustPlatforms || SERVICE_STATIC_CONFIG.trustPlatforms,
        stats: legacyData.stats || [],
        trustIndicators: legacyData.trustIndicators || [],
        contact: legacyData.contact || SERVICE_STATIC_CONFIG.contactTemplate,
        hero: {
          title: legacyData.hero?.title || '',
          subtitle: legacyData.hero?.subtitle || '',
          description: legacyData.hero?.description || '',
          badge: legacyData.hero?.badge || '',
          heroImage: legacyData.hero?.heroImage || '',
          heroImageAlt: legacyData.hero?.heroImageAlt || '',
          badgeIcon: legacyData.hero?.badgeIcon || SERVICE_STATIC_CONFIG.heroStatic.badgeIcon,
          trustIndicators: legacyData.hero?.trustIndicators || SERVICE_STATIC_CONFIG.heroStatic.trustIndicators
        },
        // Handle other required properties
        testimonials: legacyData.testimonials || [],
        faqs: legacyData.faqs || [],
        relatedServices: legacyData.relatedServices || [],
        pricing: legacyData.pricing || { startingPrice: '', priceRange: '', factors: [] },
        benefits: legacyData.benefits || { environmental: [], financial: [], safety: [] },
        coverage: legacyData.coverage || { propertyTypes: [], leakTypes: [], materials: [] },
        seo: legacyData.seo || {
          metaTitle: '',
          metaDescription: '',
          keywords: [],
          openGraph: {
            title: '',
            description: '',
            image: '',
            imageAlt: '',
            url: '',
            type: 'website',
            siteName: ''
          },
          twitter: {
            card: 'summary_large_image',
            title: '',
            description: '',
            image: '',
            imageAlt: ''
          }
        },
        customSchemas: legacyData.customSchemas || [],
        process: legacyData.process || {
          title: '',
          subtitle: '',
          description: '',
          steps: []
        },
        technology: legacyData.technology || {
          title: '',
          subtitle: '',
          description: '',
          tools: []
        }
      } as ServiceData;
      
      return convertedLegacyData;
    } catch (error) {
      console.error(`[getServiceData] Error processing legacy data for service ${slug}:`, error);
      console.error('Legacy data structure:', JSON.stringify(legacyData, null, 2));
      return null;
    }
  }

  // ✅ FIXED - Removed client-side process.env check
  // In development, we might want to log this, but we avoid process references
  console.warn(`[getServiceData] No data found for service: ${slug}`);
  return null;
};

// [REST OF THE FILE - All other functions remain exactly the same]

// Get dynamic service data only (without static config)
export const getServiceDynamicData = (slug: string): ServiceDynamicData | null => {
  return SERVICES_DYNAMIC_REGISTRY[slug] || null;
};

// Get static config with placeholders replaced for a service
export const getServiceStaticConfig = (serviceName: string, serviceSlug?: string): ServiceStaticConfig => {
  return replaceObjectPlaceholders(SERVICE_STATIC_CONFIG, serviceName, serviceSlug);
};

// Generate static params for all services (for static generation)
export function getAllServiceSlugs(): string[] {
  const dynamicServices = Object.keys(SERVICES_DYNAMIC_REGISTRY);
  const legacyServices = Object.keys(LEGACY_SERVICES_REGISTRY);
  return [...new Set([...dynamicServices, ...legacyServices])];
}

export function getAllServices(): ServiceData[] {
  const serviceList: ServiceData[] = [];
  
  // Get services from dynamic registry
  Object.keys(SERVICES_DYNAMIC_REGISTRY).forEach(serviceSlug => {
    const serviceData = getServiceData(serviceSlug);
    if (serviceData) {
      serviceList.push(serviceData);
    }
  });
  
  // Get services from legacy registry
  Object.keys(LEGACY_SERVICES_REGISTRY).forEach(serviceSlug => {
    // Skip if already added from dynamic registry
    if (!SERVICES_DYNAMIC_REGISTRY[serviceSlug]) {
      const serviceData = getServiceData(serviceSlug);
      if (serviceData) {
        serviceList.push(serviceData);
      }
    }
  });
  
  return serviceList;
}

// =============================================================================
// SEARCH FUNCTIONS
// =============================================================================

export const searchServices = (query: string): ServiceData[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllServices().filter(service => 
    service.name.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.category.toLowerCase().includes(lowercaseQuery) ||
    service.seo.keywords.some(keyword => 
      keyword.toLowerCase().includes(lowercaseQuery)
    )
  );
};

// Get services by category
export const getServicesByCategory = (category: string): ServiceData[] => {
  return getAllServices().filter(service => 
    service.category === category
  );
};

// Get related services (excluding current service)
export const getRelatedServices = (currentSlug: string, limit: number = 6): ServiceData[] => {
  const currentService = getServiceData(currentSlug);
  if (!currentService) return [];

  const otherServices = getAllServices().filter(service => 
    service.slug !== currentSlug
  );

  // Prioritize services in the same category
  const sameCategory = otherServices.filter(service => 
    service.category === currentService.category
  );
  
  const otherCategory = otherServices.filter(service => 
    service.category !== currentService.category
  );

  return [...sameCategory, ...otherCategory].slice(0, limit);
};

// =============================================================================
// VALIDATION FUNCTIONS
// =============================================================================

export const isValidService = (slug: string): boolean => {
  return (SERVICES_DYNAMIC_REGISTRY[slug] !== undefined) || 
         (LEGACY_SERVICES_REGISTRY[slug] !== undefined);
};

// =============================================================================
// STATISTICS FUNCTIONS
// =============================================================================

export const getServiceStats = () => {
  const totalServices = getAllServices().length;
  const servicesByCategory = Object.values(SERVICE_CATEGORIES).map(category => ({
    category,
    count: getServicesByCategory(category).length
  }));

  return {
    totalServices,
    servicesByCategory,
    dynamicServices: Object.keys(SERVICES_DYNAMIC_REGISTRY).length,
    legacyServices: Object.keys(LEGACY_SERVICES_REGISTRY).length
  };
};

// =============================================================================
// SEO HELPER FUNCTIONS
// =============================================================================

export const generateServiceSiteMap = () => {
  const urls: string[] = [];
  
  // Add service URLs
  getAllServiceSlugs().forEach(serviceSlug => {
    urls.push(`/services/${serviceSlug}`);
  });
  
  return urls;
};

export const getServiceMetadata = (serviceSlug: string) => {
  const serviceData = getServiceData(serviceSlug);
  if (!serviceData) return null;
  
  return {
    title: serviceData.seo.metaTitle,
    description: serviceData.seo.metaDescription,
    keywords: serviceData.seo.keywords,
    openGraph: serviceData.seo.openGraph,
    twitter: serviceData.seo.twitter,
    customSchemas: serviceData.customSchemas || [],
  };
};

// =============================================================================
// CUSTOM SCHEMAS UTILITY FUNCTIONS
// =============================================================================

// Get custom schemas for a specific service
export const getServiceCustomSchemas = (serviceSlug: string) => {
  const serviceData = getServiceData(serviceSlug);
  if (!serviceData || !serviceData.customSchemas) return [];
  
  // Sort by priority (lower number = higher priority)
  return serviceData.customSchemas.sort((a, b) => {
    const priorityA = a.priority || 999;
    const priorityB = b.priority || 999;
    return priorityA - priorityB;
  });
};

// Get a specific custom schema by ID
export const getCustomSchemaById = (serviceSlug: string, schemaId: string) => {
  const schemas = getServiceCustomSchemas(serviceSlug);
  return schemas.find(schema => schema.id === schemaId) || null;
};

// Validate custom schema structure
export const validateCustomSchema = (schema: any): boolean => {
  try {
    // Basic validation - ensure it has required fields
    if (!schema.id || typeof schema.id !== 'string') return false;
    if (!schema.schema || typeof schema.schema !== 'object') return false;
    
    // Ensure schema has @context and @type (basic schema.org requirements)
    if (!schema.schema['@context'] || !schema.schema['@type']) return false;
    
    return true;
  } catch (error) {
    return false;
  }
};

// Get all custom schemas across all services (for debugging/analysis)
export const getAllCustomSchemas = () => {
  const allSchemas: Array<{
    serviceSlug: string;
    serviceName: string;
    schemas: NonNullable<ServiceData['customSchemas']>;
  }> = [];
  
  getAllServices().forEach(serviceData => {
    if (serviceData.customSchemas && serviceData.customSchemas.length > 0) {
      allSchemas.push({
        serviceSlug: serviceData.slug,
        serviceName: serviceData.name,
        schemas: serviceData.customSchemas
      });
    }
  });
  
  return allSchemas;
};

// Generate schema markup as string (useful for debugging)
export const generateSchemaMarkup = (serviceSlug: string): string[] => {
  const schemas = getServiceCustomSchemas(serviceSlug);
  return schemas.map(schema => 
    `<script type="application/ld+json">\n${JSON.stringify(schema.schema, null, 2)}\n</script>`
  );
};

// Count custom schemas for a service
export const getCustomSchemaCount = (serviceSlug: string): number => {
  const serviceData = getServiceData(serviceSlug);
  return serviceData?.customSchemas?.length || 0;
};

// Get custom schemas by type (e.g., 'LocalBusiness', 'Service', 'FAQPage')
export const getCustomSchemasByType = (serviceSlug: string, schemaType: string) => {
  const schemas = getServiceCustomSchemas(serviceSlug);
  return schemas.filter(schema => {
    // Handle both direct @type and @graph array
    if (schema.schema['@type'] === schemaType) return true;
    if (schema.schema['@graph'] && Array.isArray(schema.schema['@graph'])) {
      return schema.schema['@graph'].some((item: any) => item['@type'] === schemaType);
    }
    return false;
  });
};

// Helper to create a new custom schema object (for type safety)
export const createCustomSchema = (
  id: string,
  schema: Record<string, any>,
  options?: {
    name?: string;
    priority?: number;
  }
): NonNullable<ServiceData['customSchemas']>[0] => {
  return {
    id,
    schema,
    name: options?.name,
    priority: options?.priority
  };
};

// Get popular services (you can customize this logic)
export const getPopularServices = (limit: number = 8): ServiceData[] => {
  // For now, return first services, but you could add popularity logic
  return getAllServices().slice(0, limit);
};

// Get emergency services
export const getEmergencyServices = (): ServiceData[] => {
  return getServicesByCategory(SERVICE_CATEGORIES.EMERGENCY);
};

// Get services that support a specific leak type
export const getServicesByLeakType = (leakType: string): ServiceData[] => {
  return getAllServices().filter(service =>
    service.coverage.leakTypes.some(type => 
      type.toLowerCase().includes(leakType.toLowerCase())
    )
  );
};

// Get services for specific property type
export const getServicesByPropertyType = (propertyType: string): ServiceData[] => {
  return getAllServices().filter(service =>
    service.coverage.propertyTypes.some(type => 
      type.toLowerCase().includes(propertyType.toLowerCase())
    )
  );
};

// =============================================================================
// UTILITY FUNCTIONS FOR ADDING NEW DATA (RUNTIME)
// =============================================================================

export const addServiceDynamicData = (slug: string, data: ServiceDynamicData) => {
  SERVICES_DYNAMIC_REGISTRY[slug] = data;
};

export const removeServiceData = (slug: string) => {
  if (SERVICES_DYNAMIC_REGISTRY[slug]) {
    delete SERVICES_DYNAMIC_REGISTRY[slug];
  }
  if (LEGACY_SERVICES_REGISTRY[slug]) {
    delete LEGACY_SERVICES_REGISTRY[slug];
  }
};

// =============================================================================
// BULK OPERATIONS
// =============================================================================

export const bulkAddServices = (services: { [slug: string]: ServiceDynamicData }) => {
  Object.entries(services).forEach(([slug, data]) => {
    SERVICES_DYNAMIC_REGISTRY[slug] = data;
  });
};

// =============================================================================
// DEVELOPMENT & DEBUGGING UTILITIES
// =============================================================================

export const getServiceRegistryStats = () => {
  return {
    dynamicServices: Object.keys(SERVICES_DYNAMIC_REGISTRY).length,
    legacyServices: Object.keys(LEGACY_SERVICES_REGISTRY).length,
    totalServices: getAllServiceSlugs().length
  };
};

export const validateServiceDataIntegrity = () => {
  const issues: string[] = [];
  
  // Check for services without any data
  const allServiceSlugs = getAllServiceSlugs();
  allServiceSlugs.forEach(slug => {
    const serviceData = getServiceData(slug);
    if (!serviceData) {
      issues.push(`Service ${slug} has no data`);
    }
  });
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

// Export types for use in components
export type { ServiceData, ServiceDynamicData, ServiceStaticConfig, LegacyServiceData } from './types';