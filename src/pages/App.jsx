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
import { useEffect } from "react";

function App() {
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
      {/* Sidebar fixo */}
      <Sidebar />

      <Header />

      {/* Conteúdo principal */}
      <main className="flex-1 ml-80 mt-10">
        <div className="min-h-screen p-12">
          {/* Hero Section */}
          <section className="mb-20 pt-12">
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Transformando suas <br />
                Ideias em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Realidade
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
                Apaixonado por desenvolver soluções eficientes e escaláveis, com
                um talento especial para misturar funcionalidade e design para
                entregar aplicações impactantes.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Entre em contato
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-gray-600">
                  Veja meu trabalho
                </button>
              </div>
            </div>
          </section>

          {/* Recent Projects Section */}
          <section id="projects" className="mb-20">
            <RecentProjects />
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-20">
            <Experience />
          </section>

          {/* Tech Stack Section */}
          <section id="tech" className="mb-20">
            <TechStack />
          </section>

          {/* Testimonials Section */}
          {/* <section id="testimonials" className="mb-20">
            <div className="max-w-6xl">
              <h2 className="text-3xl font-bold text-white mb-6">
                Testimonials
              </h2>
              <Testimonials />
            </div>
          </section> */}

          {/* FAQ Section */}
          <section id="faq" className="mb-20">
            <FAQ />
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-20">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
