"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Users } from "lucide-react";
import Link from "next/link";

interface CenterCardProps {
  name: string;
  address: string;
  phone: string;
  capacity: string;
  workingHours: string;
}

export function CenterCard({ name, address, phone, capacity, workingHours }: CenterCardProps) {
  return (
    <Card>
      <CardHeader className="border-b p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <Button variant="link" className="h-auto p-0" asChild>
              <Link href={`tel:${phone.replace(/\s/g, '')}`}>
                {phone}
              </Link>
            </Button>
          </div>
          <div className="flex items-start gap-3">
            <Users className="mt-1 h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">Капацитет: {capacity}</p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-1 h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">{workingHours}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}