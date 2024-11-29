import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function EmergencyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Спешна помощ", href: "/emergency" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Спешна помощ"
          description="Денонощна линия за спешни случаи и важни контакти"
        />

        {/* Emergency Contacts */}
        <Card className="bg-primary/5">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Спешни телефони</h3>
                </div>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="tel:+35929832095">
                      <span className="flex flex-col items-start">
                        <span className="text-sm text-muted-foreground">Спешна линия</span>
                        <span className="font-semibold">+359 2 983 2095</span>
                      </span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="tel:+35928181000">
                      <span className="flex flex-col items-start">
                        <span className="text-sm text-muted-foreground">Регистрация</span>
                        <span className="font-semibold">+359 2 81 81 1000</span>
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Работно време</h3>
                </div>
                <p className="text-muted-foreground">
                  Спешната линия е достъпна 24 часа в денонощието, 7 дни в седмицата.
                </p>
                <p className="text-muted-foreground">
                  Регистрация: Понеделник - Петък, 09:00 - 17:30
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Centers */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Центрове за настаняване</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">РПЦ София - кв. "Овча купел"</p>
                    <p className="text-sm text-muted-foreground">ул. "Монтевидео" № 21</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">РПЦ София - кв. "Военна рампа"</p>
                    <p className="text-sm text-muted-foreground">бул. "Илиянци" № 78</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Важна информация</h3>
              </div>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>• При спешен случай първо се обадете на спешния телефон</li>
                <li>• Подгответе личните си документи, ако са налични</li>
                <li>• Запазете спокойствие и следвайте инструкциите</li>
                <li>• При нужда ще бъдете насочени към най-близкия център</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}