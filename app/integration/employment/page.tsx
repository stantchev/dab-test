import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { JobSearch } from "@/components/employment/job-search";
import { CareerSupport } from "@/components/employment/career-support";
import { TrainingPrograms } from "@/components/employment/training-programs";
import { EmploymentRights } from "@/components/employment/employment-rights";

export default function EmploymentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Интеграция", href: "/integration" },
          { label: "Заетост", href: "/integration/employment" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Заетост"
          description="Информация за възможностите за работа и професионално развитие"
        />

        <JobSearch />
        <CareerSupport />
        <TrainingPrograms />
        <EmploymentRights />
      </div>
    </div>
  );
}