import { useState } from "react";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Quais são suas soft skills?",
      answer: [
        "Resolução de problemas",
        "Comunicação",
        "Flexibilidade e trabalho em equipe",
        "Criatividade e proatividade",
      ],
    },
    {
      question: "O aprendizado dele é rápido para novos desafios?",
      answer:
        "Sim. Eu foco na solução e me dedico a aprender a tecnologia necessária (via documentação) no menor tempo possível. Entrego sempre código claro e organizado, priorizando a colaboração do time.",
    },
    {
      question:
        "Os projetos dele funcionam bem em qualquer dispositivo e são rápidos?",
      answer:
        "Sim, é o padrão. Eu garanto que o site carregue muito rápido (otimização de código e imagens) e que funcione perfeitamente em qualquer dispositivo, priorizando a melhor experiência do usuário em todas as telas.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-5xl max-sm:text-2xl max-sm:text-center font-bold text-white mb-12">
        Seus{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          Questionamentos
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
                className={`text-2xl text-gray-400 transform transition-transform duration-300 ${
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
              <div className="overflow-hidden">
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
