export default function RecentProjects() {
  const projects = [
    {
      id: 1,
      title: "One Help",
      subtitle: "Technology website",
      image: "/api/placeholder/400/300",
      category: "Web Development",
    },
    {
      id: 2,
      title: "SOFIA",
      subtitle: "AI for ASD Pre-Diagnosis",
      image: "/api/placeholder/400/300",
      category: "AI/ML",
    },
    {
      id: 3,
      title: "MiCoin",
      subtitle: "Cryptocurrency Platform",
      image: "/api/placeholder/400/300",
      category: "FinTech",
    },
    {
      id: 4,
      title: "Portfolio",
      subtitle: "Personal Brand Website",
      image: "/api/placeholder/400/300",
      category: "Design",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
        Projetos e{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          Conquistas Recentes
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
          >
            <div className="h-40 md:h-48 bg-gradient-to-br from-red-600 via-red-500 to-red-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                {project.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
