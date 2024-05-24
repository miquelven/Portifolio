import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card({ card }) {
  return (
    <div
      data-testid="scrollProjectsCard"
      className="group relative h-[600px]  w-[550px] overflow-hidden bg-[#d9e8f3] shadow-sm shadow-[#306d9d]  rounded-2xl max-sm:w-[450px] max-[480px]:w-80 max-[480px]:h-[490px]"
    >
      <div className="absolute h-1/2 w-full top-0  flex justify-center transition-transform duration-300">
        <div className="absolute z-10 inset-0  ">
          <div
            role="img"
            className="w-full h-full "
            style={{
              background: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          ></div>
          <Link data-testid="linkImg" to={"/" + card.title}>
            <div className="absolute opacity-0  inset-0 bg-black/70 z-20 flex justify-center items-center transition-all duration-300 hover:cursor-pointer hover:opacity-100 ">
              <FaExpandArrowsAlt className="absolute h-10 w-10 fill-[#fff] max-sm:w-6 max-sm:h-6" />
            </div>
          </Link>
        </div>
        <div className="bg-[#245276] w-full h-[3px] absolute z-20 -bottom-[.5px] "></div>
        <div className="absolute z-20  -bottom-12 left-4">
          <h3 className="font-bold text-3xl text-[#080808] max-sm:text-2xl ">
            {card.title}
          </h3>
        </div>
        <div className=" absolute z-20 -bottom-[3.2rem] right-2 w-32 h-10 flex justify-end items-center gap-4 max-[480px]:mt-3">
          <a data-testid="project" href={card.projectLink} target="_blank">
            <FaShareFromSquare className="w-6 h-7 fill-[#080808] opacity-90 transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:opacity-80 max-[480px]:w-5 max-[480px]:h-6" />
          </a>
          <a data-testid="github" href={card.githubLink} target="_blank">
            <FaGithub className="w-6 h-6 fill-[#080808] opacity-90 transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:opacity-80 max-[480px]:w-5 max-[480px]:h-6" />
          </a>
        </div>
      </div>
      <div className="h-[250px] absolute bottom-0 right-0 left-0 z-10 py-4 pl-4 pr-2 max-[480px]:h-[200px]">
        <div className=" flex gap-3 items-center" data-testid="stacks">
          {card.stacks.map((stack, stackIndex) => (
            <span
              className={`text-2xl mb-3 hover:scale-105 max-[480px]:text-xl`}
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
          <p className="font-medium leading-7 text-justify text-[#717171] max-[480px]:text-s max-[480px]:mr-4">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}
