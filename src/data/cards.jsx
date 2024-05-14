import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

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
      "O miGame possui um sistema de classificação competitivo, onde as pontuações mais altas dos jogadores são registradas e classificadas entre as melhores de todas. Ao desenvolver o miGame, concentrei-me em criar uma interface amigável e intuitiva que proporcionasse uma experiência de usuário fluida e agradável. Além disso, implementei medidas de segurança robustas para garantir a proteção dos dados dos usuários, especialmente no que diz respeito ao processo de login e registro.",
    stacks: [
      <FaVuejs />,
      <SiTailwindcss />,
      <IoLogoJavascript />,
      <TbBrandMysql />,
      <FaNode />,
    ],
    stackColors: ["#38a27a", "#1dc0cd", "#d6ba32", "#e26c09", "#93c745"],
    id: 1,
    projectLink: "https://gametest.com.br/",
    githubLink: "https://github.com/miquelven/games_in_a_game",
  },

  {
    url: miCoin,
    title: "MiCoin",
    description:
      " Com uma variedade de recursos intuitivos, o miCoin permite que você acompanhe informações detalhadas sobre várias moedas digitais. Favoritos personalizados permitem que você mantenha suas escolhas em destaque, enquanto o monitoramento de preços por e-mail o mantém informado sobre as mudanças do mercado. Com recursos de filtragem por categorias e opções de paginação, você tem controle total sobre sua experiência de navegação. Explore, analise e acompanhe as criptomoedas de forma conveniente e eficaz com o miCoin.",
    stacks: [<FaReact />, <SiTailwindcss />, <IoLogoJavascript />],
    stackColors: ["#087ea4", "#1dc0cd", "#d6ba32"],
    id: 2,
    projectLink: "https://mi-coin.vercel.app/",
    githubLink: "https://github.com/miquelven/MiCoin",
  },
  {
    url: miMovie,
    title: "MiMovie",
    description:
      "MiMovie é sua plataforma completa para explorar vários filmes. Com uma extensa biblioteca de informações. Com recursos de pesquisa avançada, você pode facilmente encontrar o que procura. Além disso, os filtros por categoria permitem que você refine sua busca. Além de poder favoritar os filmes e salvar para assistir mais tarde.",
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: 3,
    projectLink: "https://mi-movie-ten.vercel.app/",
    githubLink: "https://github.com/miquelven/MiMovie",
  },

  {
    url: miDrinks,
    title: "MiDrinks",
    description:
      "MiDrinks é sua plataforma completa para explorar o vasto universo das bebidas. Com uma extensa biblioteca de informações. Com recursos de pesquisa avançada, você pode facilmente encontrar o que procura, seja um coquetel específico ou uma bebida com ingredientes específicos. Além disso, os filtros por categoria permitem que você refine sua busca, seja por tipo de bebida alcoólica, não alcoólica ou sazonal.",
    stacks: [<SiNuxtdotjs />, <FaSass />, <SiTypescript />],
    stackColors: ["#0ade87", "#ce6b9c", "#087ecf"],
    id: 2,
    projectLink: "https://mi-drinks.vercel.app/",
    githubLink: "https://github.com/miquelven/miDrinks",
  },

  {
    url: MiRestaurante,
    title: "MiRestaurante",
    description:
      "MiRestaurante foi meticulosamente projetado para apresentar um espaço gastronômico fictício, onde cada detalhe foi pensado para proporcionar uma experiência única aos nossos visitantes. Com um design simples e objetivo buscando cativar novos clientes. Ressaltando alguns pratos, avaliações de clientes, endereço e tambem o seu ambiente acolhedor.",
    stacks: [<FaReact />, <SiTailwindcss />, <IoLogoJavascript />],
    stackColors: ["#087ea4", "#1dc0cd", "#d6ba32"],
    id: 4,
    projectLink: "https://mi-restaurant.vercel.app/",
    githubLink: "https://github.com/miquelven/Mi-Restaurant",
  },

  {
    url: MiEstilo,
    title: "MiEstilo",
    description:
      "MiEstilo é uma Landing Page que oferece uma ampla seleção de produtos, coleções exclusivas e descontos irresistíveis. Nossa abordagem é direta e objetiva, com o objetivo de cativar novos clientes e proporcionar uma experiência visualmente agradável. ",
    stacks: [<FaVuejs />, <SiTailwindcss />, <IoLogoJavascript />],
    stackColors: ["#6cb485", "#1dc0cd", "#d6ba32"],
    id: 5,
    projectLink: "https://mi-estilo.vercel.app/",
    githubLink: "https://github.com/miquelven/miEstilo",
  },
];
export default cards;
