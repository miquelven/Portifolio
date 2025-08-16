import skills from "../../../data/skill";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Skills() {
  const timer = 200;

  return (
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-2">
      {skills.map((skill) => (
        <div
          key={skill.id}
          data-aos="zoom-in"
          data-aos-delay={timer * skill.id}
          className="flex justify-center items-center h-16 w-full rounded-xl bg-gray-700/50 border border-gray-600 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 group cursor-pointer"
        >
          <LazyLoadImage
            src={skill.src}
            alt="Imagem da tecnologia"
            className="w-8 h-8 object-cover transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
          />
        </div>
      ))}
    </div>
  );
}
