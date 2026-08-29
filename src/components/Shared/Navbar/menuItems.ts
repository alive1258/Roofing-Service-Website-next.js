export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "Services", href: "/services" },
  { display: "Repair & Replacement", href: "/roof-repair-replacement" },
  { display: "About", href: "/about" },
  { display: "Contact", href: "/contact" },
];

// TODO: replace with the roofing company's real phone number/hours
export const CONTACT_PHONE = "+1 (800) 555-0148";
export const OPEN_HOURS = "Mon - Fri: 8am - 6pm, Sat: 9am - 2pm";
