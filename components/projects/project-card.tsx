"use client";

import { Project } from "@/lib/projects-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, Coins } from "lucide-react";

const statusColors = {
  active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  planned: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
};

const statusLabels = {
  active: "Активен",
  completed: "Приключил",
  planned: "Планиран"
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader className="border-b p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <Badge variant="secondary" className={statusColors[project.status]}>
            {statusLabels[project.status]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{project.description}</p>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Период: {project.period}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Coins className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Бюджет: {project.budget}</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Цели:</span>
            </div>
            <ul className="ml-6 list-disc space-y-1">
              {project.objectives.map((objective, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {objective}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="rounded-lg bg-muted p-3">
            <p className="text-sm">
              <span className="font-medium">Източник на финансиране:</span>{" "}
              <span className="text-muted-foreground">{project.fundingSource}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}