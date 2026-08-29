import Image from "next/image";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";

const PROJECTS = [
  { image: "/images/roofing/our-work-3.jpg", title: "Roof Replacement — 2,400 sq. ft.", note: "Completed in 2 Days" },
  { image: "/images/roofing/our-work-1.jpg", title: "Commercial Flat Roof Recoat", note: "Completed in 4 Days" },
  { image: "/images/roofing/our-work-2.jpg", title: "Warehouse Roof Overlay", note: "Completed in 6 Days" },
  { image: "/images/roofing/our-work-4.jpg", title: "Full Residential Tear-Off", note: "Completed in 3 Days" },
];

const Gallery = () => {
  return (
    <section className="bg-brand-50 py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Our Work" title="Before, During & After" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative h-64 w-full">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base font-bold text-brand-900">{project.title}</h3>
                <p className="mt-1 text-sm text-brand-900/50">{project.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
