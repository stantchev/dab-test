import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Контакти", href: "/contact" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Контакти"
          description="Свържете се с нас за въпроси и съдействие"
        />

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-6 text-xl font-semibold">Информация за контакт</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-sm text-muted-foreground">
                      ул. "Ген. Йосиф В. Гурко" 6
                      <br />
                      София 1000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-sm text-muted-foreground">+359 2 949 2115</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">mail@e-gov.bg</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-6 text-xl font-semibold">Изпратете съобщение</h2>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Име" />
                </div>
                
                <div className="space-y-2">
                  <Input type="email" placeholder="Email" />
                </div>
                
                <div className="space-y-2">
                  <Input placeholder="Тема" />
                </div>
                
                <div className="space-y-2">
                  <Textarea
                    placeholder="Съобщение"
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full">Изпрати</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}