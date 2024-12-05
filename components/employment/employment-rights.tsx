"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Scale, Clock, Coins, Shield } from "lucide-react";

export function EmploymentRights() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Трудови права</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Scale className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Законови права</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Равно третиране на работното място</li>
                  <li>• Защита срещу дискриминация</li>
                  <li>• Безопасни условия на труд</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Работно време</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Регламентирано работно време</li>
                  <li>• Право на почивка</li>
                  <li>• Платен годишен отпуск</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Coins className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Възнаграждение</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Минимална работна заплата</li>
                  <li>• Редовно заплащане</li>
                  <li>• Извънреден труд</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Социална защита</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Здравно осигуряване</li>
                  <li>• Социално осигуряване</li>
                  <li>• Обезщетения</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}