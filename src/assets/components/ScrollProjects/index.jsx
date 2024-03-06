import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { PiMouseSimpleDuotone } from "react-icons/pi";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import miCoin from "../../miCoin.png";
import miDrinks from "../../miDrinks.png";
import game from "../../game.png";
import pokeList from "../../pokeList.png";
import miPizza from "../../miPizza.png";

import { Link } from "react-router-dom";

export default function ScrollProjects() {
  return (
    <section
      id="project"
      className="bg-[#245276] my-20 py-10 max-xl:mt-96 max-[530px]:mt-[950px]"
      data-aos="fade-up"
    >
      <div className="flex h-48  items-center justify-center">
        <span
          className="font-semibold uppercase text-neutral-500"
          data-aos="zoom-in"
        >
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
    <div
      ref={targetRef}
      className="relative h-[300vh] "
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20">
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
      <div
        key={card.id}
        className="group relative h-[600px]  w-[550px] overflow-hidden bg-[#3c88c4] shadow-sm shadow-[#306d9d] rounded-2xl "
      >
        <div className="absolute h-1/2 w-full top-0 flex justify-center transition-transform duration-300">
          <div className="absolute z-10 inset-0 ">
            <img
              src={card.url}
              alt="Imagem do Projeto"
              className="absolute h-full z-20 w-full bg-cover "
            />
            <Link
              to={
                "/" +
                card.url.split("assets/")[1].split(".png")[0].split("-")[0]
              }
            >
              <div className="absolute opacity-0  inset-0 bg-black/70 z-20 flex justify-center items-center transition-all duration-300 hover:cursor-pointer hover:opacity-100">
                <FaExpandArrowsAlt className="absolut h-10 w-10 fill-zinc-300" />
              </div>
            </Link>
          </div>
          <div className="absolute z-20 -bottom-12 left-4">
            <h3 className="font-bold text-3xl text-zinc-100">{card.title}</h3>
          </div>
          <div className="absolute z-20 -bottom-10 right-2 w-32 h-10 flex justify-end items-center gap-4">
            <a href={card.projectLink} target="_blank">
              <FaShareFromSquare className="w-6 h-7 fill-zinc-300 transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:fill-[#245276] " />
            </a>
            <a href={card.githubLink} target="_blank">
              <FaGithub className="w-6 h-6 fill-zinc-300 transition-all duration-300  hover:scale-125 hover:cursor-pointer hover:fill-[#245276]" />
            </a>
          </div>
        </div>
        <div className="h-[250px] absolute bottom-0 right-0 left-0 z-10 p-4 ">
          <div className=" flex gap-3 items-center text-zinc-100">
            {card.stacks.map((stack) => (
              <span className="text-2xl mb-3 text-zinc-200 hover:scale-105 ">
                {stack}
              </span>
            ))}
          </div>
          <div data-card className=" max-h-40  overflow-y-auto mt-5 pr-6">
            <p className="font-light text-justify text-zinc-300">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const cards = [
  {
    url: miCoin,
    title: "MiCoin",
    description:
      " Com uma variedade de recursos intuitivos, o miCoin permite que você acompanhe informações detalhadas sobre várias moedas digitais. Favoritos personalizados permitem que você mantenha suas escolhas em destaque, enquanto o monitoramento de preços por e-mail o mantém informado sobre as mudanças do mercado. Com recursos de filtragem por categorias e opções de paginação, você tem controle total sobre sua experiência de navegação. Explore, analise e acompanhe as criptomoedas de forma conveniente e eficaz com o miCoin.",
    stacks: [<FaReact />, <SiTailwindcss />, <IoLogoJavascript />],
    id: 1,
    projectLink: "https://mi-coin.vercel.app/",
    githubLink: "https://github.com/miquelven/MiCoin",
  },
  {
    url: miDrinks,
    title: "MiDrinks",
    description:
      "miDrinks é sua plataforma completa para explorar o vasto universo das bebidas. Com uma extensa biblioteca de informações. Com recursos de pesquisa avançada, você pode facilmente encontrar o que procura, seja um coquetel específico ou uma bebida com ingredientes específicos. Além disso, os filtros por categoria permitem que você refine sua busca, seja por tipo de bebida alcoólica, não alcoólica ou sazonal.",
    stacks: [<SiNuxtdotjs />, <FaSass />, <IoLogoJavascript />],
    id: 2,
    projectLink: "https://mi-drinks.vercel.app/",
    githubLink: "https://github.com/miquelven/miDrinks",
  },
  {
    url: miPizza,
    title: "MiPizza",
    description:
      "miPizza é uma landing page projetada para uma pizzaria fictícia, concebida para proporcionar aos clientes uma experiência online atraente e funcional. A página apresenta uma lista abrangente de pizzas, cada uma detalhada com seus ingredientes e sabores exclusivos, cuidadosamente elaborados para satisfazer diversos paladares. Além disso, implementamos uma funcionalidade de contato via WhatsApp, permitindo que os clientes se conectem instantaneamente com a loja para fazer seus pedidos de forma rápida e conveniente.",
    stacks: [<FaReact />, <SiTailwindcss />, <IoLogoJavascript />],
    id: 3,
    projectLink: "https://mi-pizza.vercel.app/",
    githubLink: "https://github.com/miquelven/miPizza",
  },
  {
    url: game,
    title: "miGame",
    description:
      "O miGame possui um sistema de classificação competitivo, onde as pontuações mais altas dos jogadores são registradas e classificadas entre as melhores de todas. Ao desenvolver o miGame, concentrei-me em criar uma interface amigável e intuitiva que proporcionasse uma experiência de usuário fluida e agradável. Além disso, implementei medidas de segurança robustas para garantir a proteção dos dados dos usuários, especialmente no que diz respeito ao processo de login e registro.",
    stacks: [
      <FaVuejs />,
      <SiTailwindcss />,
      <IoLogoJavascript />,
      <TbBrandMysql />,
      <FaNode />,
    ],
    id: 4,
    projectLink: "https://gametest.com.br/",
    githubLink: "https://github.com/miquelven/games_in_a_game",
  },
  {
    url: pokeList,
    title: "PokeList",
    description:
      "Pokelist é um site que oferece uma lista organizada de diversos Pokémon, divididos por categoria para facilitar a navegação. Uma das funcionalidades principais do Pokelist é a capacidade de pesquisar por nome, permitindo que os usuários encontrem facilmente informações sobre um Pokémon específico. Além disso, os usuários podem favoritar seus Pokémon favoritos, mantendo uma lista personalizada.",
    stacks: [<FaVuejs />, <FaSass />, <SiTypescript />],
    id: 5,
    projectLink: "https://poke-favorite.vercel.app/",
    githubLink: "https://github.com/miquelven/PokeList",
  },
];
