/**
 * Pure translation helpers — no React, no server/client imports — so
 * both the server reader (`server.ts`) and the client provider
 * (`use-i18n.tsx`) can share the exact same lookup + interpolation
 * behaviour.
 */

export type Dictionary = Record<string, unknown>;

export type TVars = Record<string, string | number>;

/** Resolve a dotted key (`"auth.login.title"`) against a nested dict. */
function lookup(dict: Dictionary, key: string): unknown {
  return key.split(".").reduce<unknown>((node, part) => {
    if (node && typeof node === "object") {
      return (node as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
}

/** Replace `{name}` placeholders with the matching var (left as-is if missing). */
function interpolate(template: string, vars?: TVars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (whole, name: string) =>
    name in vars ? String(vars[name]) : whole,
  );
}

/**
 * Build a `t(key, vars?)` bound to a primary dictionary, falling back
 * to a secondary (English) dictionary, then to the raw key. Keeping
 * the fallback chain here means a missing translation degrades to the
 * English string or, worst case, the key — never a crash or blank.
 */
export function makeTranslator(primary: Dictionary, fallback: Dictionary) {
  return function t(key: string, vars?: TVars): string {
    const hit = lookup(primary, key);
    if (typeof hit === "string") return interpolate(hit, vars);
    const fb = lookup(fallback, key);
    if (typeof fb === "string") return interpolate(fb, vars);
    return key;
  };
}

export type Translator = ReturnType<typeof makeTranslator>;
