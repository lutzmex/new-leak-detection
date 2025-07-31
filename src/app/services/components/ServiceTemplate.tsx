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
  TrendingUp,
  Zap
} from 'lucide-react';

import { ServiceData, SimpleContentSection, SimpleContentSubsection } from '../data/types';

interface ServiceTemplateProps {
  serviceData: ServiceData;
}

// Memoized and optimized icon map
const iconMap: { [key: string]: any } = {
  Home, Building, Mountain, Layers, Droplets, Settings, Target, Thermometer,
  AlertTriangle, Shield, Waves, Eye, Search, Camera, Gauge, Activity, Users,
  Award, Clock, Star, Brain, Globe, Phone, FileText, Radar, CheckCircle,
  Verified, MessageCircle, HelpCircle, BarChart, ArrowRight, ChevronRight,
  ChevronUp, ChevronDown, PhoneCall, Flame, Headphones, MapPin, Plus, Minus,
  Sparkles, ExternalLink, TrendingUp, Zap
};

// Optimized SERVICE TEMPLATE BREADCRUMB
const BreadcrumbNav = React.memo(({ serviceData }: { serviceData: ServiceData }) => {
  const serviceName = serviceData.name;
  const maxServiceLength = 25;
  
  const displayServiceName = useMemo(() => {
    if (serviceName.length > maxServiceLength) {
      const cutIndex = serviceName.lastIndexOf(' ', maxServiceLength);
      return cutIndex > 0 ? serviceName.substring(0, cutIndex) + '...' : serviceName.substring(0, maxServiceLength) + '...';
    }
    return serviceName;
  }, [serviceName, maxServiceLength]);

  return (
    <nav 
      className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base text-slate-600 mb-4 sm:mb-6 lg:mb-8 overflow-hidden" 
      aria-label="Breadcrumb"
      role="navigation"
    >
      <div className="flex items-center gap-1 sm:gap-2 w-full min-w-0">
        <Link 
          href={serviceData.ui.breadcrumb.homeLink}
          className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5 whitespace-nowrap flex-shrink-0"
          prefetch={false}
        >
          {serviceData.ui.breadcrumb.homeText}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />

        <Link 
          href={serviceData.ui.breadcrumb.servicesLink}
          className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5 whitespace-nowrap flex-shrink-0"
          prefetch={false}
        >
          {serviceData.ui.breadcrumb.servicesText}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />

        <span 
          className="text-slate-800 font-medium min-w-0 flex-1"
          title={serviceName}
        >
          <span className="sm:hidden">{displayServiceName}</span>
          <span className="hidden sm:inline">{serviceName}</span>
        </span>
      </div>
    </nav>
  );
});

BreadcrumbNav.displayName = 'BreadcrumbNav';

export default function ServiceTemplate({ serviceData }: ServiceTemplateProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true); // Start visible for faster LCP
  const [servicesToShow, setServicesToShow] = useState(serviceData.ui.relatedServicesSection.initialDisplay);
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

  const getIconComponent = useCallback((iconName: string) => {
    return iconMap[iconName] || Settings;
  }, []);

  // Memoized computed values
  const displayedServices = useMemo(() => 
    showAllServices ? serviceData.relatedServices : serviceData.relatedServices.slice(0, servicesToShow),
    [showAllServices, serviceData.relatedServices, servicesToShow]
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
  const renderContentSection = useCallback((section: SimpleContentSection, sectionIndex: number) => {
    return (
      <div key={sectionIndex} className="space-y-4 sm:space-y-6 lg:space-y-8">
        <h2 className={contentHeadingClasses.h2}>
          {section.heading2}
        </h2>
        {section.content && (
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 leading-relaxed mb-4 sm:mb-6">
            {section.content}
          </p>
        )}
        {section.subsections && section.subsections.map((subsection, subIndex) => 
          renderContentSubsection(subsection, `${sectionIndex}-${subIndex}`)
        )}
      </div>
    );
  }, []);

  const renderContentSubsection = useCallback((subsection: SimpleContentSubsection, key: string) => {
    return (
      <div key={key} className="ml-2 sm:ml-4 space-y-2 sm:space-y-4">
        {subsection.heading3 && (
          <h3 className={contentHeadingClasses.h3}>
            {subsection.heading3}
          </h3>
        )}
        {subsection.heading4 && (
          <h4 className={contentHeadingClasses.h4}>
            {subsection.heading4}
          </h4>
        )}
        {subsection.heading5 && (
          <h5 className={contentHeadingClasses.h5}>
            {subsection.heading5}
          </h5>
        )}
        {subsection.heading6 && (
          <h6 className={contentHeadingClasses.h6}>
            {subsection.heading6}
          </h6>
        )}
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 leading-relaxed">
          {subsection.content}
        </p>
        {subsection.subsections && subsection.subsections.map((nestedSub, nestedIndex) => 
          renderContentSubsection(nestedSub, `${key}-${nestedIndex}`)
        )}
      </div>
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Optimized Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
        <div className="min-h-[2rem] sm:min-h-[2.5rem]">
          <BreadcrumbNav serviceData={serviceData} />
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
                <div className="relative h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 flex-shrink-0">
                  <Image
                    src={serviceData.hero.badgeIcon.src}
                    alt={serviceData.hero.badgeIcon.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 16px, (max-width: 1024px) 24px, (max-width: 1280px) 32px, (max-width: 1536px) 48px, 64px"
                    loading="eager"
                    priority
                  />
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 bg-green-50 border border-green-200 rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-2.5 lg:py-1.5">
                  <Verified className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-green-600 flex-shrink-0" />
                  <span className="text-green-700 font-medium text-xs sm:text-sm lg:text-base leading-tight">
                    {serviceData.hero.badge}
                  </span>
                </div>
              </div>
              
              {/* Hero Title - Critical LCP element optimized */}
              <h1 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-900 leading-tight mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                {serviceData.hero.title}
                {serviceData.hero.subtitle && (
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm sm:text-base lg:text-lg xl:text-xl mt-1 sm:mt-1.5 lg:mt-2">
                    {serviceData.hero.subtitle}
                  </span>
                )}
              </h1>
              
              {/* Description - Optimized for LCP */}
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-slate-700 leading-relaxed mb-3 sm:mb-4 lg:mb-6 xl:mb-8">
                {serviceData.hero.description}
              </p>

              {/* CTA Button - Simplified for performance */}
              <div className="mb-3 sm:mb-4 lg:mb-6 xl:mb-8">
                <Link 
                  href={`tel:${serviceData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 py-2.5 sm:py-3 lg:py-4 xl:py-5 2xl:py-6 rounded-lg sm:rounded-xl lg:rounded-2xl font-medium text-xs sm:text-sm lg:text-base xl:text-lg transition-all transform hover:scale-105 shadow-lg gap-1.5 sm:gap-2 lg:gap-3 w-full sm:w-auto justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 flex-shrink-0" />
                  <span className="whitespace-nowrap">{serviceData.ui.heroSection.ctaButton.text}</span>
                  <span className="font-mono font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">{serviceData.contact.phoneDisplay}</span>
                </Link>
              </div>

              {/* Trust Indicators - Simplified */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 lg:gap-3 xl:gap-4 text-slate-600">
                {serviceData.hero.trustIndicators.map((indicator, index) => {
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
                  src={serviceData.hero.heroImage}
                  alt={serviceData.hero.heroImageAlt}
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
                      {serviceData.ui.heroSection.availabilityBadge.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Platforms Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-600 mb-4 sm:mb-6 text-base sm:text-lg font-medium">{serviceData.trustPlatforms.title}</p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 flex-wrap opacity-60">
              {serviceData.trustPlatforms.platforms.map((platform, index) => (
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

      {/* Content Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-10 left-2 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-100 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-2 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-100 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 xl:space-y-16">
            {serviceData.content.introduction && (
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-700 leading-relaxed">
                  {serviceData.content.introduction}
                </p>
              </div>
            )}

            <div className="space-y-6 sm:space-y-8 lg:space-y-12 xl:space-y-16">
              {serviceData.content.sections.map((section, index) => 
                renderContentSection(section, index)
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
                <h3 className="text-lg sm:text-xl font-medium text-slate-800 mb-2 sm:mb-3">{serviceData.ui.ctaSections.afterContent.title}</h3>
                <Link 
                  href={`tel:${serviceData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all gap-2 text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  <span className="whitespace-nowrap">{serviceData.ui.ctaSections.afterContent.buttonText}</span>
                  <span className="font-mono font-medium whitespace-nowrap">{serviceData.contact.phoneDisplay}</span>
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
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.processSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {serviceData.ui.processSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {serviceData.ui.processSection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.processSection.title.part2}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {serviceData.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {serviceData.process.steps.map((step, index) => (
              <div key={index} className="text-center bg-white/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all border border-blue-200">
                <div className="flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {(step as any).iconPath ? (
                    <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                      <Image
                        src={(step as any).iconPath}
                        alt={step.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl font-medium shadow-sm">
                      {React.createElement(getIconComponent((step as any).iconName || 'Settings'), {
                        className: "h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                      })}
                    </div>
                  )}
                </div>
                <div className="text-blue-600 font-medium mb-2 text-xs sm:text-sm">
                  {serviceData.ui.processSection.stepLabel} {(step as any).step || index + 1}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-slate-800 mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.technologySection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {serviceData.ui.technologySection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {serviceData.ui.technologySection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.technologySection.title.part2}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {serviceData.technology.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {serviceData.technology.tools.map((tool, index) => (
              <div key={index} className="text-center bg-white/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all border border-blue-200">
                <div className="inline-block mb-4 sm:mb-6">
                  {(tool as any).iconPath ? (
                    <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto">
                      <Image
                        src={(tool as any).iconPath}
                        alt={(tool as any).name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl inline-block shadow-sm">
                      {React.createElement(getIconComponent((tool as any).iconName || 'Settings'), {
                        className: "h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white"
                      })}
                    </div>
                  )}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-slate-800 mb-3 sm:mb-4">{(tool as any).name}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{(tool as any).description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.reviewsSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {serviceData.ui.reviewsSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {serviceData.ui.reviewsSection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.reviewsSection.title.part2}
              </span>
              <span className="block text-slate-900">
                {serviceData.ui.reviewsSection.title.part3}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              {serviceData.ui.reviewsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            {serviceData.testimonials.map((review, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-100 transform hover:-translate-y-1 border border-blue-200 min-h-[280px] sm:min-h-[320px] flex flex-col">
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm sm:text-base text-slate-600 ml-2 font-medium">{review.rating}.0</span>
                </div>

                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
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
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap">
                        {serviceData.ui.reviewsSection.verifiedBadge.text}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 sm:gap-6 lg:gap-8 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 shadow-lg border border-blue-200 flex-wrap justify-center">
              {serviceData.trustIndicators.map((indicator, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="w-px h-8 sm:h-12 bg-slate-300 hidden sm:block"></div>}
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-800 mb-1">{indicator.value}</div>
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
                <h3 className="text-lg sm:text-xl font-medium text-slate-800 mb-2 sm:mb-3">{serviceData.ui.ctaSections.afterReviews.title}</h3>
                <Link 
                  href={`tel:${serviceData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all gap-2 text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  <span className="whitespace-nowrap">{serviceData.ui.ctaSections.afterReviews.buttonText}</span>
                  <span className="font-mono font-medium whitespace-nowrap">{serviceData.contact.phoneDisplay}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-10 left-2 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-100 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-2 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-100 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.faqSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {serviceData.ui.faqSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {serviceData.ui.faqSection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.faqSection.title.part2}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              {serviceData.ui.faqSection.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {serviceData.faqs.map((faq, index) => (
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
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg">
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

      {/* CTA Banner 3 - Before Related Services */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-white/90 border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
                  {React.createElement(getIconComponent(serviceData.ui.ctaSections.beforeRelatedServices.badge.icon), {
                    className: "h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600"
                  })}
                  <span className="text-blue-800 font-medium text-xs sm:text-sm">{serviceData.ui.ctaSections.beforeRelatedServices.badge.text}</span>
                </div>
                
                <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-800 mb-3 sm:mb-4">
                  {serviceData.ui.ctaSections.beforeRelatedServices.title}
                </h3>
                
                <p className="text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  {serviceData.ui.ctaSections.beforeRelatedServices.description}
                </p>
                
                <div className="flex justify-center mb-4 sm:mb-6">
                  <Link 
                    href={`tel:${serviceData.contact.phone}`}
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-100 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="whitespace-nowrap">{serviceData.ui.ctaSections.beforeRelatedServices.buttonText}</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
                  {serviceData.ui.ctaSections.beforeRelatedServices.features.map((feature, index) => (
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

      {/* Related Services Section */}
      <section className="py-6 sm:py-8 lg:py-12 xl:py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.relatedServicesSection.badge.icon), {
                className: "h-4 w-4 sm:h-5 sm:w-5 mr-2"
              })}
              {serviceData.ui.relatedServicesSection.badge.text}
            </div>
            <h2 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-4 sm:mb-6 leading-tight">
              {serviceData.ui.relatedServicesSection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.relatedServicesSection.title.part2}
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              {serviceData.ui.relatedServicesSection.description}
            </p>
          </div>

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

          {serviceData.relatedServices.length > servicesToShow && (
            <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
              <button
                onClick={toggleServices}
                className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-100 transform hover:scale-105 shadow-sm gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
              >
                {showAllServices ? (
                  <>
                    <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
                    {serviceData.ui.relatedServicesSection.showLessButton.text}
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                    {serviceData.ui.relatedServicesSection.showMoreButton.text}
                  </>
                )}
              </button>
            </div>
          )}

          {/* CTA Banner 4 - After Related Services */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden max-w-4xl mx-auto">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-white/90 border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
                  {React.createElement(getIconComponent(serviceData.ui.ctaSections.afterRelatedServices.badge.icon), {
                    className: "h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600"
                  })}
                  <span className="text-blue-800 font-medium text-xs sm:text-sm">{serviceData.ui.ctaSections.afterRelatedServices.badge.text}</span>
                </div>
                
                <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-800 mb-3 sm:mb-4">
                  {serviceData.ui.ctaSections.afterRelatedServices.title}
                </h3>
                
                <p className="text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  {serviceData.ui.ctaSections.afterRelatedServices.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link 
                    href={`tel:${serviceData.contact.phone}`}
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-100 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="whitespace-nowrap">{serviceData.ui.ctaSections.afterRelatedServices.primaryButton.text}</span>
                    <span className="font-mono font-medium whitespace-nowrap">{serviceData.contact.phoneDisplay}</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    href={serviceData.ui.ctaSections.afterRelatedServices.secondaryButton.link}
                    className="group bg-white border border-slate-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium hover:bg-slate-50 transition-all duration-100 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {React.createElement(getIconComponent(serviceData.ui.ctaSections.afterRelatedServices.secondaryButton.icon), {
                      className: "h-4 w-4 sm:h-5 sm:w-5"
                    })}
                    {serviceData.ui.ctaSections.afterRelatedServices.secondaryButton.text}
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
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