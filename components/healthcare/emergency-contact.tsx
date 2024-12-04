"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export function EmergencyContact() {
  return (
    <Card className="bg-primary/5">
      <CardContent className="flex flex-col items-center p-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-xl font-semibold">Спешна медицинска помощ</h2>
          <p className="mt-2 text-muted-foreground">
            При спешни случаи се обадете на телефон 112
          </p>
        </div>
        <Button size="lg" className="mt-4 md:mt-0" asChild>
          <Link href="tel:112">
            <Phone className="mr-2 h-4 w-4" />
            112
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}