import Image from "next/image";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";

const MATERIALS = [
  {
    title: "Asphalt Shingles",
    description: "Affordable and versatile — the most popular residential roofing material.",
    image: "/images/roofing/material-asphalt.jpg",
    durability: "Good",
    cost: "$",
    lifespan: "20-30 yrs",
    bestFor: "Most homes",
  },
  {
    title: "Metal Roofing",
    description: "Durable and long-lasting, with excellent resistance to weather.",
    image: "/images/roofing/material-metal.jpg",
    durability: "Excellent",
    cost: "$$$",
    lifespan: "40-70 yrs",
    bestFor: "Modern homes",
  },
  {
    title: "Tile Roofing",
    description: "Premium appearance and durability for a distinctive look.",
    image: "/images/roofing/material-tile.jpg",
    durability: "Excellent",
    cost: "$$$",
    lifespan: "50+ yrs",
    bestFor: "Southwestern & Mediterranean style",
  },
  {
    title: "Flat Roofing",
    description: "Ideal for many commercial buildings and modern low-slope designs.",
    image: "/images/roofing/material-flat.jpg",
    durability: "Good",
    cost: "$$",
    lifespan: "15-25 yrs",
    bestFor: "Commercial buildings",
  },
];

const Materials = () => {
  return (
    <section className="bg-brand-50 py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Materials" title="Roofing Materials We Install" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MATERIALS.map((material) => (
            <div key={material.title} className="overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm">
              <div className="relative h-36 w-full">
                <Image src={material.image} alt={material.title} fill sizes="25vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base font-bold text-brand-900">{material.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-900/60">{material.description}</p>
                <dl className="mt-4 space-y-1.5 border-t border-brand-900/10 pt-4 text-xs">
                  <div className="flex justify-between"><dt className="text-brand-900/50">Durability</dt><dd className="font-semibold text-brand-900">{material.durability}</dd></div>
                  <div className="flex justify-between"><dt className="text-brand-900/50">Cost</dt><dd className="font-semibold text-brand-900">{material.cost}</dd></div>
                  <div className="flex justify-between"><dt className="text-brand-900/50">Lifespan</dt><dd className="font-semibold text-brand-900">{material.lifespan}</dd></div>
                  <div className="flex justify-between gap-2"><dt className="shrink-0 text-brand-900/50">Best For</dt><dd className="text-right font-semibold text-brand-900">{material.bestFor}</dd></div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
