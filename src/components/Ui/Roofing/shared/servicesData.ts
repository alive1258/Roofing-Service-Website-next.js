import {
  Home,
  Wrench,
  RefreshCw,
  Siren,
  CloudLightning,
  Search,
  Sparkles,
  Building2,
  Droplets,
  LucideIcon,
} from "lucide-react";

export interface RoofingService {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  description: string;
  image: string;
  priceFrom: number;
  priceUnit: string;
  features: string[];
  idealFor: string;
  featured?: boolean;
}

export const SERVICES: RoofingService[] = [
  {
    slug: "roof-installation",
    title: "Roof Installation",
    icon: Home,
    shortDescription: "Professional installation using quality roofing materials and proven techniques.",
    description:
      "Whether you're building new or need a full roof system on an existing structure, our crews install roofing the right way the first time — proper decking prep, underlayment, flashing, and ventilation, not just shingles nailed down fast.",
    image: "/images/roofing/service-installation.jpg",
    priceFrom: 4500,
    priceUnit: "per roof",
    features: ["Manufacturer-certified installation", "Proper decking & underlayment prep", "Ventilation & flashing done right", "Workmanship warranty included"],
    idealFor: "New construction & full roof systems",
    featured: true,
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    icon: Wrench,
    shortDescription: "Fix leaks, damaged shingles, flashing, and other roofing problems fast.",
    description:
      "Small roofing problems don't stay small for long. We diagnose the actual source of a leak or damage — not just the symptom — and repair it so it stays fixed, with clear photos and an honest explanation of what we found.",
    image: "/images/roofing/service-repair.jpg",
    priceFrom: 350,
    priceUnit: "per repair",
    features: ["Same-week scheduling", "Leak source diagnosis", "Shingle & flashing repair", "Photo documentation included"],
    idealFor: "Isolated leaks & minor damage",
    featured: true,
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    icon: RefreshCw,
    shortDescription: "Replace aging or severely damaged roofs with durable new systems.",
    description:
      "When a roof is beyond repair, a full replacement is the long-term fix. We handle tear-off, disposal, decking repairs, and a complete reinstall — most residential replacements are finished in 1-3 days.",
    image: "/images/roofing/service-replacement.jpg",
    priceFrom: 7500,
    priceUnit: "per roof",
    features: ["Full tear-off & haul-away", "Decking inspection & repair", "Premium shingle, metal, or tile options", "Completed in 1-3 days"],
    idealFor: "Aging roofs & extensive damage",
    featured: true,
  },
  {
    slug: "storm-damage-repair",
    title: "Storm Damage Repair",
    icon: CloudLightning,
    shortDescription: "Fast inspection and repair after wind, hail, rain, or storm damage.",
    description:
      "After a storm, fast action prevents a small amount of damage from turning into a much bigger (and more expensive) problem. We offer priority inspections after severe weather and can help document damage for insurance claims.",
    image: "/images/roofing/service-storm.jpg",
    priceFrom: 0,
    priceUnit: "free inspection",
    features: ["Priority post-storm scheduling", "Insurance claim documentation", "Emergency tarping available", "Wind & hail damage assessment"],
    idealFor: "Wind, hail & storm damage",
    featured: true,
  },
  {
    slug: "roof-maintenance",
    title: "Roof Maintenance",
    icon: Sparkles,
    shortDescription: "Prevent expensive repairs with regular inspections and maintenance.",
    description:
      "Routine maintenance is the cheapest way to extend the life of a roof. We clear debris, reseal flashing and penetrations, check ventilation, and catch small issues before they become leaks.",
    image: "/images/roofing/service-maintenance.jpg",
    priceFrom: 250,
    priceUnit: "per visit",
    features: ["Annual or bi-annual plans available", "Flashing & sealant touch-ups", "Debris & gutter clearing", "Written condition report"],
    idealFor: "Homeowners wanting to avoid surprises",
    featured: true,
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    icon: Building2,
    shortDescription: "Reliable roofing solutions designed for commercial and industrial properties.",
    description:
      "Flat and low-slope commercial roofs need a different approach than residential shingles. We install and maintain TPO, EPDM, and coated flat roof systems built to minimize downtime for your business.",
    image: "/images/roofing/service-commercial.jpg",
    priceFrom: 6,
    priceUnit: "per sq. ft.",
    features: ["TPO, EPDM & flat roof systems", "Scheduled around business hours", "Preventive maintenance programs", "Roof coatings to extend lifespan"],
    idealFor: "Retail, warehouse & office buildings",
    featured: true,
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspection",
    icon: Search,
    shortDescription: "Thorough inspections that catch problems before they spread.",
    description:
      "A professional inspection covers shingles, flashing, gutters, ventilation, structural condition, and signs of water damage — giving you a clear, written picture of your roof's condition before you buy, sell, or renew insurance.",
    image: "/images/roofing/inspection.jpg",
    priceFrom: 0,
    priceUnit: "free with estimate",
    features: ["Full shingle & flashing check", "Ventilation & attic assessment", "Water damage evaluation", "Written report with photos"],
    idealFor: "Pre-purchase, insurance & peace of mind",
  },
  {
    slug: "emergency-roofing",
    title: "Emergency Roofing",
    icon: Siren,
    shortDescription: "Rapid response for urgent roofing failures, day or night.",
    description:
      "Active leaks, blown-off sections, and storm breaches can't wait for a normal appointment slot. Our emergency team stabilizes the situation with tarping and temporary repairs, then schedules the permanent fix.",
    image: "/images/roofing/emergency.jpg",
    priceFrom: 0,
    priceUnit: "call for response",
    features: ["24/7 phone response", "Emergency tarping", "Temporary leak stabilization", "Fast follow-up scheduling"],
    idealFor: "Active leaks & urgent failures",
  },
  {
    slug: "gutter-services",
    title: "Gutter Services",
    icon: Droplets,
    shortDescription: "Gutter installation, repair, and cleaning to protect your roofline.",
    description:
      "Clogged or damaged gutters send water right back up under your roofline. We install, repair, and clean gutter systems so water moves away from your roof and foundation the way it's supposed to.",
    image: "/images/roofing/material-metal.jpg",
    priceFrom: 8,
    priceUnit: "per linear ft.",
    features: ["Seamless gutter installation", "Guard & screen options", "Repair & resealing", "Cleaning & debris removal"],
    idealFor: "Protecting your roofline & foundation",
  },
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);
