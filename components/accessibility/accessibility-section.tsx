"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AccessibilitySectionProps {
  title: string;
  description: string;
  items: string[];
  iconName: string;
}

export function AccessibilitySection({ title, description, items, iconName }: AccessibilitySectionProps) {
  const Icon = require('lucide-react')[iconName] as LucideIcon;
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6 flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              • {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}