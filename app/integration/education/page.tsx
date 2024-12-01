import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Book, Globe2, Users, Calendar, FileText, School } from "lucide-react";
import Link from "next/link";

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Интеграция", href: "/integration" },
          { label: "Образование", href: "/integration/education" }
        ]}
      />
      
      <div className="mt-8 space-y-8">
        <PageHeader
          title="Образование"
          description="Информация за образователни възможности и езикови курсове"
        />

        {/* Quick Contact */}
        <Card className="bg-primary/5">
          <CardContent className="flex flex-col items-center p-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-xl font-semibold">Нуждаете се от съдействие?</h2>
              <p className="mt-2 text-muted-foreground">
                Свържете се с нашите образователни консултанти
              </p>
            </div>
            <Button size="lg" className="mt-4 md:mt-0" asChild>
              <Link href="/contact">
                Свържете се с нас
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Main Educational Programs */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <School className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Училищно образование</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Book className="mt-1 h-4 w-4 text-primary" />
                  <span>Безплатно основно и средно образование</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="mt-1 h-4 w-4 text-primary" />
                  <span>Индивидуален подход към всяко дете</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="mt-1 h-4 w-4 text-primary" />
                  <span>Възможност за записване през цялата учебна година</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe2 className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Езиково обучение</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Book className="mt-1 h-4 w-4 text-primary" />
                  <span>Безплатни курсове по български език</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="mt-1 h-4 w-4 text-primary" />
                  <span>Групи според нивото на владеене</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="mt-1 h-4 w-4 text-primary" />
                  <span>Гъвкав график на обучение</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Educational Support */}
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-6 text-xl font-semibold">Допълнителна образователна подкрепа</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-medium">За деца</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Допълнителни часове по български език</li>
                  <li>• Помощ при подготовка на домашни</li>
                  <li>• Извънкласни дейности</li>
                  <li>• Психологическа подкрепа</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-medium">За възрастни</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Професионално ориентиране</li>
                  <li>• Курсове за професионална квалификация</li>
                  <li>• Признаване на образование</li>
                  <li>• Консултации за продължаващо обучение</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card>
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Необходими документи</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-medium">За училищно образование</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Документ за самоличност</li>
                  <li>• Удостоверение за раждане (за деца)</li>
                  <li>• Предишни училищни документи (ако са налични)</li>
                  <li>• Медицински документи</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium">За езикови курсове</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Документ за самоличност</li>
                  <li>• Регистрационна карта</li>
                  <li>• Формуляр за записване</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Higher Education */}
        <Card>
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Висше образование</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Лицата с предоставена международна закрила имат право да кандидатстват във висши учебни заведения при същите условия като българските граждани.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-medium">Възможности</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Подготвителни курсове</li>
                  <li>• Стипендии за обучение</li>
                  <li>• Студентско настаняване</li>
                  <li>• Академично консултиране</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Изисквания</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Диплома за средно образование</li>
                  <li>• Владеене на български език</li>
                  <li>• Успешно положени кандидат-студентски изпити</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}