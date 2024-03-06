import javascript from "../../javascript.png";
import typescript from "../../typescript.png";
import nuxt from "../../nuxt.png";
import tailwindcss from "../../tailwindcss.png";
import Sass from "../../Sass.png";
import vue from "../../vue.png";
import react from "../../react.png";

export default function Skills() {
  const timer = 200;

  return (
    <div className="h-96 pr-7 flex-1" data-aos="zoom-in" data-aos-delay="500">
      <div className="grid grid-cols-2 grid-rows-4 gap-8 ">
        {squareData.map((square) => (
          <div
            key={square.id}
            data-aos="fade-left"
            data-aos-delay={timer * square.id}
            className="flex justify-center items-center max-h-20 rounded-lg shadow-md shadow-[#306d9d]"
          >
            <img
              src={square.src}
              alt="Imagem da tecnologia"
              className="w-3/4 object-cover "
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
