import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Scale, Book, Heart, GraduationCap, Building2, Stethoscope, FileText } from "lucide-react";

export default function RightsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Права и задължения", href: "/rights" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Права и задължения"
          description="Информация за правата и задълженията на лицата, търсещи международна закрила"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Rights Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Права</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-start gap-3">
                <Book className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Право на пребиваване</h3>
                  <p className="text-sm text-muted-foreground">
                    Право на пребиваване на територията на Република България до приключване на производството
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Социално подпомагане</h3>
                  <p className="text-sm text-muted-foreground">
                    Право на социално подпомагане по реда и в размера, определени за българските граждани
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Образование</h3>
                  <p className="text-sm text-muted-foreground">
                    Право на достъп до образование при условията и по реда за българските граждани
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Настаняване</h3>
                  <p className="text-sm text-muted-foreground">
                    Право на настаняване в транзитен или регистрационно-приемателен център
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Stethoscope className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Здравно осигуряване</h3>
                  <p className="text-sm text-muted-foreground">
                    Право на здравно осигуряване и достъп до медицинска помощ
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Obligations Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                <CardTitle>Задължения</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Спазване на законите</h3>
                  <p className="text-sm text-muted-foreground">
                    Задължение за спазване на Конституцията и законите на Република България
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Съдействие на длъжностните лица</h3>
                  <p className="text-sm text-muted-foreground">
                    Оказване на съдействие на длъжностните лица при изпълнение на служебните им задължения
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Предоставяне на информация</h3>
                  <p className="text-sm text-muted-foreground">
                    Предоставяне на всички данни и документи, с които разполагат
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Уведомяване за промени</h3>
                  <p className="text-sm text-muted-foreground">
                    Уведомяване за промяна на адреса и гражданското състояние
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Явяване на интервюта</h3>
                  <p className="text-sm text-muted-foreground">
                    Задължително явяване на определените интервюта в хода на производството
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Важна информация</h2>
            <p className="mb-4 text-muted-foreground">
              Правата и задълженията на чужденците, търсещи международна закрила, са регламентирани в Закона за убежището и бежанците и подзаконовите нормативни актове.
            </p>
            <p className="text-muted-foreground">
              За повече информация можете да се обърнете към служителите в центровете за настаняване или да се свържете с юридическите консултанти на ДАБ.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}