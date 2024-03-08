import skills from "../../../data/skill";

export default function Skills() {
  const timer = 200;

  return (
    <div className="h-96 pr-7 flex-1" data-aos="zoom-in" data-aos-delay="500">
      <div className="grid grid-cols-2 grid-rows-4 gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[530px]:grid-cols-1">
        {skills.map((skill) => (
          <div
            key={skill.id}
            data-aos="fade-left"
            data-aos-delay={timer * skill.id}
            className="flex justify-center items-center max-h-20 w-52 rounded-lg shadow-md shadow-[#306d9d] max-[530px]:w-full"
          >
            <img
              src={skill.src}
              alt="Imagem da tecnologia"
              className="w-36 object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
