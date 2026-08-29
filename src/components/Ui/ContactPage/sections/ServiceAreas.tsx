import { MapPin } from "lucide-react";
import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";

const CITIES = ["Dallas", "Plano", "Frisco", "McKinney", "Allen", "Richardson", "Garland", "Carrollton"];

const ServiceAreas = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Where We Work" title="Service Areas" description="Proudly serving the greater Dallas-Fort Worth Metroplex." />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 rounded-full border border-brand-900/10 bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-900"
            >
              <MapPin size={14} className="text-brand-600" /> {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
