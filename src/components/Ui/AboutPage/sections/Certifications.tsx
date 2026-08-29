import { BadgeCheck, ShieldCheck, Award, HardHat, FileCheck } from "lucide-react";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";

const CREDENTIALS = [
  { icon: FileCheck, label: "Licensed Contractor" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: BadgeCheck, label: "Manufacturer Certified" },
  { icon: HardHat, label: "Safety Trained Crews" },
  { icon: Award, label: "Workmanship Warranty" },
];

const Certifications = () => {
  return (
    <section className="bg-brand-50 py-16">
      <div className="container">
        <SectionHeading eyebrow="Trust" title="Certifications & Guarantees" />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.label}
              className="flex items-center gap-2.5 rounded-full border border-brand-900/10 bg-white px-5 py-3 shadow-sm"
            >
              <cred.icon size={18} className="text-brand-600" />
              <span className="text-sm font-semibold text-brand-900">{cred.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
