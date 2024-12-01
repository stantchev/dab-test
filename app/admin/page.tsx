import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function DevelopmentNotesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Development Notes", href: "/development-notes" }
        ]}
      />

      <div className="mt-8 space-y-8">
        <PageHeader
          title="Development Notes"
          description="Details of recent development efforts and completed features."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Rights Page</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Clear breakdown of rights and obligations.</li>
                <li>Visual representation using appropriate icons for different categories.</li>
                <li>Detailed descriptions for each right and obligation.</li>
                <li>Inclusion of additional important information.</li>
                <li>Consistent styling aligned with the application's design language.</li>
                <li>Fully responsive layout for varying screen sizes.</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Path: <span className="font-semibold">/rights</span>
              </p>
              <p className="text-muted-foreground">
                The page is now live and seamlessly integrated into the application's design system.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">FAQ Page</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Accordion component for structured and organized navigation.</li>
                <li>Coverage of common questions related to asylum procedures.</li>
                <li>Clear and detailed answers for user clarity.</li>
                <li>Contact information for additional support.</li>
                <li>Responsive layout for optimal usability on any device.</li>
                <li>Consistent styling in line with the rest of the application.</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Path: <span className="font-semibold">/faq</span>
              </p>
              <p className="text-muted-foreground">
                The FAQ page is deployed and provides easily accessible, valuable information for users.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Housing Integration Page</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Emergency housing contact information.</li>
                <li>Comprehensive details on temporary and long-term housing options.</li>
                <li>Guidance on required documentation for housing applications.</li>
                <li>Additional support services and practical tips for users.</li>
                <li>Navigation breadcrumbs for easy usability.</li>
                <li>Fully responsive design for compatibility across all devices.</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Path: <span className="font-semibold">/housing</span>
              </p>
              <p className="text-muted-foreground">
                The page is live, offering critical housing assistance information for refugees and asylum seekers, integrated with the application’s overall design.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Education Integration Page</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Overview of educational opportunities.</li>
                <li>Information about language courses and school education.</li>
                <li>Details on additional educational support and required documentation.</li>
                <li>Guidance on higher education opportunities.</li>
                <li>Clear navigation with contact options for further assistance.</li>
                <li>Responsive design for optimal use across all devices.</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Path: <span className="font-semibold">/education</span>
              </p>
              <p className="text-muted-foreground">
                This page is now operational, providing a user-friendly resource for educational support, ensuring a cohesive design experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
