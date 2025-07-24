// app/locations/locations-client.tsx
"use client";
import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Star,
  Clock,
  Users,
  ChevronRight,
  Globe,
  Building,
  PhoneCall,
  ArrowRight,
  Award,
  Shield,
  Sparkles,
  Zap
} from 'lucide-react';

// Location data interface
interface LocationInfo {
  id: string;
  city: string;
  state: string;
  stateCode: string;
  region: string;
  phone: string;
  description: string;
  rating: number;
  responseTime: string;
  teamSize: number;
  citiesServed: number;
  emergencyAvailable: boolean;
  isPopular?: boolean;
}

const allStatesLocations: LocationInfo[] = [
  {
    id: "florida",
    city: "Miami",
    state: "Florida",
    stateCode: "FL",
    region: "Southeast",
    phone: "+1 (888) 875-9844",
    description: "Expert leak detection specialists serving Florida with advanced hurricane-resistant technology and same-day emergency response across all coastal and inland regions.",
    rating: 4.9,
    responseTime: "< 25 min",
    teamSize: 18,
    citiesServed: 58,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "alabama",
    city: "Birmingham",
    state: "Alabama",
    stateCode: "AL",
    region: "Southeast",
    phone: "+1 (888) 875-9844",
    description: "Professional leak detection experts throughout Alabama with cutting-edge thermal imaging and acoustic technology, providing reliable 24/7 emergency services to homes and businesses.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 8,
    citiesServed: 39,
    emergencyAvailable: true
  },
  {
    id: "alaska",
    city: "Anchorage",
    state: "Alaska",
    stateCode: "AK",
    region: "West",
    phone: "+1 (888) 875-9844",
    description: "Specialized freeze-resistant leak detection services designed for Alaska's extreme climate conditions, with expert teams trained in cold-weather plumbing challenges.",
    rating: 4.7,
    responseTime: "< 45 min",
    teamSize: 6,
    citiesServed: 15,
    emergencyAvailable: true
  },
  {
    id: "arizona",
    city: "Phoenix",
    state: "Arizona",
    stateCode: "AZ",
    region: "Southwest",
    phone: "+1 (888) 875-9844",
    description: "Desert climate specialists serving Arizona with heat-resistant detection equipment and expertise in extreme temperature conditions, from Phoenix to Tucson and beyond.",
    rating: 4.9,
    responseTime: "< 25 min",
    teamSize: 15,
    citiesServed: 28,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "arkansas",
    city: "Little Rock",
    state: "Arkansas",
    stateCode: "AR",
    region: "South",
    phone: "+1 (888) 875-9844",
    description: "Trusted leak detection professionals across Arkansas with local expertise in regional soil conditions and seasonal weather patterns affecting plumbing systems.",
    rating: 4.6,
    responseTime: "< 35 min",
    teamSize: 7,
    citiesServed: 30,
    emergencyAvailable: true
  },
  {
    id: "california",
    city: "Los Angeles",
    state: "California",
    stateCode: "CA",
    region: "West",
    phone: "+1 (888) 875-9844",
    description: "Leading-edge leak detection technology serving all of California from coastal cities to desert regions, with the largest team of certified specialists in the state.",
    rating: 4.9,
    responseTime: "< 20 min",
    teamSize: 25,
    citiesServed: 138,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "colorado",
    city: "Denver",
    state: "Colorado",
    stateCode: "CO",
    region: "West",
    phone: "+1 (888) 875-9844",
    description: "Mountain region specialists with deep expertise in high-altitude plumbing systems and freeze-thaw cycle challenges unique to Colorado's climate.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 12,
    citiesServed: 41,
    emergencyAvailable: true
  },
  {
    id: "connecticut",
    city: "Hartford",
    state: "Connecticut",
    stateCode: "CT",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Professional leak detection services throughout Connecticut with rapid response capabilities and specialized equipment for both historic and modern buildings.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 9,
    citiesServed: 58,
    emergencyAvailable: true
  },
  {
    id: "delaware",
    city: "Wilmington",
    state: "Delaware",
    stateCode: "DE",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Comprehensive leak detection services covering all of Delaware's residential and commercial properties with personalized attention and quick response times.",
    rating: 4.6,
    responseTime: "< 40 min",
    teamSize: 5,
    citiesServed: 7,
    emergencyAvailable: true
  },
  {
    id: "georgia",
    city: "Atlanta",
    state: "Georgia",
    stateCode: "GA",
    region: "Southeast",
    phone: "+1 (888) 875-9844",
    description: "Metro Atlanta and statewide leak detection specialists using state-of-the-art equipment to serve Georgia's diverse residential and commercial plumbing needs.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 14,
    citiesServed: 34,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "hawaii",
    city: "Honolulu",
    state: "Hawaii",
    stateCode: "HI",
    region: "West",
    phone: "+1 (888) 875-9844",
    description: "Island specialists with unique expertise in tropical climate plumbing systems, saltwater corrosion issues, and volcanic soil conditions affecting water lines.",
    rating: 4.7,
    responseTime: "< 45 min",
    teamSize: 7,
    citiesServed: 13,
    emergencyAvailable: true
  },
  {
    id: "idaho",
    city: "Boise",
    state: "Idaho",
    stateCode: "ID",
    region: "Northwest",
    phone: "+1 (888) 875-9844",
    description: "Mountain state experts with specialized knowledge in seasonal freeze protection and rural property leak detection throughout Idaho's diverse terrain.",
    rating: 4.6,
    responseTime: "< 40 min",
    teamSize: 6,
    citiesServed: 16,
    emergencyAvailable: true
  },
  {
    id: "illinois",
    city: "Chicago",
    state: "Illinois",
    stateCode: "IL",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Windy City specialists serving Illinois with extensive freeze-thaw expertise and advanced detection methods for both urban high-rises and suburban homes.",
    rating: 4.8,
    responseTime: "< 35 min",
    teamSize: 16,
    citiesServed: 95,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "indiana",
    city: "Indianapolis",
    state: "Indiana",
    stateCode: "IN",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Hoosier state professionals providing comprehensive leak detection services with expertise in Indiana's seasonal temperature variations and soil conditions.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 10,
    citiesServed: 45,
    emergencyAvailable: true
  },
  {
    id: "iowa",
    city: "Des Moines",
    state: "Iowa",
    stateCode: "IA",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Midwest reliability with advanced detection technology serving Iowa's agricultural and urban communities with dependable emergency response capabilities.",
    rating: 4.6,
    responseTime: "< 40 min",
    teamSize: 8,
    citiesServed: 30,
    emergencyAvailable: true
  },
  {
    id: "kansas",
    city: "Wichita",
    state: "Kansas",
    stateCode: "KS",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Plains specialists serving Kansas with efficient leak detection solutions and expertise in the unique challenges of Great Plains weather and soil conditions.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 9,
    citiesServed: 33,
    emergencyAvailable: true
  },
  {
    id: "kentucky",
    city: "Louisville",
    state: "Kentucky",
    stateCode: "KY",
    region: "South",
    phone: "+1 (888) 875-9844",
    description: "Bluegrass state experts with extensive experience in diverse geological conditions, from limestone caverns to rolling hills throughout Kentucky.",
    rating: 4.6,
    responseTime: "< 40 min",
    teamSize: 8,
    citiesServed: 27,
    emergencyAvailable: true
  },
  {
    id: "louisiana",
    city: "New Orleans",
    state: "Louisiana",
    stateCode: "LA",
    region: "South",
    phone: "+1 (888) 875-9844",
    description: "Bayou specialists with deep expertise in high-moisture climate conditions, hurricane preparedness, and below-sea-level plumbing challenges unique to Louisiana.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 10,
    citiesServed: 20,
    emergencyAvailable: true
  },
  {
    id: "maine",
    city: "Portland",
    state: "Maine",
    stateCode: "ME",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Coastal Maine specialists with cold-weather plumbing expertise and knowledge of saltwater corrosion issues affecting waterfront properties.",
    rating: 4.6,
    responseTime: "< 45 min",
    teamSize: 6,
    citiesServed: 32,
    emergencyAvailable: true
  },
  {
    id: "maryland",
    city: "Baltimore",
    state: "Maryland",
    stateCode: "MD",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Mid-Atlantic experts serving Maryland with comprehensive leak detection services for both historic buildings and modern developments throughout the state.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 11,
    citiesServed: 27,
    emergencyAvailable: true
  },
  {
    id: "massachusetts",
    city: "Boston",
    state: "Massachusetts",
    stateCode: "MA",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "New England specialists with historic building expertise and modern technology serving Massachusetts from Boston's Freedom Trail to the Berkshire Mountains.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 13,
    citiesServed: 102,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "michigan",
    city: "Detroit",
    state: "Michigan",
    stateCode: "MI",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Great Lakes specialists with expertise in seasonal temperature variations and the unique challenges of Michigan's peninsular geography and lake-effect weather.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 12,
    citiesServed: 57,
    emergencyAvailable: true
  },
  {
    id: "minnesota",
    city: "Minneapolis",
    state: "Minnesota",
    stateCode: "MN",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Twin Cities experts with specialized cold-climate plumbing knowledge and advanced freeze prevention techniques for Minnesota's harsh winters.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 11,
    citiesServed: 33,
    emergencyAvailable: true
  },
  {
    id: "mississippi",
    city: "Jackson",
    state: "Mississippi",
    stateCode: "MS",
    region: "South",
    phone: "+1 (888) 875-9844",
    description: "Southern specialists serving Mississippi with reliable leak detection services and expertise in humid subtropical climate conditions and delta region challenges.",
    rating: 4.6,
    responseTime: "< 40 min",
    teamSize: 7,
    citiesServed: 28,
    emergencyAvailable: true
  },
  {
    id: "missouri",
    city: "Kansas City",
    state: "Missouri",
    stateCode: "MO",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Show-Me state professionals with comprehensive plumbing expertise serving Missouri's diverse regions from the Ozarks to the Mississippi River valley.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 10,
    citiesServed: 35,
    emergencyAvailable: true
  },
  {
    id: "montana",
    city: "Billings",
    state: "Montana",
    stateCode: "MT",
    region: "Northwest",
    phone: "+1 (888) 875-9844",
    description: "Big Sky specialists with expertise in extreme weather conditions and the unique challenges of Montana's vast distances and rugged terrain.",
    rating: 4.6,
    responseTime: "< 50 min",
    teamSize: 5,
    citiesServed: 16,
    emergencyAvailable: true
  },
  {
    id: "nebraska",
    city: "Omaha",
    state: "Nebraska",
    stateCode: "NE",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Plains state experts providing reliable service throughout Nebraska with expertise in agricultural and urban leak detection needs across the Great Plains.",
    rating: 4.6,
    responseTime: "< 40 min",
    teamSize: 8,
    citiesServed: 19,
    emergencyAvailable: true
  },
  {
    id: "nevada",
    city: "Las Vegas",
    state: "Nevada",
    stateCode: "NV",
    region: "West",
    phone: "+1 (888) 875-9844",
    description: "Desert specialists serving Nevada with heat-resistant detection technology and expertise in water conservation and extreme temperature conditions.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 12,
    citiesServed: 14,
    emergencyAvailable: true
  },
  {
    id: "new-hampshire",
    city: "Manchester",
    state: "New Hampshire",
    stateCode: "NH",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Live Free or Die state specialists with cold-weather expertise and knowledge of New England's unique seasonal plumbing challenges and granite bedrock conditions.",
    rating: 4.6,
    responseTime: "< 40 min",
    teamSize: 6,
    citiesServed: 21,
    emergencyAvailable: true
  },
  {
    id: "new-jersey",
    city: "Newark",
    state: "New Jersey",
    stateCode: "NJ",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Garden State professionals serving New Jersey with advanced leak detection technology for both densely populated urban areas and suburban communities.",
    rating: 4.8,
    responseTime: "< 25 min",
    teamSize: 14,
    citiesServed: 63,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "new-mexico",
    city: "Albuquerque",
    state: "New Mexico",
    stateCode: "NM",
    region: "Southwest",
    phone: "+1 (888) 875-9844",
    description: "Land of Enchantment specialists with desert climate expertise and knowledge of high-altitude and arid region plumbing challenges throughout New Mexico.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 9,
    citiesServed: 26,
    emergencyAvailable: true
  },
  {
    id: "new-york",
    city: "New York",
    state: "New York",
    stateCode: "NY",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Empire State specialists serving NYC and statewide with cutting-edge technology and expertise in everything from Manhattan skyscrapers to Adirondack cabins.",
    rating: 4.9,
    responseTime: "< 20 min",
    teamSize: 22,
    citiesServed: 105,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "north-carolina",
    city: "Charlotte",
    state: "North Carolina",
    stateCode: "NC",
    region: "Southeast",
    phone: "+1 (888) 875-9844",
    description: "Tar Heel state experts with diverse climate and terrain experience, from coastal plains to mountain regions throughout North Carolina.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 13,
    citiesServed: 39,
    emergencyAvailable: true
  },
  {
    id: "north-dakota",
    city: "Fargo",
    state: "North Dakota",
    stateCode: "ND",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Northern plains specialists with extreme cold weather expertise and knowledge of the unique challenges facing North Dakota's oil boom communities.",
    rating: 4.6,
    responseTime: "< 45 min",
    teamSize: 5,
    citiesServed: 12,
    emergencyAvailable: true
  },
  {
    id: "ohio",
    city: "Columbus",
    state: "Ohio",
    stateCode: "OH",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Buckeye state professionals with comprehensive leak detection throughout Ohio, serving diverse communities from Lake Erie shores to Ohio River valley.",
    rating: 4.7,
    responseTime: "< 30 min",
    teamSize: 14,
    citiesServed: 68,
    emergencyAvailable: true
  },
  {
    id: "oklahoma",
    city: "Oklahoma City",
    state: "Oklahoma",
    stateCode: "OK",
    region: "South",
    phone: "+1 (888) 875-9844",
    description: "Sooner state experts with experience in diverse weather conditions, from tornadic activity to drought conditions affecting Oklahoma's plumbing systems.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 9,
    citiesServed: 50,
    emergencyAvailable: true
  },
  {
    id: "oregon",
    city: "Portland",
    state: "Oregon",
    stateCode: "OR",
    region: "Northwest",
    phone: "+1 (888) 875-9844",
    description: "Pacific Northwest specialists with rain-climate expertise throughout Oregon, from coastal fog to Cascade mountain snow conditions.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 11,
    citiesServed: 38,
    emergencyAvailable: true
  },
  {
    id: "pennsylvania",
    city: "Philadelphia",
    state: "Pennsylvania",
    stateCode: "PA",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Keystone state professionals with expertise in both historic buildings and modern systems, serving Pennsylvania from Liberty Bell to Pittsburgh Steel.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 15,
    citiesServed: 70,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "rhode-island",
    city: "Providence",
    state: "Rhode Island",
    stateCode: "RI",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Ocean State specialists with coastal and urban plumbing expertise, serving Rhode Island's unique blend of historic and modern properties.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 6,
    citiesServed: 21,
    emergencyAvailable: true
  },
  {
    id: "south-carolina",
    city: "Charleston",
    state: "South Carolina",
    stateCode: "SC",
    region: "Southeast",
    phone: "+1 (888) 875-9844",
    description: "Palmetto state experts with coastal and inland plumbing specialization, from historic Charleston mansions to modern Greenville developments.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 9,
    citiesServed: 22,
    emergencyAvailable: true
  },
  {
    id: "south-dakota",
    city: "Sioux Falls",
    state: "South Dakota",
    stateCode: "SD",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Mount Rushmore state specialists with prairie and cold climate expertise, serving South Dakota's agricultural and tourist communities year-round.",
    rating: 4.6,
    responseTime: "< 45 min",
    teamSize: 6,
    citiesServed: 22,
    emergencyAvailable: true
  },
  {
    id: "tennessee",
    city: "Nashville",
    state: "Tennessee",
    stateCode: "TN",
    region: "South",
    phone: "+1 (888) 875-9844",
    description: "Volunteer state professionals with music city excellence, serving Tennessee from Memphis blues to Great Smoky Mountains with outstanding service.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 12,
    citiesServed: 28,
    emergencyAvailable: true
  },
  {
    id: "texas",
    city: "Houston",
    state: "Texas",
    stateCode: "TX",
    region: "Southwest",
    phone: "+1 (888) 875-9844",
    description: "Lone Star state specialists with big solutions for America's second-largest state, from Gulf Coast humidity to desert conditions across Texas.",
    rating: 4.9,
    responseTime: "< 20 min",
    teamSize: 28,
    citiesServed: 77,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "utah",
    city: "Salt Lake City",
    state: "Utah",
    stateCode: "UT",
    region: "West",
    phone: "+1 (888) 875-9844",
    description: "Beehive state experts with mountain and desert climate specialization, serving Utah's unique geography from Great Salt Lake to red rock country.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 10,
    citiesServed: 33,
    emergencyAvailable: true
  },
  {
    id: "vermont",
    city: "Burlington",
    state: "Vermont",
    stateCode: "VT",
    region: "Northeast",
    phone: "+1 (888) 875-9844",
    description: "Green Mountain state specialists with cold weather and rural expertise, serving Vermont's scenic communities with reliable year-round service.",
    rating: 4.6,
    responseTime: "< 40 min",
    teamSize: 5,
    citiesServed: 16,
    emergencyAvailable: true
  },
  {
    id: "virginia",
    city: "Virginia Beach",
    state: "Virginia",
    stateCode: "VA",
    region: "Southeast",
    phone: "+1 (888) 875-9844",
    description: "Old Dominion specialists with coastal and mountain region expertise, serving Virginia from Chesapeake Bay to Blue Ridge Mountains.",
    rating: 4.8,
    responseTime: "< 30 min",
    teamSize: 12,
    citiesServed: 30,
    emergencyAvailable: true
  },
  {
    id: "washington",
    city: "Seattle",
    state: "Washington",
    stateCode: "WA",
    region: "Northwest",
    phone: "+1 (888) 875-9844",
    description: "Evergreen state specialists with Pacific Northwest rain climate expertise and advanced detection methods for Washington's unique weather patterns.",
    rating: 4.8,
    responseTime: "< 25 min",
    teamSize: 16,
    citiesServed: 34,
    emergencyAvailable: true,
    isPopular: true
  },
  {
    id: "west-virginia",
    city: "Charleston",
    state: "West Virginia",
    stateCode: "WV",
    region: "Southeast",
    phone: "+1 (888) 875-9844",
    description: "Mountain state specialists with challenging terrain and climate expertise, serving West Virginia's coal country and Appalachian communities.",
    rating: 4.6,
    responseTime: "< 40 min",
    teamSize: 6,
    citiesServed: 36,
    emergencyAvailable: true
  },
  {
    id: "wisconsin",
    city: "Milwaukee",
    state: "Wisconsin",
    stateCode: "WI",
    region: "Midwest",
    phone: "+1 (888) 875-9844",
    description: "Badger state professionals with Great Lakes and cold climate specialization, serving Wisconsin from cheese country to lake-effect snow regions.",
    rating: 4.7,
    responseTime: "< 35 min",
    teamSize: 11,
    citiesServed: 39,
    emergencyAvailable: true
  },
  {
    id: "wyoming",
    city: "Cheyenne",
    state: "Wyoming",
    stateCode: "WY",
    region: "West",
    phone: "+1 (888) 875-9844",
    description: "Equality state specialists with high-altitude and extreme weather expertise, serving Wyoming's wide open spaces and challenging mountain conditions.",
    rating: 4.6,
    responseTime: "< 50 min",
    teamSize: 4,
    citiesServed: 21,
    emergencyAvailable: true
  },
];

const regions = ["All Regions", "Northeast", "Southeast", "Midwest", "South", "Southwest", "West", "Northwest"];

// Location Card Component
function LocationCard({ location, index }: { location: LocationInfo; index: number }) {
  const handleCallNow = () => {
    window.location.href = `tel:${location.phone}`;
  };

  return (
    <div 
      className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300 transform hover:-translate-y-2"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Header */}
      <div className="relative h-40 bg-gradient-to-br from-blue-100 to-purple-100 border-b border-blue-200 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-16 h-16 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 bg-purple-200 rounded-full blur-xl"></div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {location.emergencyAvailable && (
            <div className="bg-white border border-slate-300 text-slate-900 px-3 py-1 rounded-full font-poppins text-xs font-medium flex items-center gap-1 shadow-sm">
              <Zap className="h-3 w-3" />
              24/7
            </div>
          )}
        </div>

        {/* Popular Badge */}
        {location.isPopular && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full font-poppins text-xs font-medium flex items-center gap-1 shadow-sm border border-slate-200">
            <Star className="h-3 w-3 fill-current" />
            Popular
          </div>
        )}

        {/* State Info */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-10 w-10 text-slate-800 mx-auto mb-3" />
            <h3 className="font-poppins text-lg font-medium text-slate-800 mb-1">
              Leak Detection in {location.state}
            </h3>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg px-3 py-1 text-slate-700">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="font-poppins font-medium text-sm">{location.rating}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Header Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="bg-white text-slate-900 px-3 py-1 rounded-full font-poppins text-xs font-medium border border-slate-200">
              {location.region} Region
            </span>
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-poppins text-xs font-medium">Available Now</span>
            </div>
          </div>
          
          <p className="font-poppins text-slate-600 text-sm leading-relaxed line-clamp-3">
            {location.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-50 rounded-xl p-3 text-center group-hover:bg-blue-50 transition-colors">
            <Clock className="h-4 w-4 text-blue-600 mx-auto mb-1" />
            <div className="font-poppins text-xs font-medium text-slate-800">{location.responseTime}</div>
            <div className="font-poppins text-xs text-slate-500">Response</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 text-center group-hover:bg-green-50 transition-colors">
            <Users className="h-4 w-4 text-green-600 mx-auto mb-1" />
            <div className="font-poppins text-xs font-medium text-slate-800">{location.teamSize}</div>
            <div className="font-poppins text-xs text-slate-500">Team Size</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 text-center group-hover:bg-purple-50 transition-colors">
            <Building className="h-4 w-4 text-purple-600 mx-auto mb-1" />
            <div className="font-poppins text-xs font-medium text-slate-800">{location.citiesServed}</div>
            <div className="font-poppins text-xs text-slate-500">Cities</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button 
            onClick={handleCallNow}
            className="w-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 py-3 px-4 rounded-xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </button>
          
          <Link
            href={`/locations/${location.id}`}
            className="w-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 py-3 px-4 rounded-xl font-poppins font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Details
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="text-center pt-3 border-t border-slate-200">
          <div className="flex items-center justify-center gap-4 font-poppins text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>Licensed</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="h-3 w-3" />
              <span>Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LocationsClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredLocations = useMemo(() => {
    return allStatesLocations.filter(location => {
      const matchesSearch = 
        location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.stateCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRegion = selectedRegion === 'All Regions' || location.region === selectedRegion;
      
      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-6 sm:mb-8 lg:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins text-sm font-medium mb-6 shadow-sm">
              <Globe className="h-5 w-5 mr-2" />
              Complete Nationwide Coverage
            </div>
            
            <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 mb-6 leading-tight">
              Expert Leak Detection Specialists
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Serving Every State in America
              </span>
            </h1>
            
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover certified leak detection professionals in your local area. Our nationwide network covers all 50 states plus Washington DC, 
              delivering lightning-fast emergency response and industry-leading detection technology to protect your property.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
                <div className="font-poppins text-4xl font-medium text-blue-600 mb-1">50</div>
                <div className="font-poppins text-slate-700 text-base">States Covered</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
                <div className="font-poppins text-4xl font-medium text-purple-600 mb-1">1,961</div>
                <div className="font-poppins text-slate-700 text-base">Cities Served</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
                <div className="font-poppins text-4xl font-medium text-green-600 mb-1">99.9%</div>
                <div className="font-poppins text-slate-700 text-base">Success Rate</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200">
                <div className="font-poppins text-4xl font-medium text-orange-600 mb-1">24/7</div>
                <div className="font-poppins text-slate-700 text-base">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className={`py-8 sm:py-12 lg:py-16 bg-white transform transition-all duration-1000 delay-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search by state, city, or service area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins text-lg bg-white shadow-sm"
            />
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-xl font-poppins font-medium transition-all duration-300 ${
                  selectedRegion === region
                    ? 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 shadow-sm transform scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="text-center">
            <p className="font-poppins text-slate-600 text-lg">
              Showing <span className="font-medium text-blue-600">{filteredLocations.length}</span> expert locations ready to serve you across America
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className={`py-8 sm:py-12 lg:py-20 bg-white transform transition-all duration-1000 delay-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="h-5 w-5 mr-2" />
              Premium Expert Network
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
              Connect With Your Local
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leak Detection Professionals
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Our certified technicians in every state bring advanced equipment, professional certifications, and round-the-clock emergency response capabilities directly to your doorstep.
            </p>
          </div>

          {filteredLocations.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200 shadow-sm max-w-md mx-auto">
                <Search className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="font-poppins text-xl font-medium text-slate-800 mb-2">No Locations Found</h3>
                <p className="font-poppins text-slate-600 mb-4">Try adjusting your search criteria or browse all available locations.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedRegion('All Regions');
                  }}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 py-3 rounded-xl font-poppins font-medium transition-all duration-300"
                >
                  Show All Locations
                </button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredLocations.map((location, index) => (
                <LocationCard key={location.id} location={location} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-50 rounded-3xl p-8 text-slate-700 shadow-sm relative overflow-hidden">
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center bg-white/90 border border-slate-200 rounded-full px-6 py-3 mb-6">
                <Award className="h-5 w-5 mr-2" />
                Complete Service Guarantee
              </div>
              <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl mb-4">
                Ready to Find Your Leak?
              </h3>
              <p className="font-poppins text-slate-600 mb-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                Don't let hidden leaks damage your property or drain your wallet. Our expert technicians use cutting-edge technology to locate leaks quickly and accurately, 
                saving you time, money, and stress. From residential water systems to commercial pipe rehabilitation, we have the expertise to solve any leak challenge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = 'tel:+18888759844'}
                  className="group bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="font-ibm-plex-mono font-medium">(888) 875-9844</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link 
                  href="/services"
                  className="group bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-poppins font-medium hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                >
                  <Globe className="h-5 w-5" />
                  View All Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}