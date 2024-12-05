"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, Building2, MapPin } from "lucide-react";
import Link from "next/link";

export function JobSearch() {
  return (
    <Card className="bg-primary/5">
      <CardContent className="p-6">
        <div className="mb-6 flex items-center gap-2">
          <Search className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Търсене на работа</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Briefcase className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Бюро по труда</p>
                <p className="text-sm text-muted-foreground">
                  Регистрация и достъп до обяви за работа
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Building2 className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Трудови посредници</p>
                <p className="text-sm text-muted-foreground">
                  Съдействие при намиране на работа
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Локации</p>
                <p className="text-sm text-muted-foreground">
                  Работни места в цялата страна
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <Button asChild>
              <Link href="/contact">Свържете се с консултант</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/documents">Вижте необходимите документи</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}