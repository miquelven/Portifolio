import { useI18n } from "../../i18n";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
          language === "pt"
            ? "bg-red-600 text-white"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
        aria-label={t("common.language.pt")}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
          language === "en"
            ? "bg-red-600 text-white"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
        aria-label={t("common.language.en")}
      >
        EN
      </button>
    </div>
  );
}
