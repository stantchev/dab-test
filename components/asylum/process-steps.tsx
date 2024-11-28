import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, FileCheck, Home, Users } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Регистрация",
    description: "Подаване на молба за международна закрила в териториално поделение на ДАБ",
  },
  {
    icon: FileCheck,
    title: "Документи",
    description: "Предоставяне на необходимите документи и лична информация",
  },
  {
    icon: Users,
    title: "Интервю",
    description: "Провеждане на интервю с представител на ДАБ",
  },
  {
    icon: Home,
    title: "Настаняване",
    description: "Настаняване в регистрационно-приемателен център",
  },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <Card key={index}>
            <CardHeader>
              <Icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}