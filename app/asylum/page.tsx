import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { ProcessSteps } from "@/components/asylum/process-steps";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function AsylumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Търсене на закрила", href: "/asylum" }
        ]}
      />
      
      <div className="mt-8 space-y-12">
        <PageHeader
          title="Търсене на международна закрила"
          description="Информация за процедурата по предоставяне на международна закрила в Република България"
        />

        {/* Emergency Contact */}
        <Card className="bg-primary/5">
          <CardContent className="flex flex-col items-center p-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-xl font-semibold">Спешна помощ</h2>
              <p className="mt-2 text-muted-foreground">
                Ако се нуждаете от спешна помощ, можете да се свържете с нас денонощно
              </p>
            </div>
            <Button size="lg" className="mt-4 md:mt-0" asChild>
              <Link href="tel:+35929832095">
                <Phone className="mr-2 h-4 w-4" />
                +359 2 983 2095
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Процес на кандидатстване</h2>
          <ProcessSteps />
        </section>

        {/* Important Information */}
        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <FileText className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Необходими документи</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Документ за самоличност (ако е наличен)</li>
                <li>• Други документи, доказващи самоличността</li>
                <li>• Документи, свързани с причините за търсене на закрила</li>
                <li>• Медицински документи (ако са налични)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <MapPin className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Центрове за настаняване</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• РПЦ София - кв. "Овча купел"</li>
                <li>• РПЦ София - кв. "Военна рампа"</li>
                <li>• РПЦ Харманли</li>
                <li>• ТЦ Пъстрогор</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Rights and Obligations */}
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Права и задължения</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Права</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Право на пребиваване и документ за самоличност</li>
                  <li>• Право на подслон и храна</li>
                  <li>• Право на социално подпомагане</li>
                  <li>• Право на здравно осигуряване</li>
                  <li>• Право на образование</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Задължения</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Спазване на българското законодателство</li>
                  <li>• Съдействие на длъжностните лица</li>
                  <li>• Явяване на интервюта</li>
                  <li>• Уведомяване при промяна на адреса</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}