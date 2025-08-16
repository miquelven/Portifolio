import Skills from "./Skills";
import monthsStudy from "../../helpers/monthsStudy";
import { useEffect } from "react";
import { useState } from "react";

export default function About() {
  const [months, setMonths] = useState(1);

  useEffect(() => {
    setMonths(monthsStudy());
  }, []);

  return (
    <div className="space-y-12">
      {/* Título da seção */}
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        About Me
        and <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">My Journey</span>
      </h2>
      
      {/* Conteúdo principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* História pessoal */}
        <div 
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors duration-300">
            My Story
          </h3>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Comecei a me interessar por desenvolvimento aos 16 anos,
              inicialmente explorando C# para criação de jogos. Após uma pausa
              devido a limitações técnicas, retornei ao desenvolvimento com foco
              em front-end.
            </p>
            
            <p>
              Balanceando escola e trabalho, economizei para comprar
              um notebook e me dedicar integralmente aos estudos. Há <span className="text-red-400 font-semibold">{months} meses</span>, venho aprimorando minhas habilidades e conhecimentos
              diariamente.
            </p>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg border border-red-500/20">
              <p className="font-medium text-white">
                Minhas principais áreas de conhecimento abrangem:
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div 
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Technical Skills
          </h3>
          <Skills />
        </div>
      </div>
      
      {/* Estatísticas ou informações adicionais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div 
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center group"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            📚
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Continuous Learning</h4>
          <p className="text-gray-400">Always studying new technologies and best practices</p>
        </div>
        
        <div 
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center group"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            💡
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Problem Solving</h4>
          <p className="text-gray-400">Passionate about finding creative solutions</p>
        </div>
        
        <div 
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center group"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            🚀
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
          <p className="text-gray-400">Building modern and efficient applications</p>
        </div>
      </div>
    </div>
  );
}
