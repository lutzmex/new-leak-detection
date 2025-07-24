"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image"; // ✅ ADDED - Next.js Image import
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

export default function CityTemplate({ cityData }: CityTemplateProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  // ✅ FIXED - Set initial cities to show to 16 (2 rows of 8 on lg screens)
  const [citiesToShow, setCitiesToShow] = useState(16);
  const [servicesToShow, setServicesToShow] = useState(cityData.ui.servicesSection.initialDisplay);
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  // Icon mapping for all components
  const iconMap: { [key: string]: any } = {
    Home, Building, Mountain, Layers, Droplets, Settings, Target, Thermometer,
    AlertTriangle, Shield, Waves, Eye, Search, Camera, Gauge, Activity, Users,
    Award, Clock, Star, Brain, Globe, Phone, FileText, Radar, CheckCircle,
    Verified, MessageCircle, HelpCircle, BarChart, ArrowRight, ChevronRight,
    ChevronUp, ChevronDown, PhoneCall, Flame, Headphones, MapPin, Plus, Minus,
    Sparkles, ExternalLink, TrendingUp
  };

  // Helper function to get icon component from string name
  const getIconComponent = (iconName: string) => {
    return iconMap[iconName] || Settings; // fallback to Settings if icon not found
  };

  // Content section specific heading classes - Clean typography
  const contentHeadingClasses = {
    h1: "font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight",
    h2: "font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-800 mb-4 sm:mb-6",
    h3: "font-poppins font-medium text-xl sm:text-2xl text-slate-800 mb-3",
    h4: "font-poppins font-medium text-lg sm:text-xl text-slate-800 mb-3",
    h5: "font-poppins font-medium text-base sm:text-lg text-slate-800 mb-2",
    h6: "font-poppins font-medium text-sm sm:text-base text-slate-800 mb-2"
  };

  // Helper function to render simplified content structure
  const renderSimpleContentSubsection = (subsection: SimpleContentSubsection, parentLevel: number = 2) => {
    // Determine heading level (H3, H4, H5, H6)
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
    // Use content-specific heading classes matching StateTemplate
    const typographyClass = contentHeadingClasses[headingLevel];

    return (
      <div key={headingText || 'subsection'} className="mb-6">
        {headingText && (
          <HeadingTag className={typographyClass}>
            {headingText}
          </HeadingTag>
        )}
        <p className="font-poppins text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
          {subsection.content}
        </p>
        
        {/* Render nested subsections */}
        {subsection.subsections && subsection.subsections.map((nestedSubsection, index) => (
          <div key={index} className="ml-4 mt-4">
            {renderSimpleContentSubsection(nestedSubsection, parentLevel + 1)}
          </div>
        ))}
      </div>
    );
  };

  // Helper function to render simplified content sections
  const renderSimpleContentSection = (section: SimpleContentSection, index: number) => {
    return (
      <div key={index} className="space-y-6 sm:space-y-8">
        {/* H2 Heading - Using content-specific class matching StateTemplate */}
        <h2 className={contentHeadingClasses.h2}>
          {section.heading2}
        </h2>
        
        {/* Main section content */}
        {section.content && (
          <p className="font-poppins text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            {section.content}
          </p>
        )}

        {/* Subsections */}
        {section.subsections && section.subsections.map((subsection, subIndex) => (
          renderSimpleContentSubsection(subsection)
        ))}
      </div>
    );
  };

  // Check if we have simplified content structure
  const hasSimplifiedContent = (cityData.content as any).sections && 
    Array.isArray((cityData.content as any).sections) && 
    (cityData.content as any).sections.length > 0 && 
    typeof (cityData.content as any).sections[0].heading2 === 'string';

  const displayedServices = showAllServices ? cityData.services.list : cityData.services.list.slice(0, servicesToShow);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <nav className="flex items-center gap-2 sm:gap-3 font-poppins text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link 
            href={cityData.ui.breadcrumb.homeLink}
            className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1 py-1"
          >
            {cityData.ui.breadcrumb.homeText}
          </Link>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
          <Link 
            href={cityData.ui.breadcrumb.locationsLink}
            className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1 py-1"
          >
            {cityData.ui.breadcrumb.locationsText}
          </Link>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
          <Link 
            href={`/locations/${cityData.stateSlug}`}
            className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1 py-1"
          >
            {cityData.state}
          </Link>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
          <span className="text-slate-800 font-medium truncate">{cityData.name}</span>
        </nav>
      </div>

      {/* Hero Section - MATCHING STATETEMPLATE STYLE WITH CLEAN TYPOGRAPHY */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1">
              {/* Certified Service Badge */}
              <div className={`flex items-center gap-3 mb-6 lg:mb-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                {/* ✅ UPDATED - Badge Icon with Next.js Image */}
                {cityData.hero.badgeIcon ? (
                  <div className="relative h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16">
                    <Image
                      src={cityData.hero.badgeIcon.src}
                      alt={cityData.hero.badgeIcon.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 32px, (max-width: 1024px) 48px, 64px"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-1.5 sm:p-2 lg:p-2.5 rounded-lg sm:rounded-xl shadow-lg">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                )}
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-2.5 py-1 sm:py-1.5">
                  <Verified className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                  <span className="text-green-700 font-poppins font-medium text-xs sm:text-sm lg:text-base">{cityData.hero.badge}</span>
                </div>
              </div>
              
              {/* Hero Title with Subtitle - MATCHING STATETEMPLATE STRUCTURE */}
              <h1 className={`font-poppins font-medium text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-tight mb-4 sm:mb-6 lg:mb-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{transitionDelay: '200ms'}}>
                {cityData.hero.title}
                {cityData.hero.subtitle && (
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg sm:text-lg lg:text-xl mt-2 sm:mt-3">
                    {cityData.hero.subtitle}
                  </span>
                )}
              </h1>
              
              <p className={`font-poppins text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{transitionDelay: '400ms'}}>
                {cityData.hero.description}
              </p>

              {/* CTA Button */}
              <div className={`mb-6 lg:mb-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{transitionDelay: '600ms'}}>
                <Link 
                  href={`tel:${cityData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl font-poppins font-medium text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg gap-3 w-full sm:w-auto justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
                  {cityData.ui.heroSection.ctaButton.text} <span className="font-ibm-plex-mono font-medium">{cityData.contact.phoneDisplay}</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className={`flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 text-slate-600 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{transitionDelay: '800ms'}}>
                {cityData.hero.trustIndicators.map((indicator, index) => {
                  const IconComponent = getIconComponent(indicator.iconName);
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 ${indicator.color}`} />
                      <span className="font-poppins font-medium text-xs sm:text-sm">{indicator.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hero Image */}
            <div className={`relative order-1 lg:order-2 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{transitionDelay: '1000ms'}}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[3/2] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                {/* ✅ UPDATED - Hero Image with Next.js Image */}
                <Image
                  src={cityData.hero.image}
                  alt={cityData.hero.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Floating Badge on Image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-poppins font-medium text-xs text-slate-800">{cityData.ui.heroSection.availabilityBadge.text}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Platforms Section */}
      {cityData.trustPlatforms && (
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="font-poppins text-slate-600 mb-6 text-lg font-medium">{cityData.trustPlatforms.title}</p>
              <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 flex-wrap opacity-60">
                {/* ✅ UPDATED - Trust Platform Images with Next.js Image */}
                {cityData.trustPlatforms.platforms.map((platform, index) => (
                  <div key={index} className="relative h-12 w-12 sm:h-16 sm:w-16">
                    <Image
                      src={platform.src}
                      alt={platform.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 48px, 64px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Section - MATCHING STATETEMPLATE STRUCTURE */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Introduction */}
            {(cityData.content as any).introduction && (
              <div className="text-center max-w-4xl mx-auto">
                <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed">
                  {(cityData.content as any).introduction}
                </p>
              </div>
            )}

            {/* Content Sections - MATCHING STATETEMPLATE STRUCTURE */}
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {hasSimplifiedContent ? (
                // Render simplified content structure with StateTemplate styling
                (cityData.content as any).sections.map((section: SimpleContentSection, index: number) => (
                  renderSimpleContentSection(section, index)
                ))
              ) : (
                // Render legacy content structure with StateTemplate styling
                cityData.content.sections?.map((section, index) => (
                  <div key={index} className="space-y-6 sm:space-y-8">
                    {/* H2 - Using content-specific class matching StateTemplate */}
                    <h2 className={contentHeadingClasses.h2}>
                      {(section as any).heading2 || (section as any).title || `Section ${index + 1}`}
                    </h2>
                    
                    {/* Check if subsections exist and handle safely */}
                    {section.subsections && section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="ml-4 space-y-4">
                        {/* H3 - Using content-specific class matching StateTemplate */}
                        <h3 className={contentHeadingClasses.h3}>
                          {(subsection as any).heading3 || (subsection as any).subtitle || `Subsection ${subIndex + 1}`}
                        </h3>
                        <p className="font-poppins text-base sm:text-lg text-slate-700 leading-relaxed">
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="font-poppins font-medium text-xl text-slate-800 mb-3">{cityData.ui.ctaSections.afterContent.title}</h3>
                <Link 
                  href={`tel:${cityData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 py-3 rounded-xl font-poppins font-medium transition-all gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {cityData.ui.ctaSections.afterContent.buttonText} <span className="font-ibm-plex-mono font-medium">{cityData.contact.phoneDisplay}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - RESTORED TO ORIGINAL LARGE SIZES */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm shadow-sm mb-6">
              {React.createElement(getIconComponent(cityData.ui.servicesSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {cityData.ui.servicesSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {cityData.services.title}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.services.subtitle}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {cityData.services.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
            {displayedServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl transition-all duration-300 p-6 text-center border border-white/20 hover:border-slate-300 transform hover:-translate-y-2 relative hover:bg-white hover:z-10"
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
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-white/80 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* ✅ UPDATED - Service Icons with Next.js Image */}
                  {service.iconPath ? (
                    <div className="relative h-14 w-14 mx-auto mb-3">
                      <Image
                        src={service.iconPath}
                        alt={`Professional ${service.name} service icon`}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform drop-shadow-lg"
                        sizes="56px"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-3 sm:p-4 rounded-2xl inline-block mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-sm">
                      {React.createElement(getIconComponent(service.iconName), {
                        className: "h-5 w-5 sm:h-6 sm:w-6 text-white"
                      })}
                    </div>
                  )}
                  
                  <h3 className="font-poppins font-medium text-black text-base mb-2 transition-colors leading-tight">
                    {service.name}
                  </h3>
                  
                  <p className="font-poppins text-sm text-black/70 leading-relaxed hidden sm:block">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Show More/Less Services Button */}
          <div className="text-center mb-8 sm:mb-12">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium text-lg transition-all transform hover:scale-105 shadow-lg gap-3"
            >
              {showAllServices ? (
                <>
                  <div className="flex items-center justify-center w-7 h-7 bg-blue-600 rounded-full text-white">
                    <ChevronRight className="h-4 w-4 -rotate-90" />
                  </div>
                  {cityData.ui.servicesSection.showLessButton.text}
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center w-7 h-7 bg-blue-600 rounded-full text-white">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </div>
                  {cityData.ui.servicesSection.showMoreButton.text}
                </>
              )}
            </button>
          </div>

          {/* CTA Banner - After Services */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden max-w-4xl mx-auto">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-white/90 border border-blue-200 rounded-full px-6 py-3 mb-6">
                  {React.createElement(getIconComponent(cityData.ui.ctaSections.afterServices.badge.icon), {
                    className: "h-5 w-5 mr-2 text-blue-600"
                  })}
                  <span className="font-poppins font-medium text-blue-800">{cityData.ui.ctaSections.afterServices.badge.text}</span>
                </div>
                
                <h3 className="font-poppins font-medium text-xl text-slate-800 mb-4">
                  {cityData.ui.ctaSections.afterServices.title}
                </h3>
                
                <p className="font-poppins text-slate-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  {cityData.ui.ctaSections.afterServices.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href={`tel:${cityData.contact.phone}`}
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    {cityData.ui.ctaSections.afterServices.primaryButton.text} <span className="font-ibm-plex-mono font-medium">{cityData.contact.phoneDisplay}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    href={cityData.ui.ctaSections.afterServices.secondaryButton.link}
                    className="group bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-poppins font-medium hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    {React.createElement(getIconComponent(cityData.ui.ctaSections.afterServices.secondaryButton.icon), {
                      className: "h-5 w-5"
                    })}
                    {cityData.ui.ctaSections.afterServices.secondaryButton.text}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm shadow-sm mb-6">
              {React.createElement(getIconComponent(cityData.ui.whyChooseUsSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {cityData.ui.whyChooseUsSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {cityData.whyChooseUs.title}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.whyChooseUs.subtitle}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {cityData.whyChooseUs.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityData.whyChooseUs.reasons.map((reason, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 text-center border border-slate-200 hover:border-slate-300">
                <div className="inline-block mb-6">
                  {/* ✅ UPDATED - Why Choose Us Icons with Next.js Image */}
                  {reason.iconPath ? (
                    <div className="relative h-16 w-16 mx-auto">
                      <Image
                        src={reason.iconPath}
                        alt={reason.title}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-4 rounded-2xl inline-block shadow-sm">
                      {React.createElement(getIconComponent(reason.iconName), {
                        className: "h-8 w-8 text-white"
                      })}
                    </div>
                  )}
                </div>
                <h3 className="font-poppins font-medium text-xl text-slate-800 mb-4">{reason.title}</h3>
                <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm shadow-sm mb-6">
              {React.createElement(getIconComponent(cityData.ui.reviewsSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {cityData.ui.reviewsSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {cityData.ui.reviewsSection.title.part1} {cityData.name} {cityData.ui.reviewsSection.title.part2}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.ui.reviewsSection.title.part3}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {cityData.ui.reviewsSection.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            {cityData.testimonials.map((review, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200 min-h-[320px] flex flex-col">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="font-poppins text-base text-slate-600 ml-2 font-medium">{review.rating}.0</span>
                </div>

                {/* Review Text */}
                <blockquote className="font-poppins text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 flex-grow">
                  "{review.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="pt-6 border-t border-slate-200 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-poppins font-medium text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-poppins font-medium text-slate-800 text-base">{review.name}</div>
                        <div className="font-poppins text-xs text-slate-500">{review.location}</div>
                      </div>
                    </div>
                    {review.verified && (
                      <span className="bg-green-100 text-green-700 font-poppins font-medium text-xs px-2 py-1 rounded-full">
                        {cityData.ui.reviewsSection.verifiedBadge.text}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-blue-200">
              {cityData.trustIndicators.map((indicator, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="w-px h-12 bg-slate-300"></div>}
                  <div className="text-center">
                    <div className="font-poppins font-medium text-2xl text-slate-800 mb-1">{indicator.value}</div>
                    <div className="font-poppins text-sm text-slate-600">{indicator.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button 2 - After Reviews */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="font-poppins font-medium text-xl text-slate-800 mb-3">{cityData.ui.ctaSections.afterReviews.title}</h3>
                <Link 
                  href={`tel:${cityData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 py-3 rounded-xl font-poppins font-medium transition-all gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {cityData.ui.ctaSections.afterReviews.buttonText} <span className="font-ibm-plex-mono font-medium">{cityData.contact.phoneDisplay}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm shadow-sm mb-6">
              {React.createElement(getIconComponent(cityData.ui.processSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {cityData.ui.processSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {cityData.process.title}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.process.subtitle}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {cityData.process.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cityData.process.steps.map((step, index) => (
              <div key={index} className="text-center bg-white/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-200">
                <div className="flex items-center justify-center mx-auto mb-6">
                  {/* ✅ UPDATED - Process Step Icons with Next.js Image */}
                  {step.iconPath ? (
                    <div className="relative h-16 w-16">
                      <Image
                        src={step.iconPath}
                        alt={step.title}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-poppins font-medium text-xl shadow-sm">
                      {React.createElement(getIconComponent(step.iconName), {
                        className: "h-8 w-8"
                      })}
                    </div>
                  )}
                </div>
                <div className="text-blue-600 font-poppins font-medium mb-2 text-sm">{cityData.ui.processSection.stepLabel} {step.step}</div>
                <h3 className="font-poppins font-medium text-xl text-slate-800 mb-4">{step.title}</h3>
                <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ORDER: Nearby Cities Section - BEFORE FAQs */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm shadow-sm mb-6">
              {React.createElement(getIconComponent(cityData.ui.nearbyCitiesSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {cityData.ui.nearbyCitiesSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {cityData.ui.nearbyCitiesSection.title.part1} {cityData.name}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.ui.nearbyCitiesSection.title.part2}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {cityData.ui.nearbyCitiesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {cityData.nearbyCities.slice(0, citiesToShow).map((city, index) => (
              <Link
                key={index}
                href={`/locations/${cityData.stateSlug}/${city.slug}`}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-white border border-slate-200 hover:border-slate-300 transition-all transform hover:-translate-y-1 group shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="inline-block mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-12 w-12 sm:h-14 sm:w-14 text-black" />
                </div>
                <span className="font-poppins text-sm sm:text-base font-medium text-slate-700 group-hover:text-blue-600 transition-colors block">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* ✅ FIXED - Cities Show More/Less Button Logic */}
            <button 
              onClick={() => setCitiesToShow(prev => prev === 16 ? cityData.nearbyCities.length : 16)}
              className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {citiesToShow === 16 ? (
                <>
                  <ChevronDown className="h-5 w-5" />
                  {cityData.ui.nearbyCitiesSection.showAllButton.text}
                </>
              ) : (
                <>
                  <ChevronUp className="h-5 w-5" />
                  {cityData.ui.nearbyCitiesSection.showLessButton.text}
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section - AFTER Nearby Cities */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm shadow-sm mb-6">
              {React.createElement(getIconComponent(cityData.ui.faqSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {cityData.ui.faqSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {cityData.name}-{cityData.ui.faqSection.title.suffix}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.ui.faqSection.title.highlight}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {cityData.ui.faqSection.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {cityData.faqs.map((faq, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="font-poppins text-base sm:text-lg lg:text-xl font-medium text-slate-700 hover:text-slate-800 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        expandedFaq === index 
                          ? 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 transform rotate-180' 
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}>
                        {expandedFaq === index ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
                        <p className="font-poppins text-slate-700 leading-relaxed text-base sm:text-lg lg:text-xl">
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

      {/* NEW ORDER: Map Section - AFTER FAQs */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm shadow-sm mb-6">
              {React.createElement(getIconComponent(cityData.ui.mapSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {cityData.ui.mapSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {cityData.name} {cityData.ui.mapSection.title}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {cityData.ui.mapSection.subtitle}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {cityData.ui.mapSection.description}
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto border border-slate-200">
            <iframe
              src={cityData.mapEmbedUrl}
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${cityData.name} Service Coverage Map`}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner 3 - After Map */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-white/90 border border-blue-200 rounded-full px-6 py-3 mb-6">
                  {React.createElement(getIconComponent(cityData.ui.ctaSections.beforeMap.badge.icon), {
                    className: "h-5 w-5 mr-2 text-blue-600"
                  })}
                  <span className="font-poppins font-medium text-blue-800">{cityData.ui.ctaSections.beforeMap.badge.text}</span>
                </div>
                
                <h3 className="font-poppins font-medium text-xl text-slate-800 mb-4">
                  {cityData.ui.ctaSections.beforeMap.title}
                </h3>
                
                <p className="font-poppins text-slate-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  {cityData.ui.ctaSections.beforeMap.description}
                </p>
                
                <div className="flex justify-center mb-6">
                  <Link 
                    href={`tel:${cityData.contact.phone}`}
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    {cityData.ui.ctaSections.beforeMap.buttonText}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-600">
                  {cityData.ui.ctaSections.beforeMap.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="font-poppins">{feature.text}</span>
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