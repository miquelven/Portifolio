import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";
import DownloadButton from "../DownloadButton";

export default function Sidebar({ isOpen, onClose }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Fechar sidebar no mobile após navegar
      if (window.innerWidth <= 768) {
        onClose();
      }
    }
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-50 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        {/* Botão fechar (mobile e tablet) */}
        <button
          onClick={onClose}
          className="lg:hidden self-end mb-4 p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Fechar menu"
        >
          <FaTimes className="nav-icon" />
        </button>

        {/* Foto de Perfil */}
        <div className="text-center mb-4">
          <div className="w-32 md:w-40 h-32 md:h-40 mx-auto mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-700 flex items-center justify-center">
              <span className="text-2xl md:text-4xl">👨‍💻</span>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            Miquelven Silva
          </h2>
          <p className="text-gray-300 text-sm font-medium mb-2">
            Desenvolvedor Front End
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <a
            href="https://github.com/miquelven"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
            aria-label="GitHub"
          >
            {/* Background gradient animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <FaGithub className="social-icon text-white relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/miquelven-silva-80731a23b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-rotate-12 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            aria-label="LinkedIn"
          >
            {/* Background gradient animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Partículas animadas */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-1 left-2 w-0.5 h-0.5 bg-white rounded-full animate-bounce"></div>
            </div>
            
            <FaLinkedin className="social-icon text-white relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12" />
          </a>
          
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="group relative w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-red-500/25 overflow-hidden"
            aria-label="Contact"
          >
            {/* Background gradient animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Efeito de pulso */}
            <div className="absolute inset-0 border-2 border-red-400 rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
            
            <FaEnvelope className="social-icon text-white relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:animate-pulse" />
          </a>
        </div>

        {/* Botão de Download do CV */}
        <div className="mt-2">
          <DownloadButton />
        </div>

        {/* Footer simples */}
        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700">
          <div className="text-gray-400 text-xs text-center">
            <span className="hover:text-white transition-colors duration-300">
              © {new Date().getFullYear()} Miquelven Silva
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
