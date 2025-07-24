"use client";

import React, { memo, useMemo } from 'react';
import { 
  Star, 
  MessageCircle
} from 'lucide-react';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  platform: string;
  platformIcon: string;
  date: string;
  verified: boolean;
}

// Memoized Review Card Component
const ReviewCard = memo(({ review }: { review: Review }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div 
      className="group bg-white/95 backdrop-blur-sm rounded-2xl transition-all duration-300 p-8 border border-white/20 hover:border-blue-300 transform hover:-translate-y-2 relative hover:bg-white hover:z-10 min-h-[360px] flex flex-col max-w-sm mx-auto w-full"
      style={{
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3), 0 20px 64px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
      }}
    >
      {/* 3D White Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-white/80 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Platform Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Image 
              src={review.platformIcon} 
              alt={review.platform}
              width={48}
              height={48}
              className="w-12 h-12 object-contain drop-shadow-lg"
              loading="lazy"
            />
            <span className="font-poppins font-medium text-lg text-slate-900">{review.platform}</span>
          </div>
          {review.verified && (
            <span className="bg-green-50 text-green-700 font-poppins font-medium text-sm px-3 py-1.5 rounded-full">
              Real Customer
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
          ))}
          <span className="font-poppins font-medium text-lg text-slate-900 ml-2">{review.rating}.0</span>
        </div>

        {/* Review Text */}
        <blockquote className="font-poppins text-slate-800 text-lg leading-relaxed mb-6 flex-grow">
          "{review.text}"
        </blockquote>

        {/* Customer Info */}
        <div className="pt-6 border-t border-slate-200 mt-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-poppins font-medium text-slate-900 text-lg">{review.name}</div>
              <div className="font-poppins text-base text-slate-700">{review.location}</div>
            </div>
            <div className="font-poppins text-sm text-slate-600">
              {formatDate(review.date)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ReviewCard.displayName = 'ReviewCard';

// Memoized Platform Logo Component
const PlatformLogo = memo(({ src, alt }: { src: string; alt: string }) => (
  <Image 
    src={src} 
    alt={alt} 
    width={64}
    height={64}
    className="h-16 w-16 opacity-60" 
    loading="lazy"
  />
));

PlatformLogo.displayName = 'PlatformLogo';

export const Testimonials = memo(() => {
  // Memoized reviews data
  const reviews = useMemo<Review[]>(() => [
    {
      id: 1,
      name: "Sarah M.",
      location: "Dallas, TX",
      rating: 5,
      text: "They found a leak behind my kitchen wall that I never would have found. The guy was really nice and explained everything in simple terms. My water bill went back to normal right away!",
      platform: "Google",
      platformIcon: "/icon/google.svg",
      date: "2024-03-15",
      verified: true
    },
    {
      id: 2,
      name: "Mike C.",
      location: "Phoenix, AZ",
      rating: 5,
      text: "Had a gas leak at 2 AM and they came out super fast! The tech knew exactly what to do and made sure my family was safe. I would definitely call them again.",
      platform: "Yelp",
      platformIcon: "/icon/yelp.svg",
      date: "2024-03-10",
      verified: true
    },
    {
      id: 3,
      name: "Jennifer L.",
      location: "Denver, CO",
      rating: 5,
      text: "Our office building had several small leaks that were costing us hundreds every month. They found all of them in one day and worked after hours so we didn't have to close.",
      platform: "Better Business Bureau",
      platformIcon: "/icon/BBB.svg",
      date: "2024-03-08",
      verified: true
    },
    {
      id: 4,
      name: "Robert W.",
      location: "Miami, FL",
      rating: 5,
      text: "They helped me with my insurance claim after finding water damage. Their report had everything the insurance company needed and I got my claim approved quickly.",
      platform: "Angie's List",
      platformIcon: "/icon/Angie.svg",
      date: "2024-03-05",
      verified: true
    },
    {
      id: 5,
      name: "Lisa A.",
      location: "Seattle, WA",
      rating: 5,
      text: "Before buying our house, they checked the whole plumbing system and found problems the seller didn't tell us about. Saved us thousands of dollars!",
      platform: "HomeAdvisor",
      platformIcon: "/icon/homeadvisor.svg",
      date: "2024-03-01",
      verified: true
    },
    {
      id: 6,
      name: "David K.",
      location: "Atlanta, GA",
      rating: 5,
      text: "My pool was losing water every day and I couldn't figure out why. They used underwater equipment and found three small cracks. Fixed them all in one visit.",
      platform: "Trustpilot",
      platformIcon: "/icon/trustpilot.svg",
      date: "2024-02-28",
      verified: true
    },
    {
      id: 7,
      name: "Amanda R.",
      location: "Boston, MA",
      rating: 5,
      text: "Found a big leak under our concrete slab that was making our water bill huge. They fixed it without tearing up our floors. Great job!",
      platform: "Facebook",
      platformIcon: "/icon/facebook.svg",
      date: "2024-02-25",
      verified: true
    },
    {
      id: 8,
      name: "James T.",
      location: "Las Vegas, NV",
      rating: 5,
      text: "Called them at midnight when we had water everywhere. They answered right away and were at our house in 45 minutes. Saved our home from major damage.",
      platform: "Google",
      platformIcon: "/icon/google.svg",
      date: "2024-02-20",
      verified: true
    },
    {
      id: 9,
      name: "Maria G.",
      location: "Chicago, IL",
      rating: 5,
      text: "They used special radar to find leaks under my yard without digging up my garden. Found the problem and fixed it in one day. My plants are still happy!",
      platform: "Nextdoor",
      platformIcon: "/icon/Nextdoor.svg",
      date: "2024-02-15",
      verified: true
    }
  ], []);

  // Memoized platform logos data
  const platformLogos = useMemo(() => [
    { src: "/icon/google.svg", alt: "Google Reviews" },
    { src: "/icon/yelp.svg", alt: "Yelp Reviews" },
    { src: "/icon/BBB.svg", alt: "Better Business Bureau" },
    { src: "/icon/Angie.svg", alt: "Angie's List" },
    { src: "/icon/homeadvisor.svg", alt: "HomeAdvisor" },
    { src: "/icon/trustpilot.svg", alt: "Trustpilot" },
    { src: "/icon/facebook.svg", alt: "Facebook Reviews" },
    { src: "/icon/Nextdoor.svg", alt: "Nextdoor" }
  ], []);

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
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
            <MessageCircle className="h-5 w-5 mr-2" />
            Real Customer Reviews
          </div>
          <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
            What Our Customers
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Read honest reviews from real customers across America who trusted us to solve their leak problems.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="font-poppins font-medium text-3xl text-slate-900 mb-1">4.9/5</div>
              <div className="font-poppins text-base text-slate-800">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-300" />
            <div className="text-center">
              <div className="font-poppins font-medium text-3xl text-slate-900 mb-1">15,000+</div>
              <div className="font-poppins text-base text-slate-800">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-slate-300" />
            <div className="text-center">
              <div className="font-poppins font-medium text-3xl text-slate-900 mb-1">98%</div>
              <div className="font-poppins text-base text-slate-800">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Platform Logos */}
        <div className="mt-12 text-center">
          <p className="font-poppins text-slate-700 mb-6 text-lg">Reviews checked on multiple trusted platforms</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {platformLogos.map((logo, index) => (
              <PlatformLogo key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';