import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import miCoin from "../../assets/images/projects/MiCoin.png";
import miDrinks from "../../assets/images/projects/MiDrinks.png";
import game from "../../assets/images/projects/MiGame.png";
import pokeList from "../../assets/images/projects/PokeList.png";
import miPizza from "../../assets/images/projects/MiPizza.png";

const cards = [
  {
    url: miCoin,
    title: "MiCoin",
    description:
      " Com uma variedade de recursos intuitivos, o miCoin permite que você acompanhe informações detalhadas sobre várias moedas digitais. Favoritos personalizados permitem que você mantenha suas escolhas em destaque, enquanto o monitoramento de preços por e-mail o mantém informado sobre as mudanças do mercado. Com recursos de filtragem por categorias e opções de paginação, você tem controle total sobre sua experiência de navegação. Explore, analise e acompanhe as criptomoedas de forma conveniente e eficaz com o miCoin.",
    stacks: [<FaReact />, <SiTailwindcss />, <IoLogoJavascript />],
    stackColors: ["#087ea4", "#1dc0cd", "#d6ba32"],
    id: 1,
    projectLink: "https://mi-coin.vercel.app/",
    githubLink: "https://github.com/miquelven/MiCoin",
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
    id: 3,
    projectLink: "https://gametest.com.br/",
    githubLink: "https://github.com/miquelven/games_in_a_game",
  },
  {
    url: pokeList,
    title: "PokeList",
    description:
      "Pokelist é um site que oferece uma lista organizada de diversos Pokémon, divididos por categoria para facilitar a navegação. Uma das funcionalidades principais do Pokelist é a capacidade de pesquisar por nome, permitindo que os usuários encontrem facilmente informações sobre um Pokémon específico. Além disso, os usuários podem favoritar seus Pokémon favoritos, mantendo uma lista personalizada.",
    stacks: [<FaVuejs />, <FaSass />, <SiTypescript />],
    stackColors: ["#6cb485", "#ce6b9c", "#087ecf"],
    id: 4,
    projectLink: "https://poke-favorite.vercel.app/",
    githubLink: "https://github.com/miquelven/PokeList",
  },
  {
    url: miPizza,
    title: "MiPizza",
    description:
      "MiPizza é uma landing page projetada para uma pizzaria fictícia, concebida para proporcionar aos clientes uma experiência online atraente e funcional. A página apresenta uma lista abrangente de pizzas, cada uma detalhada com seus ingredientes e sabores exclusivos, cuidadosamente elaborados para satisfazer diversos paladares. Além disso, implementamos uma funcionalidade de contato via WhatsApp, permitindo que os clientes se conectem instantaneamente com a loja para fazer seus pedidos de forma rápida e conveniente.",
    stacks: [<FaReact />, <SiTailwindcss />, <IoLogoJavascript />],
    stackColors: ["#087ea4", "#1dc0cd", "#d6ba32"],
    id: 5,
    projectLink: "https://mi-pizza.vercel.app/",
    githubLink: "https://github.com/miquelven/miPizza",
  },
];

export default cards;
