"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SearchDialog } from "./search-dialog";
import { LanguageSwitcher } from "./language-switcher";
import { EmergencyButton } from "./emergency-button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/eu-logo.png"
                alt="EU Logo"
                className="h-10 w-auto"
              />
              <span className="hidden font-semibold md:inline-block">ДАБ</span>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                <Link href="/asylum" className="text-sm font-medium transition-colors hover:text-primary">
                  Търсене на закрила
                </Link>
                <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                  Услуги
                </Link>
                <Link href="/integration" className="text-sm font-medium transition-colors hover:text-primary">
                  Интеграция
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  За нас
                </Link>
                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                  Контакти
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <EmergencyButton className="hidden md:inline-flex" />

            <SearchDialog />
            <LanguageSwitcher />

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link href="/asylum" className="text-sm font-medium transition-colors hover:text-primary">
                Търсене на закрила
              </Link>
              <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                Услуги
              </Link>
              <Link href="/integration" className="text-sm font-medium transition-colors hover:text-primary">
                Интеграция
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                За нас
              </Link>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Контакти
              </Link>
              <EmergencyButton className="w-full" />
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
