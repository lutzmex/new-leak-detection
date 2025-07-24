"use client";

import React, { useState, useEffect, memo } from 'react';
import { 
  Phone, 
  Award,
  Star,
  Clock,
  Verified
} from 'lucide-react';
import Image from 'next/image';

// Memoized trust indicator component
const TrustIndicator = memo(({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
  <div className="flex items-center gap-2">
    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
    <span className="font-poppins font-medium text-xs sm:text-sm text-slate-800">{text}</span>
  </div>
));

// Fixed platform logo component with proper aspect ratio handling
const PlatformLogo = memo(({ src, alt }: { src: string, alt: string }) => {
  // Handle the Angie's List logo specifically (aspect ratio 2500:1467 ≈ 1.70)
  const isAngiesList = src.includes('Angie.svg');
  
  if (isAngiesList) {
    return (
      <div className="relative h-12 w-20 sm:h-16 sm:w-28 flex items-center justify-center">
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="opacity-60 object-contain" 
          loading="lazy"
          sizes="(max-width: 640px) 80px, 112px"
        />
      </div>
    );
  }
  
  // For other square/regular logos, keep the original approach
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={64} 
      height={64}
      className="h-12 w-12 sm:h-16 sm:w-16 opacity-60 object-contain" 
      loading="lazy"
    />
  );
});

// Platform logos data
const platformLogos = [
  { src: "/icon/google.svg", alt: "Google Reviews" },
  { src: "/icon/yelp.svg", alt: "Yelp Reviews" },
  { src: "/icon/BBB.svg", alt: "Better Business Bureau" },
  { src: "/icon/Angie.svg", alt: "Angie List" },
  { src: "/icon/homeadvisor.svg", alt: "HomeAdvisor" },
  { src: "/icon/trustpilot.svg", alt: "Trustpilot" },
  { src: "/icon/facebook.svg", alt: "Facebook Reviews" },
  { src: "/icon/Nextdoor.svg", alt: "Nextdoor" }
];

const trustIndicators = [
  { icon: Award, text: "Licensed & Insured" },
  { icon: Award, text: "25+ Years Experience" },
  { icon: Star, text: "5-Star Reviews" },
  { icon: Clock, text: "24/7 Emergency" }
];

export const Hero = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for smoother animation
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleCallClick = () => {
    window.location.href = 'tel:+18888759844';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Simplified background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1">
              {/* Certified Service Badge */}
              <div className={`flex items-center gap-3 mb-6 lg:mb-8 transition-opacity duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <Image 
                  src="/icon/pipe-leak-detection.svg" 
                  alt="Professional Leak Detection Equipment"
                  width={64}
                  height={64}
                  className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                  priority
                />
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1.5 sm:py-2">
                  <Verified className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                  <span className="font-poppins font-medium text-green-700 text-xs sm:text-sm lg:text-base">America No. 1 Leak Detection Company</span>
                </div>
              </div>
              
              <h1 
                className={`font-poppins font-medium text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-tight mb-4 sm:mb-6 lg:mb-8 transition-opacity duration-700 delay-200 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Expert Leak Detection in America | Water, Gas & Pool Leak Specialists Nationwide
              </h1>
              
              <h2 className={`font-poppins font-medium text-base sm:text-lg lg:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 lg:mb-8 transition-opacity duration-700 delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                Full coverage across all American communities
              </h2>
              
              <p className={`font-poppins text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed mb-6 sm:mb-8 lg:mb-10 transition-opacity duration-700 delay-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                From New York to Los Angeles, our team finds hidden leaks in water, gas, pools, and slabs. We use modern tools to stop damage and save you money. Call for same day service.
              </p>

              {/* CTA Button */}
              <div className={`mb-6 lg:mb-8 transition-opacity duration-700 delay-600 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <button 
                  onClick={handleCallClick}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl font-poppins font-medium text-sm sm:text-base lg:text-xl transition-all transform hover:scale-105 shadow-lg gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="font-ibm-plex-mono font-medium">Get Help Now: +1 (888) 875-9844</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className={`flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 text-slate-800 transition-opacity duration-700 delay-800 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                {trustIndicators.map((indicator, index) => (
                  <TrustIndicator key={index} icon={indicator.icon} text={indicator.text} />
                ))}
              </div>
            </div>

            {/* Hero Image - Your original structure with Next.js optimization */}
            <div className={`relative order-1 lg:order-2 transition-opacity duration-700 delay-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[3/2] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/discount-leak-detection.webp"
                  alt="Professional leak detection technician using advanced equipment to find hidden leaks"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-center"
                  priority={true}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Floating Badge on Image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-poppins font-medium text-xs text-slate-800">Help Available Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Platforms Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-poppins font-medium text-slate-800 mb-6 text-lg">Trusted by customers on these platforms</p>
            <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 flex-wrap">
              {platformLogos.map((logo, index) => (
                <PlatformLogo key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Hero.displayName = 'Hero';