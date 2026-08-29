import type { Metadata } from "next";
import ServicesTemplet from "@/src/components/Ui/ServicesPage/ServicesTemplet";

export const metadata: Metadata = {
  title: "Roofing Services",
  description:
    "Roof installation, repair, replacement, storm damage, inspection, maintenance, and commercial roofing services.",
};

export default function ServicesPage() {
  return <ServicesTemplet />;
}
