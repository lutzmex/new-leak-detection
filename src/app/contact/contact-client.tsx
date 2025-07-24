// src/app/contact/contact-client.tsx
"use client";

import React, { memo, useCallback } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Star,
  ArrowRight,
  Building,
  Shield,
  PhoneCall
} from 'lucide-react';

// Memoized components for better performance
const StatCard = memo(({ number, label, color }: { number: string; label: string; color: string }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md sm:shadow-lg border border-blue-200">
    <div className={`text-2xl sm:text-3xl lg:text-4xl font-medium ${color} mb-1 font-poppins`}>{number}</div>
    <div className="text-slate-800 text-sm sm:text-base font-poppins leading-tight">{label}</div>
  </div>
));

const ContactMethodCard = memo(({ method, onContactClick }: { 
  method: any; 
  onContactClick: (action: string) => void 
}) => {
  const IconComponent = method.icon;
  
  const handleClick = useCallback(() => {
    onContactClick(method.action);
  }, [method.action, onContactClick]);

  return (
    <div
      onClick={handleClick}
      className="group bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer touch-manipulation"
    >
      <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
        <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-gray-900 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-2 font-poppins leading-tight">
            {method.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed font-poppins">
            {method.description}
          </p>
          <div className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-2 font-ibm-plex-mono break-all sm:break-normal">
            {method.contact}
          </div>
          <div className="text-xs sm:text-sm text-gray-700 font-poppins leading-relaxed">
            {method.availability}
          </div>
        </div>

        <div className="text-gray-900 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
          <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
      </div>
    </div>
  );
});

const OfficeLocationCard = memo(({ office }: { office: any }) => (
  <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start gap-3 sm:gap-4">
      <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-gray-900 flex-shrink-0 mt-1" />
      
      <div className="flex-1 min-w-0">
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 font-poppins leading-tight">
          {office.region}
        </h3>
        
        <div className="space-y-2 sm:space-y-3">
          <div>
            <div className="font-medium text-gray-900 font-poppins text-sm sm:text-base">Address</div>
            <div className="text-gray-700 font-poppins text-sm sm:text-base leading-relaxed">{office.address}</div>
          </div>
          
          <div>
            <div className="font-medium text-gray-900 font-poppins text-sm sm:text-base">Phone</div>
            <div className="text-gray-700 font-ibm-plex-mono text-sm sm:text-base">{office.phone}</div>
          </div>
          
          <div>
            <div className="font-medium text-gray-900 font-poppins text-sm sm:text-base">Coverage Area</div>
            <div className="text-gray-700 font-poppins text-sm sm:text-base">{office.coverage}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
            <div className="text-xl sm:text-2xl font-medium text-blue-700 font-poppins">{office.technicians}</div>
            <div className="text-xs sm:text-sm text-blue-800 font-poppins leading-tight">Technicians</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
            <div className="text-xl sm:text-2xl font-medium text-green-700 font-poppins">{office.responseTime}</div>
            <div className="text-xs sm:text-sm text-green-800 font-poppins leading-tight">Avg Response</div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const ServiceHourCard = memo(({ schedule }: { schedule: any }) => (
  <div
    className={`rounded-xl sm:rounded-2xl border p-4 sm:p-6 shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      schedule.type === 'Always Available' 
        ? 'bg-orange-50 border-orange-200' 
        : 'bg-white border-gray-200'
    }`}
  >
    <div className="flex items-center justify-between gap-3">
      <div className="flex-1 min-w-0">
        <div className={`font-medium text-base sm:text-lg font-poppins leading-tight ${
          schedule.type === 'Always Available' ? 'text-orange-900' : 'text-gray-900'
        }`}>
          {schedule.day}
        </div>
        <div className={`text-xs sm:text-sm font-poppins mt-1 ${
          schedule.type === 'Always Available' ? 'text-orange-800' : 'text-gray-700'
        }`}>
          {schedule.type}
        </div>
      </div>
      <div className={`text-lg sm:text-xl lg:text-2xl font-medium font-ibm-plex-mono flex-shrink-0 ${
        schedule.type === 'Always Available' ? 'text-orange-900' : 'text-gray-900'
      }`}>
        {schedule.hours}
      </div>
    </div>
  </div>
));

const TrustIndicatorItem = memo(({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0" />
    <span className="text-gray-900 font-poppins text-sm sm:text-base leading-relaxed">{children}</span>
  </div>
));

export default function ContactClient() {
  const contactMethods = [
    {
      id: 1,
      title: "24/7 Emergency & Regular Service",
      description: "Call anytime for immediate emergency response or regular service scheduling",
      icon: Phone,
      contact: "(888) 875-9844",
      action: "tel:+18888759844",
      availability: "Available 24/7 • Emergency Response: 90 minutes"
    },
    {
      id: 2,
      title: "Email Support",
      description: "Non-urgent inquiries, quotes, and documentation requests",
      icon: Mail,
      contact: "contact@discountleakdetection.com",
      action: "mailto:contact@discountleakdetection.com",
      availability: "Response within 4 hours during business hours"
    }
  ];

  const officeLocations = [
    {
      id: 1,
      region: "West Coast Operations",
      address: "1234 Technology Drive, Los Angeles, CA 90210",
      phone: "(888) 875-9844",
      coverage: "CA, WA, OR, NV, AZ",
      technicians: 127,
      responseTime: "18 min"
    },
    {
      id: 2,
      region: "Central Operations", 
      address: "5678 Innovation Plaza, Dallas, TX 75201",
      phone: "(888) 875-9844",
      coverage: "TX, OK, NM, AR, LA",
      technicians: 98,
      responseTime: "22 min"
    },
    {
      id: 3,
      region: "East Coast Operations",
      address: "9012 Enterprise Boulevard, Miami, FL 33101",
      phone: "(888) 875-9844",
      coverage: "FL, GA, SC, NC, VA",
      technicians: 89,
      responseTime: "25 min"
    },
    {
      id: 4,
      region: "Northeast Operations",
      address: "3456 Professional Avenue, New York, NY 10001",
      phone: "(888) 875-9844",
      coverage: "NY, NJ, PA, CT, MA",
      technicians: 76,
      responseTime: "28 min"
    }
  ];

  const serviceHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM", type: "Regular Service" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM", type: "Weekend Service" },
    { day: "Sunday", hours: "8:00 AM - 6:00 PM", type: "Weekend Service" },
    { day: "Emergency Service", hours: "24/7 Available", type: "Always Available" }
  ];

  const handleContactClick = useCallback((action: string) => {
    window.location.href = action;
  }, []);

  return (
    <main className="min-h-screen font-poppins overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-2 sm:left-4 lg:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-4 lg:right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm font-poppins">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              Contact Information
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-slate-900 mb-4 sm:mb-6 leading-tight font-poppins px-2">
              Get In Touch With Our
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-800 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-poppins px-2">
              Ready to solve your leak detection challenges? Our certified professionals are available 24/7 across all 50 states with guaranteed results and emergency response.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-2">
              <StatCard number="24/7" label="Emergency Service" color="text-blue-600" />
              <StatCard number="50" label="States Covered" color="text-purple-600" />
              <StatCard number="850+" label="Expert Technicians" color="text-green-700" />
              <StatCard number="99.9%" label="Success Rate" color="text-orange-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 mb-3 sm:mb-4 font-poppins px-2">
              Contact Our
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-800 max-w-2xl mx-auto font-poppins px-2 leading-relaxed">
              Choose your preferred method to connect with our certified leak detection professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {contactMethods.map((method) => (
              <ContactMethodCard 
                key={method.id} 
                method={method} 
                onContactClick={handleContactClick} 
              />
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 text-gray-900 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 font-poppins leading-tight">Emergency Situation?</h3>
                  <p className="text-sm sm:text-base text-gray-700 font-poppins">Don't wait - call immediately for urgent leak detection</p>
                </div>
              </div>
              
              <button 
                onClick={() => handleContactClick('tel:+18888759844')}
                className="w-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-900 hover:from-blue-200 hover:to-purple-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-lg sm:text-xl transition-all duration-300 hover:scale-105 shadow-sm flex items-center justify-center gap-2 sm:gap-3 min-h-[50px] sm:min-h-[60px] font-poppins touch-manipulation"
              >
                <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span className="font-ibm-plex-mono font-medium">Call Now: (888) 875-9844</span>
              </button>
              
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 font-poppins leading-relaxed">
                Available 24/7 • Average Emergency Response: 90 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm font-poppins">
              <Building className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              Regional Operations
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 mb-3 sm:mb-4 font-poppins px-2">
              Our Regional
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Operation Centers
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-800 max-w-2xl mx-auto font-poppins px-2 leading-relaxed">
              Strategically located facilities ensure rapid response times and local expertise across the United States
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {officeLocations.map((office) => (
              <OfficeLocationCard key={office.id} office={office} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours & Trust */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            
            {/* Service Hours */}
            <div className="flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm font-poppins">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-1 sm:mr-2" />
                  Service Hours
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 mb-4 sm:mb-6 leading-tight font-poppins">
                  When You Need Us,
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    We're Available
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-slate-800 mb-6 sm:mb-8 leading-relaxed font-poppins">
                  Our service schedule is designed around your needs, with extended hours for regular service and 24/7 availability for emergencies.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col justify-end">
                {serviceHours.map((schedule, index) => (
                  <ServiceHourCard key={index} schedule={schedule} />
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col h-full justify-end space-y-6 sm:space-y-8">
              
              {/* Main Trust Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-gray-900 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-2 font-poppins">Trusted & Certified</h3>
                  <p className="text-sm sm:text-base text-gray-700 font-poppins">Your peace of mind is our priority</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <TrustIndicatorItem>Licensed & Insured in All 50 States</TrustIndicatorItem>
                  <TrustIndicatorItem>850+ Certified Technicians</TrustIndicatorItem>
                  <TrustIndicatorItem>99.9% Detection Accuracy</TrustIndicatorItem>
                  <TrustIndicatorItem>100% Service Guarantee</TrustIndicatorItem>
                  <TrustIndicatorItem>Insurance Claim Support</TrustIndicatorItem>
                  <TrustIndicatorItem>Advanced Detection Technology</TrustIndicatorItem>
                </div>
              </div>

              {/* Rating Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md sm:shadow-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl sm:text-3xl font-medium text-gray-900 mb-1 font-poppins">4.9/5</div>
                  <div className="text-gray-900 font-medium mb-2 font-poppins text-sm sm:text-base">Average Rating</div>
                  <div className="text-xs sm:text-sm text-gray-700 font-poppins">Based on 500+ verified reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Set display names for better debugging
StatCard.displayName = 'StatCard';
ContactMethodCard.displayName = 'ContactMethodCard';
OfficeLocationCard.displayName = 'OfficeLocationCard';
ServiceHourCard.displayName = 'ServiceHourCard';
TrustIndicatorItem.displayName = 'TrustIndicatorItem';