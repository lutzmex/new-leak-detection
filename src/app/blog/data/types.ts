// src/app/blog/data/types.ts

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface CustomSchema {
  id: string;
  name: string;
  priority: number;
  description: string;
  schema: Record<string, any>;
}

export interface OpenGraphData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  type: string;
  siteName: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export interface TwitterCardData {
  card: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  creator?: string;
  site?: string;
}

export interface BlogSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  robots: string;
  openGraph: OpenGraphData;
  twitter: TwitterCardData;
}

export interface PerformanceMetrics {
  engagementFactors: string[];
  shareabilityScore: string[];
  contentDepth: string[];
  userValue: string[];
}

export interface ContentCoverage {
  topicAreas: string[];
  skillLevels: string[];
  contentTypes: string[];
  industryRelevance: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  publishedTime?: string;
  modifiedTime?: string;
  imageUrl: string;
  imageAlt?: string;
  category?: string;
  tags: string[];
  readingTime?: number;
  wordCount?: number;
  dataAiHint?: string;
  toc?: TocItem[];
  
  // Enhanced fields
  performance?: PerformanceMetrics;
  coverage?: ContentCoverage;
  
  // SEO Configuration
  seo?: BlogSEO;
  customSchemas?: CustomSchema[];
}

export interface BlogAuthor {
  name: string;
  bio: string;
  avatar: string;
  title: string;
  rating: number;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultImage: string;
  twitterHandle: string;
  organizationName: string;
  organizationLogo: string;
}

// Utility interfaces for content management
export interface ContentProcessor {
  generateToc: (content: string) => TocItem[];
  processContent: (content: string) => string;
  generateSlug: (text: string) => string;
}

export interface RelatedPostsConfig {
  categoryWeight: number;
  tagWeight: number;
  dateWeight: number;
  authorWeight: number;
}