import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaCogs,
  FaQuestionCircle,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

export default function Header({ onMenuClick }) {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: "home", icon: FaHome, label: "Home" },
    { id: "projects", icon: FaCode, label: "Projects" },
    { id: "experience", icon: FaBriefcase, label: "Experience" },
    { id: "tech", icon: FaCogs, label: "Stacks" },
    { id: "faq", icon: FaQuestionCircle, label: "FAQ" },
    { id: "contact", icon: FaEnvelope, label: "Contato" },
  ];

  return (
    <header className="fixed !top-4 md:!top-6 !left-4 md:!left-1/2 lg:!left-1/2 xl:!left-1/2 md:!transform lg:!transform xl:!transform md:!-translate-x-1/2 lg:!-translate-x-1/2 xl:!-translate-x-1/2 !right-4 md:!right-auto lg:!right-auto xl:!right-auto z-50">
      <nav className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-2xl">
        <div className="flex items-center justify-between md:justify-center">
          {/* Botão de menu mobile */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Abrir menu"
          >
            <FaBars className="nav-icon" />
          </button>

          {/* Navegação desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative p-3 rounded-full transition-all duration-300 group
                    ${
                      isActive
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }
                  `}
                  aria-label={item.label}
                >
                  <IconComponent
                    className={`
                      nav-icon transition-all duration-300
                      ${isActive ? "scale-110" : "group-hover:scale-110"}
                    `}
                  />

                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {item.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navegação mobile simplificada */}
          <div className="md:hidden flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    p-2 rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                  aria-label={item.label}
                >
                  <IconComponent className="nav-icon" />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
