import { FaHome, FaCode, FaBriefcase, FaCogs, FaQuestionCircle, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
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
    <header className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center space-x-2">
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
                    w-5 h-5 transition-all duration-300
                    ${isActive ? "scale-110" : "group-hover:scale-110"}
                  `}
                />

                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap border border-gray-700">
                    {item.label}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-700 rotate-45"></div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
