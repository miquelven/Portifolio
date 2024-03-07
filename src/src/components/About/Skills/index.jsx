import javascript from "../../../../assets/images/stacks/javascript.png";
import typescript from "../../../../assets/images/stacks/typescript.png";
import nuxt from "../../../../assets/images/stacks/nuxt.png";
import tailwindcss from "../../../../assets/images/stacks/tailwindcss.png";
import Sass from "../../../../assets/images/stacks/Sass.png";
import vue from "../../../../assets/images/stacks/vue.png";
import react from "../../../../assets/images/stacks/react.png";

export default function Skills() {
  const timer = 200;

  return (
    <div className="h-96 pr-7 flex-1" data-aos="zoom-in" data-aos-delay="500">
      <div className="grid grid-cols-2 grid-rows-4 gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[530px]:grid-cols-1">
        {squareData.map((square) => (
          <div
            key={square.id}
            data-aos="fade-left"
            data-aos-delay={timer * square.id}
            className="flex justify-center items-center max-h-20 w-52 rounded-lg shadow-md shadow-[#306d9d] max-[530px]:w-full"
          >
            <img
              src={square.src}
              alt="Imagem da tecnologia"
              className="w-36 object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const squareData = [
  {
    id: 1,
    src: nuxt,
  },
  {
    id: 2,
    src: vue,
  },
  {
    id: 3,
    src: react,
  },
  {
    id: 4,
    src: javascript,
  },
  {
    id: 5,
    src: typescript,
  },
  {
    id: 6,
    src: tailwindcss,
  },
  {
    id: 7,
    src: Sass,
  },
];
