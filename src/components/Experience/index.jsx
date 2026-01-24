import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Desenvolvedor Front End",
      company: "Guichê Web",
      bulletPoints: [
        "Responsável pelo redesign completo do sistema interno, focando na melhoria da experiência do usuário (UX) e na otimização de performance.",
        "Fui responsável pela sustentação, manutenção e evolução contínua de aplicações web críticas.",
        "Atuação end-to-end em design, sendo responsável por definir fluxos de UX e interfaces (UI) para novas features, garantindo consistência e usabilidade em projetos iniciados do zero.",
        "Construção do front-end do aplicativo para Máquinas Smart (PDV), utilizando React Native e a biblioteca MUI (Material-UI). Foco em otimização de performance e experiência do usuário (UX) para garantir um aplicativo rápido e responsivo em hardware embarcado.",
      ],
      period: "Setembro 2024 - Janeiro 2026",
      icon: "↗",
    },
  ];

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl max-sm:text-2xl max-sm:text-center font-bold text-white mb-4"
      >
        Experiência{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          Profissional
        </span>
      </motion.h2>

      <div className="space-y-6 mt-12  max-sm:mt-4">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="group relative glass-effect bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-700/60 shadow-2xl transition-all duration-300 overflow-hidden hover:bg-black/5"
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
                {exp.bulletPoints.map((point, index) => (
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
