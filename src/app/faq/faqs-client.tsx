// app/faqs/faqs-client.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Minus, 
  HelpCircle,
  Phone,
  PhoneCall,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Star,
  Globe
} from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQsClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How much does leak detection cost?",
      answer: "Our leak detection services start at $150 for basic residential inspections. Complex commercial properties may cost more. We provide free estimates and transparent pricing before any work begins. Most homeowners find our services pay for themselves by preventing costly water damage. Emergency services are available 24/7 with priority pricing."
    },
    {
      id: 2,
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed in all states we serve and carry comprehensive liability insurance. All our technicians are certified and undergo regular training on the latest detection methods. We're bonded and insured up to $2 million for your peace of mind. Our certifications include EPA compliance and industry safety standards."
    },
    {
      id: 3,
      question: "How quickly can you respond to emergencies?",
      answer: "We offer 24/7 emergency service and typically respond within 2 hours for urgent situations like gas leaks or major water leaks. Same-day service is available for most non-emergency situations. Our average response time is under 90 minutes for emergency calls. We have mobile units strategically positioned for rapid deployment."
    },
    {
      id: 4,
      question: "What areas do you serve?",
      answer: "We provide leak detection services across all 50 states through our network of certified technicians. Use our location finder to connect with local experts in your area. We have over 500 certified professionals nationwide ready to help. Rural and urban areas are both covered with equal priority."
    },
    {
      id: 5,
      question: "Do you work with insurance companies?",
      answer: "Yes, we work directly with most major insurance providers and can help with claim documentation. We provide detailed reports with photos and measurements to support your claim. Our documentation has a 95% approval rate with insurance companies. We can bill insurance directly in many cases."
    },
    {
      id: 6,
      question: "What technology do you use for detection?",
      answer: "We use advanced acoustic sensors, thermal imaging, moisture meters, and electronic leak detection equipment. Our non-invasive methods can locate leaks without damaging your property. We invest in the latest technology to ensure 99.9% accuracy. Our equipment includes ground-penetrating radar and AI-powered analysis systems."
    },
    {
      id: 7,
      question: "What types of leaks can you detect?",
      answer: "We detect all types of leaks including water, gas, sewer, and underground utility leaks. Our services cover residential, commercial, and industrial properties. We can locate leaks in walls, floors, slabs, pools, and underground systems. No leak is too small or complex for our advanced detection methods."
    },
    {
      id: 8,
      question: "Do you provide repair services?",
      answer: "Yes, we offer complete repair and rehabilitation services in addition to detection. Our certified technicians can handle everything from minor repairs to major pipe replacement. We use trenchless repair methods when possible to minimize property disruption. All repairs come with comprehensive warranties."
    },
    {
      id: 9,
      question: "How accurate is your leak detection?",
      answer: "Our advanced technology provides 99.9% accuracy in leak detection. We use multiple detection methods including thermal imaging, acoustic sensors, and ground-penetrating radar to confirm leak locations. Our technicians are certified and trained to interpret results accurately. We guarantee our findings with detailed documentation."
    },
    {
      id: 10,
      question: "Can you detect leaks without damaging my property?",
      answer: "Absolutely! Our non-invasive detection methods can locate leaks without any excavation or damage to your property. We use thermal imaging, acoustic detection, and electronic sensors that work through walls, floors, and underground. This saves you significant costs in restoration and landscaping repairs."
    },
    {
      id: 11,
      question: "What should I do if I suspect a gas leak?",
      answer: "If you suspect a gas leak, evacuate the area immediately and call our emergency hotline. Do not use electrical switches, phones, or create any sparks. Ventilate the area if safely possible and call us from a safe location. Our emergency response team will arrive quickly with specialized gas detection equipment."
    },
    {
      id: 12,
      question: "How do I know if I have a hidden water leak?",
      answer: "Common signs include unexplained increases in water bills, damp or warm spots on floors, musty odors, reduced water pressure, or the sound of running water when fixtures are off. If you notice any of these signs, contact us for a professional inspection. Early detection can save thousands in damage costs."
    },
    {
      id: 13,
      question: "Do you offer free estimates?",
      answer: "Yes, we provide free estimates for all leak detection services. Our certified technicians will assess your situation and provide transparent pricing before beginning any work. We also offer free consultations to help you understand the best approach for your specific leak detection needs."
    },
    {
      id: 14,
      question: "What's included in your leak detection service?",
      answer: "Our comprehensive service includes initial assessment, advanced detection using multiple technologies, precise location mapping, detailed photo documentation, written reports with repair recommendations, and coordination with repair contractors if needed. We also provide insurance claim support documentation."
    },
    {
      id: 15,
      question: "How long does a typical leak detection take?",
      answer: "Most residential leak detections take 2-4 hours depending on property size and complexity. Commercial properties may require additional time. Emergency situations receive priority service with faster response times. We work efficiently while maintaining thorough, accurate detection methods."
    },
    {
      id: 16,
      question: "Can you detect leaks in swimming pools?",
      answer: "Yes, we specialize in pool and spa leak detection using underwater acoustic equipment and specialized dye testing. We can detect leaks in pool shells, plumbing lines, equipment, and fittings. Our pool leak detection services help identify the exact location and cause of water loss."
    }
  ];

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const trustStats = [
    { icon: Shield, value: "Licensed & Insured", desc: "All 50 states" },
    { icon: Star, value: "4.9/5 Rating", desc: "15,000+ reviews" },
    { icon: Clock, value: "< 90 Min", desc: "Emergency response" },
    { icon: Users, value: "850+ Experts", desc: "Certified technicians" }
  ];

  const handleContactClick = () => {
    window.location.href = 'tel:+18888759844';
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
            <HelpCircle className="h-5 w-5 mr-2" />
            Frequently Asked Questions
          </div>
          <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
            Get Your Questions
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Answered Instantly
            </span>
          </h1>
          <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our leak detection services, pricing, and process. Expert answers from certified professionals.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {trustStats.map((stat, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-slate-200 hover:shadow-md transition-all hover:-translate-y-1">
              <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="font-poppins font-medium text-lg text-slate-900 mb-1">{stat.value}</div>
              <div className="font-poppins text-sm text-slate-600">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className={`space-y-6 mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white/90 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="font-poppins font-medium text-lg sm:text-xl text-slate-800 hover:text-slate-900 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      expandedFaq === faq.id 
                        ? 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 transform rotate-180' 
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}>
                      {expandedFaq === faq.id ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
                      <p className="font-poppins text-base sm:text-lg text-slate-800 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className={`text-center transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-3xl p-8 lg:p-12 shadow-sm">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center bg-white/80 border border-blue-200 rounded-full px-4 py-2 mb-6">
                  <Globe className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-poppins font-medium text-blue-800 text-sm">Still Have Questions?</span>
                </div>
                
                <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4">
                  Get Expert Help Instantly
                </h2>
                <p className="font-poppins text-base sm:text-lg text-slate-700 mb-8 leading-relaxed">
                  Can't find what you're looking for? Our certified leak detection experts are standing by to provide personalized assistance and answer any specific questions about your situation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleContactClick}
                    className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-ibm-plex-mono font-medium text-xl lg:text-2xl">Call (888) 875-9844</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <Link 
                    href="/contact"
                    className="group bg-white border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-800 px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="h-5 w-5" />
                    24/7 Emergency Line
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 font-poppins text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Free Consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Expert Technicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}