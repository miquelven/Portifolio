import skills from "../../../data/skill";

export default function Skills() {
  const timer = 200;

  return (
    <div className="h-96 pr-7 flex-1">
      <div className="grid grid-cols-4  gap-14 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[530px]:grid-cols-1 max-[530px]:gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            data-aos="zoom-in"
            data-aos-delay={timer * skill.id}
            className="m-auto flex justify-center h-20 w-full items-center rounded-lg shadow-md shadow-[#306d9d] max-[530px]:w-full"
          >
            <img
              src={skill.src}
              alt="Imagem da tecnologia"
              className="w-1/2 object-cover max-sm:w-5/12"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
