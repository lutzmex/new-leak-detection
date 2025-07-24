"use client";

import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { 
  Menu, 
  Phone, 
  ChevronDown, 
  ChevronRight,
  ChevronLeft,
  Droplets,
  Search,
  Wrench,
  Shield,
  Waves,
  Gauge,
  Camera,
  Home,
  Building,
  Factory,
  AlertTriangle,
  ArrowRight,
  X,
  Mail,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Mobile Navigation Types
type MobileView = 'main' | 'services' | 'locations';

// Main Header Component
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<MobileView>('main');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- Handlers for Desktop Dropdown Hover Logic ---
  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Mobile navigation handlers
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileView('main');
  };

  const navigateToMobileView = (view: MobileView) => {
    setMobileView(view);
  };

  const goBackToMain = () => {
    setMobileView('main');
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) };
  }, []);

  // Reset mobile view when menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileView('main');
    }
  }, [isMobileMenuOpen]);

  // --- Data for Navigation ---
  const navLinks = [
    { name: 'Services', type: 'dropdown' as const, id: 'services' },
    { name: 'Service Areas', type: 'dropdown' as const, id: 'locations' },
    { name: 'Blog', type: 'link' as const, href: '/blog' },
    { name: 'About', type: 'link' as const, href: '/about' },
  ];

  // Mobile Services Data - Organized like ClickUp
  const mobileServicesData = {
    detectionServices: {
      title: "Core Detection",
      items: [
        { name: 'Residential Leak Detection', href: '/services/residential-water-leak-detection', icon: <Droplets className="h-5 w-5" /> },
        { name: 'Gas Line Leak Detection', href: '/services/gas-line-leak-detection', icon: <Gauge className="h-5 w-5" /> },
        { name: 'Sewer Line Leak Detection', href: '/services/sewer-line-leak-detection', icon: <Camera className="h-5 w-5" /> },
        { name: 'Slab Leak Detection', href: '/services/slab-leak-detection', icon: <Search className="h-5 w-5" /> }
      ]
    },
    specialtyServices: {
      title: "Advanced Services",
      items: [
        { name: 'Pool Leak Detection', href: '/services/swimming-pool-leak-detection', icon: <Waves className="h-5 w-5" /> },
        { name: 'Underground Leak Detection', href: '/services/underground-leak-detection', icon: <Search className="h-5 w-5" /> },
        { name: 'Emergency Leak Detection', href: '/services/emergency-leak-detection', icon: <AlertTriangle className="h-5 w-5" /> },
        { name: 'Infrared Leak Detection', href: '/services/infrared-leak-detection', icon: <Camera className="h-5 w-5" /> }
      ]
    },
    propertyTypes: {
      title: "Service Categories",
      items: [
        { name: 'Residential Services', href: '/services/residential-water-leak-detection', icon: <Home className="h-5 w-5" /> },
        { name: 'Commercial Services', href: '/services/commercial-water-leak-detection', icon: <Building className="h-5 w-5" /> },
        { name: 'Foundation & Structural', href: '/services/foundation-leak-detection', icon: <Factory className="h-5 w-5" /> },
        { name: 'Plumbing Fixtures', href: '/services/toilet-leak-detection', icon: <Wrench className="h-5 w-5" /> }
      ]
    }
  };

  const statesData = ['California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'New Jersey', 'Virginia'];

  return (
    <>
      {/* DESKTOP HEADER (xl screens and up) - REDUCED LOGO SPACING */}
      <header className="hidden xl:flex items-center justify-center sticky top-4 z-50 w-full">
        <div className="flex items-stretch justify-center gap-8">
          
          {/* Box 1: Logo & Tagline - Reduced right padding */}
          <div 
            className="flex items-center gap-4 bg-white backdrop-blur-md rounded-full pl-3 pr-4 shadow-lg"
            style={{
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            <Logo />
            <div className="border-l border-slate-200 h-8"></div>
            <span className="font-poppins font-medium text-sm text-slate-900 whitespace-nowrap">
              USA Leak Detection Experts
            </span>
          </div>

          {/* Box 2: Navigation - With gentle blue accent border and blur effect */}
          <nav 
            className="flex items-center bg-white backdrop-blur-md rounded-full px-3 py-2 shadow-lg"
            style={{
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            {navLinks.map((link) => (
              <div key={link.name} onMouseEnter={() => link.type === 'dropdown' && handleMouseEnter(link.id)} onMouseLeave={() => link.type === 'dropdown' && handleMouseLeave()} className="relative">
                {link.type === 'link' ? (
                  <Link href={link.href} className="font-poppins text-slate-700 hover:text-blue-600 transition-colors font-medium text-base flex items-center px-6 py-4 rounded-full hover:bg-blue-50">
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button 
                      className="font-poppins text-slate-700 hover:text-blue-600 transition-colors font-medium text-base flex items-center gap-1.5 px-6 py-4 rounded-full hover:bg-blue-50"
                      aria-label={`${link.name} menu`}
                      aria-expanded={activeDropdown === link.id}
                      aria-haspopup="true"
                    >
                      {link.name} <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.id && (
                      <DropdownContent id={link.id} onMouseEnter={handleDropdownEnter} onMouseLeave={handleMouseLeave} />
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
          
          {/* Box 3: CTAs - With gentle blue accent border and blur effect */}
          <div 
            className="flex items-center gap-2 bg-white backdrop-blur-md rounded-full px-3 py-2 shadow-lg"
            style={{
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            <Link href="/contact" className="font-poppins text-slate-700 hover:text-blue-600 transition-colors font-medium text-base px-6 py-4 rounded-full hover:bg-blue-50">Contact</Link>
            <a 
              href="tel:+18888759844" 
              className="font-poppins bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 py-4 px-6 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              aria-label="Call for quote: 1-888-875-9844"
            >
              <Phone className="h-4 w-4" /> Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE & TABLET HEADER (up to xl) - EQUAL HEIGHT BOXES */}
      <header className="xl:hidden flex items-center justify-center sticky top-2 z-50 w-full px-2 sm:px-4 my-2">
        <div className="flex items-stretch justify-center gap-2 sm:gap-3 w-full max-w-screen-sm">
          
          {/* Mobile Logo Box - Equal height with others */}
          <div 
            className="flex items-center gap-2 bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl px-2 sm:px-3 py-2 shadow-lg flex-1 min-w-0 h-12 sm:h-14"
            style={{
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              <div className="border-l border-slate-200 h-4 sm:h-5 flex-shrink-0"></div>
              <span className="font-poppins text-xs sm:text-sm text-slate-900 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              Leak Detection Experts
              </span>
            </div>
          </div>

          {/* Mobile Call Button Box - Equal height */}
          <div 
            className="flex items-center justify-center bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl p-2 shadow-lg w-12 sm:w-14 h-12 sm:h-14"
            style={{
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            <a 
              href="tel:+18888759844" 
              className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-2 sm:p-2.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center"
              aria-label="Call us: 1-888-875-9844"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>

          {/* Mobile Menu Button Box - Equal height */}
          <div 
            className="flex items-center justify-center bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl p-2 shadow-lg w-12 sm:w-14 h-12 sm:h-14"
            style={{
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-700 rounded-xl hover:bg-blue-50 h-8 w-8 sm:h-10 sm:w-10"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full max-w-sm bg-white p-0 [&>button]:hidden"
                style={{
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                }}
              >
                {/* FIX: Added VisuallyHidden SheetTitle for accessibility */}
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                
                <div className="flex flex-col h-full">
                  {/* Mobile Header - Logo on left, Close on right */}
                  <div className="flex items-center justify-between p-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      {mobileView !== 'main' && (
                        <button
                          onClick={goBackToMain}
                          className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                          aria-label="Go back"
                        >
                          <ChevronLeft className="h-5 w-5 text-slate-600" />
                        </button>
                      )}
                      {mobileView === 'main' && <Logo />}
                      {mobileView !== 'main' && (
                        <span className="font-poppins text-sm text-slate-600 font-medium">
                          {mobileView === 'services' ? 'Services' : 'Service Areas'}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={closeMobileMenu}
                      className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5 text-slate-600" />
                    </button>
                  </div>

                  {/* Mobile Navigation Content */}
                  <div className="flex-1 overflow-y-auto">
                    {mobileView === 'main' && (
                      <MobileMainMenu 
                        onNavigate={navigateToMobileView} 
                        onClose={closeMobileMenu} 
                      />
                    )}
                    {mobileView === 'services' && (
                      <MobileServicesMenu 
                        data={mobileServicesData}
                        onClose={closeMobileMenu}
                      />
                    )}
                    {mobileView === 'locations' && (
                      <MobileLocationsMenu 
                        states={statesData}
                        onClose={closeMobileMenu}
                      />
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

// Mobile Main Menu Component - Fixed TypeScript errors
const MobileMainMenu = ({ onNavigate, onClose }: { onNavigate: (view: MobileView) => void, onClose: () => void }) => {
  const mainMenuItems = [
    { 
      name: 'Services', 
      action: () => onNavigate('services'),
      hasSubmenu: true,
      description: 'All leak detection services'
    },
    { 
      name: 'Service Areas', 
      action: () => onNavigate('locations'),
      hasSubmenu: true,
      description: 'Available locations'
    },
    { 
      name: 'Blog', 
      action: () => onClose(),
      href: '/blog',
      hasSubmenu: false,
      description: 'Tips and insights'
    },
    { 
      name: 'About', 
      action: () => onClose(),
      href: '/about',
      hasSubmenu: false,
      description: 'Our story and expertise'
    },
    { 
      name: 'Contact Us', 
      action: () => onClose(),
      href: '/contact',
      hasSubmenu: false,
      description: 'Get in touch with us'
    },
  ];

  return (
    <div className="p-4 space-y-1">
      {mainMenuItems.map((item) => (
        <div key={item.name}>
          {item.hasSubmenu ? (
            <button
              onClick={item.action}
              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="text-left">
                  <div className="font-poppins font-medium text-slate-900 group-hover:text-blue-700">
                    {item.name}
                  </div>
                  {item.description && (
                    <div className="font-poppins text-sm text-slate-500 mt-0.5">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </button>
          ) : (
            <Link
              href={item.href!}
              onClick={item.action}
              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="text-left">
                  <div className="font-poppins font-medium text-slate-900 group-hover:text-blue-700">
                    {item.name}
                  </div>
                  {item.description && (
                    <div className="font-poppins text-sm text-slate-500 mt-0.5">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </Link>
          )}
        </div>
      ))}
      
      {/* CTA Button - Added right after menu items */}
      <div className="pt-2">
        <a 
          href="tel:+18888759844" 
          className="font-poppins w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 py-3 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
          aria-label="Call us for quote"
        >
          <Phone className="h-4 w-4" /> <span className="font-ibm-plex-mono font-medium">+1 (888) 875-9844</span>
        </a>
      </div>
    </div>
  );
};

// Mobile Services Menu Component
const MobileServicesMenu = ({ data, onClose }: { data: any, onClose: () => void }) => {
  return (
    <div className="p-4 space-y-6">
      {Object.entries(data).map(([key, section]: [string, any]) => (
        <div key={key}>
          <h3 className="font-poppins text-sm font-medium text-slate-600 uppercase tracking-wider mb-3 px-2">
            {section.title}
          </h3>
          <div className="space-y-1">
            {section.items.map((item: any) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="text-blue-600 flex-shrink-0 group-hover:text-blue-700">
                  {item.icon}
                </div>
                <div className="font-poppins font-medium text-slate-900 group-hover:text-blue-700">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
      
      <div className="pt-4 mt-6 border-t border-slate-100">
        <Link
          href="/services"
          onClick={onClose}
          className="font-poppins flex items-center justify-center gap-2 w-full p-3 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors"
        >
          View All Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

// Mobile Locations Menu Component
const MobileLocationsMenu = ({ states, onClose }: { states: string[], onClose: () => void }) => {
  return (
    <div className="p-4">
      <h3 className="font-poppins text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 px-2">
        Major Service Areas
      </h3>
      <div className="grid grid-cols-1 gap-1">
        {states.map((state) => (
          <Link
            key={state}
            href={`/locations/${state.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={onClose}
            className="font-poppins p-3 text-slate-900 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-colors font-medium"
          >
            {state}
          </Link>
        ))}
      </div>
      
      <div className="pt-4 mt-6 border-t border-slate-100">
        <Link
          href="/locations"
          onClick={onClose}
          className="font-poppins flex items-center justify-center gap-2 w-full p-3 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors"
        >
          View All 50 States
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

// Desktop Dropdown Content Component
const DropdownContent = ({ id, onMouseEnter, onMouseLeave }: { id: string, onMouseEnter: () => void, onMouseLeave: () => void }) => {
  const servicesData = {
    detectionServices: [
      { name: 'Residential Leak Detection', href: '/services/residential-water-leak-detection', icon: <Droplets className="h-5 w-5" />, description: 'home water leak inspection' },
      { name: 'Gas Line Leak Detection', href: '/services/gas-line-leak-detection', icon: <Gauge className="h-5 w-5" />, description: 'Emergency gas leak detection' },
      { name: 'Sewer Line Leak Detection', href: '/services/sewer-line-leak-detection', icon: <Camera className="h-5 w-5" />, description: 'Video camera sewer inspection' },
      { name: 'Slab Leak Detection', href: '/services/slab-leak-detection', icon: <Search className="h-5 w-5" />, description: 'Under-concrete leak detection' }
    ],
    specialtyServices: [
      { name: 'Pool Leak Detection', href: '/services/swimming-pool-leak-detection', icon: <Waves className="h-5 w-5" />, description: 'Pool and spa leak detection' },
      { name: 'Underground Leak Detection', href: '/services/underground-leak-detection', icon: <Search className="h-5 w-5" />, description: 'Underground pipe detection' },
      { name: 'Emergency Leak Detection', href: '/services/emergency-leak-detection', icon: <AlertTriangle className="h-5 w-5" />, description: '24/7 emergency response' },
      { name: 'Infrared Leak Detection', href: '/services/infrared-leak-detection', icon: <Camera className="h-5 w-5" />, description: 'Thermal imaging technology' }
    ],
    propertyTypes: [
      { name: 'Residential Services', href: '/services/residential-water-leak-detection', icon: <Home className="h-5 w-5" />, description: 'Home leak detection services' },
      { name: 'Commercial Services', href: '/services/commercial-water-leak-detection', icon: <Building className="h-5 w-5" />, description: 'Business leak detection' },
      { name: 'Foundation & Structural', href: '/services/foundation-leak-detection', icon: <Factory className="h-5 w-5" />, description: 'Foundation leak detection' },
      { name: 'Plumbing Fixtures', href: '/services/toilet-leak-detection', icon: <Wrench className="h-5 w-5" />, description: 'Fixture leak detection' }
    ]
  };
  
  const statesData = ['California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'New Jersey', 'Virginia'];

  if (id === 'services') {
    return (
      <div 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-white backdrop-blur-md rounded-2xl overflow-hidden z-50 shadow-xl w-[95vw] max-w-5xl"
        style={{
          border: '1px solid rgba(59, 130, 246, 0.15)',
        }}
      >
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="font-poppins font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              Core Detection
            </h3>
            <ul className="space-y-2">
              {servicesData.detectionServices.map(s => (
                <li key={s.name}>
                  <Link href={s.href} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 group border border-transparent hover:border-blue-200 transition-all">
                    <div className="text-blue-600 flex-shrink-0">{s.icon}</div>
                    <div>
                      <p className="font-poppins font-medium text-slate-800 group-hover:text-blue-700">{s.name}</p>
                      <p className="font-poppins text-sm text-slate-500">{s.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              Advanced Services
            </h3>
            <ul className="space-y-2">
              {servicesData.specialtyServices.map(s => (
                <li key={s.name}>
                  <Link href={s.href} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-green-50 group border border-transparent hover:border-green-200 transition-all">
                    <div className="text-green-600 flex-shrink-0">{s.icon}</div>
                    <div>
                      <p className="font-poppins font-medium text-slate-800 group-hover:text-green-700">{s.name}</p>
                      <p className="font-poppins text-sm text-slate-500">{s.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
              Service Categories
            </h3>
            <ul className="space-y-2">
              {servicesData.propertyTypes.map(s => (
                <li key={s.name}>
                  <Link href={s.href} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-orange-50 group border border-transparent hover:border-orange-200 transition-all">
                    <div className="text-orange-600 flex-shrink-0">{s.icon}</div>
                    <div>
                      <p className="font-poppins font-medium text-slate-800 group-hover:text-orange-700">{s.name}</p>
                      <p className="font-poppins text-sm text-slate-500">{s.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-slate-50 backdrop-blur-sm px-8 py-4 border-t border-slate-100 flex items-center justify-between">
          <Link href="/services" className="font-poppins text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group">
            View All 44 Services <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="font-poppins">Licensed & Insured</span>
          </div>
        </div>
      </div>
    );
  }
  
  if (id === 'locations') {
    return (
      <div 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-white backdrop-blur-md rounded-2xl overflow-hidden z-50 shadow-xl w-[90vw] max-w-3xl"
        style={{
          border: '1px solid rgba(59, 130, 246, 0.15)',
        }}
      >
        <div className="p-8">
          <h3 className="font-poppins font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            Major Service Areas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {statesData.map(state => (
              <Link 
                key={state} 
                href={`/locations/${state.toLowerCase().replace(/\s+/g, '-')}`} 
                className="font-poppins p-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all text-center font-medium border border-slate-100 hover:border-blue-200"
              >
                {state}
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 backdrop-blur-sm px-8 py-4 border-t border-slate-100 text-center">
          <Link href="/locations" className="font-poppins text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1.5 group">
            View All 50 States <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }
  
  return null;
};