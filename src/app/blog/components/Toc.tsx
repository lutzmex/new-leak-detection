"use client";

import { useState, useEffect, useRef } from 'react';
import type { TocItem } from '../data/types'; 
import Link from 'next/link';
import { BookOpen, ChevronDown, ChevronRight, X } from 'lucide-react';

interface TocProps {
  items?: TocItem[];
}

export function Toc({ items }: TocProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter to show only H2 headings
  const SHOW_LEVEL = 1;
  const h2Items = items?.filter(item => item.level === SHOW_LEVEL) || [];

  // Intersection observer for tracking active section
  useEffect(() => {
    if (!h2Items || h2Items.length === 0) return;

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that's most visible
        let activeEntry = null;
        let maxRatio = 0;

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeEntry = entry;
          }
        }

        if (activeEntry) {
          setActiveId(activeEntry.target.id);
        }
      },
      {
        rootMargin: isMobile ? '-10% 0px -10% 0px' : '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1.0]
      }
    );

    // Observe all H2 heading elements
    h2Items.forEach(item => {
      const element = document.getElementById(item.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [h2Items, isMobile]);

  // Visibility animation
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  if (!h2Items || h2Items.length === 0) {
    return null;
  }

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = isMobile ? -80 : -100; // Smaller offset for mobile
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      setActiveId(id);
      
      // Auto-collapse on mobile after selection
      if (isMobile) {
        setTimeout(() => setIsCollapsed(true), 300);
      }
      
      // Update URL hash
      if (history.pushState) {
        history.pushState(null, "", `#${id}`);
      }
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside 
      ref={tocRef}
      className={`
        sticky transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${isMobile 
          ? 'top-4 mx-4 mb-6 bg-white border border-gray-200 rounded-lg shadow-lg z-30' 
          : 'top-24 bg-white border border-gray-200 rounded-lg shadow-sm'
        }
      `}
    >
      <div className={isMobile ? 'p-3' : 'p-4'}>
        {/* Header */}
        <div className={`flex items-center justify-between border-b border-gray-100 ${
          isMobile ? 'mb-3 pb-2' : 'mb-4 pb-3'
        }`}>
          <div className="flex items-center gap-2">
            <div className={`bg-blue-50 rounded-md ${isMobile ? 'p-1' : 'p-1.5'}`}>
              <BookOpen className={`text-blue-600 ${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} />
            </div>
            <h3 className={`font-poppins font-medium text-gray-900 ${
              isMobile ? 'text-sm' : 'text-base'
            }`}>
              Table of Contents
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={toggleCollapse}
              className={`hover:bg-gray-50 rounded-md transition-colors ${
                isMobile ? 'p-1.5 active:bg-gray-100' : 'p-1'
              }`}
              title={isCollapsed ? "Expand TOC" : "Collapse TOC"}
            >
              {isCollapsed ? (
                <ChevronRight className={`text-gray-500 ${isMobile ? 'h-4 w-4' : 'h-4 w-4'}`} />
              ) : (
                <ChevronDown className={`text-gray-500 ${isMobile ? 'h-4 w-4' : 'h-4 w-4'}`} />
              )}
            </button>
          </div>
        </div>

        {/* TOC List - Only H2 headings */}
        <nav className={`transition-all duration-300 overflow-hidden ${
          isCollapsed ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'
        }`}>
          <div className={isMobile ? 'space-y-0.5' : 'space-y-1'}>
            {h2Items.map((item) => {
              const isActive = activeId === item.id;
              
              return (
                <div key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => handleItemClick(e, item.id)}
                    className={`
                      group block rounded-md transition-all duration-200 font-poppins font-medium
                      ${isMobile 
                        ? 'py-2 px-2.5 text-sm min-h-[44px] flex items-center' 
                        : 'py-2.5 px-3 text-sm'
                      }
                      ${isActive 
                        ? 'bg-green-50 text-green-800 border-l-4 border-green-500 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100'
                      }
                    `}
                  >
                    <span className={`block transition-colors duration-200 leading-snug ${
                      isActive ? 'font-medium' : 'group-hover:text-green-600'
                    }`}>
                      {item.text}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Compact Footer */}
        {!isCollapsed && (
          <div className={`border-t border-gray-100 ${
            isMobile ? 'mt-3 pt-2' : 'mt-4 pt-3'
          }`}>
            <div className={`font-poppins text-gray-500 text-center ${
              isMobile ? 'text-xs' : 'text-xs'
            }`}>
              <span className="font-medium">{h2Items.length}</span> sections
            </div>
          </div>
        )}
      </div>

      {/* Mobile overlay when expanded */}
      {isMobile && !isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-20 md:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </aside>
  );
}