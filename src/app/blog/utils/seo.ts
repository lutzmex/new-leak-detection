// src/app/blog/utils/seo.ts

import { BlogPost, BlogAuthor, BlogSEO, CustomSchema } from '../data/types';

export class BlogSEOGenerator {
  private static siteConfig = {
    siteName: 'Discount Leak Detection',
    siteUrl: 'https://discountleakdetection.com',
    defaultImage: 'https://discountleakdetection.com/images/default-blog-image.jpg',
    twitterHandle: '@discountleak',
    organizationName: 'Discount Leak Detection',
    organizationLogo: 'https://discountleakdetection.com/logo.png'
  };

  // Generate complete SEO data for a blog post
  static generateCompleteSEO(post: BlogPost, author: BlogAuthor): BlogSEO {
    // Use post's custom SEO if available, otherwise generate default
    if (post.seo) {
      return post.seo;
    }

    // Generate default SEO
    const baseUrl = this.siteConfig.siteUrl;
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const imageUrl = post.imageUrl || this.siteConfig.defaultImage;

    return {
      metaTitle: `${post.title} | ${this.siteConfig.siteName}`,
      metaDescription: post.excerpt,
      keywords: post.tags,
      canonicalUrl: postUrl,
      robots: 'index, follow',
      openGraph: {
        title: post.title,
        description: post.excerpt,
        image: imageUrl,
        imageAlt: post.imageAlt || post.title,
        url: postUrl,
        type: 'article',
        siteName: this.siteConfig.siteName,
        publishedTime: post.publishedTime || post.date,
        modifiedTime: post.modifiedTime || post.date,
        author: author.name,
        section: post.category || 'Blog',
        tags: post.tags
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        image: imageUrl,
        imageAlt: post.imageAlt || post.title,
        creator: author.socialMedia?.twitter || this.siteConfig.twitterHandle,
        site: this.siteConfig.twitterHandle
      }
    };
  }

  // Generate all schema markups for a post
  static generateAllSchemas(post: BlogPost, author: BlogAuthor): { id: string; data: any }[] {
    const schemas: { id: string; data: any }[] = [];

    // Use custom schemas if available
    if (post.customSchemas && post.customSchemas.length > 0) {
      // Sort by priority and convert to the expected format
      const sortedSchemas = post.customSchemas
        .sort((a, b) => a.priority - b.priority)
        .map(schema => ({
          id: schema.id,
          data: schema.schema
        }));
      
      schemas.push(...sortedSchemas);
    } else {
      // Generate default schemas
      schemas.push(
        { id: 'article', data: this.generateArticleSchema(post, author) },
        { id: 'breadcrumb', data: this.generateBreadcrumbSchema(post) },
        { id: 'organization', data: this.generateOrganizationSchema() }
      );
    }

    return schemas;
  }

  // Generate default Article schema
  private static generateArticleSchema(post: BlogPost, author: BlogAuthor) {
    const baseUrl = this.siteConfig.siteUrl;
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const imageUrl = post.imageUrl || this.siteConfig.defaultImage;

    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt,
      "image": {
        "@type": "ImageObject",
        "url": imageUrl,
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Person",
        "name": author.name,
        "url": author.socialMedia?.website || `${baseUrl}/authors/${author.name.toLowerCase().replace(/\s+/g, '-')}`
      },
      "publisher": {
        "@type": "Organization",
        "name": this.siteConfig.organizationName,
        "logo": {
          "@type": "ImageObject",
          "url": this.siteConfig.organizationLogo
        }
      },
      "datePublished": post.publishedTime || post.date,
      "dateModified": post.modifiedTime || post.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": postUrl
      },
      "wordCount": post.wordCount,
      "timeRequired": `PT${post.readingTime || 5}M`,
      "keywords": post.tags.join(', '),
      "articleSection": post.category || 'Blog',
      "isAccessibleForFree": true
    };
  }

  // Generate Breadcrumb schema
  private static generateBreadcrumbSchema(post: BlogPost) {
    const baseUrl = this.siteConfig.siteUrl;
    
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      }
    ];

    if (post.category) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 3,
        "name": post.category,
        "item": `${baseUrl}/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`
      });
    }

    breadcrumbs.push({
      "@type": "ListItem",
      "position": breadcrumbs.length + 1,
      "name": post.title,
      "item": `${baseUrl}/blog/${post.slug}`
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };
  }

  // Generate Organization schema
  private static generateOrganizationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": this.siteConfig.organizationName,
      "url": this.siteConfig.siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": this.siteConfig.organizationLogo
      }
    };
  }

  // Generate WebPage schema
  private static generateWebPageSchema(post: BlogPost) {
    const baseUrl = this.siteConfig.siteUrl;
    const postUrl = `${baseUrl}/blog/${post.slug}`;

    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": postUrl,
      "url": postUrl,
      "name": post.title,
      "description": post.excerpt,
      "isPartOf": {
        "@type": "WebSite",
        "@id": this.siteConfig.siteUrl,
        "url": this.siteConfig.siteUrl,
        "name": this.siteConfig.siteName
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": post.imageUrl || this.siteConfig.defaultImage
      },
      "datePublished": post.publishedTime || post.date,
      "dateModified": post.modifiedTime || post.date
    };
  }
}