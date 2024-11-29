"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface SearchResult {
  title: string;
  description: string;
  url: string;
}

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Simulate search results - in a real application, this would call an API
    const demoResults: SearchResult[] = query
      ? [
          {
            title: "Търсене на закрила",
            description: "Информация за процедурата по предоставяне на международна закрила",
            url: "/asylum",
          },
          {
            title: "Контакти",
            description: "Адреси и телефони за връзка с ДАБ",
            url: "/contact",
          },
          {
            title: "Документи",
            description: "Важни документи и формуляри",
            url: "/documents",
          },
        ]
      : [];
    setResults(demoResults);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Търсене</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="Търсете в сайта..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="col-span-3"
          />
          {results.length > 0 && (
            <ScrollArea className="h-[300px] rounded-md border p-4">
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">
                      <Link
                        href={result.url}
                        className="hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {result.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}