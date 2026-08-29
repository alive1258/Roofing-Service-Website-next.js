import Image from "next/image";
import Link from "next/link";
import { CircleCheck, ArrowRight } from "lucide-react";

const CHECKLIST = ["Shingles", "Flashing", "Gutters", "Ventilation", "Structural condition", "Water damage"];

const Inspection = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
            Roof Inspection
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Not Sure What&rsquo;s Wrong With Your Roof?
          </h2>
          <p className="mt-4 text-brand-900/60">
            Our professional inspection helps identify leaks, damage, aging
            materials, ventilation issues, and other potential problems
            before they become costly repairs.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-brand-900/70">
                <CircleCheck size={16} className="shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            Book an Inspection <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/roofing/inspection.jpg"
            alt="Roofing specialist ready to inspect a roof"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Inspection;
