import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVuedotjs,
  SiMaterialdesign,
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { useI18n } from "../../i18n";

export default function TechStack() {
  const { t } = useI18n();
  const technologies = [
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React Native", icon: FaMobileAlt, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
    { name: "Material UI", icon: SiMaterialdesign, color: "text-blue-700" },
  ];

  return (
    <div>
      <h2
        className="text-2xl max-sm:text-center md:text-4xl lg:text-5xl font-bold text-white mb-4"
        data-aos="fade-right"
      >
        {t("techStack.title.prefix")}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          {t("techStack.title.highlight")}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-12 max-sm:mt-4 max-sm:grid-cols-2">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3 md:gap-4 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <div className="absolute inset-0 border-2 border-red-400/20 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>

              <div className="icon-container bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-600 relative z-10">
                <IconComponent
                  className={`tech-icon ${tech.color} transition-all duration-300 group-hover:scale-110`}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl max-sm:text-xs font-bold text-white">
                  {tech.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
