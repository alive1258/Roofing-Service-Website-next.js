import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";

const STEPS = [
  { number: "01", title: "Contact Us", description: "Tell us about your roofing issue." },
  { number: "02", title: "Roof Inspection", description: "We identify the source and extent of the damage." },
  { number: "03", title: "Repair Plan", description: "We explain the recommended solution and estimate." },
  { number: "04", title: "Professional Repair", description: "Our team completes the necessary work." },
  { number: "05", title: "Final Check", description: "We verify the repair and clean up the work area." },
];

const RepairProcess = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Our Process" title="Our Repair Process" />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative">
              {idx < STEPS.length - 1 && (
                <div className="absolute right-[-1rem] top-7 hidden h-px w-8 bg-brand-900/15 lg:block" />
              )}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-900 font-heading text-lg font-bold text-gold-400">
                {step.number}
              </div>
              <h3 className="mt-5 font-heading text-base font-bold text-brand-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairProcess;
