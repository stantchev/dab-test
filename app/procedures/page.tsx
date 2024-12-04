import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { ProcedureCard } from "@/components/procedures/procedure-card";
import { proceduresData } from "@/lib/procedures-data";

export default function ProceduresPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Процедури", href: "/procedures" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Процедури"
          description="Информация за процедурите по предоставяне на международна закрила"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {proceduresData.map((procedure, index) => (
            <ProcedureCard key={index} procedure={procedure} />
          ))}
        </div>
      </div>
    </div>
  );
}