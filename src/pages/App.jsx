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
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const visitSentRef = useRef(false);
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

      // sem rastreio de seções
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
    window.addEventListener("scroll", handleScroll);

    const timestamp = new Date().toLocaleString();
    if (!visitSentRef.current) {
      visitSentRef.current = true;
      const message = `Nova visita ao portfólio em ${timestamp}.`;
      emailjs
        .send(
          "service_j9fygzm",
          "template_el44meo",
          { message, email: "miquelven.silva@gmail.com" },
          "W7PLvOdvqRzXPUDr1"
        )
        .catch(() => {});
    }

    // Sistema muito sutil de reposicionamento de estrelas
    const starInterval = setInterval(() => {
      setStars((prevStars) => {
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
      window.removeEventListener("scroll", handleScroll);
      clearInterval(starInterval);
      // limpeza padrão
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
                boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, ${
                  star.opacity * 0.2
                })`,
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
      <main className="flex-1 ml-0 md:ml-80 mt-10 relative z-10 !p-0">
        <div className="p-4 md:p-8 lg:p-12 !pb-0 max-w-[1200px] mx-auto">
          {/* Hero Section */}
          <section id="home" className="mb-12 md:mb-20 pt-8 md:pt-12">
            <div className="max-w-4xl">
              <h1 className="hero-title font-bold text-white mb-4 md:mb-6 leading-tight">
                <span className="block text-5xl md:text-6xl ">Olá</span>
                <span className="block text-4xl md:text-5xl  text-transparent bg-clip-text pb-1 bg-gradient-to-r from-red-500 to-red-600">
                  seja bem-vindo!
                </span>
              </h1>
              <p className="hero-subtitle text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-2xl leading-relaxed">
                Sou Desenvolvedor Front-End e aqui é o lugar aonde você pode
                encontrar projetos que desenvolvi, experiências profissionais e
                informações sobre minhas habilidades.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="relative bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-colors duration-200"
                >
                  <span className="relative z-10">Entre em contato</span>
                </button>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="relative bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-colors duration-200 border border-gray-600 hover:border-gray-500"
                >
                  <span className="relative z-10">Veja meu trabalho</span>
                </button>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech" className="mb-12 md:mb-20">
            <TechStack />
          </section>

          {/* Recent Projects Section */}
          <section id="projects" className="mb-12 md:mb-20">
            <RecentProjects />
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-12 md:mb-20">
            <Experience />
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12 md:mb-20">
            <FAQ />
          </section>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
