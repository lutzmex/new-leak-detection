"use client";

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Database, 
  FileText, 
  Mail, 
  Phone, 
  CheckCircle, 
  AlertCircle,
  Globe,
  Settings,
  Trash2,
  Download,
  Edit,
  Clock
} from 'lucide-react';

export default function PrivacyPageClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const privacySections = [
    {
      id: 1,
      title: "What Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information You Give Us",
          text: "When you contact us for leak detection services, we collect your name, email address, phone number, and property address. We only ask for information we need to provide our services and communicate with you effectively."
        },
        {
          subtitle: "Website Information", 
          text: "When you visit discountleakdetection.com, we automatically collect some technical information like your IP address, browser type, operating system, and which pages you visit. This helps us improve our website and understand how people use it."
        },
        {
          subtitle: "Service Information",
          text: "During our leak detection services, we may collect information about your property, take photos of our work, record measurements, and create reports. This information helps us provide quality service and maintain accurate records."
        },
        {
          subtitle: "Communication Records",
          text: "We keep records of our communications with you, including emails, phone calls, and text messages. This helps us provide better customer service and follow up on your needs."
        }
      ]
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: Settings,
      content: [
        {
          subtitle: "To Provide Our Services",
          text: "We use your information to schedule appointments, perform leak detection services, create reports, send invoices, and provide customer support. Your contact information helps us keep you updated throughout the process."
        },
        {
          subtitle: "To Improve Our Business",
          text: "We analyze website usage and customer feedback to improve our services, website functionality, and overall customer experience. This helps us serve you and future customers better."
        },
        {
          subtitle: "For Legal and Safety Purposes",
          text: "We use your information to comply with legal requirements, protect our rights and property, ensure safety, and respond to legal requests from courts or government agencies when required by law."
        },
        {
          subtitle: "Marketing Communications",
          text: "With your permission, we may send you information about our services, special offers, leak prevention tips, or important updates. You can opt out of marketing communications at any time."
        }
      ]
    },
    {
      id: 3,
      title: "How We Share Your Information",
      icon: Users,
      content: [
        {
          subtitle: "Service Providers",
          text: "We work with trusted companies that help us run our business, like payment processors, scheduling software, and email services. These partners can only use your information to help us serve you and are required to protect your privacy."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may share your information when required by law, to comply with legal processes, cooperate with investigations, or protect the rights and safety of our customers, employees, or the public."
        },
        {
          subtitle: "Business Transfers",
          text: "If Discount Leak Detection is sold or merged with another company, your information may be transferred as part of that transaction. Your privacy rights would continue to be protected under this policy."
        },
        {
          subtitle: "What We Don't Do",
          text: "We never sell, rent, or trade your personal information to other companies for their marketing purposes. We don't share your information for mass email marketing or telemarketing by third parties."
        }
      ]
    },
    {
      id: 4,
      title: "How We Protect Your Information",
      icon: Lock,
      content: [
        {
          subtitle: "Security Measures",
          text: "We use industry-standard security measures to protect your information, including encrypted data transmission (look for 'https' in your browser), secure servers, firewalls, and limited access controls."
        },
        {
          subtitle: "Employee Access",
          text: "Only employees who need your information to do their job can access it. We train our team on privacy protection and require them to keep your information confidential."
        },
        {
          subtitle: "Data Retention",
          text: "We keep your information only as long as necessary to provide services, comply with legal requirements, and resolve disputes. After that, we securely delete or destroy it."
        },
        {
          subtitle: "Payment Security",
          text: "When you provide payment information, it's encrypted and processed securely. We follow payment card industry standards to protect your financial information."
        }
      ]
    },
    {
      id: 5,
      title: "Cookies and Website Technology",
      icon: Globe,
      content: [
        {
          subtitle: "What Are Cookies",
          text: "Cookies are small files stored on your device that help our website remember your preferences and improve your experience. They help us understand which parts of our website are most useful."
        },
        {
          subtitle: "Types of Cookies We Use",
          text: "We use essential cookies (needed for the website to work), analytics cookies (to understand website usage), and preference cookies (to remember your settings). We don't use cookies to track you across other websites."
        },
        {
          subtitle: "Controlling Cookies",
          text: "You can control or delete cookies through your browser settings. However, disabling certain cookies may affect how our website works for you."
        },
        {
          subtitle: "Third-Party Tools",
          text: "We may use tools like Google Analytics to understand website traffic. These tools have their own privacy policies, and you can opt out of their tracking if you prefer."
        }
      ]
    },
    {
      id: 6,
      title: "Your Privacy Rights",
      icon: Eye,
      content: [
        {
          subtitle: "Access Your Information",
          text: "You can request a copy of the personal information we have about you. We'll provide it in an easy-to-understand format within 30 days of your request."
        },
        {
          subtitle: "Correct Your Information",
          text: "If we have incorrect information about you, please let us know and we'll fix it promptly. You can also update your contact information by calling or emailing us."
        },
        {
          subtitle: "Delete Your Information",
          text: "You can ask us to delete your personal information. We'll honor this request unless we need to keep certain information for legal reasons or legitimate business purposes."
        },
        {
          subtitle: "Marketing Choices",
          text: "You can opt out of marketing emails by clicking 'unsubscribe' in any email or contacting us directly. You can also ask us to stop calling or texting you for marketing purposes."
        },
        {
          subtitle: "State Privacy Rights",
          text: "If you live in California, Virginia, Colorado, or other states with privacy laws, you may have additional rights. Contact us to learn more about your specific rights under state laws."
        }
      ]
    }
  ];

  const userRights = [
    {
      icon: Download,
      title: "Get Your Data",
      description: "Request a copy of your personal information"
    },
    {
      icon: Edit,
      title: "Fix Your Info", 
      description: "Update or correct your personal details"
    },
    {
      icon: Trash2,
      title: "Delete Your Data",
      description: "Ask us to remove your personal information"
    },
    {
      icon: Settings,
      title: "Control Communications",
      description: "Choose what emails and calls you want"
    }
  ];

  const handleContactClick = () => {
    window.location.href = 'tel:+18888759844';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:privacy@discountleakdetection.com';
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
              <Shield className="h-5 w-5 mr-2" />
              Privacy Policy
            </div>
            
            <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
              Your Privacy Matters
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Here's How We Protect It
              </span>
            </h1>
            
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              At Discount Leak Detection, we're committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information. This policy explains everything in simple, easy-to-understand language.
            </p>

            {/* Last Updated */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span className="font-poppins font-medium">Last Updated: January 15, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      {privacySections.map((section, index) => (
        <section key={section.id} className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
                  <section.icon className="h-5 w-5 mr-2" />
                  Section {section.id}
                </div>
                <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4">
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div className="space-y-8">
                {section.content.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="font-poppins font-medium text-xl text-black mb-4 flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      {item.subtitle}
                    </h3>
                    <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* User Rights Quick Reference */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <Eye className="h-5 w-5 mr-2" />
              Your Rights
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4">
              You're in Control of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Information
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
              Your personal information belongs to you. Here are the simple ways you can control what we do with it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {userRights.map((right, index) => {
              const IconComponent = right.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-poppins font-medium text-lg text-black mb-3">{right.title}</h3>
                  <p className="font-poppins text-sm text-gray-600 leading-relaxed">{right.description}</p>
                </div>
              );
            })}
          </div>

          {/* Contact for Privacy */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-poppins font-medium text-2xl text-black mb-4">Have Questions About Your Privacy?</h3>
              <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed">
                We're here to help! If you have any questions about your privacy or want to exercise any of your rights, just reach out to us. We respond to all privacy requests within 30 days.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div 
                onClick={handleEmailClick}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center cursor-pointer hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-poppins font-medium text-base sm:text-lg text-black mb-2">Send Us an Email</h4>
                <p className="font-poppins text-sm text-gray-600 mb-3">For any privacy questions or requests</p>
                <div className="font-ibm-plex-mono font-medium text-base lg:text-lg text-blue-600">privacy@discountleakdetection.com</div>
              </div>

              <div 
                onClick={handleContactClick}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center cursor-pointer hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-poppins font-medium text-base sm:text-lg text-black mb-2">Give Us a Call</h4>
                <p className="font-poppins text-sm text-gray-600 mb-3">Talk to a real person today</p>
                <div className="font-ibm-plex-mono font-medium text-xl lg:text-2xl text-blue-600">(888) 875-9844</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl text-center">
              <AlertCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-poppins font-medium text-base sm:text-lg text-black mb-2">Our Response Promise</h4>
              <p className="font-poppins text-sm text-gray-700">
                We take your privacy seriously and will respond to all privacy requests within 30 days as required by law. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-poppins font-medium text-lg text-black mb-4">Important Legal Information</h3>
            <div className="max-w-4xl mx-auto font-poppins text-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                This privacy policy applies to all services provided by Discount Leak Detection and our website discountleakdetection.com. 
                By using our services or website, you agree to the practices described in this policy.
              </p>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. 
                If we make significant changes, we'll notify you by email or post a notice on our website. Continued use of our services after changes means you accept the updated policy.
              </p>
              <p>
                <strong>State-Specific Rights:</strong> If you're a California resident, this policy covers your rights under the California Consumer Privacy Act (CCPA). 
                Virginia and Colorado residents have rights under their respective state privacy laws. Contact us to learn more about your specific state rights.
              </p>
              <p>
                <strong>International Users:</strong> If you're outside the United States, please note that your information may be transferred to and processed in the United States, 
                where our servers are located. We maintain appropriate safeguards for international data transfers.
              </p>
              <p className="font-poppins font-medium text-black border-t pt-3 mt-6">
                Discount Leak Detection Privacy Policy | Effective Date: January 15, 2025 | Last Updated: January 15, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}