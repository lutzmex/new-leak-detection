"use client";

import React, { useState, useEffect, memo, useMemo } from 'react';
import { 
  Phone,
  Star,
  Clock,
  Users,
  Check,
  ArrowRight,
  CheckCircle,
  Target,
  Award,
  Globe,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import Image from 'next/image';

// Service Interface (simplified)
interface Service {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  imagePath: string;
  features: string[];
  expertsAvailable: number;
  responseTime: string;
  category: string;
  rating: number;
  completedJobs: number;
  isPopular?: boolean;
  isEmergency?: boolean;
  slug: string;
}

// Memoized Service Card Component
const ServiceCard = memo(({ service, index }: { service: Service; index: number }) => {
  const handleCallNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = 'tel:+18888759844';
  };

  const handleCardClick = () => {
    window.location.href = `/services/${service.slug}`;
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300 transform hover:-translate-y-2 cursor-pointer"
    >
      {/* Service Image */}
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={service.imagePath}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {service.isPopular && (
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full font-poppins font-medium text-xs flex items-center gap-1 shadow-sm">
              <Star className="h-3 w-3 fill-current" />
              Popular
            </div>
          )}
          {service.isEmergency && (
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full font-poppins font-medium text-xs flex items-center gap-1 shadow-sm">
              <Clock className="h-3 w-3" />
              24/7
            </div>
          )}
        </div>

        {/* Service Icon */}
        <div className="absolute bottom-3 right-3 transform group-hover:scale-110 transition-transform duration-300">
          <div className="bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-sm border border-slate-200">
            <Image 
              src={service.iconPath}
              alt={`${service.title} icon`}
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg px-2 py-1 text-slate-900">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="font-poppins font-medium text-xs">{service.rating}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-3">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="bg-slate-100 text-slate-900 px-2 py-1 rounded-full font-poppins font-medium text-xs">
              {service.category}
            </span>
            <div className="flex items-center gap-1 text-green-700">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="font-poppins font-medium text-xs">Available</span>
            </div>
          </div>
          
          <h3 className="font-poppins font-medium text-lg text-slate-900 mb-2 group-hover:text-slate-800 transition-colors leading-tight">
            {service.title}
          </h3>
          
          <p className="font-poppins text-slate-800 text-sm leading-relaxed line-clamp-2">
            {service.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-50 rounded-xl p-2.5 text-center group-hover:bg-blue-50 transition-colors">
            <Clock className="h-4 w-4 text-blue-600 mx-auto mb-1" />
            <div className="font-poppins font-medium text-xs text-slate-900">{service.responseTime}</div>
            <div className="font-poppins text-xs text-slate-800">Response</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-2.5 text-center group-hover:bg-green-50 transition-colors">
            <Users className="h-4 w-4 text-green-600 mx-auto mb-1" />
            <div className="font-poppins font-medium text-xs text-slate-900">{service.expertsAvailable}</div>
            <div className="font-poppins text-xs text-slate-800">Experts</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-2.5 text-center group-hover:bg-purple-50 transition-colors">
            <CheckCircle className="h-4 w-4 text-purple-600 mx-auto mb-1" />
            <div className="font-poppins font-medium text-xs text-slate-900">{service.completedJobs.toLocaleString()}</div>
            <div className="font-poppins text-xs text-slate-800">Jobs Done</div>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-poppins font-medium text-sm text-slate-900 mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-600" />
            What We Do:
          </h4>
          <ul className="space-y-1">
            {service.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-center font-poppins text-slate-800 text-xs">
                <Check className="h-2.5 w-2.5 text-green-500 mr-2 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="font-poppins font-medium text-slate-800 text-xs mt-1">
            +{service.features.length - 2} more things we do
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <button 
            onClick={handleCallNow}
            className="w-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 py-2.5 px-4 rounded-xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </button>
          
          <div className="w-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-800 py-2 px-4 rounded-xl font-poppins font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm">
            View Details
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export const ServiceHighlights = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Memoized services data
  const popularServices = useMemo<Service[]>(() => [
    {
      id: "emergency-leak-detection",
      title: "24/7 Emergency Leak Detection",
      description: "Fast help when you need it most - we're here for urgent leak problems that can't wait.",
      iconPath: "/icon/emergency-leak-detection.svg",
      imagePath: "/images/emergency-leak-detection-services.webp",
      features: [
        "We're available day and night",
        "Quick response team ready to help",
        "Stop the leak right away",
        "Handle the whole situation for you"
      ],
      expertsAvailable: 45,
      responseTime: "< 30 Minutes",
      category: "Emergency & Advanced",
      rating: 4.9,
      completedJobs: 2345,
      isEmergency: true,
      isPopular: true,
      slug: "emergency-leak-detection"
    },
    {
      id: "slab-leak-detection",
      title: "Slab Leak Detection",
      description: "Find leaks under your concrete floors without breaking up your home.",
      iconPath: "/icon/slab-leak-detection.svg",
      imagePath: "/images/slab-leak-detection-services.webp",
      features: [
        "Check under concrete without digging",
        "Won't damage your floors",
        "Keep your foundation safe",
        "Use special tools to find exact spots"
      ],
      expertsAvailable: 26,
      responseTime: "< 2 Hours",
      category: "Foundation & Structural",
      rating: 4.9,
      completedJobs: 1890,
      isPopular: true,
      slug: "slab-leak-detection"
    },
    {
      id: "underground-leak-detection",
      title: "Underground Leak Detection",
      description: "Smart technology to find hidden leaks underground without any digging.",
      iconPath: "/icon/underground-leak-detection.svg",
      imagePath: "/images/underground-leak-detection-services.webp",
      features: [
        "See through the ground with special radar",
        "Listen for leaks with sensitive equipment",
        "No need to dig up your yard",
        "Show you exactly where the problem is"
      ],
      expertsAvailable: 28,
      responseTime: "< 3 Hours",
      category: "Underground & Infrastructure",
      rating: 4.9,
      completedJobs: 2567,
      isPopular: true,
      slug: "underground-leak-detection"
    },
    {
      id: "thermal-imaging-leak-detection",
      title: "Thermal Imaging Leak Detection",
      description: "Use heat-sensing cameras to spot leaks that are impossible to see otherwise.",
      iconPath: "/icon/thermal-imaging-leak-detection.svg",
      imagePath: "/images/thermal-imaging-leak-detection-services.webp",
      features: [
        "High-tech heat cameras",
        "See hot and cold spots that show leaks",
        "Find wet areas behind walls",
        "Spot where you're losing energy too"
      ],
      expertsAvailable: 24,
      responseTime: "< 2 Hours",
      category: "Detection Technologies",
      rating: 4.8,
      completedJobs: 1345,
      slug: "thermal-imaging-leak-detection"
    },
    {
      id: "residential-water-leak-detection",
      title: "Residential Water Leak Detection",
      description: "Complete home leak checking - we'll look at everything from pipes to faucets.",
      iconPath: "/icon/residential-water-leak-detection.svg",
      imagePath: "/images/residential-water-leak-detection-services.webp",
      features: [
        "Check your whole house for leaks",
        "Find leaks you can't see",
        "Stop water damage before it starts",
        "Help with insurance paperwork"
      ],
      expertsAvailable: 25,
      responseTime: "< 2 Hours",
      category: "Residential Water Systems",
      rating: 4.9,
      completedJobs: 3456,
      isPopular: true,
      slug: "residential-water-leak-detection"
    },
    {
      id: "swimming-pool-leak-detection",
      title: "Swimming Pool Leak Detection",
      description: "Keep your pool from losing water - we'll find leaks in pools and spas.",
      iconPath: "/icon/swimming-pool-leak-detection.svg",
      imagePath: "/images/swimming-pool-leak-detection-services.webp",
      features: [
        "Check for leaks underwater",
        "Test all the pool equipment",
        "Look at pumps and filters",
        "Make sure the pool liner is good"
      ],
      expertsAvailable: 18,
      responseTime: "< 3 Hours",
      category: "Outdoor & Irrigation",
      rating: 4.8,
      completedJobs: 967,
      isPopular: true,
      slug: "swimming-pool-leak-detection"
    },
    {
      id: "infrared-leak-detection",
      title: "Infrared Leak Detection",
      description: "Special heat cameras that can see leaks through walls without making any holes.",
      iconPath: "/icon/infrared-leak-detection.svg",
      imagePath: "/images/infrared-leak-detection-services.webp",
      features: [
        "Scan with heat-sensing cameras",
        "Look for temperature differences",
        "Won't damage your walls",
        "See heat patterns in real time"
      ],
      expertsAvailable: 20,
      responseTime: "< 2 Hours",
      category: "Detection Technologies",
      rating: 4.9,
      completedJobs: 1567,
      isPopular: true,
      slug: "infrared-leak-detection"
    },
    {
      id: "commercial-water-leak-detection",
      title: "Commercial Water Leak Detection",
      description: "Big building leak detection that keeps your business running smoothly.",
      iconPath: "/icon/commercial-water-leak-detection.svg",
      imagePath: "/images/commercial-water-leak-detection-services.webp",
      features: [
        "Check multiple floors at once",
        "Keep your business open",
        "Handle big water systems",
        "Work around your schedule"
      ],
      expertsAvailable: 32,
      responseTime: "< 3 Hours",
      category: "Commercial & Industrial",
      rating: 4.8,
      completedJobs: 1456,
      isPopular: true,
      slug: "commercial-water-leak-detection"
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
        <div className={`text-center mb-6 sm:mb-8 lg:mb-16 transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
            <Target className="h-5 w-5 mr-2" />
            Most Popular Leak Detection Services
          </div>
          <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
            Expert Solutions for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Every Leak Challenge
            </span>
          </h2>
          <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether it's an emergency or you need special leak finding methods, check out our most trusted services that really work, with skilled technicians who know what they're doing.
          </p>
        </div>

        {/* Services Grid - 2 Rows of 4 */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 sm:mb-8 lg:mb-16 transition-opacity duration-700 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {popularServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Main CTA Section */}
        <div className={`text-center transition-opacity duration-700 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-slate-50 rounded-3xl p-8 text-slate-900 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white/90 border border-slate-200 rounded-full px-6 py-3 mb-6">
                <Award className="h-5 w-5 mr-2 text-slate-800" />
                <span className="font-poppins font-medium text-slate-800">We Stand Behind Our Work</span>
              </div>
              <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl mb-4 text-slate-900">
                Need a Different Service?
              </h3>
              <p className="font-poppins text-slate-800 mb-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                We've got 44+ different leak detection services for any problem you might have. From home water issues to big commercial pipe fixes - we have the know-how and tools to solve any leak situation you're dealing with.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = 'tel:+18888759844'}
                  className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="font-ibm-plex-mono font-medium">Call +1 (888) 875-9844</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="/services"
                  className="group bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-poppins font-medium hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                >
                  <Globe className="h-5 w-5" />
                  View All Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ServiceHighlights.displayName = 'ServiceHighlights';