export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Desenvolvedor Front End",

      description:
        "Atualmente, sou responsável pela criação do novo site da empresa, focando em Next.js, TypeScript, JavaScript e Tailwind para entregar interfaces modernas, responsivas e de alta performance. Minha atuação envolve desde a implementação das telas até a colaboração com o time de design no Figma, onde contribuo com sugestões de melhorias e ajustes. Além disso, permaneço em constante interação com outras equipes, pronto para dar manutenção em futuros projetos e assegurar a melhor experiência possível para os usuários.",
      period: "Setembro 2024 - Agora",
      icon: "↗",
    },
  ];

  return (
    <div>
      <h2 className="text-5xl font-bold text-white mb-4">
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
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                {exp.title}
              </h3>
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                {exp.icon}
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {exp.description}
            </p>
            <span className="text-gray-400 text-sm">{exp.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
