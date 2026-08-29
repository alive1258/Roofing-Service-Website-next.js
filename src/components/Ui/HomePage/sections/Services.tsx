import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/src/components/Ui/Roofing/shared/ServiceCard";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";
import { FEATURED_SERVICES } from "@/src/components/Ui/Roofing/shared/servicesData";

const Services = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Complete Roofing Solutions"
          title="Our Roofing Services"
          description="From minor repairs to complete roof replacements, we provide dependable roofing solutions for every need."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              icon={service.icon}
              title={service.title}
              description={service.shortDescription}
              image={service.image}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
