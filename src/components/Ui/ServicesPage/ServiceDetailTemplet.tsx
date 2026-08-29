import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck, PhoneCall } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import ServiceCard from "@/src/components/Ui/Roofing/shared/ServiceCard";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";
import FinalCta from "@/src/components/Ui/Roofing/shared/FinalCta";
import { CONTACT_PHONE } from "@/src/components/Shared/Navbar/menuItems";
import { RoofingService, SERVICES } from "@/src/components/Ui/Roofing/shared/servicesData";

const formatPrice = (priceFrom: number, priceUnit: string) => {
  if (priceFrom === 0) return priceUnit === "free inspection" || priceUnit === "free with estimate" ? "Free" : "Call for Quote";
  return `$${priceFrom.toLocaleString()}`;
};

const ServiceDetailTemplet = ({ service }: { service: RoofingService }) => {
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        subtitle={service.shortDescription}
        image={service.image}
        alt={service.title}
        cta={[
          { label: "Request a Free Estimate", href: "/contact" },
          { label: "Call Now", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Overview
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-brand-900">{service.title}</h2>
            <p className="mt-4 leading-relaxed text-brand-900/60">{service.description}</p>

            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
            </div>

            <h3 className="mt-10 font-heading text-lg font-bold text-brand-900">What&rsquo;s Included</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-brand-900/70">
                  <CircleCheck size={18} className="mt-0.5 shrink-0 text-brand-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-brand-900/10 bg-brand-50 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-900/50">Starting At</p>
              <p className="mt-2 font-heading text-3xl font-bold text-brand-900">
                {formatPrice(service.priceFrom, service.priceUnit)}
                {service.priceFrom > 0 && <span className="ml-1 text-sm font-medium text-brand-900/50">{service.priceUnit}</span>}
              </p>
              <p className="mt-2 text-xs text-brand-900/50">
                Final pricing depends on roof size, material, and condition —
                confirmed with a free on-site estimate.
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-900">Ideal For</p>
              <p className="text-sm text-brand-900/60">{service.idealFor}</p>

              <Link
                href="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-900"
              >
                Get a Free Estimate <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-brand-900/15 bg-white px-5 py-3 text-sm font-bold text-brand-900 transition hover:bg-brand-50"
              >
                <PhoneCall size={16} /> {CONTACT_PHONE}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-brand-50 py-20 lg:py-28">
        <div className="container">
          <SectionHeading eyebrow="Explore More" title="Related Services" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <ServiceCard
                key={s.slug}
                href={`/services/${s.slug}`}
                icon={s.icon}
                title={s.title}
                description={s.shortDescription}
              />
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title={`Ready to Get Started With ${service.title}?`}
        description="Request a free, no-obligation estimate and we'll get back to you shortly."
      />
    </>
  );
};

export default ServiceDetailTemplet;
