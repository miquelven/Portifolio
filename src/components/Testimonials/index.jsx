import { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Thayana Mamoré",
      avatar: "/api/placeholder/60/60",
      text: "I acted as the project manager where Amanda worked as a backend developer with Spring Boot/Java, and I highly recommend her as a professional. She stands out for her proactivity and consistently exceeding expectations. Amanda possesses incredible technical knowledge and is always eager to expand it. During her participation in the project, she demonstrated remarkable growth and evolution, contributing creative solutions and excellent teamwork. Her commitment, combined with her willingness to learn, enhances the quality of deliverables and drives team development."
    },
    {
      id: 2,
      name: "João Silva",
      avatar: "/api/placeholder/60/60",
      text: "Excelente desenvolvedor! Trabalhou em nosso projeto React com muita dedicação e entregou resultados excepcionais. Sua capacidade de resolver problemas complexos é impressionante."
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-5xl font-bold text-white">
          What People Say <br />
          About My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Work</span>
        </h2>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-12 h-12 rounded-full transition-all duration-300 ${
                currentTestimonial === index 
                  ? 'bg-gradient-to-r from-red-500 to-red-600' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <span className="text-white font-bold">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
        <div className="flex items-start gap-4 mb-6">
          <img 
            src={testimonials[currentTestimonial].avatar}
            alt={testimonials[currentTestimonial].name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="text-xl font-bold text-white">
              {testimonials[currentTestimonial].name}
            </h3>
          </div>
        </div>
        
        <p className="text-gray-300 leading-relaxed text-lg">
          "{testimonials[currentTestimonial].text}"
        </p>
      </div>
    </div>
  );
}