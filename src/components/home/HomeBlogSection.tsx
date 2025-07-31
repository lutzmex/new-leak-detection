"use client";

import React, { useState, memo, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  User,
  Tag
} from 'lucide-react';
import { leakDetectionPosts, BlogPost } from '../../app/blog/BlogPostCard';

// Simplified gradient options for cards
const gradients = [
  "from-blue-50 to-blue-100",
  "from-purple-50 to-purple-100", 
  "from-green-50 to-green-100",
  "from-orange-50 to-orange-100",
  "from-pink-50 to-pink-100",
  "from-indigo-50 to-indigo-100"
];

const accentColors = [
  "blue",
  "purple",
  "green",
  "orange",
  "pink",
  "indigo"
];

// Blog Post Card Component (matching blog page design)
const BlogPostCard = memo(({ post, index }: { post: BlogPost; index: number }) => {
  const gradient = gradients[index % gradients.length];
  const accentColor = accentColors[index % accentColors.length];
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <article className="bg-white/90 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-200 hover:border-slate-300 group">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        {/* Card Image */}
        <div className="relative h-48 overflow-hidden">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl.startsWith('/') ? post.imageUrl : `/${post.imageUrl}`}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                // Fallback to gradient if image fails to load
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
          ) : null}
          
          {/* Fallback gradient background */}
          <div 
            className={`absolute inset-0 h-full bg-gradient-to-br ${gradient} flex items-center justify-center ${post.imageUrl ? 'hidden' : 'flex'}`}
            style={{ display: post.imageUrl ? 'none' : 'flex' }}
          >
            <div className="relative z-10 text-center text-slate-700 p-6">
              <div className={`w-16 h-16 mx-auto mb-4 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border-2 border-${accentColor}-200`}>
                <BookOpen className={`h-8 w-8 text-${accentColor}-600`} />
              </div>
              <div className="font-medium text-sm">{post.category || 'Article'}</div>
            </div>
          </div>

          {/* Animated overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/10 group-hover:to-transparent transition-all duration-300" />
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Category and Tags */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`bg-${accentColor}-50 text-${accentColor}-600 px-3 py-1 rounded-full font-medium text-xs border border-${accentColor}-200`}>
              {post.category || 'Guide'}
            </span>
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-1">
                <Tag className="h-3 w-3 text-slate-600" />
                <span className="text-xs text-slate-700 truncate max-w-[100px]">
                  {post.tags[0]}
                </span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-medium text-lg text-slate-800 mb-3 line-clamp-2 leading-tight group-hover:text-slate-700 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-sm text-slate-700 mb-4 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between text-sm text-slate-700 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span className="font-medium text-xs">{post.author || 'Expert'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span className="text-xs">{post.readTime}</span>
              </div>
            </div>
            <div className="text-xs">
              {formatDate(post.date)}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
});

BlogPostCard.displayName = 'BlogPostCard';

export const HomeBlogSection = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use real blog posts data and get latest 6 posts
  const blogPosts = useMemo(() => {
    return leakDetectionPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 6);
  }, []);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(blogPosts.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentPosts = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return blogPosts.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-medium text-sm mb-6 shadow-sm">
            <BookOpen className="h-5 w-5 mr-2" />
            Expert Insights & Guides
          </div>
          <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Latest Expert Articles
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest insights, techniques, and professional tips from our leak detection experts.
          </p>
        </div>

        {/* Blog Posts Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-105 ${
              currentSlide === 0 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200'
            }`}
            aria-label="Previous blog posts"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-105 ${
              currentSlide === totalSlides - 1 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200'
            }`}
            aria-label="Next blog posts"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-3 gap-8 px-8">
            {getCurrentPosts().map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-16">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-sm"
          >
            <BookOpen className="h-5 w-5" />
            Explore All {leakDetectionPosts.length} Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
});

HomeBlogSection.displayName = 'HomeBlogSection';