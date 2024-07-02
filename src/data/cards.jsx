import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import { simpleFaker } from "@faker-js/faker";

import miCoin from "../../assets/images/projects/MiCoin.webp";
import miDrinks from "../../assets/images/projects/MiDrinks.webp";
import miMovie from "../../assets/images/projects/MiMovie.webp";
import game from "../../assets/images/projects/MiGame.webp";
import MiEstilo from "../../assets/images/projects/MiEstilo.webp";
import MiRestaurante from "../../assets/images/projects/MiRestaurante.webp";

const cards = [
  {
    url: game,
    title: "MiGame",
    description:
      "Desenvolvi o miGame com um sistema de classificação competitivo que registra as pontuações mais altas. Foquei em criar uma interface amigável e intuitiva para uma experiência fluida. Implementações de segurança robustas garantem a proteção dos dados dos usuários, especialmente no login e registro.",
    stacks: [
      <FaVuejs />,
      <SiTailwindcss />,
      <IoLogoJavascript />,
      <TbBrandMysql />,
      <FaNode />,
    ],
    stackColors: ["#38a27a", "#1dc0cd", "#d6ba32", "#e26c09", "#93c745"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://gametest.com.br/",
    githubLink: "https://github.com/miquelven/games_in_a_game",
  },

  {
    url: miCoin,
    title: "MiCoin",
    description:
      "O miCoin oferece recursos intuitivos para acompanhar informações de várias moedas digitais. Favoritos personalizados e monitoramento de preços por e-mail mantêm você informado sobre o mercado. Com filtragem por categorias e paginação, você tem controle total sobre a navegação e análise das criptomoedas.",
    stacks: [<FaReact />, <SiTailwindcss />, <IoLogoJavascript />],
    stackColors: ["#087ea4", "#1dc0cd", "#d6ba32"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://mi-coin.vercel.app/",
    githubLink: "https://github.com/miquelven/MiCoin",
  },
  {
    url: miMovie,
    title: "MiMovie",
    description:
      "MiMovie é sua plataforma completa para explorar filmes. Com uma extensa biblioteca e pesquisa avançada, encontre facilmente o que procura. Use filtros por categoria, favorite filmes e salve para assistir mais tarde.",
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://mi-movie-ten.vercel.app/",
    githubLink: "https://github.com/miquelven/MiMovie",
  },

  {
    url: miDrinks,
    title: "MiDrinks",
    description:
      "MiDrinks é sua plataforma para explorar bebidas. Com uma vasta biblioteca e pesquisa avançada, encontre coquetéis ou bebidas específicas. Filtros por categoria ajudam a refinar sua busca, seja por tipo de bebida alcoólica, não alcoólica ou sazonal.",
    stacks: [<SiNuxtdotjs />, <FaSass />, <SiTypescript />],
    stackColors: ["#0ade87", "#ce6b9c", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://mi-drinks.vercel.app/",
    githubLink: "https://github.com/miquelven/miDrinks",
  },

  {
    url: MiRestaurante,
    title: "MiRestaurante",
    description:
      "MiRestaurante é um espaço gastronômico fictício, projetado para cativar clientes com design simples e objetivo. Destaca pratos, avaliações de clientes, endereço e um ambiente acolhedor.",
    stacks: [<FaReact />, <SiTailwindcss />, <IoLogoJavascript />],
    stackColors: ["#087ea4", "#1dc0cd", "#d6ba32"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://mi-restaurant.vercel.app/",
    githubLink: "https://github.com/miquelven/Mi-Restaurant",
  },

  {
    url: MiEstilo,
    title: "MiEstilo",
    description:
      "MiEstilo é uma landing page que oferece uma ampla seleção de produtos, coleções exclusivas e descontos. Com uma abordagem direta e objetiva, busca cativar novos clientes e proporcionar uma experiência visualmente agradável.",
    stacks: [<FaVuejs />, <SiTailwindcss />, <IoLogoJavascript />],
    stackColors: ["#6cb485", "#1dc0cd", "#d6ba32"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://mi-estilo.vercel.app/",
    githubLink: "https://github.com/miquelven/miEstilo",
  },
];
export default cards;
