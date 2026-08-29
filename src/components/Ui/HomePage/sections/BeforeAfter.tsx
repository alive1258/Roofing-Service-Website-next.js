import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";
import BeforeAfterSlider from "@/src/components/Ui/Roofing/shared/BeforeAfterSlider";

const BeforeAfter = () => {
  return (
    <section className="bg-brand-50 py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Real Results" title="Before & After" />

        <div className="mx-auto mt-12 max-w-4xl">
          <BeforeAfterSlider
            beforeSrc="/images/roofing/before.jpg"
            afterSrc="/images/roofing/after.jpg"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="font-heading text-lg font-semibold text-brand-900">
            From damaged to dependable.
          </p>
          <Link
            href="/roof-repair-replacement"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            See More Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
