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
} from 'lucide-react';
import { useState, useRef, useEffect, useCallback, memo } from 'react';

// PERFORMANCE: Move all static data outside component to prevent recreation
const NAV_LINKS = [
  { name: 'Services', type: 'dropdown' as const, id: 'services' },
  { name: 'Service Areas', type: 'dropdown' as const, id: 'locations' },
  { name: 'Blog', type: 'link' as const, href: '/blog' },
  { name: 'About', type: 'link' as const, href: '/about' },
] as const;

// PERFORMANCE: Optimize mobile services data structure
const MOBILE_SERVICES_DATA = {
  detectionServices: {
    title: "Core Detection",
    items: [
      { name: 'Residential Leak Detection', href: '/services/residential-water-leak-detection', icon: Droplets },
      { name: 'Gas Line Leak Detection', href: '/services/gas-line-leak-detection', icon: Gauge },
      { name: 'Sewer Line Leak Detection', href: '/services/sewer-line-leak-detection', icon: Camera },
      { name: 'Slab Leak Detection', href: '/services/slab-leak-detection', icon: Search }
    ]
  },
  specialtyServices: {
    title: "Advanced Services",
    items: [
      { name: 'Pool Leak Detection', href: '/services/swimming-pool-leak-detection', icon: Waves },
      { name: 'Underground Leak Detection', href: '/services/underground-leak-detection', icon: Search },
      { name: 'Emergency Leak Detection', href: '/services/emergency-leak-detection', icon: AlertTriangle },
      { name: 'Infrared Leak Detection', href: '/services/infrared-leak-detection', icon: Camera }
    ]
  },
  propertyTypes: {
    title: "Service Categories",
    items: [
      { name: 'Residential Services', href: '/services/residential-water-leak-detection', icon: Home },
      { name: 'Commercial Services', href: '/services/commercial-water-leak-detection', icon: Building },
      { name: 'Foundation & Structural', href: '/services/foundation-leak-detection', icon: Factory },
      { name: 'Plumbing Fixtures', href: '/services/toilet-leak-detection', icon: Wrench }
    ]
  }
} as const;

// PERFORMANCE: Reduce states data for faster rendering
const STATES_DATA = [
  'California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 
  'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan', 
  'New Jersey', 'Virginia'
] as const;

// PERFORMANCE: Optimize services data
const SERVICES_DATA = {
  detectionServices: [
    { name: 'Residential Leak Detection', href: '/services/residential-water-leak-detection', icon: Droplets, description: 'home water leak inspection' },
    { name: 'Gas Line Leak Detection', href: '/services/gas-line-leak-detection', icon: Gauge, description: 'Emergency gas leak detection' },
    { name: 'Sewer Line Leak Detection', href: '/services/sewer-line-leak-detection', icon: Camera, description: 'Video camera sewer inspection' },
    { name: 'Slab Leak Detection', href: '/services/slab-leak-detection', icon: Search, description: 'Under-concrete leak detection' }
  ],
  specialtyServices: [
    { name: 'Pool Leak Detection', href: '/services/swimming-pool-leak-detection', icon: Waves, description: 'Pool and spa leak detection' },
    { name: 'Underground Leak Detection', href: '/services/underground-leak-detection', icon: Search, description: 'Underground pipe detection' },
    { name: 'Emergency Leak Detection', href: '/services/emergency-leak-detection', icon: AlertTriangle, description: '24/7 emergency response' },
    { name: 'Infrared Leak Detection', href: '/services/infrared-leak-detection', icon: Camera, description: 'Thermal imaging technology' }
  ],
  propertyTypes: [
    { name: 'Residential Services', href: '/services/residential-water-leak-detection', icon: Home, description: 'Home leak detection services' },
    { name: 'Commercial Services', href: '/services/commercial-water-leak-detection', icon: Building, description: 'Business leak detection' },
    { name: 'Foundation & Structural', href: '/services/foundation-leak-detection', icon: Factory, description: 'Foundation leak detection' },
    { name: 'Plumbing Fixtures', href: '/services/toilet-leak-detection', icon: Wrench, description: 'Fixture leak detection' }
  ]
} as const;

// PERFORMANCE: Optimize main menu items
const MAIN_MENU_ITEMS = [
  { 
    name: 'Services', 
    hasSubmenu: true,
    description: 'All leak detection services',
    view: 'services' as const
  },
  { 
    name: 'Service Areas', 
    hasSubmenu: true,
    description: 'Available locations',
    view: 'locations' as const
  },
  { 
    name: 'Blog', 
    href: '/blog',
    hasSubmenu: false,
    description: 'Tips and insights'
  },
  { 
    name: 'About', 
    href: '/about',
    hasSubmenu: false,
    description: 'Our story and expertise'
  },
  { 
    name: 'Contact Us', 
    href: '/contact',
    hasSubmenu: false,
    description: 'Get in touch with us'
  },
] as const;

// PERFORMANCE: Pre-defined styles to avoid recreation
const headerBoxStyle = { border: '1px solid rgba(59, 130, 246, 0.2)' };
const dropdownStyle = { border: '1px solid rgba(59, 130, 246, 0.15)' };
const sheetStyle = { border: '1px solid rgba(59, 130, 246, 0.15)' };

// Mobile Navigation Types
type MobileView = 'main' | 'services' | 'locations';

// PERFORMANCE: Highly optimized Mobile Main Menu Component
const MobileMainMenu = memo(({ onNavigate, onClose }: { 
  onNavigate: (view: MobileView) => void, 
  onClose: () => void 
}) => {
  const handleItemClick = useCallback((item: typeof MAIN_MENU_ITEMS[number]) => {
    if (item.hasSubmenu && item.view) {
      onNavigate(item.view);
    } else {
      onClose();
    }
  }, [onNavigate, onClose]);

  return (
    <div className="p-4 space-y-1">
      {MAIN_MENU_ITEMS.map((item) => (
        <div key={item.name}>
          {item.hasSubmenu ? (
            <button
              onClick={() => handleItemClick(item)}
              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="text-left">
                  <div className="font-medium text-slate-900 group-hover:text-blue-700">
                    {item.name}
                  </div>
                  <div className="text-sm text-slate-500 mt-0.5">
                    {item.description}
                  </div>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </button>
          ) : (
            <Link
              href={item.href!}
              onClick={() => handleItemClick(item)}
              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="text-left">
                  <div className="font-medium text-slate-900 group-hover:text-blue-700">
                    {item.name}  
                  </div>
                  <div className="text-sm text-slate-500 mt-0.5">
                    {item.description}
                  </div>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </Link>
          )}
        </div>
      ))}
      
      <div className="pt-2">
        <a 
          href="tel:+18888759844" 
          className="w-full mobile-call-button py-3 px-4 font-medium flex items-center justify-center gap-2"
          aria-label="Call us for quote"
        >
          <Phone className="h-4 w-4" /> 
          <span className="font-mono font-medium">+1 (888) 875-9844</span>
        </a>
      </div>
    </div>
  );
});

MobileMainMenu.displayName = 'MobileMainMenu';

// PERFORMANCE: Optimized Mobile Services Menu Component
const MobileServicesMenu = memo(({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-4 space-y-6">
      {Object.entries(MOBILE_SERVICES_DATA).map(([key, section]) => (
        <div key={key}>
          <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-3 px-2">
            {section.title}
          </h3>
          <div className="space-y-1">
            {section.items.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="text-blue-600 flex-shrink-0 group-hover:text-blue-700">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="font-medium text-slate-900 group-hover:text-blue-700">
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
      
      <div className="pt-4 mt-6 border-t border-slate-100">
        <Link
          href="/services"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full p-3 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors"
        >
          View All Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
});

MobileServicesMenu.displayName = 'MobileServicesMenu';

// PERFORMANCE: Optimized Mobile Locations Menu Component
const MobileLocationsMenu = memo(({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-4">
      <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 px-2">
        Major Service Areas
      </h3>
      <div className="grid grid-cols-1 gap-1">
        {STATES_DATA.map((state) => (
          <Link
            key={state}
            href={`/locations/${state.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={onClose}
            className="p-3 text-slate-900 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-colors font-medium"
          >
            {state}
          </Link>
        ))}
      </div>
      
      <div className="pt-4 mt-6 border-t border-slate-100">
        <Link
          href="/locations"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full p-3 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors"
        >
          View All 50 States
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
});

MobileLocationsMenu.displayName = 'MobileLocationsMenu';

// PERFORMANCE: Optimized Desktop Dropdown Content Component
const DropdownContent = memo(({ 
  id, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  id: string, 
  onMouseEnter: () => void, 
  onMouseLeave: () => void 
}) => {
  if (id === 'services') {
    return (
      <div 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-white backdrop-blur-md rounded-2xl overflow-hidden z-50 shadow-xl w-[95vw] max-w-5xl"
        style={dropdownStyle}
      >
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              Core Detection
            </h3>
            <ul className="space-y-2">
              {SERVICES_DATA.detectionServices.map(s => {
                const IconComponent = s.icon;
                return (
                  <li key={s.name}>
                    <Link href={s.href} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 group border border-transparent hover:border-blue-200 transition-all">
                      <div className="text-blue-600 flex-shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-blue-700">{s.name}</p>
                        <p className="text-sm text-slate-500">{s.description}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              Advanced Services
            </h3>
            <ul className="space-y-2">
              {SERVICES_DATA.specialtyServices.map(s => {
                const IconComponent = s.icon;
                return (
                  <li key={s.name}>
                    <Link href={s.href} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-green-50 group border border-transparent hover:border-green-200 transition-all">
                      <div className="text-green-600 flex-shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-green-700">{s.name}</p>
                        <p className="text-sm text-slate-500">{s.description}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
              Service Categories
            </h3>
            <ul className="space-y-2">
              {SERVICES_DATA.propertyTypes.map(s => {
                const IconComponent = s.icon;
                return (
                  <li key={s.name}>
                    <Link href={s.href} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-orange-50 group border border-transparent hover:border-orange-200 transition-all">
                      <div className="text-orange-600 flex-shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-orange-700">{s.name}</p>
                        <p className="text-sm text-slate-500">{s.description}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="bg-slate-50 backdrop-blur-sm px-8 py-4 border-t border-slate-100 flex items-center justify-between">
          <Link href="/services" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group">
            View All 44 Services <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Shield className="h-4 w-4 text-green-600" />
            <span>Licensed & Insured</span>
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
        style={dropdownStyle}
      >
        <div className="p-8">
          <h3 className="font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            Major Service Areas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATES_DATA.map(state => (
              <Link 
                key={state} 
                href={`/locations/${state.toLowerCase().replace(/\s+/g, '-')}`} 
                className="p-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all text-center font-medium border border-slate-100 hover:border-blue-200"
              >
                {state}
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 backdrop-blur-sm px-8 py-4 border-t border-slate-100 text-center">
          <Link href="/locations" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1.5 group">
            View All 50 States <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }
  
  return null;
});

DropdownContent.displayName = 'DropdownContent';

// PERFORMANCE: Main Header Component - Highly Optimized for LCP and Mobile
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<MobileView>('main');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // PERFORMANCE: Memoized handlers to prevent recreation on every render
  const handleMouseEnter = useCallback((dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  }, []);

  const handleDropdownEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setMobileView('main');
  }, []);

  const navigateToMobileView = useCallback((view: MobileView) => {
    setMobileView(view);
  }, []);

  const goBackToMain = useCallback(() => {
    setMobileView('main');
  }, []);

  useEffect(() => {
    return () => { 
      if (timeoutRef.current) clearTimeout(timeoutRef.current) 
    };
  }, []);

  // Reset mobile view when menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileView('main');
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* DESKTOP HEADER - Optimized */}
      <header className="hidden xl:flex items-center justify-center sticky top-4 z-50 w-full header-container">
        <div className="flex items-stretch justify-center gap-8">
          
          {/* Logo Box */}
          <div 
            className="flex items-center gap-4 bg-white backdrop-blur-md rounded-full pl-3 pr-4 shadow-lg"
            style={headerBoxStyle}
          >
            <Logo />
            <div className="border-l border-slate-200 h-8"></div>
            <span 
              className="font-medium text-sm text-slate-900 lcp-text"
              style={{ whiteSpace: 'nowrap' }}
            >
              Leak Detection
            </span>
          </div>

          {/* Navigation Box */}
          <nav 
            className="flex items-center bg-white backdrop-blur-md rounded-full px-3 py-2 shadow-lg"
            style={headerBoxStyle}
          >
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                onMouseEnter={() => link.type === 'dropdown' && handleMouseEnter(link.id)} 
                onMouseLeave={() => link.type === 'dropdown' && handleMouseLeave()} 
                className="relative"
              >
                {link.type === 'link' ? (
                  <Link 
                    href={link.href} 
                    className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-base flex items-center px-6 py-4 rounded-full hover:bg-blue-50"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button 
                      className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-base flex items-center gap-1.5 px-6 py-4 rounded-full hover:bg-blue-50"
                      aria-label={`${link.name} menu`}
                      aria-expanded={activeDropdown === link.id}
                      aria-haspopup="true"
                    >
                      {link.name} 
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.id && (
                      <DropdownContent 
                        id={link.id} 
                        onMouseEnter={handleDropdownEnter} 
                        onMouseLeave={handleMouseLeave} 
                      />
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
          
          {/* CTA Box */}
          <div 
            className="flex items-center gap-2 bg-white backdrop-blur-md rounded-full px-3 py-2 shadow-lg"
            style={headerBoxStyle}
          >
            <Link 
              href="/contact" 
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-base px-6 py-4 rounded-full hover:bg-blue-50"
            >
              Contact
            </Link>
            <a 
              href="tel:+18888759844" 
              className="bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 py-4 px-6 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              aria-label="Call for quote: 1-888-875-9844"
            >
              <Phone className="h-4 w-4" /> Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE HEADER - CRITICAL LCP OPTIMIZATION */}
      <header className="xl:hidden flex items-center justify-center sticky top-2 z-50 w-full px-2 sm:px-4 my-2 header-container">
        <div className="flex items-stretch justify-center gap-2 sm:gap-3 w-full max-w-screen-sm">
          
          {/* Mobile Logo Box - CRITICAL LCP ELEMENT */}
          <div className="mobile-logo-container flex items-center gap-2 px-2 sm:px-3 py-2 flex-1 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              <div className="border-l border-slate-200 h-4 sm:h-5 flex-shrink-0"></div>
              {/* CRITICAL LCP TEXT - Optimized rendering */}
              <span 
                className="text-xs sm:text-sm text-slate-900 font-medium lcp-text"
                style={{ 
                  maxWidth: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                Leak Detection
              </span>
            </div>
          </div>

          {/* Mobile Call Button Box */}
          <div 
            className="flex items-center justify-center bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl p-2 shadow-lg w-12 sm:w-14 h-12 sm:h-14"
            style={headerBoxStyle}
          >
            <a 
              href="tel:+18888759844" 
              className="mobile-call-button p-2 sm:p-2.5 rounded-xl flex items-center justify-center"
              aria-label="Call us: 1-888-875-9844"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>

          {/* Mobile Menu Button Box */}
          <div 
            className="flex items-center justify-center bg-white backdrop-blur-md rounded-2xl sm:rounded-3xl p-2 shadow-lg w-12 sm:w-14 h-12 sm:h-14"
            style={headerBoxStyle}
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
                style={sheetStyle}
              >
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
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
                        <span className="text-sm text-slate-600 font-medium">
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
                      <MobileServicesMenu onClose={closeMobileMenu} />
                    )}
                    {mobileView === 'locations' && (
                      <MobileLocationsMenu onClose={closeMobileMenu} />
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