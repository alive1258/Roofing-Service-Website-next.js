import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";
import ServiceCard from "@/src/components/Ui/Roofing/shared/ServiceCard";
import { SERVICES } from "@/src/components/Ui/Roofing/shared/servicesData";

const AllServicesGrid = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="What We Offer"
          title="All Roofing Services"
          description="Every service your roof could need, handled by one dependable team. Tap a service to see full details and pricing."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              icon={service.icon}
              title={service.title}
              description={service.shortDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServicesGrid;
