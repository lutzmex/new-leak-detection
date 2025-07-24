// app/faqs/page.tsx
import { Metadata } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import FAQsClient from './faqs-client';

// Primary font: Poppins with lighter weights for clean look
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], // Light to medium weights only
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
});

// Technical/monospace font for numbers, phone numbers, codes
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  preload: false,
  fallback: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'monospace'],
  adjustFontFallback: true,
});

// Structured data for the FAQs page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does leak detection cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our leak detection services start at $150 for basic residential inspections. Complex commercial properties may cost more. We provide free estimates and transparent pricing before any work begins. Most homeowners find our services pay for themselves by preventing costly water damage. Emergency services are available 24/7 with priority pricing."
      }
    },
    {
      "@type": "Question", 
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are fully licensed in all states we serve and carry comprehensive liability insurance. All our technicians are certified and undergo regular training on the latest detection methods. We're bonded and insured up to $2 million for your peace of mind. Our certifications include EPA compliance and industry safety standards."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you respond to emergencies?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer 24/7 emergency service and typically respond within 2 hours for urgent situations like gas leaks or major water leaks. Same-day service is available for most non-emergency situations. Our average response time is under 90 minutes for emergency calls. We have mobile units strategically positioned for rapid deployment."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "We provide leak detection services across all 50 states through our network of certified technicians. Use our location finder to connect with local experts in your area. We have over 500 certified professionals nationwide ready to help. Rural and urban areas are both covered with equal priority."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with insurance companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we work directly with most major insurance providers and can help with claim documentation. We provide detailed reports with photos and measurements to support your claim. Our documentation has a 95% approval rate with insurance companies. We can bill insurance directly in many cases."
      }
    },
    {
      "@type": "Question",
      "name": "What technology do you use for detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use advanced acoustic sensors, thermal imaging, moisture meters, and electronic leak detection equipment. Our non-invasive methods can locate leaks without damaging your property. We invest in the latest technology to ensure 99.9% accuracy. Our equipment includes ground-penetrating radar and AI-powered analysis systems."
      }
    },
    {
      "@type": "Question",
      "name": "What types of leaks can you detect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We detect all types of leaks including water, gas, sewer, and underground utility leaks. Our services cover residential, commercial, and industrial properties. We can locate leaks in walls, floors, slabs, pools, and underground systems. No leak is too small or complex for our advanced detection methods."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide repair services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer complete repair and rehabilitation services in addition to detection. Our certified technicians can handle everything from minor repairs to major pipe replacement. We use trenchless repair methods when possible to minimize property disruption. All repairs come with comprehensive warranties."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is your leak detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our advanced technology provides 99.9% accuracy in leak detection. We use multiple detection methods including thermal imaging, acoustic sensors, and ground-penetrating radar to confirm leak locations. Our technicians are certified and trained to interpret results accurately. We guarantee our findings with detailed documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Can you detect leaks without damaging my property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our non-invasive detection methods can locate leaks without any excavation or damage to your property. We use thermal imaging, acoustic detection, and electronic sensors that work through walls, floors, and underground. This saves you significant costs in restoration and landscaping repairs."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if I suspect a gas leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you suspect a gas leak, evacuate the area immediately and call our emergency hotline. Do not use electrical switches, phones, or create any sparks. Ventilate the area if safely possible and call us from a safe location. Our emergency response team will arrive quickly with specialized gas detection equipment."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if I have a hidden water leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common signs include unexplained increases in water bills, damp or warm spots on floors, musty odors, reduced water pressure, or the sound of running water when fixtures are off. If you notice any of these signs, contact us for a professional inspection. Early detection can save thousands in damage costs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free estimates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide free estimates for all leak detection services. Our certified technicians will assess your situation and provide transparent pricing before beginning any work. We also offer free consultations to help you understand the best approach for your specific leak detection needs."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in your leak detection service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our comprehensive service includes initial assessment, advanced detection using multiple technologies, precise location mapping, detailed photo documentation, written reports with repair recommendations, and coordination with repair contractors if needed. We also provide insurance claim support documentation."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical leak detection take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential leak detections take 2-4 hours depending on property size and complexity. Commercial properties may require additional time. Emergency situations receive priority service with faster response times. We work efficiently while maintaining thorough, accurate detection methods."
      }
    },
    {
      "@type": "Question",
      "name": "Can you detect leaks in swimming pools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in pool and spa leak detection using underwater acoustic equipment and specialized dye testing. We can detect leaks in pool shells, plumbing lines, equipment, and fittings. Our pool leak detection services help identify the exact location and cause of water loss."
      }
    }
  ],
  "about": {
    "@type": "Organization",
    "name": "Discount Leak Detection",
    "description": "America's most trusted leak detection experts with 25+ years of experience",
    "url": "https://discountleakdetection.com",
    "telephone": "+1 (888) 875-9844"
  }
};

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Leak Detection FAQs | Discount Leak Detection",
  description: "Get instant answers to your leak detection questions. Expert insights on costs, technology, response times, and services. 25+ years of experience, 850+ certified technicians nationwide.",
  keywords: "leak detection FAQ, water leak questions, leak detection cost, emergency response time, licensed leak detection, thermal imaging technology, non-invasive leak detection, insurance claims support",
  openGraph: {
    title: "Frequently Asked Questions - Leak Detection FAQs | Discount Leak Detection", 
    description: "Get instant answers to your leak detection questions. Expert insights on costs, technology, response times, and services. 25+ years of experience, 850+ certified technicians nationwide.",
    type: "website",
    url: "https://discountleakdetection.com/faqs",
    images: [
      {
        url: "https://discountleakdetection.com/images/discount-leak-detection-faq.webp",
        width: 1200,
        height: 630,
        alt: "Discount Leak Detection - Frequently Asked Questions"
      }
    ],
    siteName: "Discount Leak Detection"
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions - Leak Detection FAQs | Discount Leak Detection",
    description: "Get instant answers to your leak detection questions. Expert insights on costs, technology, response times, and services. 25+ years of experience, 850+ certified technicians nationwide.", 
    images: ["https://discountleakdetection.com/images/discount-leak-detection-faq.webp"]
  },
  alternates: {
    canonical: "https://discountleakdetection.com/faqs"
  }
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Font wrapper with clean typography */}
      <div 
        className={`${poppins.variable} ${ibmPlexMono.variable}`}
        style={{
          fontFamily: poppins.style.fontFamily,
          fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <FAQsClient />
      </div>
    </>
  );
}