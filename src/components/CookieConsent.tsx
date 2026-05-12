import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "cookie-consent-v2";

type CookiePreferences = {
  analytics: boolean;
  personalization: boolean;
  marketing: boolean;
};

type StoredConsent = {
  version: 2;
  mode: "all" | "custom" | "essential";
  preferences: CookiePreferences;
  updatedAt: string;
};

const defaultPreferences: CookiePreferences = {
  analytics: false,
  personalization: false,
  marketing: false,
};

const readStoredConsent = (): StoredConsent | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!raw) {
    const legacy = window.localStorage.getItem("cookie-consent-v1");
    if (legacy === "accepted") {
      return {
        version: 2,
        mode: "all",
        preferences: { analytics: true, personalization: true, marketing: true },
        updatedAt: new Date().toISOString(),
      };
    }
    if (legacy === "rejected") {
      return {
        version: 2,
        mode: "essential",
        preferences: { ...defaultPreferences },
        updatedAt: new Date().toISOString(),
      };
    }
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (parsed?.version === 2 && parsed.preferences) {
      return {
        version: 2,
        mode: parsed.mode === "all" || parsed.mode === "custom" || parsed.mode === "essential" ? parsed.mode : "custom",
        preferences: {
          analytics: Boolean(parsed.preferences.analytics),
          personalization: Boolean(parsed.preferences.personalization),
          marketing: Boolean(parsed.preferences.marketing),
        },
        updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
      };
    }
  } catch {
    return null;
  }

  return null;
};

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const stored = readStoredConsent();
    if (!stored) {
      setOpen(true);
      return;
    }

    setPreferences(stored.preferences);
  }, []);

  const persistConsent = (mode: StoredConsent["mode"], nextPreferences: CookiePreferences) => {
    const payload: StoredConsent = {
      version: 2,
      mode,
      preferences: nextPreferences,
      updatedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(payload));
    setOpen(false);
    setExpanded(false);
  };

  const acceptAll = () => {
    persistConsent("all", {
      analytics: true,
      personalization: true,
      marketing: true,
    });
  };

  const saveSelection = () => {
    const hasOptionalConsent =
      preferences.analytics || preferences.personalization || preferences.marketing;

    persistConsent(hasOptionalConsent ? "custom" : "essential", preferences);
  };

  if (!open) {
    return null;
  }

  return (
    <section className="fixed bottom-4 left-4 right-4 z-[130] mx-auto w-[calc(100vw-2rem)] max-w-5xl rounded-2xl border border-border bg-background px-4 py-3 shadow-2xl md:px-5 md:py-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-1">
            <p className="font-display text-base font-semibold text-foreground md:text-lg">
              Valoramos tu privacidad
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Por eso puuedes elegir que cookies almacenamos en tu navegador, utilizamos las cookies para mejorar tu experiencia en nuestro sitio web.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => setExpanded((value) => !value)}
            >
              Configurar cookies
            </Button>
            <Button type="button" className="w-full sm:w-auto" onClick={acceptAll}>
              Aceptar todas
            </Button>
          </div>
        </div>

        {expanded ? (
          <div className="grid gap-3 rounded-xl border border-border bg-warm-light/50 p-3 text-sm md:grid-cols-3">
            <label className="flex items-start gap-3 rounded-lg bg-background/80 p-3">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 h-4 w-4 rounded border-border text-primary"
              />
              <span>
                <span className="block font-medium text-foreground">Esenciales</span>
                <span className="block text-muted-foreground">
                  Necesarias para el funcionamiento del sitio.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg bg-background/80 p-3">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(event) =>
                  setPreferences((current) => ({ ...current, analytics: event.target.checked }))
                }
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              <span>
                <span className="block font-medium text-foreground">Analiticas</span>
                <span className="block text-muted-foreground">
                  Nos ayudan a medir visitas y mejorar el contenido.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg bg-background/80 p-3">
              <input
                type="checkbox"
                checked={preferences.personalization}
                onChange={(event) =>
                  setPreferences((current) => ({ ...current, personalization: event.target.checked }))
                }
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              <span>
                <span className="block font-medium text-foreground">Personalizacion</span>
                <span className="block text-muted-foreground">
                  Guardan preferencias de uso y experiencia.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg bg-background/80 p-3">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(event) =>
                  setPreferences((current) => ({ ...current, marketing: event.target.checked }))
                }
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              <span>
                <span className="block font-medium text-foreground">Marketing</span>
                <span className="block text-muted-foreground">
                  Se usan para mostrar contenido y campañas relevantes.
                </span>
              </span>
            </label>

            <div className="flex items-end md:col-span-3 md:justify-end">
              <Button type="button" className="w-full sm:w-auto" onClick={saveSelection}>
                Guardar selección
              </Button>
            </div>
          </div>
        ) : null}

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Consulta nuestra{" "}
            <Link to="/politica-cookies" className="font-medium text-primary hover:underline">
              politica de cookies
            </Link>
            .
          </p>
          <p>La selección queda guardada para futuras visitas en este navegador.</p>
        </div>
      </div>
    </section>
  );
};

export default CookieConsent;
