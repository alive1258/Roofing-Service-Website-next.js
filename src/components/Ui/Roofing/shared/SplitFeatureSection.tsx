import Image from "next/image";
import Link from "next/link";
import { CircleCheck, ArrowRight } from "lucide-react";

interface SplitFeatureSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: string[];
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
  tone?: "white" | "brand-50";
  highlight?: string;
}

const SplitFeatureSection = ({
  eyebrow,
  title,
  description,
  items,
  image,
  imageAlt,
  ctaLabel,
  ctaHref = "/contact",
  reverse = false,
  tone = "white",
  highlight,
}: SplitFeatureSectionProps) => {
  return (
    <section className={`py-20 lg:py-28 ${tone === "brand-50" ? "bg-brand-50" : "bg-white"}`}>
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={`relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl ${reverse ? "lg:order-2" : ""}`}>
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-brand-900/60">{description}</p>}

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-brand-900/70">
                <CircleCheck size={18} className="mt-0.5 shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>

          {highlight && (
            <p className="mt-6 rounded-xl border border-brand-600/20 bg-brand-600/5 px-5 py-4 text-sm font-medium text-brand-900">
              {highlight}
            </p>
          )}

          {ctaLabel && (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600"
            >
              {ctaLabel} <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default SplitFeatureSection;
