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
            className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/miquelven-silva-80731a23b/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon text-white" />
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Contact"
          >
            <FaEnvelope className="social-icon text-white" />
          </a>
        </div>

        {/* Botão de Download do CV */}
        <div className="mt-2">
          <DownloadButton />
        </div>

        {/* Footer */}
        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-xs text-center">
            © {new Date().getFullYear()} Miquelven Silva
          </p>
        </div>
      </div>
    </aside>
  );
}
