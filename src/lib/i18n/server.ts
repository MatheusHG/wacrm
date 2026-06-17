import "server-only";

import { cookies } from "next/headers";

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  isLocale,
  type Locale,
} from "./config";
import { makeTranslator, type Dictionary, type Translator } from "./translate";
import en from "./dictionaries/en";
import pt from "./dictionaries/pt";

const DICTS: Record<Locale, Dictionary> = { en, pt };

/**
 * Read the active locale on the server from the `wacrm.locale` cookie.
 * Server Components/pages call this to render in the right language —
 * the client mirror lives in `src/hooks/use-i18n.tsx`. Falls back to
 * the default locale when the cookie is missing or invalid.
 */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/**
 * Build a `t(key, vars?)` for the current server locale, falling back
 * to English then to the key. Usage in an async Server Component:
 *
 *   const t = await getT();
 *   return <h1>{t("settings.title")}</h1>;
 */
export async function getT(): Promise<Translator> {
  const locale = await getLocale();
  return makeTranslator(DICTS[locale], en);
}
