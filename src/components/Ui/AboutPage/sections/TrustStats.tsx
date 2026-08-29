import { Award, HardHat, Star, CheckCircle2 } from "lucide-react";
import StatCard from "@/src/components/Ui/Roofing/shared/StatCard";
import TestimonialsMarquee from "@/src/components/Ui/Roofing/shared/TestimonialsMarquee";
import { REVIEWS } from "@/src/components/Ui/Roofing/shared/data";

const STATS = [
  { icon: HardHat, value: "500+", label: "Projects Completed" },
  { icon: Award, value: "15+ Years", label: "In Business" },
  { icon: Star, value: "5-Star", label: "Average Reviews" },
  { icon: CheckCircle2, value: "100%", label: "Satisfaction Focused" },
];

const TrustStats = () => {
  return (
    <section className="bg-brand-50 py-20 lg:py-28">
      <div className="container mb-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <TestimonialsMarquee reviews={REVIEWS} />
    </section>
  );
};

export default TrustStats;
