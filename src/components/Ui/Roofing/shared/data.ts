export interface Review {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const REVIEWS: Review[] = [
  {
    name: "Michael R.",
    role: "Homeowner, Dallas",
    quote:
      "The team was professional, responsive, and completed our roof replacement exactly as promised. Cleanup was spotless and the new roof looks fantastic.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    role: "Homeowner, Plano",
    quote:
      "They quickly found the source of our leak and repaired it before the damage got worse. Fast, honest, and reasonably priced.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Property Manager, Frisco",
    quote:
      "We use Ironclad for all of our commercial properties. Reliable scheduling, quality workmanship, and clear communication every time.",
    rating: 5,
  },
  {
    name: "Angela M.",
    role: "Homeowner, McKinney",
    quote:
      "After the hailstorm, they had an inspector out within a day and handled the insurance paperwork for us. Couldn't have asked for more.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Homeowner, Allen",
    quote:
      "Straightforward estimate, no pressure, and the crew showed up exactly when they said they would. Our new roof has held up great through two storm seasons.",
    rating: 5,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}
