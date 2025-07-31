// src/app/blog/components/RelatedPosts.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '../data/types';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  ArrowRight,
  User,
  Clock,
  Tag
} from 'lucide-react';

interface RelatedPostsProps {
  currentPostSlug: string;
  allPosts: BlogPost[];
}

const POSTS_TO_SHOW_AT_ONCE = 3;
const MAX_RELATED_POSTS = 9;

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

// Optimized RelatedPostCard with Simplified Typography
function RelatedPostCard({ post, index }: { post: BlogPost; index: number }) {
  const readingTime = post.readingTime || Math.ceil((post.content?.length || 1000) / 1000);
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
            <div className="relative z-10 text-center text-slate-600 p-6">
              <div className={`w-16 h-16 mx-auto mb-4 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border-2 border-${accentColor}-200`}>
                <BookOpen className={`h-8 w-8 text-${accentColor}-600`} />
              </div>
              <div className="text-sm font-medium text-gray-700">{post.category || 'Article'}</div>
            </div>
          </div>

          {/* Animated overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/10 group-hover:to-transparent transition-all duration-300" />
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Category and Tags */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`bg-${accentColor}-50 text-${accentColor}-700 px-3 py-1 rounded-full text-xs font-medium border border-${accentColor}-200`}>
              {post.category || 'Guide'}
            </span>
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-1">
                <Tag className="h-3 w-3 text-slate-500" />
                <span className="text-xs text-slate-600 truncate max-w-[100px]">
                  {post.tags[0]}
                </span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-medium text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-slate-800 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-sm text-slate-700 mb-4 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between text-sm text-slate-600 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span className="font-medium text-xs text-gray-800">{post.author || 'Expert'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span className="text-xs text-gray-700">{readingTime} min</span>
              </div>
            </div>
            <div className="text-xs text-gray-700">
              {formatDate(post.date)}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// Simplified similarity calculation
function calculateBasicSimilarity(currentPost: BlogPost, post: BlogPost): number {
  let score = 0;
  
  // Category match
  if (currentPost.category === post.category) {
    score += 40;
  }
  
  // Tag matches
  if (currentPost.tags && post.tags) {
    const currentTags = currentPost.tags.map(tag => tag.toLowerCase());
    const postTags = post.tags.map(tag => tag.toLowerCase());
    const commonTags = currentTags.filter(tag => postTags.includes(tag));
    score += commonTags.length * 15;
  }
  
  // Author match
  if (currentPost.author === post.author) {
    score += 10;
  }
  
  return Math.min(score, 100);
}

export function RelatedPosts({ currentPostSlug, allPosts }: RelatedPostsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get related posts using simplified logic
  const relatedPostsData = (() => {
    const currentPost = allPosts.find(post => post.slug === currentPostSlug);
    if (!currentPost) return [];

    const scoredPosts = allPosts
      .filter(post => post.slug !== currentPostSlug)
      .map(post => ({
        post,
        score: calculateBasicSimilarity(currentPost, post)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RELATED_POSTS);

    return scoredPosts;
  })();

  // Get posts by category for filtering
  const categoryPosts = selectedCategory ? 
    relatedPostsData.filter(({ post }) => 
      post.category?.toLowerCase().replace(/\s+/g, '-') === selectedCategory
    ) : relatedPostsData;

  const displayPosts = categoryPosts;

  if (displayPosts.length === 0) {
    return null;
  }

  const totalSlides = Math.ceil(displayPosts.length / POSTS_TO_SHOW_AT_ONCE);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentPosts = () => {
    const startIndex = currentSlide * POSTS_TO_SHOW_AT_ONCE;
    return displayPosts.slice(startIndex, startIndex + POSTS_TO_SHOW_AT_ONCE);
  };

  // Get unique categories from related posts
  const categories = (() => {
    const cats = new Set(relatedPostsData.map(({ post }) => post.category).filter(Boolean));
    return Array.from(cats);
  })();

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-900 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
            <BookOpen className="h-5 w-5 mr-2" />
            Related Articles
          </div>
          <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Continue Reading
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover more expert insights and practical guides tailored to your interests.
          </p>

          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setCurrentSlide(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[44px] min-w-[44px] ${
                  selectedCategory === null
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                All ({relatedPostsData.length})
              </button>
              {categories.map((category) => {
                const categorySlug = category?.toLowerCase().replace(/\s+/g, '-');
                const count = relatedPostsData.filter(({ post }) => 
                  post.category?.toLowerCase().replace(/\s+/g, '-') === categorySlug
                ).length;
                
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(categorySlug || null);
                      setCurrentSlide(0);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[44px] min-w-[44px] ${
                      selectedCategory === categorySlug
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Related Posts Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 min-w-[48px] min-h-[48px] w-12 h-12 rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-105 ${
                  currentSlide === 0 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-900 hover:from-blue-200 hover:to-purple-200'
                }`}
                aria-label="Previous posts"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 min-w-[48px] min-h-[48px] w-12 h-12 rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-105 ${
                  currentSlide === totalSlides - 1 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-900 hover:from-blue-200 hover:to-purple-200'
                }`}
                aria-label="Next posts"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Posts Grid */}
          <div className="grid lg:grid-cols-3 gap-8 px-8">
            {getCurrentPosts().map(({ post }, index) => (
              <RelatedPostCard 
                key={post.slug} 
                post={post} 
                index={index}
              />
            ))}
          </div>

          {/* Slide Indicators - Fixed Accessibility Issue */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 gap-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`min-w-[44px] min-h-[44px] rounded-full transition-all duration-300 flex items-center justify-center ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 px-4' 
                      : 'bg-slate-300 hover:bg-slate-400 w-11 h-11'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-6 h-2 bg-blue-600' 
                      : 'w-2 h-2 bg-white'
                  }`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-16">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-900 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-sm min-h-[48px]"
          >
            <BookOpen className="h-5 w-5" />
            Explore All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}