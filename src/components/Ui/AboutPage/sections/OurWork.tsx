import Image from "next/image";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";

const WORK = [
  { image: "/images/roofing/our-work-3.jpg", label: "Roof Installation" },
  { image: "/images/roofing/replacement-section.jpg", label: "Roof Replacement" },
  { image: "/images/roofing/service-repair.jpg", label: "Repair" },
  { image: "/images/roofing/our-work-2.jpg", label: "Commercial Roofing" },
  { image: "/images/roofing/gallery-before.jpg", label: "Storm Damage" },
  { image: "/images/roofing/our-work-1.jpg", label: "Commercial Flat Roof" },
];

const OurWork = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Our Work" title="A Look at Our Projects" />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {WORK.map((item) => (
            <div key={item.label} className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-900/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-sm font-bold text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
