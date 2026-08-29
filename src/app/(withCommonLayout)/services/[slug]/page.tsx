import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplet from "@/src/components/Ui/ServicesPage/ServiceDetailTemplet";
import { SERVICES, getServiceBySlug } from "@/src/components/Ui/Roofing/shared/servicesData";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetailTemplet service={service} />;
}
