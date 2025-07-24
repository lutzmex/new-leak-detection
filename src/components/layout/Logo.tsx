import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="group transition-transform duration-200 inline-block" aria-label="Discount Leak Detection - Home">
      <div className="relative group-hover:scale-105 transition-transform duration-200">
        {/* Optimized logo with better mobile sizing */}
        <Image
          src="/logo/logo.webp"
          alt="Discount Leak Detection"
          width={180}  // Reduced from 256 for better performance
          height={69}  // Maintains aspect ratio
          className="h-auto w-auto 
            max-h-7 max-w-[100px]
            sm:max-h-8 sm:max-w-[115px] 
            md:max-h-9 md:max-w-[130px] 
            lg:max-h-10 lg:max-w-[145px] 
            xl:max-h-12 xl:max-w-[160px]"
          priority
          quality={90}
          sizes="(max-width: 640px) 100px, (max-width: 768px) 115px, (max-width: 1024px) 130px, (max-width: 1280px) 145px, 160px"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </Link>
  );
}