import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function StructurePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Структура", href: "/structure" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Структура"
          description="Организационна структура на Държавната агенция за бежанците"
        />

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Ръководство</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Председател</h3>
                  <p className="text-sm text-muted-foreground">
                    Осъществява цялостното ръководство на Агенцията
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Заместник-председатели</h3>
                  <p className="text-sm text-muted-foreground">
                    Подпомагат председателя при изпълнение на правомощията му
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Основни дирекции</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-medium">Административна дирекция</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Човешки ресурси</li>
                    <li>• Финанси и счетоводство</li>
                    <li>• Правно обслужване</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Специализирана администрация</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Производство за международна закрила</li>
                    <li>• Социална адаптация</li>
                    <li>• Информация и анализ</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Териториални поделения</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-medium">Регистрационно-приемателни центрове</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• РПЦ София</li>
                    <li>• РПЦ Харманли</li>
                    <li>• РПЦ Баня</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Транзитни центрове</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ТЦ Пъстрогор</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}