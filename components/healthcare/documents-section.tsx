"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export function DocumentsSection() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6 flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Необходими документи</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium">За здравно осигуряване</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Регистрационна карта</li>
              <li>• Документ за самоличност</li>
              <li>• Удостоверение за статут</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium">За медицинска помощ</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Здравноосигурителна книжка</li>
              <li>• Направление (при нужда)</li>
              <li>• Медицинска документация</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}