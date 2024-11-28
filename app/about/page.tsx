import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "За нас", href: "/about" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="За нас"
          description="Агенция за развитие на електронното управление"
        />

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Мисия</h2>
              <p className="text-muted-foreground">
                Нашата мисия е да модернизираме и трансформираме държавната администрация
                чрез внедряване на съвременни технологични решения и дигитални услуги.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Визия</h2>
              <p className="text-muted-foreground">
                Стремим се към създаване на модерна, ефективна и прозрачна държавна
                администрация, която предоставя качествени електронни услуги на
                гражданите и бизнеса.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">История</h2>
            <p className="text-muted-foreground">
              Агенцията за развитие на електронното управление е създадена с цел
              да координира политиките и да реализира проектите в областта на
              електронното управление в България.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}