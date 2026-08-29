import { DollarSign, Search, ShieldCheck, HardHat, Wrench, Award } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import QuoteForm from "./sections/QuoteForm";
import ContactInfo from "./sections/ContactInfo";
import ServiceAreas from "./sections/ServiceAreas";
import MapSection from "./sections/MapSection";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";
import IconFeatureGrid from "@/src/components/Ui/Roofing/shared/IconFeatureGrid";
import FaqSection from "@/src/components/Ui/Roofing/shared/FaqSection";
import EmergencyStrip from "@/src/components/Ui/Roofing/shared/EmergencyStrip";
import FinalCta from "@/src/components/Ui/Roofing/shared/FinalCta";

const WHY_CONTACT = [
  { icon: DollarSign, title: "Free Estimates" },
  { icon: Search, title: "Professional Inspection" },
  { icon: ShieldCheck, title: "Transparent Pricing" },
  { icon: HardHat, title: "Experienced Team" },
  { icon: Wrench, title: "Quality Materials" },
  { icon: Award, title: "Workmanship Guarantee" },
];

const FAQS = [
  { question: "Do you offer free estimates?", answer: "Yes — every estimate and inspection is completely free, with no obligation to move forward." },
  { question: "How quickly can you inspect my roof?", answer: "In most cases we can schedule an inspection within 1-2 business days, and faster after severe weather." },
  { question: "Do you handle insurance claims?", answer: "Yes, we document storm damage thoroughly and can work directly with your insurance adjuster." },
  { question: "Are you licensed and insured?", answer: "Yes, Ironclad Roofing is fully licensed and insured for both residential and commercial work." },
  { question: "How long does a roof replacement take?", answer: "Most residential replacements are completed in 1-3 days depending on size and material." },
  { question: "What areas do you serve?", answer: "We proudly serve Dallas, Plano, Frisco, McKinney, Allen, Richardson, Garland, Carrollton, and the surrounding areas." },
];

const ContactTemplet = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Roof"
        subtitle="Tell us what you need, and our roofing experts will help you determine the right solution."
        image="/images/roofing/contact-hero.jpg"
        alt="Modern home exterior"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <SectionHeading eyebrow="Get a Free Estimate" title="Request Your Free Estimate" />
          <div className="mt-12">
            <QuoteForm />
          </div>
        </div>
      </section>

      <ContactInfo />
      <EmergencyStrip />
      <ServiceAreas />
      <MapSection />
      <FaqSection items={FAQS} />
      <IconFeatureGrid eyebrow="Why Contact Us" title="Why Contact Us" features={WHY_CONTACT} tone="brand-50" />
      <FinalCta
        title="Your Roof Protects Everything Below It. Make Sure It's Ready."
        description="Schedule your roofing inspection or request a free estimate today."
      />
    </>
  );
};

export default ContactTemplet;
