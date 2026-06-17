"use client";

import { useI18n } from "@/hooks/use-i18n";
import { LOCALES, LOCALE_META, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Language toggle — a compact header control that flips the interface
 * language. Mirrors ModeToggle: a single button whose label always
 * names the destination language, so screen-reader users hear what the
 * click does. With two locales it cycles; add a third to LOCALES and it
 * keeps cycling in order.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  const current = LOCALE_META.find((l) => l.id === locale) ?? LOCALE_META[0];
  const nextLocale: Locale =
    LOCALES[(LOCALES.indexOf(locale) + 1) % LOCALES.length];
  const next = LOCALE_META.find((l) => l.id === nextLocale) ?? LOCALE_META[0];

  const label = t("common.language.switchTo", { lang: next.label });

  return (
    <button
      type="button"
      onClick={() => setLocale(nextLocale)}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-10 items-center justify-center gap-1.5 rounded-md px-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className,
      )}
    >
      <span aria-hidden>{current.flag}</span>
      <span>{current.short}</span>
    </button>
  );
}
