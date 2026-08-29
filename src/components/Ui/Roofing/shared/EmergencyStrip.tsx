import Image from "next/image";
import Link from "next/link";
import { PhoneCall, TriangleAlert } from "lucide-react";
import { CONTACT_PHONE } from "@/src/components/Shared/Navbar/menuItems";

interface EmergencyStripProps {
  title?: string;
  description?: string;
  image?: string;
}

const EmergencyStrip = ({
  title = "Roof Damage? Don't Wait Until It Gets Worse.",
  description = "Storm damage, active leaks, missing shingles, or other urgent roofing problems? Our team is ready to help — day or night.",
  image = "/images/roofing/emergency.jpg",
}: EmergencyStripProps) => {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20">
      <Image src={image} alt="Storm damage emergency roofing response" fill className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-900 via-brand-900/95 to-brand-900/80" />

      <div className="container relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <TriangleAlert size={14} /> Emergency Roofing
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-white/70">{description}</p>
        </div>

        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <a
            href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 text-sm font-bold text-brand-900 transition hover:bg-gold-400"
          >
            <PhoneCall size={18} /> Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            Request Emergency Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmergencyStrip;
