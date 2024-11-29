"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/use-language";

const emergencyContacts = {
  bg: {
    title: "Спешна помощ",
    description: "Денонощна телефонна линия за спешни случаи",
    numbers: [
      { label: "Спешна линия", number: "+359 2 983 2095" },
      { label: "Регистрация", number: "+359 2 81 81 1000" },
    ],
  },
  en: {
    title: "Emergency Help",
    description: "24/7 Emergency Hotline",
    numbers: [
      { label: "Emergency Line", number: "+359 2 983 2095" },
      { label: "Registration", number: "+359 2 81 81 1000" },
    ],
  },
  ar: {
    title: "مساعدة طارئة",
    description: "خط ساخن للطوارئ على مدار الساعة",
    numbers: [
      { label: "خط الطوارئ", number: "+359 2 983 2095" },
      { label: "التسجيل", number: "+359 2 81 81 1000" },
    ],
  },
  fr: {
    title: "Aide d'urgence",
    description: "Ligne d'assistance d'urgence 24h/24",
    numbers: [
      { label: "Ligne d'urgence", number: "+359 2 983 2095" },
      { label: "Inscription", number: "+359 2 81 81 1000" },
    ],
  },
};

export function EmergencyButton({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const content = emergencyContacts[language];

  const handleCall = (number: string) => {
    window.location.href = `tel:${number.replace(/\s+/g, '')}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className={className}>
          <Phone className="mr-2 h-4 w-4" />
          {content.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">{content.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <p className="text-center text-muted-foreground">
            {content.description}
          </p>
          <div className="grid gap-4">
            {content.numbers.map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-4"
                onClick={() => handleCall(contact.number)}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-normal text-muted-foreground">
                    {contact.label}
                  </span>
                  <span className="text-lg font-semibold">{contact.number}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}