import { Metadata } from 'next';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';
import { leakDetectionPosts } from './BlogPostCard';

// Font configuration following the clean typography guide
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], // Light to medium weights only
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  preload: false,
  fallback: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'monospace'],
  adjustFontFallback: true,
});

// Base URL for your website - IMPORTANT: Replace with your actual domain
const siteUrl = "https://www.yourwebsite.com";

// --- Metadata for the Blog Page ---
export const metadata: Metadata = {
  title: "Leak Detection Blog | Expert Insights & Articles",
  description: "Explore our complete knowledge library of leak detection articles. Get expert insights, guides, and tips from industry professionals on the latest technology and techniques.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Leak Detection Blog | Expert Insights & Articles",
    description: "Explore expert insights on leak detection technology and techniques.",
    url: `${siteUrl}/blog`,
    siteName: 'Your Company Name', // Replace with your company name
    images: [
      {
        url: `${siteUrl}/images/blog-og-image.jpg`, // A generic OG image for the blog listing page
        width: 1200,
        height: 630,
        alt: 'Leak Detection Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Leak Detection Blog | Expert Insights & Articles",
    description: "Explore expert insights on leak detection technology and techniques.",
    images: [`${siteUrl}/images/blog-og-image.jpg`],
  },
};

// --- Function to generate JSON-LD Schema ---
const generateBlogSchema = () => {
  const itemListElement = leakDetectionPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/${post.slug}`
      },
      headline: post.title,
      description: post.excerpt,
      image: `${siteUrl}${post.imageUrl}`,
      author: {
        "@type": "Person",
        name: post.author
      },
      publisher: {
        "@type": "Organization",
        name: "Your Company Name", // Replace with your company name
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/logo.png` // Replace with your logo path
        }
      },
      datePublished: post.date,
      dateModified: post.date
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Leak Detection Blog",
    description: "Expert articles on leak detection technology and techniques.",
    itemListElement: itemListElement,
  };
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = generateBlogSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Font wrapper with typography optimizations */}
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
        {children}
      </div>
    </>
  )
}