import Link from 'next/link';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Simplified navigation links
  const companyLinks = [
    { name: 'All Services', href: '/services' },
    { name: 'Service Areas', href: '/locations' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' }
  ];

  // Reduced services list - only most popular
  const popularServices = [
    { name: 'Water Leak Detection', href: '/services/residential-water-leak-detection' },
    { name: 'Gas Line Leak Detection', href: '/services/gas-line-leak-detection' },
    { name: 'Slab Leak Detection', href: '/services/slab-leak-detection' },
    { name: 'Pool Leak Detection', href: '/services/swimming-pool-leak-detection' },
    { name: 'Emergency Leak Detection', href: '/services/emergency-leak-detection' }
  ];

  // Essential pages only
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="bg-white px-4 py-6">
      <footer className="bg-gray-900 text-white rounded-3xl max-w-full mx-auto shadow-2xl relative overflow-hidden">
        <div className="relative z-10 px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo />
              </div>
              <p className="font-poppins text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
                Professional leak detection services nationwide. We find leaks fast using advanced technology and help protect your property from water damage.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+18888759844" className="font-ibm-plex-mono hover:text-white transition-colors text-base sm:text-lg">
                    +1 (888) 875-9844
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@discountleakdetection.com" className="font-ibm-plex-mono hover:text-white transition-colors text-base sm:text-lg">
                    info@discountleakdetection.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="font-poppins text-base sm:text-lg">Serving All 50 States</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-poppins bg-green-800 text-white px-3 py-1 rounded-full text-sm sm:text-base font-medium shadow-sm">
                  Licensed & Insured
                </span>
                <span className="font-poppins text-gray-300 text-sm sm:text-base font-medium">Nationwide Coverage</span>
              </div>
            </div>

            {/* Company Links */}
            <div className="text-center md:text-left">
              <h3 className="font-poppins text-white font-medium mb-6 text-xl sm:text-2xl">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="font-poppins text-gray-300 hover:text-white transition-colors text-base sm:text-lg block hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Services */}
            <div className="text-center md:text-left">
              <h3 className="font-poppins text-white font-medium mb-6 text-xl sm:text-2xl">Popular Services</h3>
              <ul className="space-y-3">
                {popularServices.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="font-poppins text-gray-300 hover:text-white transition-colors text-base sm:text-lg block hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Access & Emergency */}
            <div className="text-center md:text-left">
              <h3 className="font-poppins text-white font-medium mb-6 text-xl sm:text-2xl">Quick Access</h3>
              
              {/* Quick Links */}
              <ul className="space-y-3 mb-6">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="font-poppins text-gray-300 hover:text-white transition-colors text-base sm:text-lg block hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Emergency Contact */}
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4 shadow-md">
                <p className="font-poppins text-sm sm:text-base font-medium mb-2 text-white">24/7 Emergency Service</p>
                <a 
                  href="tel:+18888759844"
                  className="font-ibm-plex-mono text-base sm:text-lg font-medium text-white hover:underline flex items-center gap-2 justify-center md:justify-start"
                >
                  <Phone className="h-4 w-4" />
                  Call: +1 (888) 875-9844
                </a>
              </div>

              {/* Social Media */}
              <div className="flex justify-center md:justify-start items-center gap-4">
                <a 
                  href="https://linkedin.com/company/discount-leak-detection" 
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/discountleak" 
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/discountleakdetection" 
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 px-10 py-4">
          <div className="relative flex items-center">
            <Link 
              href="/privacy" 
              className="font-poppins text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
            >
              Privacy Policy
            </Link>
            <p className="font-poppins absolute left-1/2 transform -translate-x-1/2 text-gray-400 text-sm sm:text-base">
              © {currentYear} Discount Leak Detection USA. All rights reserved.
            </p>
            <Link 
              href="/terms" 
              className="font-poppins text-gray-400 hover:text-white transition-colors text-sm sm:text-base ml-auto"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}