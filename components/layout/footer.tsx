import { cn } from "@/lib/utils";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("w-full border-t bg-muted/50", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">За ДАБ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="transition-colors hover:text-primary">За нас</Link></li>
              <li><Link href="/structure" className="transition-colors hover:text-primary">Структура</Link></li>
              <li><Link href="/centers" className="transition-colors hover:text-primary">Центрове</Link></li>
              <li><Link href="/projects" className="transition-colors hover:text-primary">Проекти</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/asylum" className="transition-colors hover:text-primary">Търсене на закрила</Link></li>
              <li><Link href="/procedures" className="transition-colors hover:text-primary">Процедури</Link></li>
              <li><Link href="/rights" className="transition-colors hover:text-primary">Права и задължения</Link></li>
              <li><Link href="/faq" className="transition-colors hover:text-primary">Често задавани въпроси</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Интеграция</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/integration/housing" className="transition-colors hover:text-primary">Жилищно настаняване</Link></li>
              <li><Link href="/integration/education" className="transition-colors hover:text-primary">Образование</Link></li>
              <li><Link href="/integration/employment" className="transition-colors hover:text-primary">Заетост</Link></li>
              <li><Link href="/integration/healthcare" className="transition-colors hover:text-primary">Здравеопазване</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Контакти</h3>
            <address className="not-italic">
              <p className="text-sm">ул. "Монтевидео" № 21</p>
              <p className="text-sm">София 1618</p>
              <p className="mt-2 text-sm">Тел: +359 2 81 81 1000</p>
              <p className="text-sm">Email: sar@saref.government.bg</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Държавна агенция за бежанците при МС. Всички права запазени.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Поверителност
              </Link>
              <Link href="/accessibility" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Достъпност
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Карта на сайта
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}