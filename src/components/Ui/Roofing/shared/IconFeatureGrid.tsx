import { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Feature {
  icon: LucideIcon;
  title: string;
  description?: string;
}

interface IconFeatureGridProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  features: Feature[];
  columns?: 3 | 4 | 6;
  tone?: "white" | "brand-50" | "brand-900";
}

const COLS: Record<number, string> = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  6: "sm:grid-cols-2 lg:grid-cols-3",
};

const IconFeatureGrid = ({
  eyebrow,
  title,
  description,
  features,
  columns = 3,
  tone = "white",
}: IconFeatureGridProps) => {
  const light = tone === "brand-900";
  const bg = tone === "brand-50" ? "bg-brand-50" : tone === "brand-900" ? "bg-brand-900" : "bg-white";

  return (
    <section className={`${bg} py-20 lg:py-28`}>
      <div className="container">
        {title && <SectionHeading eyebrow={eyebrow} title={title} description={description} light={light} />}
        <div className={`${title ? "mt-14" : ""} grid grid-cols-1 gap-6 ${COLS[columns]}`}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-2xl border p-6 ${
                light
                  ? "border-white/10 bg-white/5"
                  : "border-brand-900/10 bg-white shadow-sm"
              }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                  light ? "bg-gold-500/15 text-gold-400" : "bg-brand-600/10 text-brand-600"
                }`}
              >
                <feature.icon size={22} />
              </div>
              <h3 className={`font-heading text-base font-bold ${light ? "text-white" : "text-brand-900"}`}>
                {feature.title}
              </h3>
              {feature.description && (
                <p className={`mt-2 text-sm leading-relaxed ${light ? "text-white/60" : "text-brand-900/60"}`}>
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconFeatureGrid;
