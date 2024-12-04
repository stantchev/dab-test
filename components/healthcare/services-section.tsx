"use client";

import { MedicalServicesCard, InsuranceCard } from "./services";

export function ServicesSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <MedicalServicesCard />
      <InsuranceCard />
    </div>
  );
}