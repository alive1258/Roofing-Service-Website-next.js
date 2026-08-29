import SectionHeading from "@/src/components/Ui/Roofing/shared/SectionHeading";
import TestimonialsMarquee from "@/src/components/Ui/Roofing/shared/TestimonialsMarquee";
import { REVIEWS } from "@/src/components/Ui/Roofing/shared/data";

const Reviews = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" />
      </div>
      <div className="mt-12">
        <TestimonialsMarquee reviews={REVIEWS} />
      </div>
    </section>
  );
};

export default Reviews;
