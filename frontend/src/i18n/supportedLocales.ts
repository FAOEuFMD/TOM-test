export interface Locale {
  code: string;
  name: string;
  dir?: "ltr" | "rtl";
  country?: string;
  countryCode?: string;
}

export const supportedLocales: Locale[] = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
    country: "United States",
    countryCode: "US",
  },
  {
    code: "es",
    name: "Castellano",
    dir: "ltr",
    country: "Spain",
    countryCode: "ES",
  },
  {
    code: "it",
    name: "Italiano",
    dir: "ltr",
    country: "Italy",
    countryCode: "IT",
  },
  {
    code: "ru",
    name: "Русский",
    dir: "ltr",
    country: "Russia",
    countryCode: "RU",
  },
  {
    code: "srb",
    name: "сербский",
    dir: "ltr",
    country: "Serbia",
    countryCode: "RS",
  },
  {
    code: "bg",
    name: "Български",
    dir: "ltr",
    country: "Bulgaria",
    countryCode: "BG",
  },
];

export function getSupportedLocales(): Locale[] {
  return supportedLocales;
}

export function getSupportedLocalesCodes(): string[] {
  return supportedLocales.map(locale => locale.code);
}

export function isLocaleSupported(locale: string): boolean {
  return getSupportedLocalesCodes().includes(locale);
}
