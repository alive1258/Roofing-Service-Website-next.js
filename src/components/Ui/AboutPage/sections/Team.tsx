import Image from "next/image";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";

const TEAM = [
  { name: "Robert Hale", position: "Owner & Founder", image: "/images/roofing/team-owner.jpg" },
  { name: "Marcus Diaz", position: "Project Manager", image: "/images/roofing/team-pm.jpg" },
  { name: "Tom Bennett", position: "Lead Roofer", image: "/images/roofing/team-lead.jpg" },
  { name: "Chris Nolan", position: "Roofing Specialist", image: "/images/roofing/team-specialist.jpg" },
];

const Team = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Our Team" title="Meet Our Team" description="The people behind every roof we build." />
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-square w-full max-w-48 overflow-hidden rounded-2xl shadow-sm">
                <Image src={member.image} alt={member.name} fill sizes="200px" className="object-cover" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-brand-900">{member.name}</h3>
              <p className="text-sm text-brand-900/50">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
