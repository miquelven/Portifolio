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
  const [scrollY, setScrollY] = useState(0);
  const [stars, setStars] = useState(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  );

  // Função para scroll suave para seções
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100; // Altura aproximada do header + espaçamento desejado
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
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

    // Listener para scroll parallax muito sutil
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Sistema muito sutil de reposicionamento de estrelas
    const starInterval = setInterval(() => {
      setStars(prevStars => {
        const newStars = [...prevStars];
        // Reposiciona apenas 1 estrela aleatoriamente
        const randomIndex = Math.floor(Math.random() * newStars.length);
        newStars[randomIndex] = {
          ...newStars[randomIndex],
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.4 + 0.1,
        };
        
        return newStars;
      });
    }, 15000); // Reposiciona a cada 15 segundos

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(starInterval);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Fundo com estrelas sutis */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Campo de estrelas muito sutis */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white transition-all duration-3000 ease-out"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                transform: `translateY(${scrollY * (star.size * 0.02)}px)`,
                boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, ${star.opacity * 0.2})`
              }}
            ></div>
          ))}
        </div>
      </div>

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
      <main className="flex-1 ml-0 md:ml-80 mt-10 relative z-10">
        <div className="p-4 md:p-8 lg:p-12">
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
                Apaixonado por criar soluções eficientes e escaláveis,
                combinando funcionalidade e design para entregar aplicações
                modernas, intuitivas e de alto impacto.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  {/* Efeito de brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  {/* Efeito de pulso */}
                  <div className="absolute inset-0 border-2 border-red-300 rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>

                  {/* Texto com animação */}
                  <span className="relative z-10 group-hover:animate-pulse">
                    Entre em contato
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="group relative bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500 transform hover:scale-105 overflow-hidden"
                >
                  {/* Efeito de brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  {/* Efeito de sombra */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Efeito de borda animada */}
                  <div className="absolute inset-0 border-2 border-gray-400 rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>

                  {/* Texto com animação */}
                  <span className="relative z-10 group-hover:text-gray-100 transition-colors duration-300">
                    Veja meu trabalho
                  </span>
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
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
