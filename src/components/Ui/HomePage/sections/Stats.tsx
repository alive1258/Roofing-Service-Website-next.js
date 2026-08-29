import { Award, HardHat, CheckCircle2, Clock3 } from "lucide-react";
import StatCard from "@/src/components/Ui/Roofing/shared/StatCard";

const STATS = [
  { icon: Award, value: "15+ Years", label: "Roofing Experience" },
  { icon: HardHat, value: "500+", label: "Projects Completed" },
  { icon: CheckCircle2, value: "100%", label: "Workmanship Focused" },
  { icon: Clock3, value: "24/7", label: "Emergency Support" },
];

const Stats = () => {
  return (
    <section className="border-b border-brand-900/5 bg-white py-14">
      <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
