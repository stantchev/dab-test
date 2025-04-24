import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { AccessibilitySection } from "@/components/accessibility/accessibility-section";
import { accessibilityData } from "@/lib/accessibility-data";

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Достъпност", href: "/accessibility" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Достъпност"
          description="Информация за достъпността на уебсайта"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {Object.values(accessibilityData).map((section, index) => (
            <AccessibilitySection
              key={index}
              title={section.title}
              description={section.description}
              items={section.items}
              iconName={section.iconName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}