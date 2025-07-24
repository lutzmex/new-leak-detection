// src/app/blog/[slug]/page.tsx - Next.js 15 Compatible with Clean Typography

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import { BlogPostTemplate } from '../components/BlogPostTemplate';
import { blogPosts, blogAuthors, getPostBySlug } from '../data/index';
import { BlogSEOGenerator } from '../utils/seo';
import { BlogPost, BlogAuthor } from '../data/types';

// Font Configuration - Clean & Modern Approach
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], // Light to medium weights only
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
});

// Technical/monospace font for numbers, phone numbers, codes
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  preload: false,
  fallback: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'monospace'],
  adjustFontFallback: true,
});

// Next.js 15: params is now a Promise
interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO - Now async and awaits params
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  // Await the params promise
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  const author = blogAuthors.find(a => a.name === post.author) || blogAuthors[0];
  const seoData = BlogSEOGenerator.generateCompleteSEO(post, author);

  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.robots,
    authors: [{ name: author.name }],
    
    openGraph: {
      title: seoData.openGraph.title,
      description: seoData.openGraph.description,
      url: seoData.openGraph.url,
      siteName: seoData.openGraph.siteName,
      images: [
        {
          url: seoData.openGraph.image,
          width: 1200,
          height: 630,
          alt: seoData.openGraph.imageAlt,
        }
      ],
      type: 'article',
      publishedTime: seoData.openGraph.publishedTime,
      modifiedTime: seoData.openGraph.modifiedTime,
      authors: [author.name],
      section: seoData.openGraph.section,
      tags: seoData.openGraph.tags,
    },
    
    twitter: {
      card: 'summary_large_image',
      title: seoData.twitter.title,
      description: seoData.twitter.description,
      images: [seoData.twitter.image],
      creator: seoData.twitter.creator,
      site: seoData.twitter.site,
    },
    
    alternates: {
      canonical: seoData.canonicalUrl,
    },
    
    // Additional metadata
    category: post.category,
    classification: 'Blog Post',
    
    other: {
      'article:author': author.name,
      'article:published_time': post.publishedTime || post.date,
      'article:modified_time': post.modifiedTime || post.date,
      'article:section': post.category || 'Blog',
      'article:tag': post.tags.join(', '),
      'reading-time': `${post.readingTime || 5} minutes`,
      'word-count': post.wordCount?.toString() || 'Unknown',
    }
  };
}

// Schema Script Component
function SchemaScript({ post, author }: { post: BlogPost; author: BlogAuthor }) {
  const schemas = BlogSEOGenerator.generateAllSchemas(post, author);
  
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema.data)
          }}
        />
      ))}
    </>
  );
}

// Main component - Now async and awaits params with Font Wrapper
export default async function BlogPage({ params }: BlogPageProps) {
  // Await the params promise
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const author = blogAuthors.find(a => a.name === post.author) || blogAuthors[0];

  return (
    <>
      {/* Schema Markup */}
      <SchemaScript post={post} author={author} />
      
      {/* Font wrapper with Clean Typography */}
      <div 
        className={`${poppins.variable} ${ibmPlexMono.variable}`}
        style={{
          fontFamily: poppins.style.fontFamily,
          fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* Blog Post Content */}
        <BlogPostTemplate post={post} allPosts={blogPosts} />
      </div>
    </>
  );
}