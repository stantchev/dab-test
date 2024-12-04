"use client";

import { Card, CardContent } from "@/components/ui/card";

export function AdditionalInfo() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Важна информация</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            При нужда от медицинска помощ можете да се обърнете към:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Медицинските кабинети в центровете за настаняване</li>
            <li>• Личен лекар след регистрация</li>
            <li>• Спешна помощ при спешни случаи</li>
            <li>• Здравни медиатори за съдействие</li>
          </ul>
          <div className="mt-6 rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              За повече информация и съдействие можете да се свържете с нашите здравни консултанти на телефон: +359 2 81 81 1000
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}