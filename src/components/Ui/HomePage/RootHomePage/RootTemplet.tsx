import Hero from "@/src/components/Ui/HomePage/sections/Hero";
import Stats from "@/src/components/Ui/HomePage/sections/Stats";
import Services from "@/src/components/Ui/HomePage/sections/Services";
import WhyMatters from "@/src/components/Ui/HomePage/sections/WhyMatters";
import Process from "@/src/components/Ui/HomePage/sections/Process";
import BeforeAfter from "@/src/components/Ui/HomePage/sections/BeforeAfter";
import Reviews from "@/src/components/Ui/HomePage/sections/Reviews";
import EmergencyStrip from "@/src/components/Ui/Roofing/shared/EmergencyStrip";
import FinalCta from "@/src/components/Ui/Roofing/shared/FinalCta";

const RootTemplet = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyMatters />
      <Process />
      <BeforeAfter />
      <Reviews />
      <EmergencyStrip />
      <FinalCta
        title="Protect Your Home With a Roof You Can Trust."
        description="Get a professional roofing assessment and a clear estimate for your project."
        ctaLabel="Get Your Free Estimate"
      />
    </>
  );
};

export default RootTemplet;
