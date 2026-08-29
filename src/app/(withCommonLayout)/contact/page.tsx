import type { Metadata } from "next";
import ContactTemplet from "@/src/components/Ui/ContactPage/ContactTemplet";

export const metadata: Metadata = {
  title: "Contact & Free Estimate",
  description:
    "Request a free roofing estimate. Licensed and insured, serving the Dallas-Fort Worth Metroplex.",
};

export default function ContactPage() {
  return <ContactTemplet />;
}
