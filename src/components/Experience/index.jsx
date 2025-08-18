export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Desenvolvedor Front End - ",
      company: "Guichê Web",
      bulletPoints: [
        "Iniciei no desenvolvimento do novo e-commerce da empresa, utilizando Next.js, TypeScript, JavaScript e Tailwind CSS para criar interfaces modernas, responsivas e de alta performance.",
        "Atuei no desenvolvimento de um projeto interno, entregando uma nova versão com melhorias de usabilidade e desempenho.",
        "Atualmente, responsável pela criação de um configurador de mapa de assentos para eventos, funcionalidade estratégica que será integrada ao e-commerce.",
        "Colaboração direta com o time de design (Figma) e interação com diferentes áreas da empresa, garantindo alinhamento e manutenção contínua dos projetos.",
      ],
      period: "Setembro 2024 - Agora",
      icon: "↗",
    },
  ];

  return (
    <div>
      <h2 className="text-5xl max-sm:text-2xl max-sm:text-center font-bold text-white mb-4">
        Veja do que sou capaz, <br />
        Confira minha{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          Experiência
        </span>
      </h2>

      <div className="space-y-6 mt-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/20 transition-all duration-300 overflow-hidden"
          >
            {/* Efeito de brilho sutil */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h3 className="text-2xl max-sm:text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                  {exp.title}
                </h3>
                <span className="text-xl max-sm:text-lg font-medium text-red-500 group-hover:text-red-400 transition-colors duration-300">
                  {exp.company}
                </span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-semibold text-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                {exp.icon}
              </div>
            </div>

            {/* Lista de bullet points clean */}
            <div className="mb-6 relative z-10">
              <ul className="space-y-4">
                {exp.bulletPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-300 leading-relaxed max-sm:text-sm group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2.5 flex-shrink-0 group-hover:bg-red-400 transition-colors duration-300"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Período com design clean */}
            <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-gray-700/30">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-red-400 text-sm max-sm:text-xs font-medium tracking-wide">
                {exp.period}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
