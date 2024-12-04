"use client";

import { Card, CardContent } from "@/components/ui/card";

export function RightsSection() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Здравни права</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-medium">Основни права</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Право на спешна медицинска помощ</li>
              <li>• Право на избор на лекар</li>
              <li>• Право на профилактични прегледи</li>
              <li>• Право на ваксинации</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-medium">Специализирана помощ</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Достъп до специалисти</li>
              <li>• Болнично лечение</li>
              <li>• Рехабилитация</li>
              <li>• Психологическа подкрепа</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}