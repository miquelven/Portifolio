import Skills from "./Skills";
import monthsStudy from "../../helpers/monthsStudy";
import { useEffect } from "react";
import { useState } from "react";

export default function About() {
  const [months, setMonths] = useState(1);

  useEffect(() => {
    setMonths(monthsStudy());
  }, []);

  return (
    <>
      <div className="my-52 max-w-[1500px]  h-96 flex-col gap-12 mx-auto px-5 flex max-xl:gap-16 max-xl:mt-14 max-xl:mb-96 max-sm:mt-20">
        <div
          className="flex-[2] flex flex-col gap-8 text-justify text-xl max-sm:text-lg "
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <p>
            Comecei a me interessar por desenvolvimento aos 16 anos,
            inicialmente explorando C# para criação de jogos. Após uma pausa
            devido a limitações técnicas, retornei ao desenvolvimento com foco
            em front-end. Balanceando escola e trabalho, economizei para comprar
            um notebook e me dedicar integralmente aos estudos. Há {months}{" "}
            meses, venho aprimorando minhas habilidades e conhecimentos
            diariamente.
          </p>

          <p className="font-medium">
            Minhas principais áreas de conhecimento abrangem:
          </p>
        </div>

        {/* SPACER */}
        <div
          className="h-full mx-12 w-1 bg-gradient-to-t to-[#306d9d]/90 from-[#d9e8f3] rounded-sm max-xl:hidden"
          data-aos="fade-up"
          data-aos-delay="700"
        ></div>

        <Skills />
      </div>
    </>
  );
}
