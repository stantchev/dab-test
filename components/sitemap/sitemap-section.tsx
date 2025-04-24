"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SitemapLink {
  label: string;
  href: string;
}

interface SitemapSectionProps {
  title: string;
  iconName: string;
  links: SitemapLink[];
}

export function SitemapSection({ title, iconName, links }: SitemapSectionProps) {
  // Dynamically import icons to avoid server component issues
  const Icon = require('lucide-react')[iconName] as LucideIcon;
  
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link 
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}