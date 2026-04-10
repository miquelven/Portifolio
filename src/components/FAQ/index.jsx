import { useState } from "react";
import { useI18n } from "../../i18n";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { t } = useI18n();

  const faqs = [
    t("faq.items.softSkills"),
    t("faq.items.fastLearning"),
    t("faq.items.responsiveFast"),
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <h2
        className="text-5xl max-sm:text-2xl max-sm:text-center font-bold text-white mb-12 max-sm:mb-4"
        data-aos="fade-right"
      >
        {t("faq.title.prefix")}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          {t("faq.title.highlight")}
        </span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors duration-300"
            >
              <span className="text-white font-semibold text-lg max-sm:text-sm max-sm:pr-3">
                {faq.question}
              </span>
              <span
                className={`text-2xl max-sm:text-base text-gray-400 transform transition-transform duration-300 ${
                  openFAQ === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`px-6 grid transition-all duration-300 bg-gray-900/60 ${
                openFAQ === index
                  ? "grid-rows-[1fr] opacity-100 pb-3"
                  : "grid-rows-[0fr] opacity-0 pb-0"
              }`}
            >
              <div className="overflow-hidden max-sm:text-xs">
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-3">
                    {faq.answer.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed mt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
