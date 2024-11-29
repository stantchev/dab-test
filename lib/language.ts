export type Language = 'bg' | 'en' | 'ar' | 'fr';

export const languages = {
  bg: 'Български',
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
} as const;

export const languageNames = {
  bg: 'Bulgarian',
  en: 'English',
  ar: 'Arabic',
  fr: 'French',
} as const;

export const defaultLanguage: Language = 'bg';