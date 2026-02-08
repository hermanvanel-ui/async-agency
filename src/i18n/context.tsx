"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

interface I18nContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <I18nContext.Provider
      value={{ lang, t: translations[lang], setLang, toggleLang }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
