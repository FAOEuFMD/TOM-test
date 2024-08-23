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
    name: "english",
    dir: "ltr",
    country: "United States",
    countryCode: "US",
  },
  {
    code: "es",
    name: "español",
    dir: "ltr",
    country: "Spain",
    countryCode: "ES",
  },
  {
    code: "it",
    name: "italiano",
    dir: "ltr",
    country: "Italy",
    countryCode: "IT",
  },
  {
    code: "ru",
    name: "pусский",
    dir: "ltr",
    country: "Russia",
    countryCode: "RU",
  },
  {
    code: "sr",
    name: "cрпски",
    dir: "ltr",
    country: "Serbia",
    countryCode: "RS",
  },
  // Add more languages as needed
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
