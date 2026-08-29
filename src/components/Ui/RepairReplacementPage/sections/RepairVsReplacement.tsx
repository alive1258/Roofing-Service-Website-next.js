import { Check } from "lucide-react";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";

const ROWS = [
  { repair: "Minor damage", replacement: "Extensive damage" },
  { repair: "Isolated leaks", replacement: "Multiple leaks" },
  { repair: "Few damaged shingles", replacement: "Aging roof" },
  { repair: "Lower upfront cost", replacement: "Long-term solution" },
  { repair: "Faster completion", replacement: "Larger project" },
];

const RepairVsReplacement = () => {
  return (
    <section className="bg-brand-50 py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Which Do You Need?" title="Repair vs. Replacement" />

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm">
          <div className="grid grid-cols-2">
            <div className="bg-brand-900 px-6 py-4 text-center font-heading font-bold text-white">Roof Repair</div>
            <div className="bg-brand-600 px-6 py-4 text-center font-heading font-bold text-white">Roof Replacement</div>
          </div>
          {ROWS.map((row, idx) => (
            <div key={idx} className={`grid grid-cols-2 ${idx % 2 === 0 ? "bg-white" : "bg-brand-50/50"}`}>
              <div className="flex items-center gap-2 border-r border-brand-900/5 px-6 py-4 text-sm text-brand-900/70">
                <Check size={15} className="shrink-0 text-brand-600" /> {row.repair}
              </div>
              <div className="flex items-center gap-2 px-6 py-4 text-sm text-brand-900/70">
                <Check size={15} className="shrink-0 text-brand-600" /> {row.replacement}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-brand-900/60">
          Not sure which option is right? We&rsquo;ll inspect your roof and
          explain your options clearly — no pressure, no guesswork.
        </p>
      </div>
    </section>
  );
};

export default RepairVsReplacement;
