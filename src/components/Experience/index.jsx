import { useI18n } from "../../i18n";

export default function Experience() {
  const { t } = useI18n();
  const experiences = [
    {
      id: 2,
      ...t("experience.items.heptagono"),
    },
    {
      id: 1,
      ...t("experience.items.guicheWeb"),
    },
  ];

  return (
    <div>
      <h2
        className="text-5xl max-sm:text-2xl max-sm:text-center font-bold text-white mb-4"
        data-aos="fade-right"
      >
        {t("experience.title.prefix")}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          {t("experience.title.highlight")}
        </span>
      </h2>

      <div className="space-y-6 mt-12  max-sm:mt-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group relative glass-effect bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-700/60 shadow-2xl transition-all duration-300 overflow-hidden hover:bg-black/5"
            data-aos="fade-up"
          >
            <div className="mb-6 relative z-10">
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl max-sm:text-xl font-semibold text-white">
                  {exp.title} -
                  <span className="text-red-400"> {exp.company}</span>
                </h3>
              </div>
              <span className="opacity-50 text-sm md:text-base font-medium tracking-wide">
                {exp.period}
              </span>
            </div>

            <div className="mb-0 relative z-10">
              <ul className="space-y-4">
                {exp.bullets.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-300 leading-relaxed max-sm:text-xs"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
