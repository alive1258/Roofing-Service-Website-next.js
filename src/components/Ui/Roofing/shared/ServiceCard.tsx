import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  image?: string;
}

const ServiceCard = ({ icon: Icon, title, description, href, image }: ServiceCardProps) => {
  const content = (
    <div className="group h-full overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {image && (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg">
            <Icon size={20} />
          </div>
        </div>
      )}
      <div className="p-6">
        {!image && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
            <Icon size={22} />
          </div>
        )}
        <h3 className="font-heading text-lg font-bold text-brand-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-900/60">{description}</p>
        {href && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5">
            Learn More <ArrowRight size={15} />
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default ServiceCard;
