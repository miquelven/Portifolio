import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiNuxtdotjs, 
  SiVuedotjs, 
  SiSass, 
  SiTailwindcss 
} from "react-icons/si";

export default function TechStack() {
  const technologies = [
    { name: "Next", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Nuxt", icon: SiNuxtdotjs, color: "text-green-400" },
    { name: "Vue", icon: SiVuedotjs, color: "text-green-500" },
    { name: "Sass", icon: SiSass, color: "text-pink-400" },
    { name: "Tailwindcss", icon: SiTailwindcss, color: "text-cyan-400" },
  ];

  return (
    <div>
      <h2 className="text-5xl font-bold text-white mb-4">
        Tecnologia de ponta para <br />
        Resultados{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          excepcionais
        </span>
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-12">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-600">
                <IconComponent className={`text-2xl ${tech.color} transition-all duration-300 group-hover:scale-110`} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{tech.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
