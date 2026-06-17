/**
 * Single source of truth for the i18n locale catalog.
 *
 * Mirrors the shape of `src/lib/themes.ts`: a small list of supported
 * locales, a default, the storage key, a type guard, and UI metadata
 * for the picker. The actual translated strings live under
 * `src/lib/i18n/dictionaries/<locale>/`.
 *
 * Persistence is a COOKIE (not localStorage like the theme) because the
 * locale has to be readable on the server — many pages and components
 * render server-side, so they read the cookie to translate at render
 * time. The client mirror lives in `src/hooks/use-i18n.tsx`.
 */

export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/** Default UI language. The app ships in Portuguese; English is opt-in. */
export const DEFAULT_LOCALE: Locale = "pt";

/** Cookie name. Read on the server, written on the client. */
export const LOCALE_COOKIE = "wacrm.locale";

/** One year — the choice should stick. */
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" &&
    (LOCALES as ReadonlyArray<string>).includes(value)
  );
}

export interface LocaleMeta {
  id: Locale;
  /** Native label shown in the picker, e.g. "Português". */
  label: string;
  /** Short code shown in the compact header toggle, e.g. "PT". */
  short: string;
  /** Emoji flag for the picker chip. */
  flag: string;
}

/** Order here drives the picker. */
export const LOCALE_META: ReadonlyArray<LocaleMeta> = [
  { id: "pt", label: "Português", short: "PT", flag: "🇧🇷" },
  { id: "en", label: "English", short: "EN", flag: "🇺🇸" },
];
