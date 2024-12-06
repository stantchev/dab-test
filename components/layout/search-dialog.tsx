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

// Static data for real-time search
// Static data for the footer pages (your provided elements)
const staticData: SearchResult[] = [
  {
    title: "За нас",
    description: "Научете повече за нашата организация и нейната мисия.",
    url: "/about",
  },
  {
    title: "Структура",
    description: "Как е организирана нашата агенция.",
    url: "/structure",
  },
  {
    title: "Центрове",
    description: "Информация за нашите настанителни и приемащи центрове.",
    url: "/centers",
  },
  {
    title: "Проекти",
    description: "Научете повече за нашите текущи и бъдещи проекти.",
    url: "/projects",
  },
  {
    title: "Търсене на закрила",
    description: "Какви са процедурите за търсене на международна закрила.",
    url: "/asylum",
  },
  {
    title: "Процедури",
    description: "Подробности за различни процедури, свързани със закрила.",
    url: "/procedures",
  },
  {
    title: "Права и задължения",
    description: "Какви са правата и задълженията на лицата, търсещи закрила.",
    url: "/rights",
  },
  {
    title: "Често задавани въпроси",
    description: "Отговори на често задавани въпроси по въпросите за закрила.",
    url: "/faq",
  },
  {
    title: "Жилищно настаняване",
    description: "Какви възможности за жилищно настаняване предлагаме.",
    url: "integration/housing",
  },
  {
    title: "Образование",
    description: "Образователни услуги за бежанци и хора с нужда от закрила.",
    url: "integration/education",
  },
  {
    title: "Заетост",
    description: "Програмите ни за заетост на бежанци и лица, търсещи закрила.",
    url: "integration/employment",
  },
  {
    title: "Здравеопазване",
    description: "Достъп до здравни услуги за бежанци и търсещи закрила.",
    url: "integration/healthcare",
  },
];

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim().length === 0) {
      setError("Моля, въведете ключова дума за търсене.");
      setResults([]);
      return;
    }

    const filteredResults = staticData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredResults.length === 0) {
      setError(`Няма намерени резултати за "${query}".`);
    } else {
      setError("");
    }

    setResults(filteredResults);
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
          {error && <p className="text-sm text-red-500">{error}</p>}
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
