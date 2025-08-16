import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import DownloadButton from "../DownloadButton";

export default function Sidebar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-50 overflow-y-auto">
      <div className="p-8 flex flex-col h-full">
        {/* Foto de Perfil */}
        <div className="text-center mb-4">
          <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-700 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">
            Miquelven Silva
          </h2>
          <p className="text-gray-300 text-sm font-medium mb-2">
            Desenvolvedor Front End
          </p>
          {/* <div className="flex items-center justify-center text-gray-400 text-sm">
            <FaMapMarkerAlt className="mr-1" />
            <span>From Brazil</span>
          </div> */}
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/miquelven"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-white text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/miquelven-silva-80731a23b/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-white text-lg" />
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Contact"
          >
            <FaEnvelope className="text-white text-lg" />
          </a>
        </div>

        {/* Botão de Download do CV */}
        <div className="mt-2">
          <DownloadButton />
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-xs text-center">
            © {new Date().getFullYear()} Miquelven Silva
          </p>
        </div>
      </div>
    </aside>
  );
}
