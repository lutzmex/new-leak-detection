"use client";

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Star,
  Phone,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Globe
} from 'lucide-react';

interface State {
  id: number;
  name: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  technicians: number;
  avgResponse: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  abbreviation: string;
  completedJobs: number;
  certificationLevel: 'Good' | 'Great' | 'Excellent';
  emergencyAvailable: boolean;
}

export function TopServiceStates() {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allStates: State[] = [
    // All 50 States with humanized content
    { 
      id: 1, 
      name: "California", 
      abbreviation: "CA",
      tagline: "Fast leak detection from San Diego to San Francisco", 
      ctaText: "Get Help in California", 
      ctaLink: "/locations/california",
      technicians: 127,
      avgResponse: "18 min",
      rating: 4.9,
      reviews: 3247,
      featured: true,
      completedJobs: 15680,
      certificationLevel: 'Excellent',
      emergencyAvailable: true
    },
    { 
      id: 2, 
      name: "Texas", 
      abbreviation: "TX",
      tagline: "Reliable leak detection across the Lone Star State", 
      ctaText: "Get Help in Texas", 
      ctaLink: "/locations/texas",
      technicians: 98,
      avgResponse: "22 min",
      rating: 4.8,
      reviews: 2856,
      featured: true,
      completedJobs: 12340,
      certificationLevel: 'Excellent',
      emergencyAvailable: true
    },
    { 
      id: 3, 
      name: "Florida", 
      abbreviation: "FL",
      tagline: "Trusted leak experts throughout the Sunshine State", 
      ctaText: "Get Help in Florida", 
      ctaLink: "/locations/florida",
      technicians: 89,
      avgResponse: "25 min",
      rating: 4.9,
      reviews: 2194,
      featured: true,
      completedJobs: 11250,
      certificationLevel: 'Excellent',
      emergencyAvailable: true
    },
    { id: 4, name: "New York", abbreviation: "NY", tagline: "Expert leak detection in the Empire State", ctaText: "Get Help in New York", ctaLink: "/locations/new-york", technicians: 76, avgResponse: "28 min", rating: 4.8, reviews: 2156, completedJobs: 9876, certificationLevel: 'Great', emergencyAvailable: true },
    { id: 5, name: "Illinois", abbreviation: "IL", tagline: "Professional leak detection in the Prairie State", ctaText: "Get Help in Illinois", ctaLink: "/locations/illinois", technicians: 64, avgResponse: "26 min", rating: 4.7, reviews: 1897, completedJobs: 8234, certificationLevel: 'Great', emergencyAvailable: true },
    { id: 6, name: "Pennsylvania", abbreviation: "PA", tagline: "Dependable leak detection in the Keystone State", ctaText: "Get Help in Pennsylvania", ctaLink: "/locations/pennsylvania", technicians: 58, avgResponse: "29 min", rating: 4.7, reviews: 1645, completedJobs: 7123, certificationLevel: 'Great', emergencyAvailable: true },
    { id: 7, name: "Ohio", abbreviation: "OH", tagline: "Quality leak detection in the Buckeye State", ctaText: "Get Help in Ohio", ctaLink: "/locations/ohio", technicians: 52, avgResponse: "27 min", rating: 4.6, reviews: 1498, completedJobs: 6789, certificationLevel: 'Great', emergencyAvailable: true },
    { id: 8, name: "Georgia", abbreviation: "GA", tagline: "Fast leak detection in the Peach State", ctaText: "Get Help in Georgia", ctaLink: "/locations/georgia", technicians: 47, avgResponse: "24 min", rating: 4.8, reviews: 1356, completedJobs: 6234, certificationLevel: 'Great', emergencyAvailable: true },
    { id: 9, name: "North Carolina", abbreviation: "NC", tagline: "Reliable leak detection in the Tar Heel State", ctaText: "Get Help in North Carolina", ctaLink: "/locations/north-carolina", technicians: 44, avgResponse: "31 min", rating: 4.7, reviews: 1187, completedJobs: 5456, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 10, name: "Michigan", abbreviation: "MI", tagline: "Trusted leak detection in the Great Lakes State", ctaText: "Get Help in Michigan", ctaLink: "/locations/michigan", technicians: 41, avgResponse: "33 min", rating: 4.6, reviews: 1092, completedJobs: 4987, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 11, name: "New Jersey", abbreviation: "NJ", tagline: "Expert leak detection in the Garden State", ctaText: "Get Help in New Jersey", ctaLink: "/locations/new-jersey", technicians: 46, avgResponse: "23 min", rating: 4.8, reviews: 1287, completedJobs: 5678, certificationLevel: 'Great', emergencyAvailable: true },
    { id: 12, name: "Virginia", abbreviation: "VA", tagline: "Professional leak detection in the Old Dominion", ctaText: "Get Help in Virginia", ctaLink: "/locations/virginia", technicians: 39, avgResponse: "30 min", rating: 4.6, reviews: 943, completedJobs: 4321, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 13, name: "Washington", abbreviation: "WA", tagline: "Quality leak detection in the Evergreen State", ctaText: "Get Help in Washington", ctaLink: "/locations/washington", technicians: 48, avgResponse: "28 min", rating: 4.9, reviews: 1543, completedJobs: 6789, certificationLevel: 'Great', emergencyAvailable: true },
    { id: 14, name: "Arizona", abbreviation: "AZ", tagline: "Fast leak detection in the Grand Canyon State", ctaText: "Get Help in Arizona", ctaLink: "/locations/arizona", technicians: 42, avgResponse: "26 min", rating: 4.7, reviews: 1234, completedJobs: 5432, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 15, name: "Massachusetts", abbreviation: "MA", tagline: "Expert leak detection in the Bay State", ctaText: "Get Help in Massachusetts", ctaLink: "/locations/massachusetts", technicians: 38, avgResponse: "25 min", rating: 4.8, reviews: 1432, completedJobs: 6123, certificationLevel: 'Great', emergencyAvailable: true },
    { id: 16, name: "Tennessee", abbreviation: "TN", tagline: "Reliable leak detection in the Volunteer State", ctaText: "Get Help in Tennessee", ctaLink: "/locations/tennessee", technicians: 36, avgResponse: "32 min", rating: 4.6, reviews: 876, completedJobs: 3987, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 17, name: "Indiana", abbreviation: "IN", tagline: "Trusted leak detection in the Hoosier State", ctaText: "Get Help in Indiana", ctaLink: "/locations/indiana", technicians: 33, avgResponse: "34 min", rating: 4.5, reviews: 654, completedJobs: 3234, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 18, name: "Missouri", abbreviation: "MO", tagline: "Quality leak detection in the Show-Me State", ctaText: "Get Help in Missouri", ctaLink: "/locations/missouri", technicians: 35, avgResponse: "33 min", rating: 4.5, reviews: 732, completedJobs: 3456, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 19, name: "Maryland", abbreviation: "MD", tagline: "Professional leak detection in the Free State", ctaText: "Get Help in Maryland", ctaLink: "/locations/maryland", technicians: 40, avgResponse: "24 min", rating: 4.7, reviews: 1123, completedJobs: 4567, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 20, name: "Wisconsin", abbreviation: "WI", tagline: "Dependable leak detection in the Badger State", ctaText: "Get Help in Wisconsin", ctaLink: "/locations/wisconsin", technicians: 31, avgResponse: "35 min", rating: 4.4, reviews: 567, completedJobs: 2987, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 21, name: "Colorado", abbreviation: "CO", tagline: "Expert leak detection in the Rocky Mountain State", ctaText: "Get Help in Colorado", ctaLink: "/locations/colorado", technicians: 31, avgResponse: "33 min", rating: 4.8, reviews: 876, completedJobs: 4321, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 22, name: "Minnesota", abbreviation: "MN", tagline: "Reliable leak detection in the Land of 10,000 Lakes", ctaText: "Get Help in Minnesota", ctaLink: "/locations/minnesota", technicians: 26, avgResponse: "39 min", rating: 4.7, reviews: 543, completedJobs: 3210, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 23, name: "South Carolina", abbreviation: "SC", tagline: "Quality leak detection in the Palmetto State", ctaText: "Get Help in South Carolina", ctaLink: "/locations/south-carolina", technicians: 25, avgResponse: "34 min", rating: 4.6, reviews: 432, completedJobs: 2876, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 24, name: "Alabama", abbreviation: "AL", tagline: "Trusted leak detection in the Heart of Dixie", ctaText: "Get Help in Alabama", ctaLink: "/locations/alabama", technicians: 24, avgResponse: "36 min", rating: 4.5, reviews: 398, completedJobs: 2654, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 25, name: "Louisiana", abbreviation: "LA", tagline: "Expert leak detection in the Bayou State", ctaText: "Get Help in Louisiana", ctaLink: "/locations/louisiana", technicians: 27, avgResponse: "35 min", rating: 4.7, reviews: 567, completedJobs: 3123, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 26, name: "Kentucky", abbreviation: "KY", tagline: "Professional leak detection in the Bluegrass State", ctaText: "Get Help in Kentucky", ctaLink: "/locations/kentucky", technicians: 22, avgResponse: "38 min", rating: 4.4, reviews: 321, completedJobs: 2345, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 27, name: "Oregon", abbreviation: "OR", tagline: "Quality leak detection in the Beaver State", ctaText: "Get Help in Oregon", ctaLink: "/locations/oregon", technicians: 29, avgResponse: "32 min", rating: 4.8, reviews: 678, completedJobs: 3654, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 28, name: "Oklahoma", abbreviation: "OK", tagline: "Reliable leak detection in the Sooner State", ctaText: "Get Help in Oklahoma", ctaLink: "/locations/oklahoma", technicians: 21, avgResponse: "37 min", rating: 4.5, reviews: 287, completedJobs: 2198, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 29, name: "Connecticut", abbreviation: "CT", tagline: "Expert leak detection in the Constitution State", ctaText: "Get Help in Connecticut", ctaLink: "/locations/connecticut", technicians: 32, avgResponse: "27 min", rating: 4.9, reviews: 834, completedJobs: 4123, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 30, name: "Utah", abbreviation: "UT", tagline: "Trusted leak detection in the Beehive State", ctaText: "Get Help in Utah", ctaLink: "/locations/utah", technicians: 25, avgResponse: "34 min", rating: 4.7, reviews: 456, completedJobs: 2987, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 31, name: "Iowa", abbreviation: "IA", tagline: "Quality leak detection in the Hawkeye State", ctaText: "Get Help in Iowa", ctaLink: "/locations/iowa", technicians: 19, avgResponse: "41 min", rating: 4.6, reviews: 234, completedJobs: 1876, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 32, name: "Nevada", abbreviation: "NV", tagline: "Professional leak detection in the Silver State", ctaText: "Get Help in Nevada", ctaLink: "/locations/nevada", technicians: 23, avgResponse: "33 min", rating: 4.6, reviews: 345, completedJobs: 2456, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 33, name: "Arkansas", abbreviation: "AR", tagline: "Reliable leak detection in the Natural State", ctaText: "Get Help in Arkansas", ctaLink: "/locations/arkansas", technicians: 18, avgResponse: "39 min", rating: 4.4, reviews: 198, completedJobs: 1654, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 34, name: "Mississippi", abbreviation: "MS", tagline: "Expert leak detection in the Magnolia State", ctaText: "Get Help in Mississippi", ctaLink: "/locations/mississippi", technicians: 17, avgResponse: "42 min", rating: 4.3, reviews: 167, completedJobs: 1432, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 35, name: "Kansas", abbreviation: "KS", tagline: "Quality leak detection in the Sunflower State", ctaText: "Get Help in Kansas", ctaLink: "/locations/kansas", technicians: 20, avgResponse: "38 min", rating: 4.5, reviews: 276, completedJobs: 1987, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 36, name: "New Mexico", abbreviation: "NM", tagline: "Trusted leak detection in the Land of Enchantment", ctaText: "Get Help in New Mexico", ctaLink: "/locations/new-mexico", technicians: 19, avgResponse: "36 min", rating: 4.6, reviews: 234, completedJobs: 1765, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 37, name: "Nebraska", abbreviation: "NE", tagline: "Professional leak detection in the Cornhusker State", ctaText: "Get Help in Nebraska", ctaLink: "/locations/nebraska", technicians: 16, avgResponse: "43 min", rating: 4.4, reviews: 145, completedJobs: 1345, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 38, name: "West Virginia", abbreviation: "WV", tagline: "Reliable leak detection in the Mountain State", ctaText: "Get Help in West Virginia", ctaLink: "/locations/west-virginia", technicians: 15, avgResponse: "44 min", rating: 4.3, reviews: 123, completedJobs: 1123, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 39, name: "Idaho", abbreviation: "ID", tagline: "Quality leak detection in the Gem State", ctaText: "Get Help in Idaho", ctaLink: "/locations/idaho", technicians: 17, avgResponse: "40 min", rating: 4.5, reviews: 187, completedJobs: 1456, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 40, name: "Hawaii", abbreviation: "HI", tagline: "Expert leak detection in the Aloha State", ctaText: "Get Help in Hawaii", ctaLink: "/locations/hawaii", technicians: 21, avgResponse: "35 min", rating: 4.8, reviews: 298, completedJobs: 2123, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 41, name: "New Hampshire", abbreviation: "NH", tagline: "Trusted leak detection in the Live Free or Die State", ctaText: "Get Help in New Hampshire", ctaLink: "/locations/new-hampshire", technicians: 18, avgResponse: "37 min", rating: 4.7, reviews: 234, completedJobs: 1789, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 42, name: "Maine", abbreviation: "ME", tagline: "Professional leak detection in the Pine Tree State", ctaText: "Get Help in Maine", ctaLink: "/locations/maine", technicians: 16, avgResponse: "41 min", rating: 4.6, reviews: 176, completedJobs: 1345, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 43, name: "Rhode Island", abbreviation: "RI", tagline: "Quality leak detection in the Ocean State", ctaText: "Get Help in Rhode Island", ctaLink: "/locations/rhode-island", technicians: 14, avgResponse: "29 min", rating: 4.8, reviews: 198, completedJobs: 1654, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 44, name: "Montana", abbreviation: "MT", tagline: "Reliable leak detection in Big Sky Country", ctaText: "Get Help in Montana", ctaLink: "/locations/montana", technicians: 13, avgResponse: "45 min", rating: 4.4, reviews: 87, completedJobs: 987, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 45, name: "Delaware", abbreviation: "DE", tagline: "Expert leak detection in the First State", ctaText: "Get Help in Delaware", ctaLink: "/locations/delaware", technicians: 15, avgResponse: "31 min", rating: 4.7, reviews: 145, completedJobs: 1234, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 46, name: "South Dakota", abbreviation: "SD", tagline: "Trusted leak detection in the Mount Rushmore State", ctaText: "Get Help in South Dakota", ctaLink: "/locations/south-dakota", technicians: 11, avgResponse: "47 min", rating: 4.3, reviews: 76, completedJobs: 876, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 47, name: "North Dakota", abbreviation: "ND", tagline: "Professional leak detection in the Peace Garden State", ctaText: "Get Help in North Dakota", ctaLink: "/locations/north-dakota", technicians: 12, avgResponse: "46 min", rating: 4.4, reviews: 89, completedJobs: 765, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 48, name: "Alaska", abbreviation: "AK", tagline: "Quality leak detection in the Last Frontier", ctaText: "Get Help in Alaska", ctaLink: "/locations/alaska", technicians: 14, avgResponse: "50 min", rating: 4.5, reviews: 134, completedJobs: 1123, certificationLevel: 'Good', emergencyAvailable: true },
    { id: 49, name: "Vermont", abbreviation: "VT", tagline: "Reliable leak detection in the Green Mountain State", ctaText: "Get Help in Vermont", ctaLink: "/locations/vermont", technicians: 13, avgResponse: "42 min", rating: 4.6, reviews: 112, completedJobs: 987, certificationLevel: 'Good', emergencyAvailable: false },
    { id: 50, name: "Wyoming", abbreviation: "WY", tagline: "Expert leak detection in the Equality State", ctaText: "Get Help in Wyoming", ctaLink: "/locations/wyoming", technicians: 10, avgResponse: "48 min", rating: 4.3, reviews: 67, completedJobs: 654, certificationLevel: 'Good', emergencyAvailable: false }
  ];

  // Sort by rating by default
  const sortedStates = allStates.sort((a, b) => b.rating - a.rating);
  const displayedStates = showAll ? sortedStates : sortedStates.slice(0, 20);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
            <Globe className="h-5 w-5 mr-2" />
            Available Across America
          </div>
          <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
            Leak Detection Help
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Every State
            </span>
          </h2>
          <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            From coast to coast, our trained professionals provide fast leak detection services with guaranteed results and 24/7 emergency support.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
              <div className="font-poppins font-medium text-4xl text-blue-600 mb-1">50</div>
              <div className="font-poppins text-slate-800 text-base">States Covered</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
              <div className="font-poppins font-medium text-4xl text-purple-600 mb-1">1,850+</div>
              <div className="font-poppins text-slate-800 text-base">Expert Technicians</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
              <div className="font-poppins font-medium text-4xl text-green-600 mb-1">99.2%</div>
              <div className="font-poppins text-slate-800 text-base">Success Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
              <div className="font-poppins font-medium text-4xl text-orange-600 mb-1">250k+</div>
              <div className="font-poppins text-slate-800 text-base">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* All States Grid */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4">Where We Help</h3>
            <p className="font-poppins text-base sm:text-lg text-slate-700">Trained professionals in every state across America</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {displayedStates.map((state) => (
              <a
                key={state.id}
                href={state.ctaLink}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl transition-all duration-300 p-6 text-center border border-white/20 hover:border-blue-300 transform hover:-translate-y-2 relative hover:bg-white hover:z-10"
                style={{
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3), 0 20px 64px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
                }}
              >
                {/* 3D White Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-white/80 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <MapPin className="h-10 w-10 text-slate-900 mx-auto mb-3 group-hover:scale-110 transition-transform drop-shadow-lg" />
                  
                  <h4 className="font-poppins font-medium text-slate-900 text-base mb-1 transition-colors">
                    {state.name}
                  </h4>
                  
                  <div className="font-poppins font-medium text-sm text-slate-700 mb-2">{state.abbreviation}</div>
                  
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-poppins font-medium text-sm text-slate-900">{state.rating}</span>
                  </div>
                  
                  <div className="font-poppins text-sm text-slate-700">
                    {state.technicians} technicians
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Show More/Less Button */}
        {allStates.length > 20 && (
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group bg-white/95 backdrop-blur-sm border border-white/20 text-slate-900 hover:bg-white px-8 py-4 rounded-2xl font-poppins font-medium text-base transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              }}
            >
              {showAll ? (
                <>
                  Show Fewer States
                  <ChevronUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View All {allStates.length} States
                  <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Simple CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/locations"
              className="group bg-white/95 backdrop-blur-sm border border-white/20 text-slate-900 hover:bg-white px-8 py-4 rounded-2xl font-poppins font-medium text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              style={{
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              }}
            >
              <MapPin className="h-5 w-5" />
              Find Help Near You
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+18888759844"
              className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span className="font-ibm-plex-mono font-medium">Call Us Now</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}