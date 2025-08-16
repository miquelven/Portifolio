import { useState } from "react";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const faqs = [
    {
      question: "Are you available for full time jobs?",
      answer: "Yes, I'm currently open to full-time opportunities. I'm looking for challenging projects where I can contribute with my React, Node.js, and TypeScript skills."
    },
    {
      question: "What are your soft skills?",
      answer: "I have strong communication skills, work well in teams, am proactive in problem-solving, and have experience with agile methodologies like Scrum and Kanban."
    },
    {
      question: "How do you handle project timelines?",
      answer: "I use agile methodologies and project management tools to ensure timely delivery. I believe in clear communication and regular updates with stakeholders."
    },
    {
      question: "What are your preferred programming languages?",
      answer: "My main stack includes JavaScript/TypeScript for both frontend and backend, Java for enterprise applications, and I'm always learning new technologies."
    },
    {
      question: "Do you design your own interfaces?",
      answer: "Yes, I have experience with UI/UX design using tools like Figma. I believe in creating user-centered designs that are both beautiful and functional."
    },
    {
      question: "How you classify your english level?",
      answer: "I have an intermediate to advanced level of English, sufficient for technical communication, documentation, and international team collaboration."
    },
    {
      question: "Are you a full stack, backend or frontend developer?",
      answer: "I'm a full-stack developer with strong experience in both frontend (React, TypeScript) and backend (Node.js, Java, Spring Boot) development."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-white mb-12">
        Frequently <br />
        Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Questions</span>
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
              <span className="text-white font-semibold text-lg">{faq.question}</span>
              <span className="text-2xl text-gray-400 transform transition-transform duration-300 ${
                openFAQ === index ? 'rotate-180' : ''
              }">
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