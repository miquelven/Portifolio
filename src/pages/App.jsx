import ScrollProjects from "../components/ScrollProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Sidebar from "../components/Sidebar";
import RecentProjects from "../components/RecentProjects";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Header from "../components/Header";

import AOS from "aos";
import { useEffect, useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Função para scroll suave para seções
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100; // Altura aproximada do header + espaçamento desejado
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header com botão de menu mobile */}
      <Header 
        onMenuClick={() => setSidebarOpen(true)} 
        sidebarOpen={sidebarOpen}
        onMenuClose={() => setSidebarOpen(false)}
      />

      {/* Overlay para mobile e tablet */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Conteúdo principal */}
      <main className="flex-1 ml-0 md:ml-80 mt-10">
        <div className="min-h-screen p-4 md:p-8 lg:p-12">
          {/* Hero Section */}
          <section id="home" className="mb-12 md:mb-20 pt-8 md:pt-12">
            <div className="max-w-4xl">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Transformando suas <br className="hidden md:block" />
                Ideias em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Realidade
                </span>
              </h1>
              <p className="hero-subtitle text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-2xl leading-relaxed">
                Apaixonado por desenvolver soluções eficientes e escaláveis, com
                um talento especial para misturar funcionalidade e design para
                entregar aplicações impactantes.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-3 md:gap-4">
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Entre em contato
                </button>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-all duration-300 border border-gray-600"
                >
                  Veja meu trabalho
                </button>
              </div>
            </div>
          </section>

          {/* Recent Projects Section */}
          <section id="projects" className="mb-12 md:mb-20">
            <RecentProjects />
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-12 md:mb-20">
            <Experience />
          </section>

          {/* Tech Stack Section */}
          <section id="tech" className="mb-12 md:mb-20">
            <TechStack />
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12 md:mb-20">
            <FAQ />
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-12 md:mb-20">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
