import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { PiMouseSimpleDuotone } from "react-icons/pi";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import imgHero from "../../imgHero.webp";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function ScrollProjects() {
  return (
    <section id="project" className="bg-[#245276] my-20 py-10">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          <PiMouseSimpleDuotone className="h-14 w-14 fill-[#d9e8f3]" />
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <a href="#project">
          <MdKeyboardDoubleArrowUp className="h-14 w-14 fill-[#d9e8f3]" />
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
    <div ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
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
    <div
      key={card.id}
      className="group relative h-[550px] w-[550px] overflow-hidden bg-[#3c88c4] rounded-2xl"
    >
      <div className="absolute h-1/2 w-full top-0 flex justify-center transition-transform duration-300">
        <div className="absolute z-10 inset-0 ">
          <img
            src={card.url}
            alt="Imagem do Projeto"
            className="absolute h-full z-20 w-full bg-cover "
          />
          <div className="absolute opacity-0  inset-0 bg-black/40 z-20 flex justify-center items-center transition-all duration-300 hover:cursor-pointer hover:opacity-100">
            <FaExpandArrowsAlt className="absolut h-10 w-10 fill-zinc-300" />
          </div>
        </div>
        <div className="absolute z-20 -bottom-10 left-4">
          <h3 className="font-medium text-2xl text-zinc-100">
            Nome do Projeto
          </h3>
        </div>
        <div className="absolute z-20 -bottom-10 right-2 w-32 h-10 flex justify-end items-center gap-4">
          <FaShareFromSquare className="w-6 h-7 fill-zinc-300 transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:fill-[#245276] " />
          <FaGithub className="w-6 h-6 fill-zinc-300 transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:fill-[#245276]" />
        </div>
      </div>
      <div className="h-60 absolute bottom-0 right-0 left-0 z-10 p-4">
        <div className="flex gap-3 items-center text-zinc-100">Stacks</div>
        <div data-card className=" max-h-32  overflow-y-auto mt-5 pr-6">
          <p className="font-light text-justify text-zinc-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            atque sapiente molestiae! Eligendi, aliquam tenetur fugit quidem
            itaque quia! Veritatis vitae autem amet ipsum ex nobis
            necessitatibus nisi exercitationem laboriosam? Ad consequuntur
            adipisci ipsa suscipit quos, magni obcaecati dicta dolore
            necessitatibus, fugiat earum eligendi alias tempora asperiores!
            Nobis nam sed quam odit fugiat explicabo tenetur ipsa! Ducimus
            veniam recusandae maxime. Temporibus nihil beaiatur. Itaque sapiente
            earum vero culpa consequatur ducimus, sunt, rerum commodi quam minus
            molestias eaque repellendus eos non, repudiandae animi! Reiciendis
            maiores atque, at maxime facilis quo ab consequuntur dolore libero.
            Iste sunt amet aspernatur, earum dicta accusantium harum totam
            pariatur voluptatum doloremque labore. Ex ut fuga dolorum, pariatur
            voluptates sequi saepe adipisci sed, suscipit dignissimos impedit
            quam voluptate eligendi velit. Nulla ex nostrum in ducimus explicabo
            ipsam distinctio facere consectetur non aspernatur repellat quaerat
            alias, rerum doloremque vitae animi, quod voluptates illum inventore
            enim dolorem. Alias adipisci odit necessitatibus aliquam. Corrupti
            repellat labore nulla tenetur deserunt recusandae quia
            necessitatibus pariatur facilis, ratione dolore. Qui obcaecati esse
            nostrum saepe fugiat corporis veniam quidem endus esse vitae sint
            eius ipsum, nostrum dolores sequi.
          </p>
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    url: imgHero,
    title: "Title 1",
    id: 1,
  },
  {
    url: imgHero,
    title: "Title 2",
    id: 2,
  },
  {
    url: imgHero,
    title: "Title 3",
    id: 3,
  },
  {
    url: imgHero,
    title: "Title 4",
    id: 4,
  },
  {
    url: imgHero,
    title: "Title 5",
    id: 5,
  },
];
