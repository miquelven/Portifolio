import { FaReact, FaMobileAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMaterialdesign,
} from "react-icons/si";

import { simpleFaker } from "@faker-js/faker";

import project1 from "../../assets/images/projects/projeto_1.png";
import project2 from "../../assets/images/projects/projeto_2.png";
import project3 from "../../assets/images/projects/projeto_3.png";
import project4 from "../../assets/images/projects/projeto_4.png";
import project5 from "../../assets/images/projects/projeto_5.png";
// Idealmente teríamos uma imagem para o Launchpad Studio, vou usar projeto_1.png como placeholder se não houver outra,
// mas vou checar se existe uma imagem específica ou usar uma das existentes.

const cards = [
  {
    url: project1, // TODO: Update with real image if available
    title: "Launchpad Studio",
    description: {
      pt: "Landing page desenvolvida para uma tatuadora, com foco na apresentação de seu trabalho, identidade visual, experiência de navegação e contato com clientes.",
      en: "Landing page developed for a tattoo artist, focusing on work showcase, visual identity, browsing experience, and client contact.",
    },
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://launchpad-studio-one.vercel.app/",
    githubLink: "https://github.com/miquelven/launchpad-studio",
  },
  {
    url: project2,
    title: "Kanbanity",
    description: {
      pt: "Aplicação de gerenciamento de tarefas com interface visual inspirada em quadros Kanban, desenvolvida para organizar atividades e acompanhar o fluxo de trabalho.",
      en: "Task management application with a Kanban-inspired visual interface, developed to organize activities and track workflow.",
    },
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://kanbanity.vercel.app/",
    githubLink: "https://github.com/miquelven/Kanbanity",
  },
  {
    url: project3,
    title: "Github Analytics",
    description: {
      pt: "Dashboard para análise e visualização de informações de perfis e repositórios do GitHub.",
      en: "Dashboard for analyzing and visualizing GitHub profile and repository information.",
    },
    stacks: [<SiNextdotjs />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#000000", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://github-analytics-two.vercel.app/",
    githubLink: "https://github.com/miquelven/github-analytics",
  },
  {
    url: project1,
    title: "MiMovies",
    description: {
      pt: "Aplicação web para explorar filmes, consultar informações e descobrir títulos utilizando integração com uma API externa.",
      en: "Web application to explore movies, consult information, and discover titles using integration with an external API.",
    },
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://mi-movie-ten.vercel.app/",
    githubLink: "https://github.com/miquelven/MiMovie",
  },
  {
    url: project4,
    title: "Chronorun",
    description: {
      pt: "Projeto de jogos com sistema de ranking global e funcionalidades voltadas à competição entre usuários.",
      en: "Game project with global ranking system and features aimed at user competition.",
    },
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://www.chronorun.com.br/",
    githubLink: "https://github.com/miquelven/ChronoRun",
  },
  {
    url: project5,
    title: "Vinil Store",
    description: {
      pt: "Projeto conceitual de interface para uma loja virtual de discos de vinil, explorando layout, experiência de navegação e apresentação de produtos.",
      en: "Conceptual interface project for a vinyl record online store, exploring layout, browsing experience, and product presentation.",
    },
    stacks: [<FaReact />, <SiTailwindcss />, <SiTypescript />],
    stackColors: ["#087ea4", "#1dc0cd", "#087ecf"],
    id: simpleFaker.string.uuid(),
    projectLink: "https://lp-ecommerce-mu.vercel.app/",
    githubLink: "https://github.com/miquelven/lp-ecommerce",
  },
];
export default cards;
