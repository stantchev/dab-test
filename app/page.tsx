import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, FileText, Globe2, Users, Phone, HandHeart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center py-32">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Държавна агенция за бежанците
            </h1>
            <p className="mb-8 text-lg text-white/90">
              Подкрепа, защита и интеграция на търсещите международна закрила в България
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/asylum">
                  Търсене на закрила
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20" asChild>
                <Link href="/emergency">
                  <Phone className="mr-2 h-4 w-4" />
                  Спешна помощ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Бързи връзки</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <HandHeart className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Търсене на закрила</h3>
                <p className="mb-4 text-muted-foreground">
                  Информация за процедурата по предоставяне на международна закрила
                </p>
                <Button variant="link" asChild>
                  <Link href="/asylum">Научете повече</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <FileText className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Документи</h3>
                <p className="mb-4 text-muted-foreground">
                  Формуляри, заявления и правна информация
                </p>
                <Button variant="link" asChild>
                  <Link href="/documents">Към документите</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Интеграция</h3>
                <p className="mb-4 text-muted-foreground">
                  Програми за интеграция и подкрепа
                </p>
                <Button variant="link" asChild>
                  <Link href="/integration">Вижте програмите</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Статистика</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: "1,234", label: "Подадени молби" },
              { number: "856", label: "Предоставена закрила" },
              { number: "432", label: "Интеграционни програми" },
              { number: "12", label: "Центрове за настаняване" },
            ].map((stat, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <p className="mb-2 text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Новини и съобщения</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                date: "2024-03-20",
                title: "Нова програма за интеграция",
                excerpt: "Стартира нова програма за интеграция на лица с предоставена международна закрила...",
              },
              {
                date: "2024-03-18",
                title: "Промени в процедурите",
                excerpt: "Важна информация относно промените в процедурите за кандидатстване...",
              },
              {
                date: "2024-03-15",
                title: "Международна конференция",
                excerpt: "ДАБ участва в международна конференция за правата на бежанците...",
              },
            ].map((news, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <time className="text-sm text-muted-foreground">
                    {new Date(news.date).toLocaleDateString("bg-BG")}
                  </time>
                  <h3 className="mb-2 mt-2 text-xl font-semibold">
                    {news.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {news.excerpt}
                  </p>
                  <Button variant="link" className="px-0">
                    Прочетете повече
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}