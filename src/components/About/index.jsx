import Skills from "./Skills";
import monthsStudy from "../../helpers/monthsStudy";

export default function About() {
  return (
    <>
      <div className="my-52 max-w-[1500px] h-96 mx-auto px-5 flex max-xl:flex-col max-xl:gap-16 max-xl:mt-14 max-xl:mb-96">
        <div
          className="flex-[2] flex flex-col gap-8 text-justify text-lg font-light "
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <p>
            Aos meus 16 anos, fui apresentado ao desenvolvimento. Com uma paixão
            enraizada em jogos, decidi investigar a criação dos mesmos. Após
            algum tempo de pesquisa, optei por aprender C#, pois percebi suas
            capacidades para a criação de jogos. Embora tenha dedicado um mês a
            esse estudo, fui obrigado a interrompê-lo devido à falta de acesso à
            internet e à utilização de um computador de 2010, montado
            precariamente em uma cama. Essas circunstâncias adversas me
            afastaram temporariamente do aprendizado.
          </p>
          <p>
            Anos mais tarde, retornei ao mundo do desenvolvimento, desta vez
            focado no front-end. Entretanto, devido às responsabilidades da
            escola e do trabalho, minha dedicação aos estudos foi limitada.
            Determinado a avançar, economizei o suficiente para adquirir um
            notebook, deixando meu emprego para me dedicar integralmente ao
            aprendizado. Atualmente, há {monthsStudy} meses, estou totalmente
            empenhado em aprimorar minhas habilidades e conhecimentos
            diariamente.
          </p>
          <p>
            Minhas principais áreas de conhecimento abrangem{" "}
            <span className="font-medium">
              Nuxt, Vue, React, Typescript, Javascript, Tailwind, Sass
            </span>
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
