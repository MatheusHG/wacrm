"use client";

import { Check, Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";
import { useI18n } from "@/hooks/use-i18n";
import { LOCALE_META } from "@/lib/i18n/config";
import { MODES, THEMES, type Mode } from "@/lib/themes";
import { cn } from "@/lib/utils";

/**
 * Appearance panel — light/dark mode + accent-color picker.
 *
 * Two independent controls: a mode toggle (light / dark) and the
 * accent grid. Either applies + persists immediately. No save button:
 * each change is a single attribute swap on <html>, there's nothing
 * to roll back.
 *
 * Persistence: localStorage only (device-scoped). The boot script in
 * layout.tsx replays both choices before first paint on subsequent
 * loads.
 */
export function AppearancePanel() {
  const { theme, setTheme, mode, setMode } = useTheme();
  const { locale, setLocale, t } = useI18n();
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            {t("common.language.label")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("common.language.description")}
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label={t("common.language.label")}
          className="grid max-w-md grid-cols-2 gap-3"
        >
          {LOCALE_META.map((item) => (
            <LanguageCard
              key={item.id}
              label={item.label}
              short={item.short}
              flag={item.flag}
              isActive={item.id === locale}
              activeLabel={t("common.active")}
              switchLabel={t("common.language.switchTo", { lang: item.label })}
              onPick={() => setLocale(item.id)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            {t("settings.appearance.mode.title")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("settings.appearance.mode.description")}
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label={t("settings.appearance.mode.groupLabel")}
          className="grid max-w-md grid-cols-2 gap-3"
        >
          {MODES.map((m) => {
            const modeLabel = t(`settings.appearance.mode.${m}`);
            return (
              <ModeCard
                key={m}
                mode={m}
                modeLabel={modeLabel}
                isActive={m === mode}
                activeLabel={t("common.active")}
                ariaLabel={t("settings.appearance.mode.useMode", {
                  mode: modeLabel,
                })}
                onPick={() => setMode(m)}
              />
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            {t("settings.appearance.accent.title")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("settings.appearance.accent.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.map((th) => (
            <ThemeCard
              key={th.id}
              name={th.name}
              tagline={th.tagline}
              swatch={th.swatch}
              isActive={th.id === theme}
              activeLabel={t("common.active")}
              ariaLabel={t("settings.appearance.accent.useTheme", {
                name: th.name,
              })}
              themeIdLabel={t("settings.appearance.accent.themeId", {
                id: th.id,
              })}
              onPick={() => setTheme(th.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguageCard({
  label,
  short,
  flag,
  isActive,
  activeLabel,
  switchLabel,
  onPick,
}: {
  label: string;
  short: string;
  flag: string;
  isActive: boolean;
  activeLabel: string;
  switchLabel: string;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      onClick={onPick}
      aria-checked={isActive}
      aria-label={switchLabel}
      className={cn(
        "flex items-center gap-3 rounded-lg border bg-card p-4 text-left transition-colors",
        isActive
          ? "border-primary/60 ring-2 ring-primary/40"
          : "border-border hover:border-border hover:bg-muted/40",
      )}
    >
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-base"
      >
        {flag}
      </span>
      <span className="flex flex-1 flex-col">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <span className="text-xs text-muted-foreground">{short}</span>
      </span>
      {isActive && (
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">
          <Check className="h-3 w-3" />
          {activeLabel}
        </span>
      )}
    </button>
  );
}

function ModeCard({
  mode,
  modeLabel,
  isActive,
  activeLabel,
  ariaLabel,
  onPick,
}: {
  mode: Mode;
  modeLabel: string;
  isActive: boolean;
  activeLabel: string;
  ariaLabel: string;
  onPick: () => void;
}) {
  const isLight = mode === "light";
  const Icon = isLight ? Sun : Moon;
  return (
    <button
      type="button"
      role="radio"
      onClick={onPick}
      aria-checked={isActive}
      aria-label={ariaLabel}
      className={cn(
        "flex items-center gap-3 rounded-lg border bg-card p-4 text-left transition-colors",
        isActive
          ? "border-primary/60 ring-2 ring-primary/40"
          : "border-border hover:border-border hover:bg-muted/40",
      )}
    >
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-foreground"
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="flex-1 text-sm font-semibold text-foreground">
        {modeLabel}
      </span>
      {isActive && (
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">
          <Check className="h-3 w-3" />
          {activeLabel}
        </span>
      )}
    </button>
  );
}

function ThemeCard({
  name,
  tagline,
  swatch,
  isActive,
  activeLabel,
  ariaLabel,
  themeIdLabel,
  onPick,
}: {
  name: string;
  tagline: string;
  swatch: string;
  isActive: boolean;
  activeLabel: string;
  ariaLabel: string;
  themeIdLabel: string;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      aria-pressed={isActive}
      aria-label={ariaLabel}
      className={cn(
        "flex flex-col gap-3 rounded-lg border bg-card p-4 text-left transition-colors",
        isActive
          ? "border-primary/60 ring-2 ring-primary/40"
          : "border-border hover:border-border hover:bg-muted/40",
      )}
    >
      <div className="flex items-center justify-between">
        <span
          aria-hidden
          className="h-8 w-8 shrink-0 rounded-full"
          style={{
            background: swatch,
            boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.15)",
          }}
        />
        {isActive && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">
            <Check className="h-3 w-3" />
            {activeLabel}
          </span>
        )}
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{name}</div>
        <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {tagline}
        </div>
      </div>
      <div
        className="mt-1 flex h-2 overflow-hidden rounded-full"
        aria-hidden
      >
        <span className="flex-1" style={{ background: swatch }} />
        <span className="w-3 bg-muted-foreground/60" />
        <span className="w-3 bg-muted" />
        <span className="w-3 bg-card" />
      </div>
      <span className="sr-only">{themeIdLabel}</span>
    </button>
  );
}
