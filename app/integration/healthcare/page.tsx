import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import {
  EmergencyContact,
  ServicesSection,
  RightsSection,
  DocumentsSection,
  AdditionalInfo
} from "@/components/healthcare";

export default function HealthcarePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Интеграция", href: "/integration" },
          { label: "Здравеопазване", href: "/integration/healthcare" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Здравеопазване"
          description="Информация за достъп до здравни услуги и медицинска помощ"
        />

        <EmergencyContact />
        <ServicesSection />
        <RightsSection />
        <DocumentsSection />
        <AdditionalInfo />
      </div>
    </div>
  );
}