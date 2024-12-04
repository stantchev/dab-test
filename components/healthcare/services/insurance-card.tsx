"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, Heart, AlertCircle } from "lucide-react";

export function InsuranceCard() {
  return (
    <Card>
      <CardHeader>
        <FileText className="h-8 w-8 text-primary" />
        <CardTitle className="mt-4">Здравно осигуряване</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <Clock className="mt-1 h-4 w-4 text-primary" />
            <span>Автоматично здравно осигуряване по време на процедурата</span>
          </li>
          <li className="flex items-start gap-2">
            <Heart className="mt-1 h-4 w-4 text-primary" />
            <span>Пълен достъп до здравната система</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle className="mt-1 h-4 w-4 text-primary" />
            <span>Специални грижи за уязвими групи</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}