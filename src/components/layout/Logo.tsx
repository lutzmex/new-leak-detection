// components/layout/Logo.tsx - ADVANCED LCP OPTIMIZATION
'use client';

import Image from 'next/image';
import Link from 'next/link';

// OPTIONAL: For ultimate LCP performance, you could inline a small base64 version
// Convert your logo to base64 at https://base64.guru/converter/encode/image
// Only recommended if logo is small (<10KB)
const LOGO_BASE64_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjY5IiB2aWV3Qm94PSIwIDAgMTgwIDY5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjkiIGZpbGw9IiNmMGY5ZmYiLz48L3N2Zz4=";

export function Logo() {
  return (
    <Link 
      href="/" 
      className="group transition-transform duration-200 inline-block" 
      aria-label="Discount Leak Detection - Home"
    >
      <div className="relative group-hover:scale-105 transition-transform duration-200">
        {/* ULTIMATE LCP OPTIMIZATION: Image with base64 placeholder */}
        <Image
          src="/logo/logo.webp"
          alt="Discount Leak Detection"
          width={180}
          height={69}
          className="logo-image h-auto w-auto 
            max-h-7 max-w-[100px]
            sm:max-h-8 sm:max-w-[115px] 
            md:max-h-9 md:max-w-[130px] 
            lg:max-h-10 lg:max-w-[145px] 
            xl:max-h-12 xl:max-w-[160px]"
          priority={true}
          quality={90} // Slightly higher quality
          sizes="(max-width: 640px) 100px, (max-width: 768px) 115px, (max-width: 1024px) 130px, (max-width: 1280px) 145px, 160px"
          placeholder="blur" // Enable blur placeholder
          blurDataURL={LOGO_BASE64_PLACEHOLDER} // Instant placeholder
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'left center',
          }}
        />
      </div>
    </Link>
  );
}
