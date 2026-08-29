import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";
import { SERVICES } from "@/src/components/Ui/Roofing/shared/servicesData";

const formatPrice = (priceFrom: number, priceUnit: string) => {
  if (priceFrom === 0) return priceUnit === "free inspection" || priceUnit === "free with estimate" ? "Free" : "Call for quote";
  return `From $${priceFrom.toLocaleString()}`;
};

const Pricing = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent Starting Prices"
          description="Every roof is different, so final pricing depends on size, material, and condition — but here's what most projects start at, so you know what to expect."
        />

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm">
          {SERVICES.map((service, idx) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`flex items-center justify-between gap-4 px-6 py-5 transition hover:bg-brand-50/60 ${
                idx !== SERVICES.length - 1 ? "border-b border-brand-900/10" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
                  <service.icon size={20} />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-brand-900">{service.title}</p>
                  <p className="text-xs text-brand-900/50">{service.idealFor}</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3 text-right">
                <div>
                  <p className="font-heading text-base font-bold text-brand-900">
                    {formatPrice(service.priceFrom, service.priceUnit)}
                  </p>
                  {service.priceFrom > 0 && (
                    <p className="text-xs text-brand-900/50">{service.priceUnit}</p>
                  )}
                </div>
                <ArrowRight size={16} className="text-brand-600" />
              </div>
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-brand-900/50">
          Prices shown are typical starting points, not fixed quotes. Every
          job includes a free, no-obligation on-site estimate before any
          work begins.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
