import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Поверителност", href: "/privacy" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Политика за поверителност"
          description="Информация за обработката и защитата на лични данни"
        />

        <Card>
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Общи положения</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Държавната агенция за бежанците при МС обработва лични данни в съответствие с Регламент (ЕС) 2016/679 (Общ регламент относно защитата на данните) и приложимото национално законодателство.
            </p>
            <p className="text-muted-foreground">
              Настоящата политика за поверителност описва как събираме, използваме и защитаваме Вашите лични данни.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Защита на данните</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Криптиране на чувствителна информация</li>
                <li>• Контролиран достъп до лични данни</li>
                <li>• Редовни одити за сигурност</li>
                <li>• Обучение на служителите</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Вашите права</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Достъп до личните данни</li>
                <li>• Коригиране на неточни данни</li>
                <li>• Изтриване на данни</li>
                <li>• Ограничаване на обработката</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Обработка на данни</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Цели на обработката</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Разглеждане на молби за международна закрила</li>
                  <li>• Предоставяне на социална подкрепа</li>
                  <li>• Административно обслужване</li>
                  <li>• Статистически цели</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Срок на съхранение</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Съгласно законовите изисквания</li>
                  <li>• За периода на предоставяне на закрила</li>
                  <li>• До постигане на целите на обработката</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Контакти</h2>
            <p className="mb-4 text-muted-foreground">
              За въпроси относно обработката на лични данни можете да се свържете с:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Длъжностно лице по защита на данните</p>
              <p>Email: dpo@saref.government.bg</p>
              <p>Тел: +359 2 81 81 1000</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}