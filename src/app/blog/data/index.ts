// src/app/blog/data/index.ts

import { BlogPost, BlogAuthor, BlogCategory, TocItem, RelatedPostsConfig } from './types';

// ============================================================================
// BLOG POSTS IMPORTS - Add new blog posts here
// ============================================================================
// Import all blog posts
import { AcousticLeakDetectionFindHiddenLeaks } from './posts/acoustic-leak-detection';
import { automaticleakdetection } from './posts/automatic-leak-detection';
import { automotiveleakdetectionguide } from './posts/automotive-leak-detection';
import { BasementLeakDetectionSteps } from './posts/basement-leak-detection';
import { bathroomLeakDetectionGuide } from './posts/bathroom-leak-detection';
import { bestleakdetectionmethod } from './posts/best-leak-detection-method';
import { bubbleSolutionForLeakDetectionGuide } from './posts/bubble-solution-for-leak-detection';
import { cctvwaterpipeleakdetectionguide } from './posts/cctv-water-pipe-leak-detection';
import { ceilingLeakDetectionMethods } from './posts/ceiling-leak-detection';
import { commonwaterleaks } from './posts/common-water-leaks';
import { CrawlSpaceLeakDetectionFindFixLeaks } from './posts/crawl-space-leak-detection';
import { diyLeakDetectionHomeLeaks } from './posts/diy-leak-detection';
import { dyeTestingLeakDetection } from './posts/dye-testing-leak-detection';
import { earlyLeakDetectionFindFixLeaks } from './posts/early-leak-detection';
import { electronicleakdetection } from './posts/electronic-leak-detection';
import { fiberOpticLeakDetectionHomeGuide } from './posts/fiber-optic-leak-detection';
import { FireSprinklerLeakDetectionHowToFindAndFixLeaks } from './posts/fire-sprinkler-leak-detection';
import { fluorescentDyeLeakDetectionGuide } from './posts/fluorescent-dye-leak-detection';
import { foundationleakdetectionguide } from './posts/foundation-leak-detection';
import { gasleakdetection } from './posts/gas-leak-detection';
import { HeliumLeakDetectionHowToFindAndFixLeaks } from './posts/helium-leak-detection';
import { howtofindhiddenwaterleaks } from './posts/Hidden-leak-detection';
import { howdoesleakdetectionwork } from './posts/how-does-leak-detection-work';
import { howtodetectleaks } from './posts/how-to-detect-leaks';
import { hvacleakdetectionguide } from './posts/hvac-leak-detection';
import { HydrostaticLeakTestingAClearHowToGuide } from './posts/hydrostatic-leak-testing';
import { infraredcameragasleakdetection } from './posts/infrared-camera-gas-leak-detection';
import { infraredLeakDetectionGuide } from './posts/infrared-leak-detection';
import { irrigationleakdetectioneasystepstofindleaks } from './posts/irrigation-leak-detection';
import { Kitchenleakdetectionfindandfixleaksquickly } from './posts/kitchen-leak-detection';
import { leakdetectionmethods } from './posts/leak-detection-methods';
import { leakdetectionprocess } from './posts/leak-detection-process';
import { leakdetectiontechniques } from './posts/leak-detection-techniques';
import { leakdetectiontechnologyEasyHomeTestsandTips } from './posts/leak-detection-technology';
import { leakdetectiontrainingguide } from './posts/leak-detection-training';
import { leakmonitoringsystemasimplehomeguide } from './posts/leak-monitoring-system';
import { leakpreventiontipsEasywaystoavoidwaterleaks } from './posts/leak-prevention-tips';
import { EasyGuideToLidarLeakDetection } from './posts/lidar-leak-detection';
import { marineleakdetectionguide } from './posts/marine-leak-detection';
import { methaneLeakDetectionGuide } from './posts/methane-leak-detection';
import { OilAndGasLeakDetectionHomeGuide } from './posts/oil-and-gas-leak-detection';
import { pharmaceuticalleakdetectionguide } from './posts/pharmaceutical-leak-detection';
import { PinholeLeakDetectionSpotTinyLeaks } from './posts/pinhole-leak-detection';
import { PipeleakdetectionFindandfixsmallleaks } from './posts/pipe-leak-detection';
import { pipelineleakdetectionguide } from './posts/pipeline-leak-detection';
import { plumbingLeakDetectionHomeGuide } from './posts/plumbing-leak-detection';
import { poolLeakDetectionHomeGuide } from './posts/pool-leak-detection';
import { RefrigerantLeakDetectionSpotAndFixHomeACLLeaks } from './posts/refrigerant-leak-detection';
import { roofLeakDetectionEasyGuide } from './posts/roof-leak-detection';
import { sewerleakdetectioneasywaystofindhiddenleaks } from './posts/sewer-leak-detection';
import { SignsOfWaterLeak } from './posts/signs-of-water-leak';
import { slableakdetectionfindtestleaks } from './posts/slab-leak-detection';
import { smartHomeLeakDetectionGuide } from './posts/smart-home-leak-detection';
import { smartLeakDetectionSpotStopHiddenLeaks } from './posts/smart-leak-detection';
import { smokeTestLeakDetectionGuide } from './posts/smoke-test-leak-detection';
import { sprinklerleakdetectionguide } from './posts/sprinkler-leak-detection';
import { thermalImagingLeakDetectionGuide } from './posts/thermal-imaging-leak-detection';
import { tracerGasLeakDetection } from './posts/tracer-gas-leak-detection';
import { ultrasonicflowmeterleakdetection } from './posts/ultrasonic-flow-meter-leak-detection';
import { ultrasonicLeakDetectionGuide } from './posts/ultrasonic-leak-detection';
import { undergroundLeakDetectionFindLeaks } from './posts/underground-leak-detection';
import { wallleakdetectionguide } from './posts/wall-leak-detection';
import { waterleakdetectionhomeguide } from './posts/water-leak-detection';
import { whatIsAcousticLeakDetection } from './posts/what-is-acoustic-leak-detection';
import { wholehouseleakdetectionsystemguide } from './posts/whole-house-leak-detection-system';
import { wifiWaterLeakDetectionSetupTips } from './posts/wifi-water-leak-detection';
import { wirelessLeakDetectionHomeGuide } from './posts/wireless-leak-detection';

// To add a new blog post:
// 1. Import it above: import { yourPostName } from './posts/your-post-file';
// 2. Add it to the BLOG_POSTS array below

// ============================================================================
// BLOG POSTS ARRAY - Add imported posts here
// ============================================================================
const BLOG_POSTS: BlogPost[] = [
  AcousticLeakDetectionFindHiddenLeaks,
  automaticleakdetection,
  automotiveleakdetectionguide,
  BasementLeakDetectionSteps,
  bathroomLeakDetectionGuide,
  bestleakdetectionmethod,
  bubbleSolutionForLeakDetectionGuide,
  cctvwaterpipeleakdetectionguide,
  ceilingLeakDetectionMethods,
  commonwaterleaks,
  CrawlSpaceLeakDetectionFindFixLeaks,
  diyLeakDetectionHomeLeaks,
  dyeTestingLeakDetection,
  earlyLeakDetectionFindFixLeaks,
  electronicleakdetection,
  fiberOpticLeakDetectionHomeGuide,
  FireSprinklerLeakDetectionHowToFindAndFixLeaks,
  fluorescentDyeLeakDetectionGuide,
  foundationleakdetectionguide,
  gasleakdetection,
  HeliumLeakDetectionHowToFindAndFixLeaks,
  howtofindhiddenwaterleaks,
  howdoesleakdetectionwork,
  howtodetectleaks,
  hvacleakdetectionguide,
  HydrostaticLeakTestingAClearHowToGuide,
  infraredcameragasleakdetection,
  infraredLeakDetectionGuide,
  irrigationleakdetectioneasystepstofindleaks,
  Kitchenleakdetectionfindandfixleaksquickly,
  leakdetectionmethods,
  leakdetectionprocess,
  leakdetectiontechniques,
  leakdetectiontechnologyEasyHomeTestsandTips,
  leakdetectiontrainingguide,
  leakmonitoringsystemasimplehomeguide,
  leakpreventiontipsEasywaystoavoidwaterleaks,
  EasyGuideToLidarLeakDetection,
  marineleakdetectionguide,
  methaneLeakDetectionGuide,
  OilAndGasLeakDetectionHomeGuide,
  pharmaceuticalleakdetectionguide,
  PinholeLeakDetectionSpotTinyLeaks,
  PipeleakdetectionFindandfixsmallleaks,
  pipelineleakdetectionguide,
  plumbingLeakDetectionHomeGuide,
  poolLeakDetectionHomeGuide,
  RefrigerantLeakDetectionSpotAndFixHomeACLLeaks,
  roofLeakDetectionEasyGuide,
  sewerleakdetectioneasywaystofindhiddenleaks,
  SignsOfWaterLeak,
  slableakdetectionfindtestleaks,
  smartHomeLeakDetectionGuide,
  smartLeakDetectionSpotStopHiddenLeaks,
  smokeTestLeakDetectionGuide,
  sprinklerleakdetectionguide,
  thermalImagingLeakDetectionGuide,
  tracerGasLeakDetection,
  ultrasonicflowmeterleakdetection,
  ultrasonicLeakDetectionGuide,
  undergroundLeakDetectionFindLeaks,
  wallleakdetectionguide,
  waterleakdetectionhomeguide,
  whatIsAcousticLeakDetection,
  wholehouseleakdetectionsystemguide,
  wifiWaterLeakDetectionSetupTips,
  wirelessLeakDetectionHomeGuide,  
];

// ============================================================================
// CONTENT PROCESSING UTILITIES
// ============================================================================
export class ContentProcessor {
  // Generate slug from text
  static generateSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  }

  // Auto-generate TOC from H2 headers in content
  static generateToc(content: string): TocItem[] {
    const toc: TocItem[] = [];
    
    // Regex to find H2 tags and their content
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
    let match;
    
    while ((match = h2Regex.exec(content)) !== null) {
      const text = match[1]
        .replace(/<[^>]*>/g, '') // Remove any HTML tags within the heading
        .trim();
      
      if (text) {
        const id = this.generateSlug(text);
        toc.push({
          id,
          text,
          level: 1 // We're only using H2s as level 1 for simplicity
        });
      }
    }
    
    return toc;
  }

  // Process content to add IDs to H2 headers
  static processContent(content: string): string {
    return content.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attributes, text) => {
      // Clean text for ID generation
      const cleanText = text.replace(/<[^>]*>/g, '').trim();
      const id = this.generateSlug(cleanText);
      
      // Check if ID already exists in attributes
      if (attributes.includes('id=')) {
        return match; // Keep existing ID
      }
      
      return `<h2${attributes} id="${id}">${text}</h2>`;
    });
  }

  // Process a blog post to add auto-generated TOC and IDs
  static processBlogPost(post: BlogPost): BlogPost {
    const processedContent = this.processContent(post.content);
    const autoToc = this.generateToc(processedContent);
    
    return {
      ...post,
      content: processedContent,
      toc: autoToc
    };
  }
}

// ============================================================================
// ADVANCED RELATED POSTS ENGINE
// ============================================================================
export class RelatedPostsEngine {
  private static defaultConfig: RelatedPostsConfig = {
    categoryWeight: 40,
    tagWeight: 30,
    dateWeight: 20,
    authorWeight: 10
  };

  // Calculate similarity score between two posts
  static calculateSimilarity(
    currentPost: BlogPost, 
    candidatePost: BlogPost, 
    config: RelatedPostsConfig = this.defaultConfig
  ): number {
    let score = 0;

    // Category matching (highest weight)
    if (currentPost.category && candidatePost.category) {
      if (currentPost.category === candidatePost.category) {
        score += config.categoryWeight;
      }
    }

    // Tag matching
    const currentTags = currentPost.tags.map(tag => tag.toLowerCase());
    const candidateTags = candidatePost.tags.map(tag => tag.toLowerCase());
    const tagIntersection = currentTags.filter(tag => candidateTags.includes(tag));
    const tagScore = (tagIntersection.length / Math.max(currentTags.length, candidateTags.length)) * config.tagWeight;
    score += tagScore;

    // Date proximity (recent posts get slight boost)
    const currentDate = new Date(currentPost.date);
    const candidateDate = new Date(candidatePost.date);
    const daysDiff = Math.abs(currentDate.getTime() - candidateDate.getTime()) / (1000 * 60 * 60 * 24);
    const dateScore = Math.max(0, (365 - daysDiff) / 365) * config.dateWeight;
    score += dateScore;

    // Author matching
    if (currentPost.author === candidatePost.author) {
      score += config.authorWeight;
    }

    return score;
  }

  // Get related posts with advanced scoring
  static getRelatedPosts(
    currentPostSlug: string, 
    allPosts: BlogPost[], 
    limit: number = 6,
    config?: RelatedPostsConfig
  ): BlogPost[] {
    const currentPost = allPosts.find(post => post.slug === currentPostSlug);
    if (!currentPost) return [];

    const scoredPosts = allPosts
      .filter(post => post.slug !== currentPostSlug)
      .map(post => ({
        post,
        score: this.calculateSimilarity(currentPost, post, config)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.post);

    return scoredPosts;
  }

  // Get posts by category with similarity scoring
  static getPostsByCategory(
    categorySlug: string, 
    allPosts: BlogPost[], 
    excludeSlug?: string,
    limit?: number
  ): BlogPost[] {
    let posts = allPosts.filter(post => {
      const postCategorySlug = post.category?.toLowerCase().replace(/\s+/g, '-');
      return postCategorySlug === categorySlug && post.slug !== excludeSlug;
    });

    if (limit) {
      posts = posts.slice(0, limit);
    }

    return posts;
  }

  // Get posts by tag with relevance scoring
  static getPostsByTag(
    tag: string, 
    allPosts: BlogPost[], 
    excludeSlug?: string,
    limit?: number
  ): BlogPost[] {
    let posts = allPosts.filter(post => 
      post.tags.some(postTag => 
        postTag.toLowerCase() === tag.toLowerCase()
      ) && post.slug !== excludeSlug
    );

    if (limit) {
      posts = posts.slice(0, limit);
    }

    return posts;
  }
}

// ============================================================================
// BULK CONTENT MANAGEMENT UTILITIES
// ============================================================================
export class BulkContentManager {
  // Process multiple blog posts
  static processBulkPosts(posts: BlogPost[]): BlogPost[] {
    return posts.map(post => ContentProcessor.processBlogPost(post));
  }

  // Validate blog post structure
  static validatePost(post: Partial<BlogPost>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!post.title?.trim()) errors.push('Title is required');
    if (!post.slug?.trim()) errors.push('Slug is required');
    if (!post.content?.trim()) errors.push('Content is required');
    if (!post.author?.trim()) errors.push('Author is required');
    if (!post.date) errors.push('Date is required');
    if (!post.excerpt?.trim()) errors.push('Excerpt is required');
    if (!post.tags || post.tags.length === 0) errors.push('At least one tag is required');

    // Validate date format
    if (post.date && isNaN(Date.parse(post.date))) {
      errors.push('Invalid date format');
    }

    // Validate slug format
    if (post.slug && !/^[a-z0-9-]+$/.test(post.slug)) {
      errors.push('Slug must contain only lowercase letters, numbers, and hyphens');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Generate post template
  static generatePostTemplate(
    title: string, 
    author: string = 'Expert Team',
    category: string = 'Guides'
  ): Partial<BlogPost> {
    const slug = ContentProcessor.generateSlug(title);
    const currentDate = new Date().toISOString().split('T')[0];

    return {
      slug,
      title,
      excerpt: '', // To be filled
      content: '', // To be filled
      author,
      date: currentDate,
      imageUrl: '', // To be filled
      tags: [], // To be filled
      category,
      readingTime: 5, // Default
      dataAiHint: '' // To be filled
    };
  }

  // Extract reading time from content
  static calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    const wordCount = textContent.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }

  // Calculate word count
  static calculateWordCount(content: string): number {
    const textContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    return textContent.split(/\s+/).filter(word => word.length > 0).length;
  }
}

// ============================================================================
// PROCESSED BLOG POSTS - Auto-process all posts
// ============================================================================
const processedPosts = BulkContentManager.processBulkPosts(BLOG_POSTS.map(post => ({
  ...post,
  wordCount: post.wordCount || BulkContentManager.calculateWordCount(post.content),
  readingTime: post.readingTime || BulkContentManager.calculateReadingTime(post.content)
})));

// Export the processed blog posts
export const blogPosts: BlogPost[] = processedPosts;

// ============================================================================
// BLOG AUTHORS WITH ENHANCED DATA
// ============================================================================
export const blogAuthors: BlogAuthor[] = [
  {
    name: 'Sarah Mitchell',
    bio: 'Senior Leak Detection Specialist with over 12 years of experience in residential and commercial water damage prevention. Expert in advanced detection technologies and emergency response procedures.',
    avatar: '/images/authors/sarah-mitchell.jpg',
    title: 'Senior Leak Detection Expert',
    rating: 4.9,
    socialMedia: {
      twitter: '@sarahmitchell_expert',
      linkedin: 'https://linkedin.com/in/sarah-mitchell-leak-expert',
      website: 'https://sarahmitchell.expert'
    }
  },
  {
    name: 'Michael Chen',
    bio: 'Technology specialist focusing on smart home water monitoring systems and IoT leak detection devices. Expert in home automation and digital water management solutions.',
    avatar: '/images/authors/michael-chen.jpg',
    title: 'Smart Home Technology Expert',
    rating: 4.8,
    socialMedia: {
      twitter: '@michaelchen_tech',
      linkedin: 'https://linkedin.com/in/michael-chen-smarthome',
      website: 'https://smarthometech.expert'
    }
  },
  {
    name: 'David Rodriguez',
    bio: 'Licensed plumber and home maintenance expert with expertise in preventive care and emergency response. Certified in advanced leak detection methods and pipe repair techniques.',
    avatar: '/images/authors/david-rodriguez.jpg',
    title: 'Licensed Plumbing Professional',
    rating: 4.9,
    socialMedia: {
      linkedin: 'https://linkedin.com/in/david-rodriguez-plumber'
    }
  },
  {
    name: 'Jennifer Walsh',
    bio: 'Insurance claims specialist helping homeowners navigate water damage claims and maximize coverage. Expert in damage assessment and claim documentation best practices.',
    avatar: '/images/authors/jennifer-walsh.jpg',
    title: 'Insurance Claims Expert',
    rating: 4.7,
    socialMedia: {
      linkedin: 'https://linkedin.com/in/jennifer-walsh-insurance'
    }
  },
  {
    name: 'Discount Leak Detection',
    bio: 'Professional leak detection service team with decades of combined experience. Specialists in advanced leak detection technology and comprehensive property protection solutions.',
    avatar: '/images/authors/discount-leak-detection-team.jpg',
    title: 'Professional Leak Detection Team',
    rating: 4.9,
    socialMedia: {
      twitter: '@DiscountLeak',
      linkedin: 'https://linkedin.com/company/discount-leak-detection',
      website: 'https://discountleakdetection.com'
    }
  }
];

// ============================================================================
// BLOG CATEGORIES WITH ENHANCED DESCRIPTIONS
// ============================================================================
export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Detection Guides',
    slug: 'detection-guides',
    description: 'Comprehensive guides for detecting and locating water leaks using professional techniques',
    color: 'blue'
  },
  {
    id: '2',
    name: 'Technology Reviews',
    slug: 'technology-reviews',
    description: 'Reviews of the latest leak detection technology and smart home devices',
    color: 'purple'
  },
  {
    id: '3',
    name: 'Emergency Guides',
    slug: 'emergency-guides',
    description: 'Step-by-step emergency response procedures for water damage',
    color: 'red'
  },
  {
    id: '4',
    name: 'Maintenance Guides',
    slug: 'maintenance-guides',
    description: 'Preventive maintenance tips and seasonal care instructions',
    color: 'green'
  },
  {
    id: '5',
    name: 'Insurance & Legal',
    slug: 'insurance-legal',
    description: 'Insurance claims guidance and legal aspects of water damage',
    color: 'yellow'
  },
  {
    id: '6',
    name: 'Professional Services',
    slug: 'professional-services',
    description: 'Information about professional leak detection and repair services',
    color: 'indigo'
  },
  {
    id: '7',
    name: 'Leak Detection',
    slug: 'leak-detection',
    description: 'Advanced leak detection methods and techniques for all types of properties',
    color: 'teal'
  }
];

// ============================================================================
// UTILITY FUNCTIONS USING NEW ENGINES
// ============================================================================
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (categorySlug: string, excludeSlug?: string, limit?: number): BlogPost[] => {
  return RelatedPostsEngine.getPostsByCategory(categorySlug, blogPosts, excludeSlug, limit);
};

export const getPostsByTag = (tag: string, excludeSlug?: string, limit?: number): BlogPost[] => {
  return RelatedPostsEngine.getPostsByTag(tag, blogPosts, excludeSlug, limit);
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getRelatedPosts = (currentPostSlug: string, limit: number = 6): BlogPost[] => {
  return RelatedPostsEngine.getRelatedPosts(currentPostSlug, blogPosts, limit);
};

// SEO utility function to get author by name
export const getAuthorByName = (name: string): BlogAuthor | undefined => {
  return blogAuthors.find(author => author.name === name);
};

// Utility to get all authors
export const getAllAuthors = (): BlogAuthor[] => {
  return blogAuthors;
};

// Utility to get all categories
export const getAllCategories = (): BlogCategory[] => {
  return blogCategories;
};

// Export specific posts for easy access (optional)
export { AcousticLeakDetectionFindHiddenLeaks, automaticleakdetection };

// Note: Utility classes are already exported above with their class declarations