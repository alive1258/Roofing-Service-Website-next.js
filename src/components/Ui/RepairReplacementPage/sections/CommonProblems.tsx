import { Droplets, LayoutGrid, ScanLine, Waves, TriangleAlert, CloudHail } from "lucide-react";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";

const PROBLEMS = [
  { icon: Droplets, title: "Leaking Roof", description: "Water entering through damaged or aging roofing materials." },
  { icon: LayoutGrid, title: "Missing Shingles", description: "Often caused by wind or storm damage." },
  { icon: ScanLine, title: "Cracked Shingles", description: "Can allow water to penetrate the roof deck below." },
  { icon: TriangleAlert, title: "Damaged Flashing", description: "A common source of leaks around roof edges and openings." },
  { icon: Waves, title: "Sagging Roof", description: "Could indicate serious underlying structural problems." },
  { icon: CloudHail, title: "Storm Damage", description: "Hail, wind, and fallen branches can damage roofing systems." },
];

const CommonProblems = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Common Issues" title="Common Roofing Problems" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div key={problem.title} className="rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                <problem.icon size={22} />
              </div>
              <h3 className="font-heading text-base font-bold text-brand-900">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/60">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonProblems;
