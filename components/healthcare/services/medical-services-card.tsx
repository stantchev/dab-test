// components/healthcare/services/medical-services-card.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Ensure this path is correct
import { Heart, Stethoscope, Pill, Hospital } from "lucide-react"; // Updated import

export function MedicalServicesCard() {
  return (
    <Card>
      <CardHeader>
        <Hospital className="h-8 w-8 text-primary" />
        <CardTitle className="mt-4">Медицинско обслужване</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <Heart className="mt-1 h-4 w-4 text-primary" />
            <span>Безплатна спешна медицинска помощ</span>
          </li>
          <li className="flex items-start gap-2">
            <Stethoscope className="mt-1 h-4 w-4 text-primary" />
            <span>Достъп до общопрактикуващ лекар</span>
          </li>
          <li className="flex items-start gap-2">
            <Pill className="mt-1 h-4 w-4 text-primary" /> {/* Updated to Pill */}
            <span>Основни здравни услуги и лекарства</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}