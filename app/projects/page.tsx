import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectCard } from "@/components/projects/project-card";
import { projectsData } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Проекти", href: "/projects" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Проекти и програми"
          description="Текущи и планирани проекти за развитие и модернизация"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}