import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Home, Heart } from "lucide-react";
import Link from "next/link";

export default function IntegrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Интеграция", href: "/integration" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Програми за интеграция"
          description="Подкрепа за успешна интеграция в българското общество"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Образование</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Достъп до образование и езикови курсове за всички възрасти
              </p>
              <Button variant="outline" asChild>
                <Link href="/integration/education">Научете повече</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Заетост</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Професионално ориентиране и съдействие при търсене на работа
              </p>
              <Button variant="outline" asChild>
                <Link href="/integration/employment">Научете повече</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Home className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Жилищно настаняване</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Подкрепа при намиране на жилище и временно настаняване
              </p>
              <Button variant="outline" asChild>
                <Link href="/integration/housing">Научете повече</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Здравеопазване</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Информация за достъп до здравни услуги и осигуряване
              </p>
              <Button variant="outline" asChild>
                <Link href="/integration/healthcare">Научете повече</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Допълнителна подкрепа</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Освен основните направления за интеграция, предлагаме и:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Социално-културна ориентация</li>
                <li>Психологическа подкрепа</li>
                <li>Правна помощ</li>
                <li>Съдействие при административни процедури</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}