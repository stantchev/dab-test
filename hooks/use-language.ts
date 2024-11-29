"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, defaultLanguage } from '@/lib/language';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: defaultLanguage,
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
    }
  )
);