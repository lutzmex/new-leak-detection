// app/services/services-client.tsx
"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Phone,
  Star,
  Clock,
  Users,
  Check,
  ArrowRight,
  CheckCircle,
  Target,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import Image from 'next/image';

// Service Interface
interface Service {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  imagePath: string;
  features: string[];
  expertsAvailable: number;
  responseTime: string;
  category: string;
  categoryId: string;
  rating: number;
  completedJobs: number;
  isPopular?: boolean;
  isEmergency?: boolean;
  slug: string;
}

// Comprehensive Services Data with Updated Paths and Human-Written Content
const comprehensiveServices: Service[] = [
  // RESIDENTIAL WATER SYSTEMS
  {
    id: "residential-water-leak-detection",
    title: "Residential Water Leak Detection",
    description: "Find water leaks in your home quickly and safely. We check pipes, fixtures, and water systems to protect your property.",
    iconPath: "/icon/residential-water-leak-detection.svg",
    imagePath: "/images/residential-water-leak-detection-services.webp",
    features: [
      "Complete house leak inspection",
      "Find hidden leaks behind walls",
      "Stop water damage before it starts",
      "Help with insurance claims"
    ],
    expertsAvailable: 25,
    responseTime: "< 2 Hours",
    category: "Residential Water Systems",
    categoryId: "residential-water-systems",
    rating: 4.9,
    completedJobs: 3456,
    isPopular: true,
    slug: "residential-water-leak-detection"
  },
  {
    id: "water-heater-leak-detection",
    title: "Water Heater Leak Detection",
    description: "Check your water heater for leaks in the tank, pipes, and valves. Keep your hot water running safely.",
    iconPath: "/icon/water-heater-leak-detection.svg",
    imagePath: "/images/water-heater-leak-detection-services.webp",
    features: [
      "Check tank for cracks and leaks",
      "Test all valves and connections",
      "Use heat cameras to find problems",
      "Make sure your system is safe"
    ],
    expertsAvailable: 18,
    responseTime: "< 1 Hour",
    category: "Residential Water Systems",
    categoryId: "residential-water-systems",
    rating: 4.8,
    completedJobs: 2134,
    slug: "water-heater-leak-detection"
  },
  {
    id: "boiler-leak-detection",
    title: "Boiler Leak Detection",
    description: "Keep your boiler running safely with professional leak checks and safety inspections.",
    iconPath: "/icon/boiler-leak-detection.svg",
    imagePath: "/images/boiler-leak-detection-services.webp",
    features: [
      "Check entire boiler system",
      "Test water pressure safely",
      "Inspect safety valves",
      "Look at your heating system"
    ],
    expertsAvailable: 12,
    responseTime: "< 2 Hours",
    category: "Residential Water Systems",
    categoryId: "residential-water-systems",
    rating: 4.7,
    completedJobs: 1567,
    slug: "boiler-leak-detection"
  },
  {
    id: "water-softener-leak-detection",
    title: "Water Softener Leak Detection",
    description: "Find leaks in your water softener system to keep your water clean and your system working right.",
    iconPath: "/icon/water-softener-leak-detection.svg",
    imagePath: "/images/water-softener-leak-detection-services.webp",
    features: [
      "Check softener tank for leaks",
      "Test brine lines for problems",
      "Look at control valves",
      "Run full system checks"
    ],
    expertsAvailable: 14,
    responseTime: "< 2 Hours",
    category: "Residential Water Systems",
    categoryId: "residential-water-systems",
    rating: 4.6,
    completedJobs: 1234,
    slug: "water-softener-leak-detection"
  },
  {
    id: "sump-pump-leak-detection",
    title: "Sump Pump Leak Detection",
    description: "Make sure your sump pump and pit are working to protect your basement from flooding.",
    iconPath: "/icon/sump-pump-leak-detection.svg",
    imagePath: "/images/sump-pump-leak-detection-services.webp",
    features: [
      "Check pump housing for cracks",
      "Test discharge lines",
      "Look at pit waterproofing",
      "Test float switch operation"
    ],
    expertsAvailable: 16,
    responseTime: "< 2 Hours",
    category: "Residential Water Systems",
    categoryId: "residential-water-systems",
    rating: 4.7,
    completedJobs: 987,
    slug: "sump-pump-leak-detection"
  },
  // COMMERCIAL & INDUSTRIAL
  {
    id: "commercial-water-leak-detection",
    title: "Commercial Water Leak Detection",
    description: "Big building leak detection that keeps your business running while we find and fix water problems.",
    iconPath: "/icon/commercial-water-leak-detection.svg",
    imagePath: "/images/commercial-water-leak-detection-services.webp",
    features: [
      "Check multiple floors at once",
      "Keep your business open",
      "Handle large water systems",
      "Work around your schedule"
    ],
    expertsAvailable: 32,
    responseTime: "< 3 Hours",
    category: "Commercial & Industrial",
    categoryId: "commercial-industrial",
    rating: 4.8,
    completedJobs: 1456,
    isPopular: true,
    slug: "commercial-water-leak-detection"
  },
  {
    id: "ejector-pump-leak-detection",
    title: "Ejector Pump Leak Detection",
    description: "Check your sewage ejector pump system to make sure waste water flows out properly.",
    iconPath: "/icon/ejector-pump-leak-detection.svg",
    imagePath: "/images/ejector-pump-leak-detection-services.webp",
    features: [
      "Look inside pump chamber",
      "Test check valves",
      "Check alarm systems",
      "Make sure there are no bad smells"
    ],
    expertsAvailable: 11,
    responseTime: "< 2 Hours",
    category: "Commercial & Industrial",
    categoryId: "commercial-industrial",
    rating: 4.6,
    completedJobs: 734,
    slug: "ejector-pump-leak-detection"
  },
  // UNDERGROUND & INFRASTRUCTURE
  {
    id: "underground-leak-detection",
    title: "Underground Leak Detection",
    description: "Find underground leaks without digging up your yard using special equipment and technology.",
    iconPath: "/icon/underground-leak-detection.svg",
    imagePath: "/images/underground-leak-detection-services.webp",
    features: [
      "Use ground radar to see pipes",
      "Listen for leaks underground",
      "No digging needed",
      "Show you exactly where leaks are"
    ],
    expertsAvailable: 28,
    responseTime: "< 3 Hours",
    category: "Underground & Infrastructure",
    categoryId: "underground-infrastructure",
    rating: 4.9,
    completedJobs: 2567,
    isPopular: true,
    slug: "underground-leak-detection"
  },
  {
    id: "water-main-leak-detection",
    title: "Water Main Leak Detection",
    description: "Find problems with your main water line and work with the city to fix pressure issues.",
    iconPath: "/icon/water-main-leak-detection.svg",
    imagePath: "/images/water-main-leak-detection-services.webp",
    features: [
      "Test main line pressure",
      "Check how much water flows",
      "Work with city officials",
      "Find emergency shut-off valves"
    ],
    expertsAvailable: 22,
    responseTime: "< 2 Hours",
    category: "Underground & Infrastructure",
    categoryId: "underground-infrastructure",
    rating: 4.8,
    completedJobs: 1890,
    slug: "water-main-leak-detection"
  },
  {
    id: "water-line-leak-detection",
    title: "Water Line Leak Detection",
    description: "Check all your water lines from the street to your house to make sure water flows properly.",
    iconPath: "/icon/water-line-leak-detection.svg",
    imagePath: "/images/water-line-leak-detection-services.webp",
    features: [
      "Check service lines to your home",
      "Test water distribution lines",
      "Look at connection points",
      "Check multiple areas at once"
    ],
    expertsAvailable: 24,
    responseTime: "< 2 Hours",
    category: "Underground & Infrastructure",
    categoryId: "underground-infrastructure",
    rating: 4.7,
    completedJobs: 2134,
    slug: "water-line-leak-detection"
  },
  {
    id: "supply-line-leak-detection",
    title: "Supply Line Leak Detection",
    description: "Find leaks in water supply lines from your meter to your building to save water and money.",
    iconPath: "/icon/supply-line-leak-detection.svg",
    imagePath: "/images/supply-line-leak-detection-services.webp",
    features: [
      "Check from meter to house",
      "Test service connections",
      "Find pressure drops",
      "Work with utility companies"
    ],
    expertsAvailable: 19,
    responseTime: "< 2 Hours",
    category: "Underground & Infrastructure",
    categoryId: "underground-infrastructure",
    rating: 4.6,
    completedJobs: 1678,
    slug: "supply-line-leak-detection"
  },
  {
    id: "drain-line-leak-detection",
    title: "Drain Line Leak Detection",
    description: "Make sure your drain lines work properly and water flows away from your property.",
    iconPath: "/icon/drain-line-leak-detection.svg",
    imagePath: "/images/drain-line-leak-detection-services.webp",
    features: [
      "Check drainage systems",
      "Test pipe strength",
      "Find blockages",
      "Look for tree root problems"
    ],
    expertsAvailable: 17,
    responseTime: "< 2 Hours",
    category: "Underground & Infrastructure",
    categoryId: "underground-infrastructure",
    rating: 4.7,
    completedJobs: 1456,
    slug: "drain-line-leak-detection"
  },
  {
    id: "sewer-line-leak-detection",
    title: "Sewer Line Leak Detection",
    description: "Check your sewer lines for leaks and blockages to keep waste flowing away safely.",
    iconPath: "/icon/sewer-line-leak-detection.svg",
    imagePath: "/images/sewer-line-leak-detection-services.webp",
    features: [
      "Look inside sewer lines",
      "Find joint leaks",
      "Check for tree roots",
      "Test how well system flows"
    ],
    expertsAvailable: 21,
    responseTime: "< 3 Hours",
    category: "Underground & Infrastructure",
    categoryId: "underground-infrastructure",
    rating: 4.8,
    completedJobs: 1234,
    slug: "sewer-line-leak-detection"
  },
  {
    id: "pipe-leak-detection",
    title: "Pipe Leak Detection",
    description: "Find leaks in any type of pipe in your home or business, from old to new materials.",
    iconPath: "/icon/pipe-leak-detection.svg",
    imagePath: "/images/pipe-leak-detection-services.webp",
    features: [
      "Work with all pipe types",
      "Check joints and fittings",
      "Look for rust and damage",
      "Test water pressure"
    ],
    expertsAvailable: 30,
    responseTime: "< 2 Hours",
    category: "Underground & Infrastructure",
    categoryId: "underground-infrastructure",
    rating: 4.6,
    completedJobs: 2890,
    slug: "pipe-leak-detection"
  },
  {
    id: "subsurface-leak-detection",
    title: "Subsurface Leak Detection",
    description: "Find leaks deep underground without disturbing your landscape or property.",
    iconPath: "/icon/subsurface-leak-detection.svg",
    imagePath: "/images/subsurface-leak-detection-services.webp",
    features: [
      "Scan deep underground",
      "Check soil moisture levels",
      "Use ground radar technology",
      "Don't damage your yard"
    ],
    expertsAvailable: 15,
    responseTime: "< 3 Hours",
    category: "Underground & Infrastructure",
    categoryId: "underground-infrastructure",
    rating: 4.8,
    completedJobs: 967,
    slug: "subsurface-leak-detection"
  },
  // FOUNDATION & STRUCTURAL
  {
    id: "slab-leak-detection",
    title: "Slab Leak Detection",
    description: "Find leaks under concrete slabs and foundations without breaking up your floors.",
    iconPath: "/icon/slab-leak-detection.svg",
    imagePath: "/images/slab-leak-detection-services.webp",
    features: [
      "Find leaks under concrete",
      "Use gentle methods",
      "Protect your foundation",
      "Pinpoint exact leak locations"
    ],
    expertsAvailable: 26,
    responseTime: "< 2 Hours",
    category: "Foundation & Structural",
    categoryId: "foundation-structural",
    rating: 4.9,
    completedJobs: 1890,
    isPopular: true,
    slug: "slab-leak-detection"
  },
  {
    id: "foundation-leak-detection",
    title: "Foundation Leak Detection",
    description: "Check your foundation for leaks and water problems to keep your home strong and dry.",
    iconPath: "/icon/foundation-leak-detection.svg",
    imagePath: "/images/foundation-leak-detection-services.webp",
    features: [
      "Check foundation walls",
      "Find basement leaks",
      "Make sure structure is sound",
      "Look for water getting in"
    ],
    expertsAvailable: 20,
    responseTime: "< 3 Hours",
    category: "Foundation & Structural",
    categoryId: "foundation-structural",
    rating: 4.7,
    completedJobs: 1456,
    slug: "foundation-leak-detection"
  },
  {
    id: "wall-and-ceiling-leak-detection",
    title: "Wall and Ceiling Leak Detection",
    description: "Find hidden leaks in walls and ceilings using heat cameras before they cause big damage.",
    iconPath: "/icon/wall-and-ceiling-leak-detection.svg",
    imagePath: "/images/wall-and-ceiling-leak-detection-services.webp",
    features: [
      "Use heat cameras to see leaks",
      "Find moisture in walls",
      "Locate hidden pipes",
      "Check how much damage"
    ],
    expertsAvailable: 23,
    responseTime: "< 2 Hours",
    category: "Foundation & Structural",
    categoryId: "foundation-structural",
    rating: 4.8,
    completedJobs: 2134,
    slug: "wall-and-ceiling-leak-detection"
  },
  {
    id: "roof-leak-detection",
    title: "Roof Leak Detection",
    description: "Find roof leaks and water problems before they damage your home's interior.",
    iconPath: "/icon/roof-leak-detection.svg",
    imagePath: "/images/roof-leak-detection-services.webp",
    features: [
      "Check roof covering",
      "Test flashing around edges",
      "Look at drainage systems",
      "Check for storm damage"
    ],
    expertsAvailable: 18,
    responseTime: "< 2 Hours",
    category: "Foundation & Structural",
    categoryId: "foundation-structural",
    rating: 4.6,
    completedJobs: 1678,
    slug: "roof-leak-detection"
  },
  // PLUMBING FIXTURES
  {
    id: "toilet-leak-detection",
    title: "Toilet Leak Detection",
    description: "Fix toilet leaks in the tank, bowl, and supply lines to stop water waste and damage.",
    iconPath: "/icon/toilet-leak-detection.svg",
    imagePath: "/images/toilet-leak-detection-services.webp",
    features: [
      "Check all tank parts",
      "Test wax ring under toilet",
      "Look at supply lines",
      "Fix flush problems"
    ],
    expertsAvailable: 35,
    responseTime: "< 1 Hour",
    category: "Plumbing Fixtures",
    categoryId: "plumbing-fixtures",
    rating: 4.7,
    completedJobs: 3456,
    slug: "toilet-leak-detection"
  },
  {
    id: "shower-leak-detection",
    title: "Shower Leak Detection",
    description: "Find shower leaks in tiles, valves, and drains to keep your bathroom dry and safe.",
    iconPath: "/icon/shower-leak-detection.svg",
    imagePath: "/images/shower-leak-detection-services.webp",
    features: [
      "Test shower pan for leaks",
      "Check tiles and grout",
      "Find valve leaks",
      "Make sure drains work"
    ],
    expertsAvailable: 28,
    responseTime: "< 1 Hour",
    category: "Plumbing Fixtures",
    categoryId: "plumbing-fixtures",
    rating: 4.6,
    completedJobs: 2567,
    slug: "shower-leak-detection"
  },
  {
    id: "bathtub-leak-detection",
    title: "Bathtub Leak Detection",
    description: "Check your bathtub and plumbing for leaks to prevent water damage to floors below.",
    iconPath: "/icon/bathtub-leak-detection.svg",
    imagePath: "/images/bathtub-leak-detection-services.webp",
    features: [
      "Check tub surround",
      "Test drain seals",
      "Find overflow leaks",
      "Look at faucet connections"
    ],
    expertsAvailable: 22,
    responseTime: "< 1 Hour",
    category: "Plumbing Fixtures",
    categoryId: "plumbing-fixtures",
    rating: 4.5,
    completedJobs: 1890,
    slug: "bathtub-leak-detection"
  },
  {
    id: "sink-leak-detection",
    title: "Sink Leak Detection",
    description: "Find leaks in kitchen and bathroom sinks to stop water damage and waste.",
    iconPath: "/icon/sink-leak-detection.svg",
    imagePath: "/images/sink-leak-detection-services.webp",
    features: [
      "Check under sink",
      "Test supply lines",
      "Look at drain connections",
      "Check faucet base"
    ],
    expertsAvailable: 40,
    responseTime: "< 1 Hour",
    category: "Plumbing Fixtures",
    categoryId: "plumbing-fixtures",
    rating: 4.6,
    completedJobs: 4123,
    slug: "sink-leak-detection"
  },
  {
    id: "faucet-leak-detection",
    title: "Faucet Leak Detection",
    description: "Fix faucet leaks and drips to save water and stop annoying sounds.",
    iconPath: "/icon/faucet-leak-detection.svg",
    imagePath: "/images/faucet-leak-detection-services.webp",
    features: [
      "Check inside parts",
      "Look at cartridge",
      "Test seals and gaskets",
      "Check water pressure"
    ],
    expertsAvailable: 42,
    responseTime: "< 1 Hour",
    category: "Plumbing Fixtures",
    categoryId: "plumbing-fixtures",
    rating: 4.5,
    completedJobs: 5678,
    slug: "faucet-leak-detection"
  },
  {
    id: "garbage-disposal-leak-detection",
    title: "Garbage Disposal Leak Detection",
    description: "Find and fix garbage disposal leaks to keep your kitchen sink area dry.",
    iconPath: "/icon/garbage-disposal-leak-detection.svg",
    imagePath: "/images/garbage-disposal-leak-detection-services.webp",
    features: [
      "Check disposal housing",
      "Test connection points",
      "Look at mounting",
      "Check drain lines"
    ],
    expertsAvailable: 19,
    responseTime: "< 1 Hour",
    category: "Plumbing Fixtures",
    categoryId: "plumbing-fixtures",
    rating: 4.4,
    completedJobs: 1234,
    slug: "garbage-disposal-leak-detection"
  },
  {
    id: "hose-bib-leak-detection",
    title: "Hose Bib Leak Detection",
    description: "Fix outdoor faucet and spigot leaks to save water and prevent freeze damage.",
    iconPath: "/icon/hose-bib-leak-detection.svg",
    imagePath: "/images/hose-bib-leak-detection-services.webp",
    features: [
      "Check outdoor faucets",
      "Test freeze-proof valves",
      "Look at supply lines",
      "Make sure weather protection works"
    ],
    expertsAvailable: 25,
    responseTime: "< 1 Hour",
    category: "Plumbing Fixtures",
    categoryId: "plumbing-fixtures",
    rating: 4.6,
    completedJobs: 1567,
    slug: "hose-bib-leak-detection"
  },
  // OUTDOOR & IRRIGATION
  {
    id: "sprinkler-system-leak-detection",
    title: "Sprinkler System Leak Detection",
    description: "Keep your lawn watering system working right and save water by finding leaks quickly.",
    iconPath: "/icon/sprinkler-system-leak-detection.svg",
    imagePath: "/images/sprinkler-system-leak-detection-services.webp",
    features: [
      "Test each watering zone",
      "Check sprinkler heads",
      "Test main water lines",
      "Fix timer and controller issues"
    ],
    expertsAvailable: 24,
    responseTime: "< 2 Hours",
    category: "Outdoor & Irrigation",
    categoryId: "outdoor-irrigation",
    rating: 4.7,
    completedJobs: 1890,
    slug: "sprinkler-system-leak-detection"
  },
  {
    id: "drip-irrigation-leak-detection",
    title: "Drip Irrigation Leak Detection",
    description: "Keep your drip watering system working well to save water and keep plants healthy.",
    iconPath: "/icon/drip-irrigation-leak-detection.svg",
    imagePath: "/images/drip-irrigation-leak-detection-services.webp",
    features: [
      "Check water drippers",
      "Look for tube leaks",
      "Test pressure controls",
      "Clean filters"
    ],
    expertsAvailable: 16,
    responseTime: "< 2 Hours",
    category: "Outdoor & Irrigation",
    categoryId: "outdoor-irrigation",
    rating: 4.6,
    completedJobs: 1234,
    slug: "drip-irrigation-leak-detection"
  },
  {
    id: "swimming-pool-leak-detection",
    title: "Swimming Pool Leak Detection",
    description: "Find pool leaks quickly to save water and keep your pool ready for swimming.",
    iconPath: "/icon/swimming-pool-leak-detection.svg",
    imagePath: "/images/swimming-pool-leak-detection-services.webp",
    features: [
      "Find underwater leaks",
      "Test skimmers and returns",
      "Check pool equipment",
      "Look at pool liner"
    ],
    expertsAvailable: 18,
    responseTime: "< 3 Hours",
    category: "Outdoor & Irrigation",
    categoryId: "outdoor-irrigation",
    rating: 4.8,
    completedJobs: 967,
    isPopular: true,
    slug: "swimming-pool-leak-detection"
  },
  {
    id: "spa-and-hot-tub-leak-detection",
    title: "Spa and Hot Tub Leak Detection",
    description: "Keep your spa and hot tub working perfectly by finding and fixing leaks fast.",
    iconPath: "/icon/spa-and-hot-tub-leak-detection.svg",
    imagePath: "/images/spa-and-hot-tub-leak-detection-services.webp",
    features: [
      "Check jet systems",
      "Find heater leaks",
      "Test pump seals",
      "Look at control systems"
    ],
    expertsAvailable: 14,
    responseTime: "< 2 Hours",
    category: "Outdoor & Irrigation",
    categoryId: "outdoor-irrigation",
    rating: 4.7,
    completedJobs: 734,
    slug: "spa-and-hot-tub-leak-detection"
  },
  // SPECIALTY SYSTEMS
  {
    id: "backflow-preventer-leak-detection",
    title: "Backflow Preventer Leak Detection",
    description: "Make sure your backflow preventer works to keep your drinking water clean and safe.",
    iconPath: "/icon/backflow-preventer-leak-detection.svg",
    imagePath: "/images/backflow-preventer-leak-detection-services.webp",
    features: [
      "Test valve assembly",
      "Check check valves",
      "Look at relief valves",
      "Make sure it meets codes"
    ],
    expertsAvailable: 12,
    responseTime: "< 2 Hours",
    category: "Specialty Systems",
    categoryId: "specialty-systems",
    rating: 4.7,
    completedJobs: 567,
    slug: "backflow-preventer-leak-detection"
  },
  {
    id: "septic-system-leak-detection",
    title: "Septic System Leak Detection",
    description: "Check your septic system for leaks to protect your property and the environment.",
    iconPath: "/icon/septic-system-leak-detection.svg",
    imagePath: "/images/septic-system-leak-detection-services.webp",
    features: [
      "Check septic tank",
      "Look at distribution box",
      "Test drain field",
      "Check pump chamber"
    ],
    expertsAvailable: 8,
    responseTime: "< 3 Hours",
    category: "Specialty Systems",
    categoryId: "specialty-systems",
    rating: 4.6,
    completedJobs: 445,
    slug: "septic-system-leak-detection"
  },
  // GAS & SAFETY
  {
    id: "gas-line-leak-detection",
    title: "Gas Line Leak Detection",
    description: "Stay safe with fast gas leak detection and emergency response to protect your family.",
    iconPath: "/icon/gas-line-leak-detection.svg",
    imagePath: "/images/gas-line-leak-detection-services.webp",
    features: [
      "Use electronic gas detectors",
      "Test gas pressure safely",
      "Turn off gas if needed",
      "Emergency response team"
    ],
    expertsAvailable: 20,
    responseTime: "< 30 Minutes",
    category: "Gas & Safety",
    categoryId: "gas-safety",
    rating: 4.9,
    completedJobs: 1234,
    isEmergency: true,
    slug: "gas-line-leak-detection"
  },
  {
    id: "sewer-gas-leak-detection",
    title: "Sewer Gas Leak Detection",
    description: "Find and fix sewer gas leaks to get rid of bad smells and keep your home healthy.",
    iconPath: "/icon/sewer-gas-leak-detection.svg",
    imagePath: "/images/sewer-gas-leak-detection-services.webp",
    features: [
      "Test gas levels",
      "Check vent systems",
      "Look at drain traps",
      "Find where smells come from"
    ],
    expertsAvailable: 15,
    responseTime: "< 1 Hour",
    category: "Gas & Safety",
    categoryId: "gas-safety",
    rating: 4.7,
    completedJobs: 967,
    slug: "sewer-gas-leak-detection"
  },
  {
    id: "carbon-monoxide-leak-detection",
    title: "Carbon Monoxide Leak Detection",
    description: "Protect your family with fast carbon monoxide detection and safety testing.",
    iconPath: "/icon/carbon-monoxide-leak-detection.svg",
    imagePath: "/images/carbon-monoxide-leak-detection-services.webp",
    features: [
      "Check CO levels",
      "Test all appliances",
      "Look at ventilation",
      "Help with emergency evacuation"
    ],
    expertsAvailable: 18,
    responseTime: "< 30 Minutes",
    category: "Gas & Safety",
    categoryId: "gas-safety",
    rating: 4.9,
    completedJobs: 678,
    isEmergency: true,
    slug: "carbon-monoxide-leak-detection"
  },
  // DETECTION TECHNOLOGIES
  {
    id: "pressure-testing",
    title: "Pressure Testing",
    description: "Test your water system pressure to find leaks and make sure everything works safely.",
    iconPath: "/icon/pressure-testing.svg",
    imagePath: "/images/pressure-testing-services.webp",
    features: [
      "Check system pressure",
      "Prove there are leaks",
      "Find pressure drops",
      "Get official certificates"
    ],
    expertsAvailable: 22,
    responseTime: "< 2 Hours",
    category: "Detection Technologies",
    categoryId: "detection-technologies",
    rating: 4.8,
    completedJobs: 1456,
    slug: "pressure-testing"
  },
  {
    id: "acoustic-leak-detection",
    title: "Acoustic Leak Detection",
    description: "Listen for leaks with special equipment to find exactly where water is escaping.",
    iconPath: "/icon/acoustic-leak-detection.svg",
    imagePath: "/images/acoustic-leak-detection-services.webp",
    features: [
      "Listen for leak sounds",
      "Use ground microphones",
      "Compare sounds from different spots",
      "Filter out background noise"
    ],
    expertsAvailable: 18,
    responseTime: "< 2 Hours",
    category: "Detection Technologies",
    categoryId: "detection-technologies",
    rating: 4.7,
    completedJobs: 1234,
    slug: "acoustic-leak-detection"
  },
  {
    id: "camera-inspection-leak-detection",
    title: "Camera Inspection Leak Detection",
    description: "See inside your pipes with high-quality cameras to find problems without digging.",
    iconPath: "/icon/camera-inspection-leak-detection.svg",
    imagePath: "/images/camera-inspection-leak-detection-services.webp",
    features: [
      "High-definition video",
      "Watch live as we inspect",
      "Record everything we find",
      "360-degree camera views"
    ],
    expertsAvailable: 25,
    responseTime: "< 2 Hours",
    category: "Detection Technologies",
    categoryId: "detection-technologies",
    rating: 4.8,
    completedJobs: 1890,
    slug: "camera-inspection-leak-detection"
  },
  {
    id: "infrared-leak-detection",
    title: "Infrared Leak Detection",
    description: "Use heat cameras to see leaks through walls and floors without any damage.",
    iconPath: "/icon/infrared-leak-detection.svg",
    imagePath: "/images/infrared-leak-detection-services.webp",
    features: [
      "Heat camera scanning",
      "Find temperature differences",
      "No damage to your home",
      "See heat patterns in real time"
    ],
    expertsAvailable: 20,
    responseTime: "< 2 Hours",
    category: "Detection Technologies",
    categoryId: "detection-technologies",
    rating: 4.9,
    completedJobs: 1567,
    isPopular: true,
    slug: "infrared-leak-detection"
  },
  {
    id: "thermal-imaging-leak-detection",
    title: "Thermal Imaging Leak Detection",
    description: "Find leaks with professional heat cameras that show exactly where water problems are.",
    iconPath: "/icon/thermal-imaging-leak-detection.svg",
    imagePath: "/images/thermal-imaging-leak-detection-services.webp",
    features: [
      "Professional heat cameras",
      "Read heat signatures",
      "Find moisture problems",
      "See where energy is lost"
    ],
    expertsAvailable: 24,
    responseTime: "< 2 Hours",
    category: "Detection Technologies",
    categoryId: "detection-technologies",
    rating: 4.8,
    completedJobs: 1345,
    slug: "thermal-imaging-leak-detection"
  },
  // EMERGENCY & ADVANCED
  {
    id: "emergency-leak-detection",
    title: "24/7 Emergency Leak Detection",
    description: "Get help right away when you have a serious leak emergency, day or night.",
    iconPath: "/icon/emergency-leak-detection.svg",
    imagePath: "/images/emergency-leak-detection-services.webp",
    features: [
      "Available 24/7",
      "Emergency response team",
      "Stop leaks immediately",
      "Handle crisis situations"
    ],
    expertsAvailable: 45,
    responseTime: "< 30 Minutes",
    category: "Emergency & Advanced",
    categoryId: "emergency-advanced",
    rating: 4.9,
    completedJobs: 2345,
    isEmergency: true,
    isPopular: true,
    slug: "emergency-leak-detection"
  },
  {
    id: "burst-pipe-detection",
    title: "Burst Pipe Detection",
    description: "Fast help when pipes burst to stop water damage and get your water working again.",
    iconPath: "/icon/burst-pipe-detection.svg",
    imagePath: "/images/burst-pipe-detection-services.webp",
    features: [
      "Very fast response",
      "Stop water damage",
      "Turn off water quickly",
      "Make temporary fixes"
    ],
    expertsAvailable: 35,
    responseTime: "< 30 Minutes",
    category: "Emergency & Advanced",
    categoryId: "emergency-advanced",
    rating: 4.8,
    completedJobs: 1678,
    isEmergency: true,
    slug: "burst-pipe-detection"
  },
  {
    id: "installation-of-smart-leak-sensors",
    title: "Installation of Smart Leak Sensors",
    description: "Install smart sensors that watch for leaks and send alerts to your phone.",
    iconPath: "/icon/installation-of-smart-leak-sensors.svg",
    imagePath: "/images/installation-of-smart-leak-sensors-services.webp",
    features: [
      "WiFi-connected sensors",
      "Mobile phone alerts",
      "Get warnings right away",
      "Watch multiple areas"
    ],
    expertsAvailable: 16,
    responseTime: "< 4 Hours",
    category: "Emergency & Advanced",
    categoryId: "emergency-advanced",
    rating: 4.7,
    completedJobs: 967,
    slug: "installation-of-smart-leak-sensors"
  },
  {
    id: "monitoring-and-maintenance-of-leak-detection-systems",
    title: "Monitoring and Maintenance of Leak Detection Systems",
    description: "Keep your leak detection systems working perfectly with regular check-ups and updates.",
    iconPath: "/icon/monitoring-and-maintenance-of-leak-detection-systems.svg",
    imagePath: "/images/monitoring-and-maintenance-of-leak-detection-systems-services.webp",
    features: [
      "Watch system health",
      "Prevent problems",
      "Update software",
      "Make systems work better"
    ],
    expertsAvailable: 12,
    responseTime: "< 24 Hours",
    category: "Emergency & Advanced",
    categoryId: "emergency-advanced",
    rating: 4.6,
    completedJobs: 734,
    slug: "monitoring-and-maintenance-of-leak-detection-systems"
  }
];

// Service Categories
const serviceCategories = [
  { id: "all", name: "All Services", count: comprehensiveServices.length },
  { id: "residential-water-systems", name: "Residential Water", count: comprehensiveServices.filter(s => s.categoryId === "residential-water-systems").length },
  { id: "commercial-industrial", name: "Commercial & Industrial", count: comprehensiveServices.filter(s => s.categoryId === "commercial-industrial").length },
  { id: "underground-infrastructure", name: "Underground & Infrastructure", count: comprehensiveServices.filter(s => s.categoryId === "underground-infrastructure").length },
  { id: "foundation-structural", name: "Foundation & Structural", count: comprehensiveServices.filter(s => s.categoryId === "foundation-structural").length },
  { id: "plumbing-fixtures", name: "Plumbing Fixtures", count: comprehensiveServices.filter(s => s.categoryId === "plumbing-fixtures").length },
  { id: "outdoor-irrigation", name: "Outdoor & Irrigation", count: comprehensiveServices.filter(s => s.categoryId === "outdoor-irrigation").length },
  { id: "specialty-systems", name: "Specialty Systems", count: comprehensiveServices.filter(s => s.categoryId === "specialty-systems").length },
  { id: "gas-safety", name: "Gas & Safety", count: comprehensiveServices.filter(s => s.categoryId === "gas-safety").length },
  { id: "detection-technologies", name: "Detection Technologies", count: comprehensiveServices.filter(s => s.categoryId === "detection-technologies").length },
  { id: "emergency-advanced", name: "Emergency & Advanced", count: comprehensiveServices.filter(s => s.categoryId === "emergency-advanced").length }
];

// Service Card Component
interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const handleCallNow = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    window.location.href = 'tel:+1 (888) 875-9844';
  };

  const handleCardClick = () => {
    window.location.href = `/services/${service.slug}`;
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300 transform hover:-translate-y-2 cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Service Image - Increased height and adjusted positioning */}
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={service.imagePath}
          alt={service.title}
          width={400}
          height={350}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {service.isPopular && (
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full font-poppins font-medium text-xs flex items-center gap-1 shadow-sm">
              <Star className="h-3 w-3 fill-current" />
              Popular
            </div>
          )}
          {service.isEmergency && (
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full font-poppins font-medium text-xs flex items-center gap-1 shadow-sm">
              <Clock className="h-3 w-3" />
              24/7
            </div>
          )}
        </div>

        {/* Service Icon with light background */}
        <div className="absolute bottom-3 right-3 transform group-hover:scale-110 transition-transform duration-300">
          <div className="bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-sm border border-slate-200">
            <Image 
              src={service.iconPath}
              alt={`${service.title} icon`}
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg px-2 py-1 text-slate-700">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="font-poppins font-medium text-xs">{service.rating}</span>
          </div>
        </div>
      </div>

      {/* Card Content - Adjusted spacing */}
      <div className="p-4 space-y-3">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full font-poppins font-medium text-xs">
              {service.category}
            </span>
            <div className="flex items-center gap-1 text-green-600">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-poppins font-medium text-xs">Available</span>
            </div>
          </div>
          
          <h3 className="font-poppins font-medium text-lg text-slate-700 mb-2 group-hover:text-slate-800 transition-colors leading-tight">
            {service.title}
          </h3>
          
          <p className="font-poppins text-sm text-slate-600 leading-relaxed line-clamp-2">
            {service.description}
          </p>
        </div>

        {/* Stats with subtle colors */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-50 rounded-xl p-2.5 text-center group-hover:bg-blue-50 transition-colors">
            <Clock className="h-4 w-4 text-blue-600 mx-auto mb-1" />
            <div className="font-poppins font-medium text-xs text-slate-800">{service.responseTime}</div>
            <div className="font-poppins text-xs text-slate-500">Response</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-2.5 text-center group-hover:bg-green-50 transition-colors">
            <Users className="h-4 w-4 text-green-600 mx-auto mb-1" />
            <div className="font-poppins font-medium text-xs text-slate-800">{service.expertsAvailable}</div>
            <div className="font-poppins text-xs text-slate-500">Experts</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-2.5 text-center group-hover:bg-purple-50 transition-colors">
            <CheckCircle className="h-4 w-4 text-purple-600 mx-auto mb-1" />
            <div className="font-poppins font-medium text-xs text-slate-800">{service.completedJobs.toLocaleString()}</div>
            <div className="font-poppins text-xs text-slate-500">Jobs Done</div>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-poppins font-medium text-sm text-slate-800 mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-600" />
            Key Features:
          </h4>
          <ul className="space-y-1">
            {service.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-center font-poppins text-xs text-slate-600">
                <Check className="h-2.5 w-2.5 text-green-500 mr-2 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="font-poppins font-medium text-xs text-slate-600 mt-1">
            +{service.features.length - 2} more features
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <button 
            onClick={handleCallNow}
            className="w-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 py-2.5 px-4 rounded-xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </button>
          
          <div className="w-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 py-2 px-4 rounded-xl font-poppins font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm">
            View Details
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Services Page Component
export default function ServicesClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredServices = useMemo(() => {
    return comprehensiveServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.categoryId === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-8 shadow-sm">
              <Target className="h-5 w-5 mr-2" />
              Complete Service Portfolio
            </div>
            
            <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-900 leading-tight mb-6">
              Professional Leak Detection
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services & Solutions
              </span>
            </h1>
            
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-10 max-w-3xl mx-auto">
              Complete leak detection services with 44 different solutions. From home water systems 
              to business emergency help - we find all leaks fast and fix them right.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-slate-200">
                <div className="font-poppins font-medium text-4xl lg:text-5xl text-blue-600 mb-1">44</div>
                <div className="font-poppins text-sm text-slate-700">Services Available</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-slate-200">
                <div className="font-poppins font-medium text-4xl lg:text-5xl text-purple-600 mb-1">850+</div>
                <div className="font-poppins text-sm text-slate-700">Expert Technicians</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-slate-200">
                <div className="font-poppins font-medium text-4xl lg:text-5xl text-green-600 mb-1">99.9%</div>
                <div className="font-poppins text-sm text-slate-700">Success Rate</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-slate-200">
                <div className="font-poppins font-medium text-4xl lg:text-5xl text-orange-600 mb-1">24/7</div>
                <div className="font-poppins text-sm text-slate-700">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className={`py-12 bg-slate-50 transform transition-all duration-1000 delay-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search leak detection services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins text-base lg:text-lg bg-white shadow-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-poppins font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 shadow-sm transform scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`py-20 transform transition-all duration-1000 delay-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="container mx-auto px-4 relative z-10">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-slate-200 shadow-sm max-w-md mx-auto">
                <Search className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="font-poppins font-medium text-xl text-slate-800 mb-2">No Services Found</h3>
                <p className="font-poppins text-slate-600">Try different search words or look at all services.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-6 py-2 rounded-xl font-poppins font-medium transition-all duration-300"
                >
                  Show All Services
                </button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl text-slate-800 mb-4">
              Need Expert Leak Detection?
            </h2>
            <p className="font-poppins text-base sm:text-lg text-slate-600 mb-8">
              Our trained experts are ready to help with any leak problem you have.
            </p>
            <button 
              onClick={() => window.location.href = 'tel:+1 (888) 875-9844'}
              className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2 mx-auto"
            >
              <PhoneCall className="h-5 w-5" />
              <span className="font-ibm-plex-mono font-medium">Call +1 (888) 875-9844</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}