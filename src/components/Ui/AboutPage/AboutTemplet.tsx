import { ShieldCheck, HeartHandshake, Clock3, Users } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import OurStory from "./sections/OurStory";
import Mission from "./sections/Mission";
import Team from "./sections/Team";
import Certifications from "./sections/Certifications";
import OurWork from "./sections/OurWork";
import TrustStats from "./sections/TrustStats";
import IconFeatureGrid from "@/src/components/Ui/Roofing/shared/IconFeatureGrid";
import FinalCta from "@/src/components/Ui/Roofing/shared/FinalCta";

const VALUES = [
  { icon: ShieldCheck, title: "Quality", description: "We don't compromise on workmanship." },
  { icon: HeartHandshake, title: "Integrity", description: "We provide honest recommendations and transparent communication." },
  { icon: Clock3, title: "Reliability", description: "We show up when we say we will." },
  { icon: Users, title: "Customer First", description: "Your satisfaction is at the center of every project." },
];

const AboutTemplet = () => {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Roofing Built on Quality, Trust & Experience"
        subtitle="We're committed to protecting homes and businesses with dependable roofing solutions and professional workmanship."
        image="/images/roofing/about-hero.jpg"
        alt="Construction team on a large roofing project"
      />

      <OurStory />
      <Mission />
      <IconFeatureGrid eyebrow="Our Values" title="Our Values" features={VALUES} columns={4} />
      <Team />
      <Certifications />
      <OurWork />
      <TrustStats />
      <FinalCta
        title="Ready to Work With a Roofing Team You Can Trust?"
        description="Get a professional roofing assessment and a clear, honest estimate."
      />
    </>
  );
};

export default AboutTemplet;
