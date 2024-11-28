import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'ДАБ - Държавна агенция за бежанците',
  description: 'Държавна агенция за бежанците при Министерския съвет на Република България',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pb-16 pt-8">{children}</main>
            <Footer className="mt-auto" />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}