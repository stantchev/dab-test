import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <h2 className="mb-8 text-2xl">Страницата не е намерена</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        Съжаляваме, но страницата която търсите не съществува или е преместена.
      </p>
      <Button asChild>
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Начална страница
        </Link>
      </Button>
    </div>
  );
}