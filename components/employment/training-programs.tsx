"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Globe2, Laptop, Wrench } from "lucide-react";

export function TrainingPrograms() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Програми за обучение</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Globe2 className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Езиково обучение</p>
                <p className="text-sm text-muted-foreground">
                  Курсове по български език за различни нива
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Laptop className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Дигитални умения</p>
                <p className="text-sm text-muted-foreground">
                  Компютърна грамотност и работа с офис програми
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Wrench className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Професионални курсове</p>
                <p className="text-sm text-muted-foreground">
                  Придобиване на професионална квалификация
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GraduationCap className="mt-1 h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Признаване на квалификация</p>
                <p className="text-sm text-muted-foreground">
                  Съдействие при признаване на дипломи и сертификати
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}