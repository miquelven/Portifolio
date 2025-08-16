export default function TechStack() {
  const technologies = [
    { name: "Next", icon: "🟢" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "☕" },
    { name: "JavaScript", icon: "🟢" },
    { name: "Nuxt", icon: "⚫" },
    { name: "Vue", icon: "📘" },
    { name: "Sass", icon: "🚀" },
    { name: "Tailwindcss", icon: "☁️" },
  ];

  return (
    <div>
      <h2 className="text-5xl font-bold text-white mb-4">
        Top-Tier Tech for <br />
        Exceptional{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          Results
        </span>
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-12">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
              {tech.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
