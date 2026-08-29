import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FinalCtaProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const FinalCta = ({
  title,
  description,
  ctaLabel = "Get Your Free Estimate",
  ctaHref = "/contact",
}: FinalCtaProps) => {
  return (
    <section className="bg-brand-50 py-20">
      <div className="container flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-heading text-3xl font-bold text-brand-900 sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-brand-900/60">{description}</p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-900"
        >
          {ctaLabel} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default FinalCta;
