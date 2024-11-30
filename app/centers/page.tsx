import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { CenterCard } from "@/components/centers/center-card";
import { centersData } from "@/lib/centers-data";

export default function CentersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Центрове", href: "/centers" }
        ]}
      />
      
      <div className="mt-8 space-y-12">
        <PageHeader
          title="Центрове за настаняване"
          description="Регистрационно-приемателни и транзитни центрове на територията на Република България"
        />

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Регистрационно-приемателни центрове</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {centersData.registrationCenters.map((center, index) => (
              <CenterCard key={index} {...center} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Транзитни центрове</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {centersData.transitCenters.map((center, index) => (
              <CenterCard key={index} {...center} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}