import type { Metadata } from "next";
import RepairReplacementTemplet from "@/src/components/Ui/RepairReplacementPage/RepairReplacementTemplet";

export const metadata: Metadata = {
  title: "Roof Repair & Replacement",
  description:
    "Fast, professional roof repair and replacement services for storm damage, leaks, missing shingles, and aging roofs.",
};

export default function RoofRepairReplacementPage() {
  return <RepairReplacementTemplet />;
}
