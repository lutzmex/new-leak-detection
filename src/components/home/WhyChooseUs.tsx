"use client";

import React, { memo, useMemo } from 'react';
import { 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin
} from 'lucide-react';
import Image from 'next/image';

// Memoized Feature Card Component
const FeatureCard = memo(({ feature }: { feature: any }) => (
  <div
    className="group bg-white/95 backdrop-blur-sm rounded-2xl transition-all duration-300 p-6 text-center border border-white/20 hover:border-blue-300 transform hover:-translate-y-2 relative hover:bg-white hover:z-10 max-w-sm mx-auto w-full"
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
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <Image 
        src={feature.icon} 
        alt={feature.title}
        width={80}
        height={80}
        className="h-20 w-20 mx-auto mb-4 group-hover:scale-110 transition-transform drop-shadow-lg"
        loading="lazy"
      />

      <div className="font-poppins font-medium text-2xl text-slate-900 mb-2">
        {feature.stats}
      </div>

      <h3 className="font-poppins font-medium text-xl text-slate-900 mb-3 text-center">
        {feature.title}
      </h3>

      <p className="font-poppins text-slate-700 leading-relaxed mb-4 text-sm text-center">
        {feature.description}
      </p>

      <div className="space-y-2 w-full">
        {feature.features.map((feat: string, index: number) => (
          <div key={index} className="flex items-center justify-start font-poppins text-sm text-slate-700">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-left">{feat}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

// Memoized Process Step Component
const ProcessStep = memo(({ step }: { step: any }) => (
  <div
    className="group bg-white/95 backdrop-blur-sm rounded-2xl transition-all duration-300 p-6 text-center border border-white/20 hover:border-blue-300 transform hover:-translate-y-2 relative hover:bg-white hover:z-10 max-w-xs mx-auto w-full"
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
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <Image 
        src={step.icon} 
        alt={step.title}
        width={96}
        height={96}
        className="h-24 w-24 mx-auto mb-4 group-hover:scale-110 transition-transform drop-shadow-lg"
        loading="lazy"
      />

      <div className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full font-poppins font-medium text-sm mb-3 inline-block">
        Step {step.step}
      </div>

      <h4 className="font-poppins font-medium text-lg text-slate-900 mb-3 text-center">
        {step.title}
      </h4>

      <p className="font-poppins text-slate-700 text-sm leading-relaxed text-center">
        {step.description}
      </p>
    </div>
  </div>
));

ProcessStep.displayName = 'ProcessStep';

export const WhyChooseUs = memo(() => {
  // Memoized data
  const mainFeatures = useMemo(() => [
    {
      id: 1,
      title: "Modern Tools That Find Leaks Fast",
      stats: "99.9% Success Rate",
      description: "We use heat cameras, listening devices, and smart sensors to find leaks without damaging your home.",
      icon: "/icon/advanced-detection-technology.svg",
      features: [
        "Heat-sensing cameras",
        "Underground listening tools", 
        "Ground radar technology",
        "Smart computer analysis"
      ]
    },
    {
      id: 2,
      title: "24/7 Emergency Help Available",
      stats: "Under 90 Minutes",
      description: "Call us anytime day or night for urgent leaks. We answer fast and arrive quickly when you need help.",
      icon: "/icon/247-emergency-response.svg",
      features: [
        "Available all day and night",
        "Emergency teams ready",
        "Mobile trucks everywhere", 
        "Fast response system"
      ]
    },
    {
      id: 3,
      title: "Find Exact Leak Locations",
      stats: "Within 2 Inches",
      description: "We mark the exact spot where your leak is located so repairs are quick and cost less money.",
      icon: "/icon/precision-leak-mapping.svg",
      features: [
        "3D mapping technology",
        "GPS coordinates",
        "Depth measurements",
        "Clear marking system"
      ]
    },
    {
      id: 4,
      title: "Trained and Licensed Experts",
      stats: "850+ Certified",
      description: "Our technicians are licensed professionals who know the latest methods and follow all safety rules.",
      icon: "/icon/master-certified-technicians.svg",
      features: [
        "15+ professional licenses",
        "Ongoing training programs",
        "Quality promise standards",
        "Professional service guarantee"
      ]
    },
    {
      id: 5,
      title: "Save Money With Early Detection",
      stats: "Save 85%",
      description: "Finding leaks early prevents expensive damage and significantly reduces your overall repair costs.",
      icon: "/icon/cost-effective-solutions.svg",
      features: [
        "Prevent major damage",
        "Lower repair costs",
        "Insurance claim help",
        "Money-saving analysis"
      ]
    },
    {
      id: 6,
      title: "Complete Protection Promise",
      stats: "100% Guaranteed",
      description: "We guarantee our work and provide full insurance support with complete documentation for your records.",
      icon: "/icon/guaranteed-comprehensive-protection.svg",
      features: [
        "100% service guarantee",
        "Insurance coverage help",
        "Complete paperwork",
        "Legal support included"
      ]
    }
  ], []);

  const processSteps = useMemo(() => [
    {
      id: 1,
      title: "Smart Check",
      description: "Computer-guided initial check and complete risk evaluation of your property",
      icon: "/icon/smart-analysis.svg",
      step: 1
    },
    {
      id: 2,
      title: "Find the Leak",
      description: "Use multiple sensors with real-time data processing and heat imaging",
      icon: "/icon/advanced-detection.svg",
      step: 2
    },
    {
      id: 3,
      title: "Mark the Spot",
      description: "3D pictures and exact location coordinates with depth measurements",
      icon: "/icon/precision-mapping.svg",
      step: 3
    },
    {
      id: 4,
      title: "Complete Paperwork",
      description: "Detailed reports with repair recommendations and insurance support",
      icon: "/icon/complete-documentation.svg",
      step: 4
    }
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
            <Star className="h-5 w-5 mr-2" />
            Top Choice for Leak Detection
          </div>
          <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
            Why Choose Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expert Team?
            </span>
          </h2>
          <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Modern technology meets trusted expertise. We deliver fast leak detection with guaranteed results and 24/7 emergency support across America.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
              <div className="font-poppins font-medium text-4xl text-blue-600 mb-1">99.9%</div>
              <div className="font-poppins text-slate-800 text-base">Find Every Leak</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
              <div className="font-poppins font-medium text-4xl text-purple-600 mb-1">850+</div>
              <div className="font-poppins text-slate-800 text-base">Trained Experts</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
              <div className="font-poppins font-medium text-4xl text-green-600 mb-1">90min</div>
              <div className="font-poppins text-slate-800 text-base">Response Time</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
              <div className="font-poppins font-medium text-4xl text-orange-600 mb-1">100%</div>
              <div className="font-poppins text-slate-800 text-base">Guaranteed</div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4">What Makes Us Different</h3>
            <p className="font-poppins text-base sm:text-lg text-slate-700">Modern technology and professional expertise for superior leak detection</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {mainFeatures.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-6 sm:mb-8 lg:mb-16">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4">How We Help You</h3>
            <p className="font-poppins text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
              Simple process using modern technology with expert analysis for guaranteed results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {processSteps.map((step) => (
              <ProcessStep key={step.id} step={step} />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services"
              className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              See All Our Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+18888759844"
              className="group bg-white/95 backdrop-blur-sm border border-white/20 text-slate-900 hover:bg-white px-8 py-4 rounded-2xl font-poppins font-medium text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              style={{
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              }}
            >
              <Phone className="h-5 w-5" />
              <span className="font-ibm-plex-mono font-medium">Get Help Right Now</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChooseUs.displayName = 'WhyChooseUs';