import { PhoneCall, Mail, MapPin, Clock3 } from "lucide-react";
import { CONTACT_PHONE, OPEN_HOURS } from "@/src/components/Shared/Navbar/menuItems";

const CONTACT_EMAIL = "info@ironcladroofing.com";
const SERVICE_AREA = "Dallas - Fort Worth Metroplex, TX";

const CARDS = [
  { icon: PhoneCall, title: "Call Us", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}` },
  { icon: Mail, title: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: MapPin, title: "Service Area", value: SERVICE_AREA },
  { icon: Clock3, title: "Business Hours", value: OPEN_HOURS },
];

const ContactInfo = () => {
  return (
    <section className="bg-brand-50 py-16">
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => {
          const Content = (
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-white p-6 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600/10 text-brand-600">
                <card.icon size={22} />
              </div>
              <p className="font-heading text-sm font-bold text-brand-900">{card.title}</p>
              <p className="text-sm text-brand-900/60">{card.value}</p>
            </div>
          );
          return card.href ? (
            <a key={card.title} href={card.href}>{Content}</a>
          ) : (
            <div key={card.title}>{Content}</div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactInfo;
