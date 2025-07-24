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
  TrendingUp,
  Zap
} from 'lucide-react';

import { ServiceData, SimpleContentSection, SimpleContentSubsection } from '../data/types';

interface ServiceTemplateProps {
  serviceData: ServiceData;
}

export default function ServiceTemplate({ serviceData }: ServiceTemplateProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [servicesToShow, setServicesToShow] = useState(serviceData.ui.relatedServicesSection.initialDisplay);
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
    Sparkles, ExternalLink, TrendingUp, Zap
  };

  // Helper function to get icon component from string name
  const getIconComponent = (iconName: string) => {
    return iconMap[iconName] || Settings; // fallback to Settings if icon not found
  };

  // Content section specific heading classes - UPDATED WITH CLEAN TYPOGRAPHY
  const contentHeadingClasses = {
    h1: "font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight",
    h2: "font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-800 mb-4 sm:mb-6",
    h3: "font-poppins font-medium text-xl sm:text-2xl text-slate-800 mb-3",
    h4: "font-poppins font-medium text-lg sm:text-xl text-slate-800 mb-3",
    h5: "font-poppins font-medium text-base sm:text-lg text-slate-800 mb-2",
    h6: "font-poppins font-medium text-sm sm:text-base text-slate-800 mb-2"
  };

  const displayedServices = showAllServices ? serviceData.relatedServices : serviceData.relatedServices.slice(0, servicesToShow);

  // Helper function to render content sections recursively
  const renderContentSection = (section: SimpleContentSection, sectionIndex: number) => {
    return (
      <div key={sectionIndex} className="space-y-6 sm:space-y-8">
        <h2 className={contentHeadingClasses.h2}>
          {section.heading2}
        </h2>
        {section.content && (
          <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-6">
            {section.content}
          </p>
        )}
        {section.subsections && section.subsections.map((subsection, subIndex) => 
          renderContentSubsection(subsection, `${sectionIndex}-${subIndex}`)
        )}
      </div>
    );
  };

  // Helper function to render content subsections recursively
  const renderContentSubsection = (subsection: SimpleContentSubsection, key: string) => {
    return (
      <div key={key} className="ml-4 space-y-4">
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
        <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed">
          {subsection.content}
        </p>
        {subsection.subsections && subsection.subsections.map((nestedSub, nestedIndex) => 
          renderContentSubsection(nestedSub, `${key}-${nestedIndex}`)
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Breadcrumb Navigation */}
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <nav className="flex items-center gap-2 font-poppins text-sm sm:text-base text-slate-600 mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link 
            href={serviceData.ui.breadcrumb.homeLink}
            className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
          >
            {serviceData.ui.breadcrumb.homeText}
          </Link>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
          <Link 
            href={serviceData.ui.breadcrumb.servicesLink}
            className="hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
          >
            {serviceData.ui.breadcrumb.servicesText}
          </Link>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
          <span className="font-poppins text-slate-800 font-medium truncate">{serviceData.name}</span>
        </nav>
      </div>

      {/* Hero Section - REDUCED SIZES TO MATCH CITYTEMPLATE */}
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
                <div className="relative h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16">
                  <Image
                    src={serviceData.hero.badgeIcon.src}
                    alt={serviceData.hero.badgeIcon.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 32px, (max-width: 1024px) 48px, 64px"
                  />
                </div>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-2.5 py-1 sm:py-1.5">
                  <Verified className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                  <span className="font-poppins text-green-700 font-medium text-xs sm:text-sm lg:text-base">{serviceData.hero.badge}</span>
                </div>
              </div>
              
              {/* Hero Title - REDUCED SIZE TO MATCH CITYTEMPLATE */}
              <h1 className={`font-poppins font-medium text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-tight mb-4 sm:mb-6 lg:mb-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{transitionDelay: '200ms'}}>
                {serviceData.hero.title}
                {serviceData.hero.subtitle && (
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg sm:text-lg lg:text-xl mt-2 sm:mt-3">
                    {serviceData.hero.subtitle}
                  </span>
                )}
              </h1>
              
              <p className={`font-poppins text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{transitionDelay: '400ms'}}>
                {serviceData.hero.description}
              </p>

              {/* CTA Button */}
              <div className={`mb-6 lg:mb-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{transitionDelay: '600ms'}}>
                <Link 
                  href={`tel:${serviceData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl font-poppins font-medium text-base sm:text-lg lg:text-xl transition-all transform hover:scale-105 shadow-lg gap-3 w-full sm:w-auto justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
                  <span>{serviceData.ui.heroSection.ctaButton.text}</span>
                  <span className="font-ibm-plex-mono font-medium">{serviceData.contact.phoneDisplay}</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className={`flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 text-slate-600 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{transitionDelay: '800ms'}}>
                {serviceData.hero.trustIndicators.map((indicator, index) => {
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
                  src={serviceData.hero.heroImage}
                  alt={serviceData.hero.heroImageAlt}
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
                    <span className="font-poppins text-xs font-medium text-slate-800">{serviceData.ui.heroSection.availabilityBadge.text}</span>
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
            <p className="font-poppins text-slate-600 mb-6 text-lg font-medium">{serviceData.trustPlatforms.title}</p>
            <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 flex-wrap opacity-60">
              {/* ✅ UPDATED - Trust Platform Images with Next.js Image */}
              {serviceData.trustPlatforms.platforms.map((platform, index) => (
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

      {/* Content Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Introduction */}
            {serviceData.content.introduction && (
              <div className="text-center max-w-4xl mx-auto">
                <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed">
                  {serviceData.content.introduction}
                </p>
              </div>
            )}

            {/* Content Sections */}
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {serviceData.content.sections.map((section, index) => 
                renderContentSection(section, index)
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
                <h3 className="font-poppins text-xl font-medium text-slate-800 mb-3">{serviceData.ui.ctaSections.afterContent.title}</h3>
                <Link 
                  href={`tel:${serviceData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 py-3 rounded-xl font-poppins font-medium transition-all gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>{serviceData.ui.ctaSections.afterContent.buttonText}</span>
                  <span className="font-ibm-plex-mono font-medium">{serviceData.contact.phoneDisplay}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - FIXED PROPERTY ACCESS */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins text-sm font-medium mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.processSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {serviceData.ui.processSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {serviceData.ui.processSection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.processSection.title.part2}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {serviceData.process.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.steps.map((step, index) => (
              <div key={index} className="text-center bg-white/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-200">
                <div className="flex items-center justify-center mx-auto mb-6">
                  {/* ✅ UPDATED - Process Step Icons with Next.js Image */}
                  {(step as any).iconPath ? (
                    <div className="relative h-16 w-16">
                      <Image
                        src={(step as any).iconPath}
                        alt={step.title}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-medium shadow-sm">
                      {React.createElement(getIconComponent((step as any).iconName || 'Settings'), {
                        className: "h-8 w-8"
                      })}
                    </div>
                  )}
                </div>
                <div className="font-poppins text-blue-600 font-medium mb-2 text-sm">
                  {serviceData.ui.processSection.stepLabel} {(step as any).step || index + 1}
                </div>
                <h3 className="font-poppins text-xl font-medium text-slate-800 mb-4">{step.title}</h3>
                <p className="font-poppins text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section - FIXED PROPERTY ACCESS */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins text-sm font-medium mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.technologySection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {serviceData.ui.technologySection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {serviceData.ui.technologySection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.technologySection.title.part2}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              {serviceData.technology.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.technology.tools.map((tool, index) => (
              <div key={index} className="text-center bg-white/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-200">
                <div className="inline-block mb-6">
                  {/* ✅ UPDATED - Technology Tool Icons with Next.js Image */}
                  {(tool as any).iconPath ? (
                    <div className="relative h-16 w-16 mx-auto">
                      <Image
                        src={(tool as any).iconPath}
                        alt={(tool as any).name}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-4 rounded-2xl inline-block shadow-sm">
                      {React.createElement(getIconComponent((tool as any).iconName || 'Settings'), {
                        className: "h-8 w-8 text-white"
                      })}
                    </div>
                  )}
                </div>
                <h3 className="font-poppins text-xl font-medium text-slate-800 mb-4">{(tool as any).name}</h3>
                <p className="font-poppins text-slate-600 leading-relaxed">{(tool as any).description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins text-sm font-medium mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.reviewsSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {serviceData.ui.reviewsSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {serviceData.ui.reviewsSection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.reviewsSection.title.part2}
              </span>
              <span className="block text-slate-900">
                {serviceData.ui.reviewsSection.title.part3}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {serviceData.ui.reviewsSection.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            {serviceData.testimonials.map((review, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200 min-h-[320px] flex flex-col">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="font-poppins text-base text-slate-600 ml-2 font-medium">{review.rating}.0</span>
                </div>

                {/* Review Text */}
                <blockquote className="font-poppins text-slate-700 text-base leading-relaxed mb-6 flex-grow">
                  "{review.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="pt-6 border-t border-slate-200 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-poppins font-medium text-slate-800 text-base">{review.name}</div>
                        <div className="font-poppins text-xs text-slate-500">{review.location}</div>
                      </div>
                    </div>
                    {review.verified && (
                      <span className="font-poppins bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        {serviceData.ui.reviewsSection.verifiedBadge.text}
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
              {serviceData.trustIndicators.map((indicator, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="w-px h-12 bg-slate-300"></div>}
                  <div className="text-center">
                    <div className="font-poppins text-2xl font-medium text-slate-800 mb-1">{indicator.value}</div>
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
                <h3 className="font-poppins text-xl font-medium text-slate-800 mb-3">{serviceData.ui.ctaSections.afterReviews.title}</h3>
                <Link 
                  href={`tel:${serviceData.contact.phone}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 py-3 rounded-xl font-poppins font-medium transition-all gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>{serviceData.ui.ctaSections.afterReviews.buttonText}</span>
                  <span className="font-ibm-plex-mono font-medium">{serviceData.contact.phoneDisplay}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins text-sm font-medium mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.faqSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {serviceData.ui.faqSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {serviceData.ui.faqSection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.faqSection.title.part2}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {serviceData.ui.faqSection.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {serviceData.faqs.map((faq, index) => (
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
                        <p className="font-poppins text-slate-700 leading-relaxed text-base sm:text-lg">
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
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-white/90 border border-blue-200 rounded-full px-6 py-3 mb-6">
                  {React.createElement(getIconComponent(serviceData.ui.ctaSections.beforeRelatedServices.badge.icon), {
                    className: "h-5 w-5 mr-2 text-blue-600"
                  })}
                  <span className="font-poppins text-blue-800 font-medium">{serviceData.ui.ctaSections.beforeRelatedServices.badge.text}</span>
                </div>
                
                <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-800 mb-4">
                  {serviceData.ui.ctaSections.beforeRelatedServices.title}
                </h3>
                
                <p className="font-poppins text-slate-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  {serviceData.ui.ctaSections.beforeRelatedServices.description}
                </p>
                
                <div className="flex justify-center mb-6">
                  <Link 
                    href={`tel:${serviceData.contact.phone}`}
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{serviceData.ui.ctaSections.beforeRelatedServices.buttonText}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-poppins text-sm text-slate-600">
                  {serviceData.ui.ctaSections.beforeRelatedServices.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
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
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins text-sm font-medium mb-6 shadow-sm">
              {React.createElement(getIconComponent(serviceData.ui.relatedServicesSection.badge.icon), {
                className: "h-5 w-5 mr-2"
              })}
              {serviceData.ui.relatedServicesSection.badge.text}
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              {serviceData.ui.relatedServicesSection.title.part1}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {serviceData.ui.relatedServicesSection.title.part2}
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {serviceData.ui.relatedServicesSection.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
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
                  {/* ✅ UPDATED - Related Services Icons with Next.js Image */}
                  <div className="relative h-14 w-14 mx-auto mb-3">
                    <Image
                      src={service.iconPath}
                      alt={`Professional ${service.name} service icon`}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform drop-shadow-lg"
                      sizes="56px"
                    />
                  </div>
                  
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
          {serviceData.relatedServices.length > servicesToShow && (
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {showAllServices ? (
                  <>
                    <ChevronUp className="h-5 w-5" />
                    {serviceData.ui.relatedServicesSection.showLessButton.text}
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5" />
                    {serviceData.ui.relatedServicesSection.showMoreButton.text}
                  </>
                )}
              </button>
            </div>
          )}

          {/* CTA Banner 4 - After Related Services */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden max-w-4xl mx-auto">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-white/90 border border-blue-200 rounded-full px-6 py-3 mb-6">
                  {React.createElement(getIconComponent(serviceData.ui.ctaSections.afterRelatedServices.badge.icon), {
                    className: "h-5 w-5 mr-2 text-blue-600"
                  })}
                  <span className="font-poppins text-blue-800 font-medium">{serviceData.ui.ctaSections.afterRelatedServices.badge.text}</span>
                </div>
                
                <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-800 mb-4">
                  {serviceData.ui.ctaSections.afterRelatedServices.title}
                </h3>
                
                <p className="font-poppins text-slate-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  {serviceData.ui.ctaSections.afterRelatedServices.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href={`tel:${serviceData.contact.phone}`}
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{serviceData.ui.ctaSections.afterRelatedServices.primaryButton.text}</span>
                    <span className="font-ibm-plex-mono font-medium">{serviceData.contact.phoneDisplay}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    href={serviceData.ui.ctaSections.afterRelatedServices.secondaryButton.link}
                    className="group bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-poppins font-medium hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    {React.createElement(getIconComponent(serviceData.ui.ctaSections.afterRelatedServices.secondaryButton.icon), {
                      className: "h-5 w-5"
                    })}
                    {serviceData.ui.ctaSections.afterRelatedServices.secondaryButton.text}
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