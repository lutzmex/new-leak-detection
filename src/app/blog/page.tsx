"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { leakDetectionPosts, BlogPost } from './BlogPostCard';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  ArrowRight,
  User,
  Clock,
  Tag,
  Search,
  Award,
  Globe,
  Verified,
  MoreHorizontal
} from 'lucide-react';

const POSTS_PER_PAGE = 9;

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

// Blog Post Card Component (following clean typography guidelines)
function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
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
            <div className="relative z-10 text-center text-slate-600 p-6">
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
                <Tag className="h-3 w-3 text-slate-400" />
                <span className="text-xs text-slate-500 truncate max-w-[100px]">
                  {post.tags[0]}
                </span>
              </div>
            )}
          </div>

          {/* Title - Using clean typography guidelines */}
          <h3 className="font-medium text-lg sm:text-xl text-slate-800 mb-3 line-clamp-2 leading-tight group-hover:text-slate-700 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
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
}

// Mobile-Responsive Pagination Component
function Pagination({ currentPage, totalPages, onPageChange }: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const getMobilePageNumbers = () => {
    // For mobile: show only current, prev, and next page
    const pages = [];
    if (currentPage > 1) pages.push(currentPage - 1);
    pages.push(currentPage);
    if (currentPage < totalPages) pages.push(currentPage + 1);
    return pages;
  };

  const getDesktopPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;
    
    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const mobilePages = getMobilePageNumbers();
  const desktopPages = getDesktopPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-16">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 px-3 sm:px-4 py-2 font-medium text-sm rounded-lg transition-all ${
          currentPage === 1 
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200'
        }`}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">Prev</span>
      </button>

      {/* Mobile Page Numbers (simplified) */}
      <div className="flex items-center gap-1 sm:hidden">
        {mobilePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 font-medium text-sm rounded-lg transition-all min-w-[40px] ${
              currentPage === page
                ? 'bg-blue-50 border border-blue-200 text-blue-800'
                : 'text-slate-700 hover:bg-white border border-transparent hover:border-slate-200'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Desktop Page Numbers (full pagination) */}
      <div className="hidden sm:flex items-center gap-1">
        {desktopPages.map((page, index) => (
          <div key={index}>
            {page === 'ellipsis' ? (
              <span className="px-3 py-2 text-slate-400">
                <MoreHorizontal className="h-4 w-4" />
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={`px-3 py-2 font-medium text-sm rounded-lg transition-all min-w-[40px] ${
                  currentPage === page
                    ? 'bg-blue-50 border border-blue-200 text-blue-800'
                    : 'text-slate-700 hover:bg-white border border-transparent hover:border-slate-200'
                }`}
              >
                {page}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Page Info for Mobile */}
      <div className="flex items-center sm:hidden px-3 py-2 text-xs text-slate-500 bg-slate-50 rounded-lg border border-slate-200">
        {currentPage} of {totalPages}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1 px-3 sm:px-4 py-2 font-medium text-sm rounded-lg transition-all ${
          currentPage === totalPages 
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200'
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <span className="sm:hidden">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

// Main Blog Page Component
export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(
      leakDetectionPosts
        .map((post: BlogPost) => post.category)
        .filter((category): category is string => Boolean(category))
    );
    return Array.from(cats) as string[];
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return leakDetectionPosts.filter((post: BlogPost) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = !selectedCategory || 
                             post.category?.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const blogGridSection = document.getElementById('blog-grid-section');
    if (blogGridSection) {
      blogGridSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-medium text-sm mb-6 shadow-sm transform transition-all duration-1000 translate-y-0 opacity-100">
              <BookOpen className="h-5 w-5 mr-2" />
              Expert Knowledge Center
            </div>

            <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 leading-tight mb-4 sm:mb-6 lg:mb-8 transform transition-all duration-1000 translate-y-0 opacity-100">
              Leak Detection
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert Insights
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100">
              Discover cutting-edge insights, proven strategies, and expert knowledge from industry-leading leak detection professionals. Stay ahead with the latest technology and techniques.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 transform transition-all duration-1000 translate-y-0 opacity-100">
              <div className="relative group">
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                      <input
                        className="flex h-10 w-full rounded-md border-input px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 pr-4 py-3 text-base border-0 bg-transparent focus:ring-0 focus:outline-none placeholder:text-slate-500"
                        placeholder="Search articles, topics, or technologies..."
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-10 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 font-medium text-sm rounded-xl shadow-sm hover:shadow-md transition-all transform hover:scale-105">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
                <div className="font-medium text-4xl text-blue-600 mb-1">{leakDetectionPosts.length}+</div>
                <div className="text-slate-700 text-base">Expert Articles</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
                <div className="font-medium text-4xl text-purple-600 mb-1">50K+</div>
                <div className="text-slate-700 text-base">Monthly Readers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
                <div className="font-medium text-4xl text-green-600 mb-1">15+</div>
                <div className="text-slate-700 text-base">Industry Experts</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
                <div className="font-medium text-4xl text-orange-600 mb-1">99%</div>
                <div className="text-slate-700 text-base">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-grid-section" className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Complete Knowledge Library
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive collection of expert articles, guides, and insights from industry professionals.
            </p>

            {/* Category Filter */}
            {categories.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === null
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All ({leakDetectionPosts.length})
                </button>
                {categories.map((category: string) => {
                  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
                  const count = leakDetectionPosts.filter((post: BlogPost) => 
                    post.category?.toLowerCase().replace(/\s+/g, '-') === categorySlug
                  ).length;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(categorySlug)}
                      className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                        selectedCategory === categorySlug
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category} ({count})
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Blog Posts Grid */}
          {currentPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white rounded-3xl p-8 max-w-md mx-auto shadow-sm border border-slate-200">
                <BookOpen className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                <h3 className="font-medium text-xl text-slate-800 mb-2">No Articles Found</h3>
                <p className="text-slate-600 mb-6">
                  {searchTerm || selectedCategory ? 'Try adjusting your search or filters.' : 'No articles available at the moment.'}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-sm"
                >
                  Clear Filters & View All
                </button>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 px-8">
              {currentPosts.map((post: BlogPost, index: number) => (
                <BlogPostCard 
                  key={post.slug} 
                  post={post} 
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="bg-slate-50 rounded-3xl p-8 text-slate-700 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center bg-white/90 border border-slate-200 rounded-full px-6 py-3 mb-6">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Expert Knowledge at Your Service</span>
                </div>
                <h3 className="font-medium text-2xl sm:text-3xl lg:text-4xl mb-4">
                  Need Professional Help?
                </h3>
                <p className="text-slate-600 mb-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                  Get instant access to our certified leak detection experts. From emergency situations to preventive inspections, we're here to help with professional solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="tel:+1 (888) 875-9844"
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    <Verified className="h-5 w-5" />
                    Get Expert Help Now
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/services"
                    className="group bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-medium hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    <Globe className="h-5 w-5" />
                    View All Services
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}