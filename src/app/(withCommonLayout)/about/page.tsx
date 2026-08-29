import type { Metadata } from "next";
import AboutTemplet from "@/src/components/Ui/AboutPage/AboutTemplet";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Licensed and insured roofing contractors with 15+ years of experience serving the greater Dallas-Fort Worth area.",
};

export default function AboutPage() {
  return <AboutTemplet />;
}
