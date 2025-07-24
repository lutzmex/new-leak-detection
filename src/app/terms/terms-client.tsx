"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Phone,
  Mail,
  Clock,
  Globe,
  Users,
  Building,
  ArrowRight,
  Scale,
  Lock,
  Eye
} from 'lucide-react';

export default function TermsPageClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const lastUpdated = "January 1, 2024";

  const termsSection = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: [
        "By accessing and using the services provided by Discount Leak Detection, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use our services.",
        "These terms apply to all visitors, users, and customers who access or use our leak detection services."
      ]
    },
    {
      id: 2,
      title: "Services Description",
      icon: Building,
      content: [
        "Discount Leak Detection provides professional leak detection services including water leak detection, gas leak detection, sewer leak detection, and related property inspection services.",
        "Our services are available across all 50 United States through our network of certified technicians.",
        "Service availability may vary by location and is subject to technician availability and weather conditions.",
        "Emergency services are available 24/7 but may have different pricing and response time commitments."
      ]
    },
    {
      id: 3,
      title: "User Responsibilities",
      icon: Users,
      content: [
        "Customers must provide accurate information about their property and the suspected leak issue.",
        "Property owners must ensure safe access to all areas requiring inspection.",
        "Customers are responsible for clearing access paths and removing obstacles that may impede our technicians.",
        "Any safety hazards on the property must be disclosed prior to service commencement.",
        "Payment for services must be made according to the agreed payment terms."
      ]
    },
    {
      id: 4,
      title: "Service Limitations",
      icon: AlertTriangle,
      content: [
        "Our leak detection services are diagnostic in nature and do not include repair work unless specifically contracted.",
        "Detection accuracy, while typically 99.9%, cannot be guaranteed at 100% due to property conditions and environmental factors.",
        "Some leaks may be undetectable due to location, size, or environmental conditions.",
        "We are not responsible for pre-existing property damage or conditions.",
        "Service may be delayed or canceled due to weather, safety concerns, or property access issues."
      ]
    },
    {
      id: 5,
      title: "Privacy and Data Protection",
      icon: Lock,
      content: [
        "We collect and process personal information in accordance with our Privacy Policy.",
        "Customer information is used solely for service delivery and business communication.",
        "We do not sell, rent, or share customer information with third parties except as required by law.",
        "Property photos and inspection data may be retained for quality assurance and insurance purposes.",
        "Customers have the right to request access to or deletion of their personal information."
      ]
    },
    {
      id: 6,
      title: "Pricing and Payment",
      icon: Scale,
      content: [
        "Service pricing is provided as estimates and may vary based on actual conditions found during inspection.",
        "Payment is due upon completion of services unless other arrangements have been made in writing.",
        "Emergency services may have premium pricing due to after-hours or immediate response requirements.",
        "Additional charges may apply for extended travel, difficult access, or additional time beyond standard service scope.",
        "Disputed charges must be reported within 30 days of service completion."
      ]
    },
    {
      id: 7,
      title: "Limitation of Liability",
      icon: Shield,
      content: [
        "Our liability is limited to the amount paid for our services.",
        "We are not responsible for consequential damages, lost profits, or indirect damages.",
        "We carry professional liability insurance, but our liability is limited to the policy coverage amounts.",
        "Property damage caused by pre-existing conditions is not our responsibility.",
        "Customers are advised to maintain appropriate property insurance coverage."
      ]
    },
    {
      id: 8,
      title: "Warranty and Guarantees",
      icon: Eye,
      content: [
        "We guarantee our detection services will be performed with professional competence and care.",
        "If a leak is not detected due to our oversight, we will return to re-inspect at no additional charge.",
        "Our service warranty is limited to the specific areas inspected and does not cover the entire property.",
        "Warranty claims must be made within 30 days of original service.",
        "Warranties do not cover new leaks that develop after our inspection."
      ]
    },
    {
      id: 9,
      title: "Termination",
      icon: Clock,
      content: [
        "Either party may terminate service agreements with reasonable notice.",
        "Services may be terminated immediately for safety reasons or non-compliance with these terms.",
        "Partial refunds may be available for terminated services based on work completed.",
        "Outstanding balances remain due even after service termination.",
        "These terms remain in effect for all completed services even after termination."
      ]
    }
  ];

  const handleContactClick = () => {
    window.location.href = 'tel:+18888759844';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:legal@discountleakdetection.com';
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
              <FileText className="h-5 w-5 mr-2" />
              Legal Information
            </div>
            
            <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
              Terms and Conditions
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                of Service
              </span>
            </h1>
            
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our leak detection services. These terms govern your use of our services and establish the legal relationship between you and Discount Leak Detection.
            </p>

            {/* Last Updated */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-poppins font-medium text-black">Last Updated</div>
                  <div className="font-poppins text-gray-600">{lastUpdated}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Important Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-poppins font-medium text-xl text-blue-800 mb-3">Important Notice</h2>
                  <p className="font-poppins text-base sm:text-lg text-blue-700 leading-relaxed">
                    By using our services, scheduling an appointment, or allowing our technicians on your property, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {termsSection.map((section) => {
                const IconComponent = section.icon;
                return (
                  <div
                    key={section.id}
                    className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-10 w-10 text-blue-600" />
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="font-poppins font-medium text-2xl text-black mb-6">
                          {section.id}. {section.title}
                        </h2>
                        
                        <div className="space-y-4">
                          {section.content.map((paragraph, index) => (
                            <p key={index} className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
              <div className="text-center">
                <h2 className="font-poppins font-medium text-2xl text-black mb-6">Questions About These Terms?</h2>
                <p className="font-poppins text-base sm:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                  If you have any questions about these Terms and Conditions, please contact us using the information below. We're here to help clarify any concerns you may have.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Phone */}
                  <div 
                    onClick={handleContactClick}
                    className="text-center cursor-pointer hover:transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-poppins font-medium text-base sm:text-lg text-black mb-2">Call Us</h3>
                    <p className="font-ibm-plex-mono font-medium text-base lg:text-lg text-gray-600 mb-3">(888) 875-9844</p>
                    <p className="font-poppins text-sm text-gray-500">Available 24/7</p>
                  </div>

                  {/* Email */}
                  <div 
                    onClick={handleEmailClick}
                    className="text-center cursor-pointer hover:transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-poppins font-medium text-base sm:text-lg text-black mb-2">Email Us</h3>
                    <p className="font-ibm-plex-mono font-medium text-sm lg:text-base text-gray-600 mb-3">legal@discountleakdetection.com</p>
                    <p className="font-poppins text-sm text-gray-500">Response within 24 hours</p>
                  </div>

                  {/* Address */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-poppins font-medium text-base sm:text-lg text-black mb-2">Visit Us</h3>
                    <p className="font-poppins text-base sm:text-lg text-gray-600 mb-3">Legal Department</p>
                    <p className="font-poppins text-sm text-gray-500">Main Office</p>
                  </div>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={handleContactClick}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-3 mx-auto"
                  >
                    <Phone className="h-5 w-5" />
                    Contact Legal Team
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="mt-12 text-center">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                  These terms and conditions are effective as of {lastUpdated} and may be updated from time to time. 
                  Continued use of our services constitutes acceptance of any changes to these terms. 
                  We recommend reviewing these terms periodically for any updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}