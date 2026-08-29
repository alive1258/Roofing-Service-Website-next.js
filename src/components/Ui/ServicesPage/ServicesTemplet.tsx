import { HardHat, ShieldCheck, DollarSign, Award, Timer, Smile } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import AllServicesGrid from "./sections/AllServicesGrid";
import Pricing from "./sections/Pricing";
import Materials from "./sections/Materials";
import Inspection from "./sections/Inspection";
import SplitFeatureSection from "@/src/components/Ui/Roofing/shared/SplitFeatureSection";
import IconFeatureGrid from "@/src/components/Ui/Roofing/shared/IconFeatureGrid";
import FaqSection from "@/src/components/Ui/Roofing/shared/FaqSection";
import FinalCta from "@/src/components/Ui/Roofing/shared/FinalCta";

const WHY_CHOOSE = [
  { icon: HardHat, title: "Experienced Roofers", description: "Skilled crews with years of hands-on roofing experience." },
  { icon: ShieldCheck, title: "Quality Materials", description: "We install trusted, manufacturer-backed roofing products." },
  { icon: DollarSign, title: "Transparent Pricing", description: "Clear, upfront estimates with no hidden fees." },
  { icon: Award, title: "Professional Workmanship", description: "Every project meets our strict quality standards." },
  { icon: Timer, title: "Fast Response", description: "Prompt scheduling and quick turnaround times." },
  { icon: Smile, title: "Customer Satisfaction", description: "Your satisfaction is the measure of every job we complete." },
];

const FAQS = [
  { question: "How often should my roof be inspected?", answer: "We recommend a professional inspection at least once a year, and after any major storm, to catch small issues before they become costly repairs." },
  { question: "How do I know if I need a roof replacement?", answer: "Signs include repeated leaks, extensive shingle damage, sagging areas, or a roof nearing the end of its expected lifespan. A free inspection can confirm which option is right for you." },
  { question: "How long does a roof replacement take?", answer: "Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of the roof." },
  { question: "Can you repair storm damage?", answer: "Yes — we provide fast storm damage inspections and repairs, and can help guide you through the insurance claims process." },
  { question: "Do you provide free estimates?", answer: "Yes, every inspection and estimate is completely free with no obligation." },
  { question: "What roofing materials do you use?", answer: "We install asphalt shingles, metal roofing, tile, and flat/commercial roofing systems from trusted manufacturers." },
];

const ServicesTemplet = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Professional Roofing Services You Can Count On"
        subtitle="From minor repairs to complete roof replacements, we provide dependable roofing solutions for residential and commercial properties."
        image="/images/roofing/services-hero.jpg"
        alt="Roofer applying sealant on a residential roof"
        cta={[{ label: "Request a Free Estimate", href: "/contact" }]}
      />

      <AllServicesGrid />
      <Pricing />

      <SplitFeatureSection
        eyebrow="Residential"
        title="Residential Roofing Services"
        items={["Asphalt shingles", "Metal roofing", "Tile roofing", "Flat roofing", "Roof repair", "Roof replacement", "Roof inspection"]}
        image="/images/roofing/residential-hero.jpg"
        imageAlt="Modern residential home with a well-maintained roof"
        ctaLabel="Get Residential Roofing Help"
      />

      <SplitFeatureSection
        eyebrow="Commercial"
        title="Commercial Roofing Solutions"
        items={["Flat roofs", "Metal roofing", "TPO roofing", "EPDM roofing", "Roof coatings", "Repairs", "Maintenance"]}
        image="/images/roofing/commercial-roofing2.jpg"
        imageAlt="Aerial view of a large commercial flat roof"
        highlight="Minimize downtime and protect your business with dependable commercial roofing."
        ctaLabel="Get a Commercial Roofing Quote"
        reverse
        tone="brand-50"
      />

      <Materials />
      <Inspection />
      <IconFeatureGrid eyebrow="Why Choose Us" title="Why Choose Our Services" features={WHY_CHOOSE} tone="brand-50" />
      <FaqSection items={FAQS} />
      <FinalCta title="Need Roofing Services? Let's Get Started." description="Tell us about your project and we'll provide a clear, no-obligation estimate." />
    </>
  );
};

export default ServicesTemplet;
