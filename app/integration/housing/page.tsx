import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, MapPin, Phone, FileText, AlertTriangle, Info } from "lucide-react";
import Link from "next/link";

export default function HousingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Интеграция", href: "/integration" },
          { label: "Жилищно настаняване", href: "/integration/housing" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Жилищно настаняване"
          description="Информация за възможностите за жилищно настаняване на лица, получили международна закрила"
        />

        {/* Emergency Housing */}
        <Card className="bg-primary/5">
          <CardContent className="flex flex-col items-center p-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-xl font-semibold">Спешно настаняване</h2>
              <p className="mt-2 text-muted-foreground">
                Ако се нуждаете от спешно настаняване, свържете се с нас
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

        {/* Housing Options */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Home className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Временно настаняване</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 text-primary" />
                  <span>Настаняване в регистрационно-приемателни центрове</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="mt-1 h-4 w-4 text-primary" />
                  <span>Безплатно настаняване до приключване на процедурата</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="mt-1 h-4 w-4 text-primary" />
                  <span>Включва основни комунални услуги и поддръжка</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Home className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Дългосрочно настаняване</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 text-primary" />
                  <span>Съдействие при намиране на жилище под наем</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="mt-1 h-4 w-4 text-primary" />
                  <span>Помощ при сключване на договори за наем</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="mt-1 h-4 w-4 text-primary" />
                  <span>Консултации относно права и задължения на наемателите</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Important Information */}
        <Card>
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Важна информация</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-medium">Необходими документи</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Документ за самоличност или регистрационна карта</li>
                  <li>• Удостоверение за статут на закрила</li>
                  <li>• Други документи според конкретния случай</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Полезни съвети</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Проверявайте внимателно договорите преди подписване</li>
                  <li>• Изисквайте документи за собственост от наемодателя</li>
                  <li>• Пазете всички разписки за плащания</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Services */}
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Допълнителна подкрепа</h2>
            <p className="mb-4 text-muted-foreground">
              Освен помощ при намиране на жилище, предлагаме и:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Социално посредничество</li>
              <li>• Финансови консултации</li>
              <li>• Правна помощ при жилищни въпроси</li>
              <li>• Съдействие при комуникация с институции</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}