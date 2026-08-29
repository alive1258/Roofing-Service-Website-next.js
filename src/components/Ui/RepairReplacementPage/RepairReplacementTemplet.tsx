import PageHero from "@/src/components/Shared/PageHero/PageHero";
import CommonProblems from "./sections/CommonProblems";
import RepairVsReplacement from "./sections/RepairVsReplacement";
import RepairProcess from "./sections/RepairProcess";
import Gallery from "./sections/Gallery";
import SplitFeatureSection from "@/src/components/Ui/Roofing/shared/SplitFeatureSection";
import TestimonialsMarquee from "@/src/components/Ui/Roofing/shared/TestimonialsMarquee";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";
import EmergencyStrip from "@/src/components/Ui/Roofing/shared/EmergencyStrip";
import { REVIEWS } from "@/src/components/Ui/Roofing/shared/data";

const RepairReplacementTemplet = () => {
  return (
    <>
      <PageHero
        eyebrow="Repair & Replacement"
        title="Roof Damage? We Can Fix It."
        subtitle="Fast, professional roofing repairs and replacement services to restore your home's protection."
        image="/images/roofing/repair-hero.jpg"
        alt="Roofing crew performing a full roof replacement"
        cta={[
          { label: "Request a Repair", href: "/contact" },
          { label: "Call Now", href: "/contact", variant: "outline" },
        ]}
      />

      <CommonProblems />
      <RepairVsReplacement />
      <RepairProcess />

      <SplitFeatureSection
        eyebrow="Storm Damage"
        title="Storm Damage? Get Your Roof Checked."
        items={["Wind damage", "Hail damage", "Fallen tree damage", "Water intrusion", "Missing shingles"]}
        image="/images/roofing/gallery-before.jpg"
        imageAlt="Aerial view of severe storm damage to a roof"
        ctaLabel="Schedule Storm Inspection"
        tone="brand-50"
      />

      <SplitFeatureSection
        eyebrow="Replacement"
        title="When Repair Isn't Enough"
        items={["Roof near the end of its lifespan", "Repeated leaks", "Extensive shingle damage", "Sagging", "Major storm damage", "High maintenance costs"]}
        image="/images/roofing/replacement-section.jpg"
        imageAlt="Roofers installing a brand new roof"
        ctaLabel="Get a Replacement Estimate"
        reverse
      />

      <Gallery />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="What Customers Say About Our Repairs" />
        </div>
        <div className="mt-12">
          <TestimonialsMarquee reviews={REVIEWS} />
        </div>
      </section>

      <EmergencyStrip
        title="Need Emergency Roof Repair?"
        description="Don't wait for a small problem to become major property damage. Our team is ready to respond fast."
      />
    </>
  );
};

export default RepairReplacementTemplet;
