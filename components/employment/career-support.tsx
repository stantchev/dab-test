"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, FileText } from "lucide-react";

export function CareerSupport() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <CardHeader>
          <Lightbulb className="h-8 w-8 text-primary" />
          <CardTitle className="mt-4">Кариерно консултиране</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Оценка на умения и квалификация</li>
            <li>• Професионално ориентиране</li>
            <li>• Изготвяне на CV</li>
            <li>• Подготовка за интервю</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Users className="h-8 w-8 text-primary" />
          <CardTitle className="mt-4">Менторска програма</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Индивидуална подкрепа</li>
            <li>• Споделяне на опит</li>
            <li>• Работа с ментор</li>
            <li>• Проследяване на напредъка</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <FileText className="h-8 w-8 text-primary" />
          <CardTitle className="mt-4">Документи</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Разрешение за работа</li>
            <li>• Трудов договор</li>
            <li>• Здравни документи</li>
            <li>• Удостоверения за квалификация</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}