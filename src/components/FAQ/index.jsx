import { useState } from "react";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Quais são suas soft skills?",
      answer:
        "Tenho fortes habilidades de comunicação, trabalho bem em equipe, sou proativo na resolução de problemas e tenho experiência com metodologias ágeis como Scrum e Kanban.",
    },
    {
      question: "Como você lida com os cronogramas dos projetos?",
      answer:
        "Utilizo metodologias ágeis e ferramentas de gestão de projetos para garantir entregas pontuais. Acredito em comunicação clara e atualizações regulares com as partes interessadas.",
    },
    {
      question: "Quais são suas linguagens de programação preferidas?",
      answer:
        "Minhas linguagens de programação preferidas são JavaScript e TypeScript, pois gosto de desenvolver interfaces e trabalhar com frontend.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-white mb-12">
        Perguntas{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          Frequentes
        </span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors duration-300"
            >
              <span className="text-white font-semibold text-lg">
                {faq.question}
              </span>
              <span
                className="text-2xl text-gray-400 transform transition-transform duration-300 ${
                openFAQ === index ? 'rotate-180' : ''
              }"
              >
                ▼
              </span>
            </button>

            {openFAQ === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
