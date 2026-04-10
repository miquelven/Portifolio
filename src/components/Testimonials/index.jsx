import { useState } from "react";
import { useI18n } from "../../i18n";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useI18n();
  
  const testimonials = [
    {
      id: 1,
      name: "Thayana Mamoré",
      avatar: "/api/placeholder/60/60",
      text: t("testimonials.items.thayana"),
    },
    {
      id: 2,
      name: "João Silva",
      avatar: "/api/placeholder/60/60",
      text: t("testimonials.items.joao"),
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-5xl font-bold text-white">
          {t("testimonials.title.prefix")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            {t("testimonials.title.highlight")}
          </span>
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
