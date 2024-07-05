import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card({ card }) {
  return (
    <div
      data-testid="scrollProjectsCard"
      className="group relative h-[600px]  w-[550px] overflow-hidden bg-[#d9e8f3] shadow-sm shadow-[#306d9d]  rounded-2xl max-sm:shadow-md max-sm:shadow-black/70 max-sm:h-[70%] max-sm:min-h-[540px] max-sm:w-[310px]"
    >
      <div className="absolute  h-1/2 w-full top-0  flex justify-center transition-transform duration-300">
        <div className=" absolute z-10 inset-0  ">
          <div
            role="img"
            className="w-full h-full "
            style={{
              background: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          ></div>
          <Link
            aria-label="icone para deixar a imagem em tela cheia"
            data-testid="linkImg"
            to={"/" + card.title}
          >
            <div className="absolute opacity-0  inset-0 bg-black/70 z-20 flex justify-center items-center transition-all duration-300 hover:cursor-pointer hover:opacity-100 ">
              <FaExpandArrowsAlt className="absolute h-10 w-10 fill-[#fff] max-sm:w-6 max-sm:h-6" />
            </div>
          </Link>
        </div>
        <div className="bg-[#245276] w-full h-[3px] absolute z-20 -bottom-[.5px] "></div>
        <div className="absolute z-20  -bottom-12 left-4">
          <h2 className="font-bold text-3xl text-[#080808] max-sm:text-2xl ">
            {card.title}
          </h2>
        </div>
        <div className=" absolute z-20 -bottom-[3.2rem] right-2 w-32 h-10 flex justify-end items-center gap-4 max-[480px]:mt-3">
          <a
            aria-label="icone para ir para o site do projeto"
            data-testid="project"
            href={card.projectLink}
            target="_blank"
          >
            <FaShareFromSquare className="w-6 h-7 fill-[#080808] opacity-90 transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:opacity-80 max-[480px]:w-5 max-[480px]:h-6" />
          </a>
          <a
            aria-label="icone do github"
            data-testid="github"
            href={card.githubLink}
            target="_blank"
          >
            <FaGithub className="w-6 h-6 fill-[#080808] opacity-90 transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:opacity-80 max-[480px]:w-5 max-[480px]:h-6" />
          </a>
        </div>
      </div>
      <div className=" h-[250px] absolute bottom-0 right-0 left-0 z-10 py-4 pl-4 pr-2 max-sm:h-[44%]">
        <div className=" flex gap-3 items-center" data-testid="stacks">
          {card.stacks.map((stack, stackIndex) => (
            <span
              className={`text-2xl mb-3 max-[480px]:text-xl`}
              style={{ color: card.stackColors[stackIndex] }}
              key={stackIndex}
            >
              {stack}
            </span>
          ))}
        </div>
        <div
          data-card
          className=" max-h-40  overflow-y-auto mt-5 pr-6 max-[480px]:pr-0"
        >
          <p className="font-medium leading-7 text-justify text-[#717171] max-[480px]:text-sm max-[480px]:mr-4">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}
