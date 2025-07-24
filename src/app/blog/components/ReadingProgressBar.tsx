// src/app/blog/components/ReadingProgressBar.tsx
"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';

interface ReadingStats {
  progress: number;
  isVisible: boolean;
  scrollVelocity: number;
}

export const ReadingProgressBar = React.memo(() => {
  const [stats, setStats] = useState<ReadingStats>({
    progress: 0,
    isVisible: false,
    scrollVelocity: 0
  });

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    // Find the tags section as the endpoint
    const tagsSection = document.querySelector('[data-tags-section="true"]');
    
    let targetPosition;
    
    if (tagsSection) {
      // Use tags section position as the 100% completion point
      const tagsSectionRect = tagsSection.getBoundingClientRect();
      const tagsSectionTopFromDocument = scrollTop + tagsSectionRect.top;
      
      // Complete progress when tags section becomes visible (appears in viewport)
      targetPosition = Math.max(tagsSectionTopFromDocument - clientHeight + 100, 0);
    } else {
      // Fallback: complete at 80% of document if tags section not found
      const scrollHeight = document.documentElement.scrollHeight;
      targetPosition = (scrollHeight - clientHeight) * 0.8;
    }
    
    if (targetPosition <= 0) {
      targetPosition = 1; // Avoid division by zero
    }
    
    const currentProgress = Math.min((scrollTop / targetPosition) * 100, 100);
    const isVisible = scrollTop > 50;
    
    setStats(prev => ({
      progress: currentProgress,
      isVisible,
      scrollVelocity: Math.abs(currentProgress - prev.progress)
    }));
  }, []);

  // Optimized scroll event with RAF throttling
  useEffect(() => {
    let ticking = false;
    
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  // Memoized progress styles
  const progressStyles = useMemo(() => ({
    height: `${stats.progress}%`,
    transition: stats.scrollVelocity > 5 ? 'none' : 'height 0.1s ease-out'
  }), [stats.progress, stats.scrollVelocity]);

  // Memoized visibility classes
  const visibilityClasses = useMemo(() => ({
    mainBar: `fixed left-0 top-0 h-full w-1.5 sm:w-2 bg-transparent z-50 pointer-events-none transition-opacity duration-200 shadow-lg ${
      stats.isVisible ? 'opacity-100' : 'opacity-0'
    }`
  }), [stats.isVisible]);

  return (
    <>
      {/* Vertical Progress Bar - Left Side - Light Sky Blue with Shadow */}
      <div className={visibilityClasses.mainBar}>
        {/* Background Track with Shadow */}
        <div className="absolute inset-0 bg-gray-100/70 shadow-md rounded-r-lg"></div>
        
        {/* Progress Fill - Light Sky Blue with Enhanced Shadow */}
        <div
          className="bg-sky-300 relative overflow-hidden shadow-lg rounded-r-lg"
          style={progressStyles}
        >
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent"></div>
          
          {/* Progress Indicator Dot with Shadow */}
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-white rounded-full shadow-lg transform translate-x-1/2 translate-y-1/2 border border-sky-400"></div>
        </div>
      </div>
    </>
  );
});