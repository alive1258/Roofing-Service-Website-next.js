import Image from "next/image";
import Link from "next/link";

interface HeroCta {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  cta?: HeroCta[];
}

const PageHero = ({ eyebrow, title, subtitle, image, alt, cta }: PageHeroProps) => {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden py-24 md:min-h-[480px]">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-900/95 via-brand-900/80 to-brand-900/50" />
      <div className="absolute inset-0 bg-linear-to-t from-brand-900/70 via-transparent to-transparent" />

      <div className="container relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400 backdrop-blur-sm">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-2xl font-heading text-4xl sm:text-5xl font-bold text-white leading-[1.1]">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-white/80 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>

        {cta && cta.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {cta.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={
                  btn.variant === "outline"
                    ? "inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                    : "inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-500"
                }
              >
                {btn.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
