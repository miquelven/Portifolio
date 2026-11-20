import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem("lang");
    return stored || "pt";
  });

  const changeLanguage = (newLang) => {
    if (newLang === language) return;
    setIsChangingLanguage(true);
    setTimeout(() => {
      setLanguage(newLang);
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 800);
    }, 500);
  };

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const t = useMemo(() => {
    const dict = translations[language] || translations.pt;
    const translate = (key, params) => {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
          cur = cur[p];
        } else {
          return key;
        }
      }
      if (typeof cur === "function") {
        return cur(params || {});
      }
      if (typeof cur === "string" && params) {
        return cur.replace(/\{(\w+)\}/g, (_, k) => {
          if (Object.prototype.hasOwnProperty.call(params, k)) {
            return String(params[k]);
          }
          return `{${k}}`;
        });
      }
      return cur;
    };
    return translate;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      isChangingLanguage,
      t,
    }),
    [language, t, isChangingLanguage],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
