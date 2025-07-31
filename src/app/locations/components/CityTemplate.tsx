"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Plus, 
  Minus, 
  Phone, 
  Star,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Globe,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  PhoneCall,
  Verified,
  Award,
  Target,
  Activity,
  Droplets,
  Home,
  Thermometer,
  Mountain,
  Layers,
  AlertTriangle,
  Settings,
  Camera,
  Gauge,
  Waves,
  Flame,
  Eye,
  Search,
  FileText,
  Headphones,
  Radar,
  Brain,
  BarChart,
  Building,
  MessageCircle,
  Sparkles,
  ExternalLink,
  TrendingUp
} from 'lucide-react';

import { CityData, SimpleContentSection, SimpleContentSubsection } from '../data/types';

interface CityTemplateProps {
  cityData: CityData;
}

// Memoized and optimized icon map
const iconMap: { [key: string]: any } = {
  Home, Building, Mountain, Layers, Droplets, Settings, Target, Thermometer,
  AlertTriangle, Shield, Waves, Eye, Search, Camera, Gauge, Activity, Users,
  Award, Clock, Star, Brain, Globe, Phone, FileText, Radar, CheckCircle,
  Verified, MessageCircle, HelpCircle, BarChart, ArrowRight, ChevronRight,
  ChevronUp, ChevronDown, PhoneCall, Flame, Headphones, MapPin, Plus, Minus,
  Sparkles, ExternalLink, TrendingUp
};

// Optimized Mobile-First Breadcrumb component
const BreadcrumbNav = React.memo(({ cityData }: { cityData: CityData }) => {
  const cityName = cityData.name;
  const stateName = cityData.state;
  const maxCityLength = 15;
  const maxStateLength = 12;
  
  const displayCityName = useMemo(() => {
    if (cityName.length > maxCityLength) {
      const cutIndex = cityName.lastIndexOf(' ', maxCityLength);
      return cutIndex > 0 ? cityName.substring(0, cutIndex) + '...' : cityName.substring(0, maxCityLength) + '...';
    }
    return cityName;
  }, [cityName, maxCityLength]);

  const displayStateName = useMemo(() => {
    if (stateName.length > maxStateLength) {
      return stateName.substring(0, maxStateLength) + '...';
    }
    return stateName;
  }, [stateName, maxStateLength]);

  return (
    <nav 
      className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base text-slate-600 mb-4 sm:mb-6 lg:mb-8 overflow-hidden" 
      aria-label="Breadcrumb"
      role="navigation"
    >
      <div className="flex items-center gap-1 sm:gap-2 w-full min-w-0">
        <Link 
          href={cityData.ui.breadcrumb.homeLink}
          className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5 whitespace-nowrap flex-shrink-0"
          prefetch={false}
        >
          {cityData.ui.breadcrumb.homeText}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />

        <Link 
          href={cityData.ui.breadcrumb.locationsLink}
          className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5 whitespace-nowrap flex-shrink-0"
          prefetch={false}
        >
          {cityData.ui.breadcrumb.locationsText}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />

        <Link 
          href={`/locations/${cityData.stateSlug}`}
          className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5 whitespace-nowrap flex-shrink-0"
          title={stateName}
          prefetch={false}
        >
          <span className="sm:hidden">{displayStateName}</span>
          <span className="hidden sm:inline">{stateName}</span>
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />

        <span 
          className="text-slate-800 font-medium min-w-0 flex-1"
          title={cityName}
        >
          <span className="sm:hidden">{displayCityName}</span>
          <span className="hidden sm:inline">{cityName}</span>
        </span>
      </div>
    </nav>
  );
});

BreadcrumbNav.displayName = 'BreadcrumbNav';

export default function CityTemplate({ cityData }: CityTemplateProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true); // Start visible for faster LCP
  const [citiesToShow, setCitiesToShow] = useState(16);
  const [servicesToShow, setServicesToShow] = useState(cityData.ui.servicesSection.initialDisplay);
  const [showAllServices, setShowAllServices] = useState(false);

  // Removed useEffect animation delay - content loads immediately
  // useEffect(() => {
  //   requestAnimationFrame(() => {
  //     setIsVisible(true);
  //   });
  // }, []);

  // Memoized callbacks
  const toggleFaq = useCallback((id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  }, [expandedFaq]);

  const toggleServices = useCallback(() => {
    setShowAllServices(!showAllServices);
  }, [showAllServices]);

  const toggleCities = useCallback(() => {
    setCitiesToShow(prev => prev === 16 ? cityData.nearbyCities.length : 16);
  }, [cityData.nearbyCities.length]);

  const getIconComponent = useCallback((iconName: string) => {
    return iconMap[iconName] || Settings;
  }, []);

  // Memoized computed values
  const displayedServices = useMemo(() => 
    showAllServices ? cityData.services.list : cityData.services.list.slice(0, servicesToShow),
    [showAllServices, cityData.services.list, servicesToShow]
  );

  const displayedCities = useMemo(() => 
    cityData.nearbyCities.slice(0, citiesToShow),
    [cityData.nearbyCities, citiesToShow]
  );

  const hasSimplifiedContent = useMemo(() => 
    (cityData.content as any).sections && 
    Array.isArray((cityData.content as any).sections) && 
    (cityData.content as any).sections.length > 0 && 
    typeof (cityData.content as any).sections[0].heading2 === 'string',
    [cityData.content]
  );

  // Optimized heading classes - simplified for better performance
  const contentHeadingClasses = {
    h1: "font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight",
    h2: "font-medium text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-800 mb-3 sm:mb-4 lg:mb-6",
    h3: "font-medium text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-800 mb-2 sm:mb-3",
    h4: "font-medium text-sm sm:text-base lg:text-lg xl:text-xl text-slate-800 mb-2 sm:mb-3",
    h5: "font-medium text-sm sm:text-base lg:text-lg text-slate-800 mb-2",
    h6: "font-medium text-xs sm:text-sm lg:text-base text-slate-800 mb-2"
  };

  // Optimized content rendering functions
  const renderSimpleContentSubsection = useCallback((subsection: SimpleContentSubsection, parentLevel: number = 2) => {
    let headingLevel: 'h3' | 'h4' | 'h5' | 'h6' = 'h3';
    let headingText = '';
    
    if (subsection.heading3) {
      headingLevel = 'h3';
      headingText = subsection.heading3;
    } else if (subsection.heading4) {
      headingLevel = 'h4';
      headingText = subsection.heading4;
    } else if (subsection.heading5) {
      headingLevel = 'h5';
      headingText = subsection.heading5;
    } else if (subsection.heading6) {
      headingLevel = 'h6';
      headingText = subsection.heading6;
    }

    const HeadingTag = headingLevel;
    const typographyClass = contentHeadingClasses[headingLevel];

    return (
      <div key={headingText || 'subsection'} className="mb-4 sm:mb-6">
        {headingText && (
          <HeadingTag className={typographyClass}>
            {headingText}
          </HeadingTag>
        )}
        <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
          {subsection.content}
        </p>
        
        {subsection.subsections && subsection.subsections.map((nestedSubsection, index) => (
          <div key={index} className="ml-2 sm:ml-4 mt-3 sm:mt-4">
            {renderSimpleContentSubsection(nestedSubsection, parentLevel + 1)}
          </div>
        ))}
      </div>
    );
  }, []);

  const renderSimpleContentSection = useCallback((section: SimpleContentSection, index: number) => {
    return (
      <div key={index} className="space-y-4 sm:space-y-6 lg:space-y-8">
        <h2 className={contentHeadingClasses.h2}>
          {section.heading2}
        </h2>
        
        {section.content && (
          <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
            {section.content}
          </p>
        )}

        {section.subsections && section.subsections.map((subsection, subIndex) => (
          renderSimpleContentSubsection(subsection)
        ))}
      </div>
    );
  }, [renderSimpleContentSubsection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Optimized Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
        <div className="min-h-[2rem] sm:min-h-[2.5rem]">
          <BreadcrumbNav cityData={cityData} />
        </div>
      </div>

      {/* OPTIMIZED Hero Section - Faster LCP */}
      <section className="py-4 sm:py-6 lg:py-8 xl:py-12 bg-white relative">
        {/* Simplified background elements for mobile */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10 lg:opacity-20 pointer-events-none">
          <div className="absolute top-5 left-1 w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-72 xl:h-72 bg-blue-100 rounded-full blur-xl"></div>
          <div className="absolute bottom-5 right-1 w-24 h-24 sm:w-40 sm:h-40 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-purple-100 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-16 items-center">
            
            {/* Hero Content - Removed animation delays for faster LCP */}
            <div className="order-2 lg:order-1">
              {/* Badge - No animation delay */}
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 mb-3 sm:mb-4 lg:mb-6 xl:mb-8">
                {cityData.hero.badgeIcon ? (
                  <div className="relative h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 flex-shrink-0">
                    <Image
                      src={cityData.hero.badgeIcon.src}
                      alt={cityData.hero.badgeIcon.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 16px, (max-width: 1024px) 24px, (max-width: 1280px) 32px, (max-width: 1536px) 48px, 64px"
                      loading="eager"
                      priority
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-1 sm:p-1.5 lg:p-2 xl:p-2.5 rounded-md sm:rounded-lg lg:rounded-xl shadow-lg flex-shrink-0">
                    <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 text-white" />
                  </div>
                )}
                <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 bg-green-50 border border-green-200 rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-2.5 lg:py-1.5">
                  <Verified className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-green-600 flex-shrink-0" />
                  <span className="text-green-700 font-medium text-xs sm:text-sm lg:text-base leading-tight">
                    {cityData.hero.badge}
                  </span>
                </div>
              </div>
              
              {/* Hero Title - Critical LCP element optimized */}
              <h1 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-900 leading-tight mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                {cityData.hero.title}
                {cityData.hero.subtitle && (
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm sm:text-base lg:text-lg xl:text-xl mt-1 sm:mt-1.5 lg:mt-2">
                    {cityData.hero.subtitle}
                  </span>
                )}
              </h1>
              
              {/* Description - Optimized for LCP */}
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-slate-700 leading-relaxed mb-3 sm:mb-4 lg:mb-6 xl:mb-8">
                {cityData.hero.description}
              </p>

              {/* CTA Button - Simplified for performance */}
              <div className="mb-3 sm:mb-4 lg:mb-6 xl:mb-8">
                <Link 
                  href={`tel:${cityData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 py-2.5 sm:py-3 lg:py-4 xl:py-5 2xl:py-6 rounded-lg sm:rounded-xl lg:rounded-2xl font-medium text-xs sm:text-sm lg:text-base xl:text-lg transition-all transform hover:scale-105 shadow-lg gap-1.5 sm:gap-2 lg:gap-3 w-full sm:w-auto justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 flex-shrink-0" />
                  <span className="whitespace-nowrap">{cityData.ui.heroSection.ctaButton.text}</span>
                  <span className="font-mono font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">{cityData.contact.phoneDisplay}</span>
                </Link>
              </div>

              {/* Trust Indicators - Simplified */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 lg:gap-3 xl:gap-4 text-slate-600">
                {cityData.hero.trustIndicators.map((indicator, index) => {
                  const IconComponent = getIconComponent(indicator.iconName);
                  return (
                    <div key={index} className="flex items-center gap-1 sm:gap-1.5">
                      <IconComponent className={`h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 ${indicator.color} flex-shrink-0`} />
                      <span className="font-medium text-xs sm:text-sm leading-tight whitespace-nowrap">
                        {indicator.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hero Image - Optimized */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] lg:aspect-[3/2] xl:aspect-[4/3] 2xl:aspect-[3/2] rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl">
                <Image
                  src={cityData.hero.image}
                  alt={cityData.hero.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-1.5 sm:top-2 lg:top-3 xl:top-4 left-1.5 sm:left-2 lg:left-3 xl:left-4 bg-white/90 backdrop-blur-sm rounded-md sm:rounded-lg lg:rounded-xl px-1.5 sm:px-2 lg:px-3 py-1 sm:py-1.5 lg:py-2 shadow-lg">
                  <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                    <span className="font-medium text-xs sm:text-sm text-slate-800 whitespace-nowrap leading-tight">
                      {cityData.ui.heroSection.availabilityBadge.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Platforms Section */}
      {cityData.trustPlatforms && (
        <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-slate-600 mb-4 sm:mb-6 text-base sm:text-lg font-medium">{cityData.trustPlatforms.title}</p>
              <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 flex-wrap opacity-60">
                {cityData.trustPlatforms.platforms.map((platform, index) => (
                  <div key={index} className="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16">
                    <Image
                      src={platform.src}
                      alt={platform.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, (max-width: 1280px) 48px, 64px"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-10 left-2 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-100 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-2 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-100 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 xl:space-y-16">
            {(cityData.content as any).introduction && (
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-700 leading-relaxed">
                  {(cityData.content as any).introduction}
                </p>
              </div>
            )}

            <div className="space-y-6 sm:space-y-8 lg:space-y-12 xl:space-y-16">
              {hasSimplifiedContent ? (
                (cityData.content as any).sections.map((section: SimpleContentSection, index: number) => (
                  renderSimpleContentSection(section, index)
                ))
              ) : (
                cityData.content.sections?.map((section, index) => (
                  <div key={index} className="space-y-4 sm:space-y-6 lg:space-y-8">
                    <h2 className={contentHeadingClasses.h2}>
                      {(section as any).heading2 || (section as any).title || `Section ${index + 1}`}
                    </h2>
                    
                    {section.subsections && section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="ml-2 sm:ml-4 space-y-3 sm:space-y-4">
                        <h3 className={contentHeadingClasses.h3}>
                          {(subsection as any).heading3 || (subsection as any).subtitle || `Subsection ${subIndex + 1}`}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button 1 - After Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="font-medium text-lg sm:text-xl text-slate-800 mb-2 sm:mb-3">{cityData.ui.ctaSections.afterContent.title}</h3>
                <Link 
                  href={`tel:${cityData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all gap-2 text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  <span className="whitespace-nowrap">{cityData.ui.ctaSections.afterContent.buttonText}</span>
                  <span className="font-mono font-medium whitespace-nowrap">{cityData.contact.phoneDisplay}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm shadow-sm mb-4 sm:mb-6">
              {React.createElement(getIconComponent(cityData.ui.servicesSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {cityData.ui.servicesSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {cityData.services.title}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.services.subtitle}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {cityData.services.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
            {displayedServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl transition-all duration-100 p-3 sm:p-4 lg:p-6 text-center border border-white/20 hover:border-slate-300 transform hover:-translate-y-2 relative hover:bg-white hover:z-10 shadow-sm hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 rounded-xl sm:rounded-2xl opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-white/80 rounded-xl sm:rounded-2xl"></div>
                
                <div className="relative z-10">
                  {service.iconPath ? (
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 mx-auto mb-2 sm:mb-3">
                      <Image
                        src={service.iconPath}
                        alt={`Professional ${service.name} service icon`}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform drop-shadow-lg"
                        sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl inline-block mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform shadow-sm">
                      {React.createElement(getIconComponent(service.iconName), {
                        className: "h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white"
                      })}
                    </div>
                  )}
                  
                  <h3 className="font-medium text-black text-xs sm:text-sm lg:text-base mb-1 sm:mb-2 transition-colors leading-tight">
                    {service.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed hidden sm:block">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Show More/Less Services Button */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <button
              onClick={toggleServices}
              className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg gap-2 sm:gap-3"
            >
              {showAllServices ? (
                <>
                  <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-blue-600 rounded-full text-white">
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 -rotate-90" />
                  </div>
                  {cityData.ui.servicesSection.showLessButton.text}
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-blue-600 rounded-full text-white">
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rotate-90" />
                  </div>
                  {cityData.ui.servicesSection.showMoreButton.text}
                </>
              )}
            </button>
          </div>

          {/* CTA Banner - After Services */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden max-w-4xl mx-auto">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-white/90 border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
                  {React.createElement(getIconComponent(cityData.ui.ctaSections.afterServices.badge.icon), {
                    className: "h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600"
                  })}
                  <span className="font-medium text-blue-800 text-xs sm:text-sm">{cityData.ui.ctaSections.afterServices.badge.text}</span>
                </div>
                
                <h3 className="font-medium text-lg sm:text-xl text-slate-800 mb-3 sm:mb-4">
                  {cityData.ui.ctaSections.afterServices.title}
                </h3>
                
                <p className="text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  {cityData.ui.ctaSections.afterServices.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link 
                    href={`tel:${cityData.contact.phone}`}
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-100 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="whitespace-nowrap">{cityData.ui.ctaSections.afterServices.primaryButton.text}</span>
                    <span className="font-mono font-medium whitespace-nowrap">{cityData.contact.phoneDisplay}</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    href={cityData.ui.ctaSections.afterServices.secondaryButton.link}
                    className="group bg-white border border-slate-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium hover:bg-slate-50 transition-all duration-100 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {React.createElement(getIconComponent(cityData.ui.ctaSections.afterServices.secondaryButton.icon), {
                      className: "h-4 w-4 sm:h-5 sm:w-5"
                    })}
                    {cityData.ui.ctaSections.afterServices.secondaryButton.text}
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm shadow-sm mb-4 sm:mb-6">
              {React.createElement(getIconComponent(cityData.ui.whyChooseUsSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {cityData.ui.whyChooseUsSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {cityData.whyChooseUs.title}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.whyChooseUs.subtitle}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {cityData.whyChooseUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {cityData.whyChooseUs.reasons.map((reason, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-100 transform hover:-translate-y-2 text-center border border-slate-200 hover:border-slate-300">
                <div className="inline-block mb-4 sm:mb-6">
                  {reason.iconPath ? (
                    <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto">
                      <Image
                        src={reason.iconPath}
                        alt={reason.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl inline-block shadow-sm">
                      {React.createElement(getIconComponent(reason.iconName), {
                        className: "h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white"
                      })}
                    </div>
                  )}
                </div>
                <h3 className="font-medium text-base sm:text-lg lg:text-xl text-slate-800 mb-3 sm:mb-4">{reason.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm shadow-sm mb-4 sm:mb-6">
              {React.createElement(getIconComponent(cityData.ui.reviewsSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {cityData.ui.reviewsSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {cityData.ui.reviewsSection.title.part1} {cityData.name} {cityData.ui.reviewsSection.title.part2}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.ui.reviewsSection.title.part3}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              {cityData.ui.reviewsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            {cityData.testimonials.map((review, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-100 transform hover:-translate-y-1 border border-blue-200 min-h-[280px] sm:min-h-[320px] flex flex-col">
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm sm:text-base text-slate-600 ml-2 font-medium">{review.rating}.0</span>
                </div>

                <blockquote className="text-slate-700 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-4 sm:mb-6 flex-grow">
                  "{review.text}"
                </blockquote>

                <div className="pt-4 sm:pt-6 border-t border-slate-200 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-medium text-xs sm:text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-slate-800 text-sm sm:text-base">{review.name}</div>
                        <div className="text-xs text-slate-500">{review.location}</div>
                      </div>
                    </div>
                    {review.verified && (
                      <span className="bg-green-100 text-green-700 font-medium text-xs px-2 py-1 rounded-full whitespace-nowrap">
                        {cityData.ui.reviewsSection.verifiedBadge.text}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 sm:gap-6 lg:gap-8 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 shadow-lg border border-blue-200 flex-wrap justify-center">
              {cityData.trustIndicators.map((indicator, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="w-px h-8 sm:h-12 bg-slate-300 hidden sm:block"></div>}
                  <div className="text-center">
                    <div className="font-medium text-lg sm:text-xl lg:text-2xl text-slate-800 mb-1">{indicator.value}</div>
                    <div className="text-xs sm:text-sm text-slate-600">{indicator.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button 2 - After Reviews */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="font-medium text-lg sm:text-xl text-slate-800 mb-2 sm:mb-3">{cityData.ui.ctaSections.afterReviews.title}</h3>
                <Link 
                  href={`tel:${cityData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all gap-2 text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  <span className="whitespace-nowrap">{cityData.ui.ctaSections.afterReviews.buttonText}</span>
                  <span className="font-mono font-medium whitespace-nowrap">{cityData.contact.phoneDisplay}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm shadow-sm mb-4 sm:mb-6">
              {React.createElement(getIconComponent(cityData.ui.processSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {cityData.ui.processSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {cityData.process.title}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.process.subtitle}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {cityData.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {cityData.process.steps.map((step, index) => (
              <div key={index} className="text-center bg-white/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all border border-blue-200">
                <div className="flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {step.iconPath ? (
                    <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                      <Image
                        src={step.iconPath}
                        alt={step.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center font-medium text-lg sm:text-xl shadow-sm">
                      {React.createElement(getIconComponent(step.iconName), {
                        className: "h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                      })}
                    </div>
                  )}
                </div>
                <div className="text-blue-600 font-medium mb-2 text-xs sm:text-sm">{cityData.ui.processSection.stepLabel} {step.step}</div>
                <h3 className="font-medium text-base sm:text-lg lg:text-xl text-slate-800 mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities Section - BEFORE FAQs */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm shadow-sm mb-4 sm:mb-6">
              {React.createElement(getIconComponent(cityData.ui.nearbyCitiesSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {cityData.ui.nearbyCitiesSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {cityData.ui.nearbyCitiesSection.title.part1} {cityData.name}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.ui.nearbyCitiesSection.title.part2}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              {cityData.ui.nearbyCitiesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-6">
            {displayedCities.map((city, index) => (
              <Link
                key={index}
                href={`/locations/${cityData.stateSlug}/${city.slug}`}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 text-center hover:bg-white border border-slate-200 hover:border-slate-300 transition-all transform hover:-translate-y-1 group shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="inline-block mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-black" />
                </div>
                <span className="font-medium text-xs sm:text-sm lg:text-base text-slate-700 group-hover:text-blue-600 transition-colors block leading-tight">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button 
              onClick={toggleCities}
              className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-100 transform hover:scale-105 shadow-sm gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              {citiesToShow === 16 ? (
                <>
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                  {cityData.ui.nearbyCitiesSection.showAllButton.text}
                </>
              ) : (
                <>
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
                  {cityData.ui.nearbyCitiesSection.showLessButton.text}
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section - AFTER Nearby Cities */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-10 left-2 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-100 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-2 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-100 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm shadow-sm mb-4 sm:mb-6">
              {React.createElement(getIconComponent(cityData.ui.faqSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {cityData.ui.faqSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {cityData.name}-{cityData.ui.faqSection.title.suffix}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.ui.faqSection.title.highlight}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              {cityData.ui.faqSection.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {cityData.faqs.map((faq, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-100 hover:shadow-md hover:-translate-y-1">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 text-left flex items-center justify-between"
                  >
                    <div className="flex-1 pr-3 sm:pr-4">
                      <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-slate-700 hover:text-slate-800 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-100 ${
                        expandedFaq === index 
                          ? 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 transform rotate-180' 
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}>
                        {expandedFaq === index ? (
                          <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                        ) : (
                          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - AFTER FAQs */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm shadow-sm mb-4 sm:mb-6">
              {React.createElement(getIconComponent(cityData.ui.mapSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {cityData.ui.mapSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {cityData.name} {cityData.ui.mapSection.title}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.ui.mapSection.subtitle}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {cityData.ui.mapSection.description}
            </p>
          </div>
          
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl max-w-6xl mx-auto border border-slate-200">
            <iframe
              src={cityData.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${cityData.name} Service Coverage Map`}
              className="sm:h-[500px] lg:h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner 3 - After Map */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-white/90 border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
                  {React.createElement(getIconComponent(cityData.ui.ctaSections.beforeMap.badge.icon), {
                    className: "h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600"
                  })}
                  <span className="font-medium text-blue-800 text-xs sm:text-sm">{cityData.ui.ctaSections.beforeMap.badge.text}</span>
                </div>
                
                <h3 className="font-medium text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-800 mb-3 sm:mb-4">
                  {cityData.ui.ctaSections.beforeMap.title}
                </h3>
                
                <p className="text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  {cityData.ui.ctaSections.beforeMap.description}
                </p>
                
                <div className="flex justify-center mb-4 sm:mb-6">
                  <Link 
                    href={`tel:${cityData.contact.phone}`}
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-100 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="whitespace-nowrap">{cityData.ui.ctaSections.beforeMap.buttonText}</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
                  {cityData.ui.ctaSections.beforeMap.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}