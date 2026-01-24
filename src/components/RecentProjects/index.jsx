import project1 from "../../../assets/images/projects/projeto_1.png";
import project2 from "../../../assets/images/projects/projeto_2.png";
import project3 from "../../../assets/images/projects/projeto_3.png";
import project4 from "../../../assets/images/projects/projeto_4.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RecentProjects() {
  const projects = [
    {
      id: 1,
      title: "MiMovies",
      subtitle: "Integração com a API do TMDB",
      image: project1,
      category: "Web App",
      previewLink: "https://mi-movie-ten.vercel.app/",
      githubLink: "https://github.com/miquelven/MiMovie",
    },
    {
      id: 2,
      title: "Kanbanity",
      subtitle: "Quadro Kanban com visual cartoon",
      image: project2,
      category: "Productivity",
      previewLink: "https://kanbanity.vercel.app/",
      githubLink: "https://github.com/miquelven/Kanbanity",
    },
    {
      id: 3,
      title: "Github Analytics",
      subtitle: "Análise de perfis e repositórios",
      image: project3,
      category: "Analytics",
      previewLink: "https://github-analytics-two.vercel.app/",
      githubLink: "https://github.com/miquelven/github-analytics",
    },
    {
      id: 4,
      title: "Chronorun",
      subtitle: "Projeto de games com ranking global e pessoal",
      image: project4,
      category: "Game",
      previewLink: "https://www.chronorun.com.br/",
      githubLink: "https://github.com/miquelven/ChronoRun",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl max-sm:text-center md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 max-sm:mb-4"
      >
        Projetos{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
          Pessoais
        </span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 max-sm:mt-4"
      >
        {projects.map((project) => (
          <motion.div
            variants={item}
            key={project.id}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group flex flex-col"
          >
            <div className="h-48 md:h-56 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-black/50 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-1">
                {project.subtitle}
              </p>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors duration-200"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm rounded-lg transition-colors duration-200"
                >
                  <FaExternalLinkAlt size={12} /> Preview
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
