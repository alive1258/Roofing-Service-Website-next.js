import SectionHeading from "./SectionHeading";
import FaqAccordion from "./FaqAccordion";
import { FaqItem } from "./data";

interface FaqSectionProps {
  title?: string;
  eyebrow?: string;
  items: FaqItem[];
}

const FaqSection = ({ title = "Frequently Asked Questions", eyebrow = "FAQ", items }: FaqSectionProps) => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-12">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
