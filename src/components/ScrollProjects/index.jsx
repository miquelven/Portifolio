import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import cards from "../../data/cards";

import { Link } from "react-router-dom";

export default function ScrollProjects() {
  return (
    <section
      id="project"
      className="bg-[#245276] my-20 py-10 max-xl:mt-96 max-[530px]:mt-[950px]"
      data-aos="fade-up"
    >
      <div className="flex h-48  items-center justify-center">
        <a
          href="#contact"
          className="flex flex-col items-center justify-center animate-pulse "
        >
          <span className="text-[#d9e8f3] text-sm -translate-y-3">
            ( Clique para rolar para baixo )
          </span>
          <MdKeyboardDoubleArrowUp className="h-14 w-14 fill-[#d9e8f3] rotate-180" />
        </a>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <a
          href="#project"
          className="flex flex-col items-center justify-center animate-pulse"
        >
          <MdKeyboardDoubleArrowUp className="h-14 w-14 fill-[#d9e8f3]" />
          <span className="text-[#d9e8f3] text-sm translate-y-3">
            ( Clique para rolar para cima )
          </span>
        </a>
      </div>
    </section>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div
      ref={targetRef}
      className="relative h-[300vh] "
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 max-sm:gap-32">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <>
      <div className="group  relative h-[600px]  w-[550px] overflow-hidden bg-[#d9e8f3] shadow-sm shadow-[#306d9d]  rounded-2xl max-sm:w-[450px] max-[480px]:w-80 max-[480px]:h-[490px]">
        <div className="absolute h-1/2 w-full top-0  flex justify-center transition-transform duration-300">
          <div className="absolute z-10 inset-0  ">
            <div
              className="w-full h-full "
              style={{
                background: `url(${card.url})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
            ></div>
            <Link
              className="max-sm:hidden"
              to={
                "/" +
                card.url
                  .split("assets/")[1]
                  .split(".png")[0]
                  .split("-")[0]
                  .split("projects/")[1]
              }
            >
              <div className="absolute opacity-0  inset-0 bg-black/70 z-20 flex justify-center items-center transition-all duration-300 hover:cursor-pointer hover:opacity-100 ">
                <FaExpandArrowsAlt className="absolut h-10 w-10 fill-[#245276] max-sm:w-6 max-sm:h-6" />
              </div>
            </Link>
          </div>
          <div className="bg-[#245276] w-full h-2 absolute z-20 -bottom-0 "></div>
          <div className="absolute z-20  -bottom-12 left-4">
            <h3 className="font-bold text-3xl text-[#245276] max-sm:text-2xl ">
              {card.title}
            </h3>
          </div>
          <div className=" absolute z-20 -bottom-10 right-2 w-32 h-10 flex justify-end items-center gap-4 max-[480px]:mt-3">
            <a href={card.projectLink} target="_blank">
              <FaShareFromSquare className="w-6 h-7 fill-[#245276] transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:fill-[#245276] max-[480px]:w-5 max-[480px]:h-6" />
            </a>
            <a href={card.githubLink} target="_blank">
              <FaGithub className="w-6 h-6 fill-[#245276] transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:fill-[#245276] max-[480px]:w-5 max-[480px]:h-6" />
            </a>
          </div>
        </div>
        <div className="h-[250px] absolute bottom-0 right-0 left-0 z-10 py-4 pl-4 pr-2 max-[480px]:h-[200px]">
          <div className=" flex gap-3 items-center text-zinc-100">
            {card.stacks.map((stack) => (
              <span className="text-2xl mb-3 text-[#245276] hover:scale-105 max-[480px]:text-xl">
                {stack}
              </span>
            ))}
          </div>
          <div
            data-card
            className=" max-h-40  overflow-y-auto mt-5 pr-6 max-[480px]:pr-0"
          >
            <p className="font-medium leading-7 text-justify text-[#245276] max-[480px]:text-s max-[480px]:mr-4">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
