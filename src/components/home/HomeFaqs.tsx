"use client";

import React, { useState, memo, useMemo } from 'react';
import { 
  Plus, 
  Minus, 
  HelpCircle
} from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// Memoized FAQ Item Component
const FaqItem = memo(({ 
  faq, 
  isExpanded, 
  onToggle 
}: { 
  faq: FAQ; 
  isExpanded: boolean; 
  onToggle: () => void; 
}) => (
  <div className="bg-white/90 backdrop-blur-sm hover:bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    <button
      onClick={onToggle}
      className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between"
      aria-expanded={isExpanded}
      aria-controls={`faq-answer-${faq.id}`}
    >
      <div className="flex-1">
        <h3 className="font-poppins font-medium text-lg sm:text-xl text-slate-800 hover:text-slate-900 transition-colors">
          {faq.question}
        </h3>
      </div>
      <div className="flex-shrink-0 ml-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isExpanded 
            ? 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 transform rotate-180' 
            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
        }`}>
          {isExpanded ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </div>
      </div>
    </button>
    
    {isExpanded && (
      <div 
        id={`faq-answer-${faq.id}`}
        className="px-6 sm:px-8 pb-6 sm:pb-8"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
          <p className="font-poppins text-slate-800 leading-relaxed text-base sm:text-lg">
            {faq.answer}
          </p>
        </div>
      </div>
    )}
  </div>
));

FaqItem.displayName = 'FaqItem';

export const HomeFaqs = memo(() => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Memoized FAQ data
  const faqs = useMemo<FAQ[]>(() => [
    {
      id: 1,
      question: "How much does it cost to find a leak in my home?",
      answer: "Most leak detection jobs cost between $150 and $400. The final price depends on your home's size and the type of leak. We give you the exact price before we start, with no hidden fees. Many customers find our service pays for itself by preventing costly water damage and high bills."
    },
    {
      id: 2,
      question: "Are you licensed and insured to work in my state?",
      answer: "Yes, we are fully licensed and insured in all 50 states. Our technicians are trained professionals who follow all local and state safety rules. We carry $2 million in coverage for your peace of mind. You can see our license numbers on our trucks and paperwork."
    },
    {
      id: 3,
      question: "How fast can you help me with an emergency leak?",
      answer: "We answer emergency calls 24/7 and usually arrive within one to two hours. For urgent situations like gas leaks or major water damage, we arrive even faster. Most non-emergency leaks get same-day service. We have teams ready across the country to help you quickly."
    },
    {
      id: 4,
      question: "What places do you cover in America?",
      answer: "We serve customers in all 50 states, from big cities to small towns. Visit our website to find the team closest to you. We have over 500 trained professionals nationwide, so someone is always close by to help with leaks."
    },
    {
      id: 5,
      question: "Do you work with my home insurance company?",
      answer: "Yes, we work with all major insurance companies and help you with the claim paperwork. We provide detailed reports with photos and measurements that insurers need. Our documentation is accepted by 95 percent of insurers. We can often bill your insurance company directly."
    },
    {
      id: 6,
      question: "What tools do you use to find leaks without damaging my home?",
      answer: "We use modern equipment such as listening devices, thermal cameras, moisture meters, and ground radar. These tools find leaks behind walls, under floors, or underground without causing damage. We can pinpoint leaks with 99 percent accuracy."
    },
    {
      id: 7,
      question: "What kinds of leaks can you find and fix?",
      answer: "We find all types of leaks, including water pipes, gas lines, sewer lines, pool plumbing, sprinkler systems, and heating systems. We work in homes, apartments, offices, and commercial buildings. No leak is too big or too small for our experienced team."
    },
    {
      id: 8,
      question: "Do you fix the leak after you find it, or just locate it?",
      answer: "We both locate and fix leaks. After we pinpoint the leak, our licensed plumbers can repair it the same day in most cases. We carry common parts and tools on our trucks. For larger jobs, we provide a clear estimate and schedule the repair quickly."
    }
  ], []);

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

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
            <HelpCircle className="h-5 w-5 mr-2" />
            Common Questions
          </div>
          <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
            Get Quick Answers
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              To Your Questions
            </span>
          </h2>
          <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Here are answers to the most common questions our customers ask about leak detection, pricing, and our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isExpanded={expandedFaq === faq.id}
                onToggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

HomeFaqs.displayName = 'HomeFaqs';