"use client";

import { Procedure } from "@/lib/procedures-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, FileText, Scale } from "lucide-react";

export function ProcedureCard({ procedure }: { procedure: Procedure }) {
  return (
    <Card>
      <CardHeader className="border-b p-4">
        <h3 className="text-xl font-semibold">{procedure.title}</h3>
        <p className="text-sm text-muted-foreground">{procedure.description}</p>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="steps">
              <AccordionTrigger>Етапи на процедурата</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  {procedure.steps.map((step, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium">{index + 1}. {step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="documents">
              <AccordionTrigger>Необходими документи</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-4 pt-4">
                  {procedure.documents.map((document, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {document}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col gap-4 rounded-lg bg-muted p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <p className="text-sm">
                <span className="font-medium">Срок: </span>
                <span className="text-muted-foreground">{procedure.duration}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-primary" />
              <p className="text-sm">
                <span className="font-medium">Правно основание: </span>
                <span className="text-muted-foreground">{procedure.legalBasis}</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}