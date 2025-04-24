import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { SitemapSection } from "@/components/sitemap/sitemap-section";
import { sitemapData } from "@/lib/sitemap-data";

const sections = [
  { title: "Основни страници", iconName: "Home", data: sitemapData.main },
  { title: "Услуги", iconName: "FileText", data: sitemapData.services },
  { title: "Интеграция", iconName: "Users", data: sitemapData.integration },
  { title: "Информация", iconName: "Info", data: sitemapData.info },
  { title: "Правна информация", iconName: "Scale", data: sitemapData.legal },
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Карта на сайта", href: "/sitemap" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Карта на сайта"
          description="Пълен списък на всички страници в сайта"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <SitemapSection
              key={index}
              title={section.title}
              iconName={section.iconName}
              links={section.data}
            />
          ))}
        </div>
      </div>
    </div>
  );
}