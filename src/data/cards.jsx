import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

import { simpleFaker } from "@faker-js/faker";

import project1 from "../../assets/images/projects/projeto_1.png";
import project2 from "../../assets/images/projects/projeto_2.png";
import project3 from "../../assets/images/projects/projeto_3.png";
import project4 from "../../assets/images/projects/projeto_4.png";

const cards = [
  {
    url: project1,
    title: "MiMovies",
    description:
      "MiMovies é uma aplicação web moderna para explorar filmes, com integração à API do TMDB. Permite pesquisar filmes, ver detalhes, trailers e salvar favoritos.",
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://mi-movie-ten.vercel.app/",
    githubLink: "https://github.com/miquelven/MiMovie",
  },
  {
    url: project2,
    title: "Kanbanity",
    description:
      "Uma aplicação web de quadro Kanban com visual cartoon, construída para organizar tarefas de forma leve, visual e divertida. Possui drag and drop e persistência local.",
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://kanbanity.vercel.app/",
    githubLink: "https://github.com/miquelven/Kanbanity",
  },
  {
    url: project3,
    title: "Github Analytics",
    description:
      "Uma plataforma moderna para análise detalhada de perfis e repositórios do GitHub. Exibe métricas, gráficos e insights sobre desenvolvedores.",
    stacks: [<SiNextdotjs />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#000000", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://github-analytics-two.vercel.app/",
    githubLink: "https://github.com/miquelven/github-analytics",
  },
  {
    url: project4,
    title: "Chronorun",
    description: "Projeto de games com ranking global e pessoal.",
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://www.chronorun.com.br/",
    githubLink: "https://github.com/miquelven/ChronoRun",
  },
];
export default cards;
