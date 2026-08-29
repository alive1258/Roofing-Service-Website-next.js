import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";
import ProcessTimeline from "@/src/components/Ui/Roofing/shared/ProcessTimeline";

const STEPS = [
  {
    number: "01",
    title: "Inspection",
    description: "We inspect your roof and identify existing or potential problems.",
  },
  {
    number: "02",
    title: "Assessment",
    description: "We explain the condition of your roof and recommend the right solution.",
  },
  {
    number: "03",
    title: "Professional Work",
    description: "Our roofing team completes the project using quality materials and proper installation methods.",
  },
  {
    number: "04",
    title: "Final Inspection",
    description: "We inspect the completed work to ensure everything meets our quality standards.",
  },
];

const Process = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Roofing Process"
          description="A simple, transparent process from first inspection to final walkthrough."
        />
        <div className="mt-14">
          <ProcessTimeline steps={STEPS} />
        </div>
      </div>
    </section>
  );
};

export default Process;
