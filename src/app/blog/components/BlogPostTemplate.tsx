// src/app/blog/components/BlogPostTemplate.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../data/types';
import { 
  HomeIcon, 
  ChevronRight,
  User,
  Calendar,
  Clock,
  BookOpen,
  Search,
  Tag
} from 'lucide-react';
import { Toc } from './Toc';
import { RelatedPosts } from './RelatedPosts';
import { ReadingProgressBar } from './ReadingProgressBar';
import { ContentProcessor } from '../data/index';

interface BlogPostTemplateProps {
  post: BlogPost;
  allPosts: BlogPost[];
}

// Simple Breadcrumbs Component - Optimized Typography
function Breadcrumbs({ postTitle }: { postTitle: string }) {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="py-6 sm:py-8 lg:py-12">
          <ol className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
            <li className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <HomeIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" /> 
                <span>Home</span>
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4 text-gray-500" />
            </li>
            <li className="flex items-center">
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4 text-gray-500" />
            </li>
            <li className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-[400px]" aria-current="page">
              {postTitle}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

// Optimized Image Component - Immediate Rendering
function OptimizedImage({ 
  src, 
  alt, 
  className, 
  priority = false 
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(priority); // Start as true for priority images
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`}>
        <div className="p-4 text-center">
          <p className="text-gray-700 text-xs sm:text-sm">Image for:</p>
          <p className="text-gray-900 font-medium text-sm sm:text-base">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !priority && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl lg:rounded-3xl"></div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
          isLoaded || priority ? 'opacity-100' : 'opacity-0'
        }`}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </div>
  );
}

// Hero Section Component - Immediate Rendering
function HeroSection({ post }: { post: BlogPost }) {
  const readingTime = post.readingTime || Math.ceil((post.content?.length || 1000) / 1000);
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Content Section - Immediate Render */}
          <div className="order-2 lg:order-1">
            {/* Category Badge */}
            {post.category && (
              <div className="flex items-center gap-3 mb-6 lg:mb-8">
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 sm:py-2">
                  <Search className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                  <span className="text-blue-800 font-medium text-xs sm:text-sm lg:text-base">{post.category}</span>
                </div>
              </div>
            )}

            {/* Title - LCP Element - Immediate Render */}
            <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 leading-tight mb-4 sm:mb-6 lg:mb-8">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                {post.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 mb-6 lg:mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                <span className="font-medium text-xs sm:text-sm text-gray-900">{post.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                <span className="font-medium text-xs sm:text-sm text-gray-900">{formattedDate}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                <span className="font-medium text-xs sm:text-sm text-gray-900">{readingTime} min read</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[3/2] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              {post.imageUrl ? (
                <OptimizedImage
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full"
                  priority={true}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="p-4 text-center">
                    <p className="text-gray-700 text-xs sm:text-sm">Image for:</p>
                    <p className="text-gray-900 font-medium text-sm sm:text-base">{post.title}</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Badge on Image */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-800">Featured Article</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tags Component - Optimized Typography
function BlogTags({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div 
      className="flex flex-wrap items-center gap-2 sm:gap-3 p-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl border border-sky-200"
      data-tags-section="true"
    >
      <div className="flex items-center gap-2 text-gray-900 mr-2">
        <Tag className="h-4 w-4 text-sky-700" />
        <span className="text-sm font-medium">Article Tags:</span>
      </div>
      {tags.map((tag, index) => (
        <span 
          key={`${tag}-${index}`}
          className="bg-white text-sky-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium border border-sky-300 hover:bg-sky-50 hover:border-sky-400 transition-colors duration-200 cursor-pointer shadow-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// Main Blog Template Component
export function BlogPostTemplate({ post, allPosts }: BlogPostTemplateProps) {
  const [processedPost, setProcessedPost] = useState<BlogPost>(post);

  useEffect(() => {
    if (!post.toc || post.toc.length === 0) {
      const processed = ContentProcessor.processBlogPost(post);
      setProcessedPost(processed);
    } else {
      setProcessedPost(post);
    }
  }, [post]);

  // Table enhancement - Non-blocking
  useEffect(() => {
    const enhanceTables = () => {
      const tables = document.querySelectorAll('.prose table');
      tables.forEach((table) => {
        if (table.parentElement?.classList.contains('table-container')) return;
        
        const container = document.createElement('div');
        container.className = 'table-container';
        
        const hint = document.createElement('div');
        hint.className = 'mobile-table-hint';
        hint.textContent = '← Scroll to view all columns →';
        
        table.parentNode?.insertBefore(container, table);
        container.appendChild(hint);
        container.appendChild(table);
      });
    };

    const timeoutId = setTimeout(enhanceTables, 100);
    return () => clearTimeout(timeoutId);
  }, [processedPost.content]);

  return (
    <>
      <ReadingProgressBar />
      <Breadcrumbs postTitle={processedPost.title} />
      <HeroSection post={processedPost} />

      {/* Main Content Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            
            {/* Table of Contents Sidebar */}
            {processedPost.toc && processedPost.toc.length > 0 && (
              <aside className="hidden lg:block w-80 flex-shrink-0 order-2 lg:order-1">
                <div className="sticky top-32">
                  <Toc items={processedPost.toc} />
                </div>
              </aside>
            )}

            {/* Article Content */}
            <article className={`
              flex-1 max-w-none order-1 lg:order-2
              ${!processedPost.toc || processedPost.toc.length === 0 ? 'max-w-4xl mx-auto' : ''}
            `}>
              
              {/* Main Content with Optimized Styles */}
              <div className="prose prose-lg sm:prose-xl max-w-none">
                {/* Optimized CSS - Fixed for Next.js */}
                <style>{`
                  .mobile-table-hint {
                    display: block;
                    font-size: 0.75rem;
                    color: #374151;
                    text-align: center;
                    margin-bottom: 0.5rem;
                    font-style: italic;
                  }
                  
                  @media (min-width: 640px) {
                    .mobile-table-hint {
                      display: none;
                    }
                  }
                  
                  .table-container {
                    position: relative;
                    margin: 1.5rem 0;
                  }
                  
                  .prose {
                    color: #111827;
                    line-height: 1.8;
                  }
                  
                  .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                    scroll-margin-top: 100px;
                    color: #111827;
                    font-weight: 500;
                  }
                  
                  .prose h1 {
                    font-size: 1.75rem;
                    line-height: 1.1;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                  }
                  
                  .prose h2 {
                    font-size: 1.5rem;
                    line-height: 1.2;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #1f2937;
                  }
                  
                  .prose h3 {
                    font-size: 1.25rem;
                    line-height: 1.3;
                    margin-top: 1.75rem;
                    margin-bottom: 0.875rem;
                    color: #374151;
                  }
                  
                  .prose p {
                    line-height: 1.8;
                    margin-bottom: 1.25rem;
                    color: #374151;
                    font-size: 1rem;
                  }
                  
                  @media (min-width: 640px) {
                    .prose h1 { font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem; }
                    .prose h2 { font-size: 1.875rem; margin-top: 2.5rem; margin-bottom: 1.25rem; }
                    .prose h3 { font-size: 1.5rem; margin-top: 2.25rem; margin-bottom: 1rem; }
                    .prose p { margin-bottom: 1.75rem; font-size: 1.125rem; }
                  }
                  
                  .prose table {
                    width: 100%;
                    margin: 1.5rem 0;
                    border: 1px solid #e5e7eb;
                    border-radius: 0.75rem;
                    font-size: 0.75rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    overflow-x: auto;
                    display: block;
                    white-space: nowrap;
                  }
                  
                  @media (min-width: 640px) {
                    .prose table {
                      display: table;
                      white-space: normal;
                      font-size: 0.875rem;
                    }
                  }
                  
                  .prose th, .prose td {
                    padding: 0.75rem 0.5rem;
                    text-align: left;
                    min-width: 120px;
                    color: #111827;
                  }
                  
                  @media (min-width: 640px) {
                    .prose th, .prose td {
                      padding: 1rem 0.875rem;
                      min-width: auto;
                    }
                  }
                  
                  .prose th {
                    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
                    font-weight: 600;
                    color: #111827;
                  }
                  
                  .prose img {
                    border-radius: 0.75rem;
                    margin: 1.5rem 0;
                    border: 1px solid #e5e7eb;
                    width: 100%;
                    height: auto;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  }
                  
                  .prose blockquote {
                    border-left: 4px solid #3b82f6;
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    padding: 1.5rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: #1e293b;
                    border-radius: 0.75rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  }
                  
                  .prose code {
                    background: #f1f5f9;
                    color: #1e293b;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.5rem;
                    font-size: 0.875rem;
                    font-weight: 500;
                    border: 1px solid #e2e8f0;
                  }
                  
                  .prose pre {
                    background: #1e293b;
                    color: #f1f5f9;
                    padding: 1rem;
                    border-radius: 0.75rem;
                    overflow-x: auto;
                    margin: 1.5rem 0;
                    font-size: 0.875rem;
                    line-height: 1.7;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  }
                  
                  .prose a {
                    color: #1d4ed8;
                    text-decoration: none;
                    font-weight: 500;
                    border-bottom: 1px solid transparent;
                  }
                  
                  .prose a:hover {
                    border-bottom-color: #1d4ed8;
                    color: #1e40af;
                  }
                  
                  .prose strong {
                    font-weight: 600;
                    color: #111827;
                  }
                `}</style>
                
                <div dangerouslySetInnerHTML={{ __html: processedPost.content }} />
              </div>

              {/* Blog Tags Section */}
              <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
                <BlogTags tags={processedPost.tags} />
              </div>

              {/* Article Footer */}
              <div className="mt-12 sm:mt-20 pt-8 sm:pt-12">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 text-sm sm:text-base">
                  <div className="space-y-2 sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">
                    <div className="text-gray-900">
                      <span className="font-medium">Published:</span>{' '}
                      {new Date(processedPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="text-gray-900">
                      <span className="font-medium">Author:</span> {processedPost.author}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      <div className="bg-white">
        <RelatedPosts currentPostSlug={processedPost.slug} allPosts={allPosts} />
      </div>
    </>
  );
}