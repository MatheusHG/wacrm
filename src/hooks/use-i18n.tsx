"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  type Locale,
} from "@/lib/i18n/config";
import {
  makeTranslator,
  type Dictionary,
  type Translator,
} from "@/lib/i18n/translate";
import en from "@/lib/i18n/dictionaries/en";
import pt from "@/lib/i18n/dictionaries/pt";

/**
 * I18nProvider — the client mirror of `src/lib/i18n/server.ts`.
 *
 * The locale lives in a cookie (so the server can read it and render
 * the right language with no flash). This provider is seeded with the
 * server-resolved locale via `initialLocale`, exposes the current
 * locale + a `t()` translator to client components, and on a language
 * switch:
 *   1. updates its own state (instant client re-render),
 *   2. writes the cookie + <html lang>,
 *   3. calls router.refresh() so Server Components re-render too.
 *
 * Persistence is the cookie (device + browser scoped), mirroring how
 * the theme persists to localStorage — a per-device UI preference.
 */

const DICTS: Record<Locale, Dictionary> = { en, pt };

interface I18nContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Translator;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      if (typeof document !== "undefined") {
        document.documentElement.lang = next;
        document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${LOCALE_COOKIE_MAX_AGE};samesite=lax`;
      }
      // Re-render Server Components (pages/layouts read the cookie) so
      // server-rendered text switches too, not just client text.
      router.refresh();
    },
    [router],
  );

  const t = useMemo(() => makeTranslator(DICTS[locale], en), [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Fallback for components rendered outside the provider — default
    // locale, no-op setter — so callers never crash.
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: makeTranslator(DICTS[DEFAULT_LOCALE], en),
    };
  }
  return ctx;
}

/** Alias — some call sites read better as `useTranslation()`. */
export const useTranslation = useI18n;
