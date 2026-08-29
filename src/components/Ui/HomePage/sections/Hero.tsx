import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Star } from "lucide-react";
import { CONTACT_PHONE } from "@/src/components/Shared/Navbar/menuItems";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-900 pt-36 pb-24 lg:pt-32 lg:pb-32">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            Trusted Roofing Contractor Since 2010
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.25rem]">
            Reliable Roofing. Built to Protect What Matters Most.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Professional roofing installation, repair, replacement, and
            maintenance services for homes and businesses. Quality workmanship,
            dependable service, and long-lasting protection.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gold-500"
            >
              Get a Free Estimate <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              <PhoneCall size={16} /> Call Us Today
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl sm:aspect-video lg:aspect-5/5">
            <Image
              src="/images/roofing/hero-roofer.jpg"
              alt="Professional roofers installing shingles on a residential roof"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl sm:-left-8 sm:p-5">
            <div className="flex gap-0.5 text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <div className="h-8 w-px bg-brand-900/10" />
            <div>
              <p className="font-heading text-sm font-bold text-brand-900">
                5.0 Rated
              </p>
              <p className="text-xs text-brand-900/50">500+ Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
