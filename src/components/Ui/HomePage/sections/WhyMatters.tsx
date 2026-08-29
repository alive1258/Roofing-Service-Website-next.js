import Image from "next/image";
import Link from "next/link";
import { CircleCheck, ArrowRight } from "lucide-react";

const PROBLEMS = [
  "Water leaks and interior damage",
  "Structural damage to your home",
  "Mold and moisture buildup",
  "Higher energy bills",
  "Damaged insulation",
  "Reduced property value",
];

const WhyMatters = () => {
  return (
    <section className="bg-brand-50 py-20 lg:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl lg:aspect-square">
          <Image
            src="/images/roofing/why-matters.jpg"
            alt="A well-protected home with a strong, reliable roof"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
            Why It Matters
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            A Strong Roof Means a Safer Home
          </h2>
          <p className="mt-4 text-brand-900/60">
            A damaged or aging roof does more than look bad — it puts your
            entire home at risk. Left unaddressed, small issues quickly
            become expensive problems.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <li key={problem} className="flex items-start gap-2.5 text-sm text-brand-900/70">
                <CircleCheck size={18} className="mt-0.5 shrink-0 text-brand-600" />
                {problem}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            Schedule a Roof Inspection <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
