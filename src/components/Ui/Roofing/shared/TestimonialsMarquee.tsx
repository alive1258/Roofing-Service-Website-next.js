import { Star, Quote } from "lucide-react";
import { Review } from "./data";

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="mx-3 flex w-80 shrink-0 flex-col gap-4 rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm sm:w-96">
    <div className="flex items-center justify-between">
      <div className="flex gap-0.5 text-gold-500">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <Quote size={22} className="text-brand-900/10" />
    </div>
    <p className="text-sm leading-relaxed text-brand-900/70">&ldquo;{review.quote}&rdquo;</p>
    <div>
      <p className="font-heading text-sm font-bold text-brand-900">{review.name}</p>
      <p className="text-xs text-brand-900/50">{review.role}</p>
    </div>
  </div>
);

interface TestimonialsMarqueeProps {
  reviews: Review[];
}

const TestimonialsMarquee = ({ reviews }: TestimonialsMarqueeProps) => {
  const loop = [...reviews, ...reviews];

  return (
    <div className="testimonial-fade overflow-hidden">
      <div className="flex w-max animate-testimonial-left py-2">
        {loop.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMarquee;
