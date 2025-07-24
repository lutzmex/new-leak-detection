// app/about/about-client.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Award, 
  Users, 
  MapPin, 
  CheckCircle, 
  Star,
  Zap,
  Target,
  Globe,
  Heart,
  Clock,
  TrendingUp,
  Building,
  Phone,
  ArrowRight,
  Eye,
  Lightbulb,
  HandHeart
} from 'lucide-react';

export default function AboutClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companyStats = [
    { 
      id: 1,
      number: "25+",
      label: "Years of Experience",
      description: "Serving customers since 1999",
      color: "text-blue-600"
    },
    { 
      id: 2,
      number: "850+",
      label: "Certified Technicians",
      description: "Across all 50 states",
      color: "text-blue-600"
    },
    { 
      id: 3,
      number: "25k+",
      label: "Properties Served",
      description: "Residential & commercial",
      color: "text-green-600"
    },
    { 
      id: 4,
      number: "99.9%",
      label: "Detection Accuracy",
      description: "Industry-leading precision",
      color: "text-orange-600"
    }
  ];

  const coreValues = [
    {
      id: 1,
      title: "Excellence",
      description: "We deliver superior results through advanced technology and expert craftsmanship",
      icon: Award,
      color: "text-blue-600"
    },
    {
      id: 2,
      title: "Integrity", 
      description: "Honest pricing, transparent processes, and reliable service you can trust",
      icon: Shield,
      color: "text-green-600"
    },
    {
      id: 3,
      title: "Innovation",
      description: "Continuously adopting cutting-edge detection technology and methods",
      icon: Lightbulb,
      color: "text-purple-600"
    },
    {
      id: 4,
      title: "Customer Care",
      description: "Your satisfaction and peace of mind are our highest priorities",
      icon: HandHeart,
      color: "text-red-600"
    }
  ];

  const milestones = [
    {
      year: "1999",
      title: "Company Founded",
      description: "Started with a vision to revolutionize leak detection services"
    },
    {
      year: "2005",
      title: "Advanced Technology",
      description: "Pioneered non-invasive thermal imaging leak detection methods"
    },
    {
      year: "2010",
      title: "National Expansion",
      description: "Extended services to all 50 states with certified local technicians"
    },
    {
      year: "2015",
      title: "100,000th Customer",
      description: "Reached major milestone serving residential and commercial clients"
    },
    {
      year: "2020",
      title: "24/7 Emergency Service",
      description: "Launched nationwide emergency response program"
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as America most trusted leak detection company"
    }
  ];

  const certifications = [
    "EPA Certified",
    "IICRC Certified",
    "NACHI Certified",
    "ASSE Certified",
    "BBB A+ Rating",
    "Licensed in 50 States"
  ];

  const handleContactClick = () => {
    window.location.href = 'tel:+18888759844';
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-6 sm:mb-8 lg:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <Building className="h-5 w-5 mr-2" />
              About Our Company
            </div>
            
            <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
              America Most Trusted
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leak Detection Experts
              </span>
            </h1>
            
                          <p className="font-poppins text-base sm:text-lg text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              For over 25 years, we've been the industry leader in advanced leak detection services, protecting properties nationwide with cutting-edge technology, certified expertise, and an unwavering commitment to excellence.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {companyStats.map((stat) => (
                <div key={stat.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
                  <div className={`text-4xl font-medium ${stat.color} mb-1 font-poppins`}>{stat.number}</div>
                  <div className="text-slate-800 text-base font-poppins">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Content */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
                <Heart className="h-5 w-5 mr-2" />
                Our Story
              </div>
              
              <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
                Built on a Foundation of
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Trust and Innovation
                </span>
              </h2>
              
              <div className="space-y-6 font-poppins text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Founded in 1999 with a simple mission: to protect properties from water damage through advanced leak detection technology. What started as a small team of dedicated professionals has grown into America most trusted leak detection company.
                </p>
                
                <p>
                  We recognized early that traditional detection methods were invasive, destructive, and often inaccurate. Our commitment to innovation led us to pioneer non-invasive thermal imaging and acoustic detection technologies that revolutionized the industry.
                </p>
                
                <p>
                  Today, with over 850 certified technicians serving all 50 states, we've helped more than 25,000 property owners detect and resolve leaks with precision, saving millions in potential damage costs.
                </p>
              </div>

              <div className="mt-8">
                <button 
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center gap-3"
                >
                  <Phone className="h-5 w-5" />
                  Start Your Service Today
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Mission/Vision */}
            <div className="space-y-8">
              
              {/* Mission */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="h-12 w-12 text-blue-600" />
                  <h3 className="font-poppins font-medium text-xl sm:text-2xl text-black">Our Mission</h3>
                </div>
                <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed">
                  To protect properties and provide peace of mind through advanced leak detection technology, expert service, and unwavering commitment to customer satisfaction.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="h-12 w-12 text-purple-600" />
                  <h3 className="font-poppins font-medium text-xl sm:text-2xl text-black">Our Vision</h3>
                </div>
                <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed">
                  To be the world's most trusted leak detection company, setting the standard for innovation, accuracy, and customer service in property protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <Star className="h-5 w-5 mr-2" />
              Core Values
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4">
              The Principles That
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Guide Everything We Do
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
              Our values shape our culture, drive our decisions, and ensure we deliver exceptional service to every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.id}
                  className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <IconComponent className={`h-16 w-16 ${value.color} mx-auto mb-6`} />
                  <h3 className="font-poppins font-medium text-lg sm:text-xl text-black mb-4">{value.title}</h3>
                  <p className="font-poppins text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <Clock className="h-5 w-5 mr-2" />
              Company Timeline
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4">
              25+ Years of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation & Growth
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
              Key milestones that shaped our journey to becoming America leading leak detection company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-4 py-2 rounded-full font-poppins font-medium text-sm mb-6 inline-block">
                  {milestone.year}
                </div>
                <h3 className="font-poppins font-medium text-lg sm:text-xl text-black mb-4">{milestone.title}</h3>
                <p className="font-poppins text-base text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Certifications */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Technology */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
                <Zap className="h-5 w-5 mr-2" />
                Advanced Technology
              </div>
              
              <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
                Cutting-Edge Detection
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technology & Equipment
                </span>
              </h2>
              
              <p className="font-poppins text-base sm:text-lg text-slate-700 mb-8 leading-relaxed">
                We invest in the most advanced leak detection technology available, ensuring 99.9% accuracy while protecting your property from damage.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-poppins text-base text-black">Thermal Imaging Cameras</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-poppins text-base text-black">Acoustic Listening Devices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-poppins text-base text-black">Ground-Penetrating Radar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-poppins text-base text-black">Moisture Detection Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-poppins text-base text-black">Digital Inspection Cameras</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-poppins text-base text-black">AI-Powered Analysis Software</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
                <div className="text-center mb-8">
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-poppins font-medium text-xl sm:text-2xl text-black mb-2">Certifications & Credentials</h3>
                  <p className="font-poppins text-base text-gray-600">Maintaining the highest industry standards</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center"
                    >
                      <div className="font-poppins font-medium text-sm text-black">{cert}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl text-center">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="font-poppins font-medium text-xl sm:text-2xl text-black mb-1">A+ BBB Rating</div>
                  <div className="font-poppins text-sm text-gray-600">Better Business Bureau Accredited</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-black mb-6">
                Ready to Experience the
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Difference Excellence Makes?
                </span>
              </h2>
              
              <p className="font-poppins text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Join over 25,000 satisfied customers who trust us to protect their most valuable assets. Contact us today for a free consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-3"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-ibm-plex-mono font-medium text-xl lg:text-2xl">Call (888) 875-9844</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                
                <Link 
                  href="/contact"
                  className="bg-white border border-gray-200 text-black hover:bg-gray-50 px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-3"
                >
                  <Globe className="h-5 w-5" />
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 font-poppins text-sm text-gray-500">
                Available 24/7 • Licensed in All 50 States • 100% Satisfaction Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}