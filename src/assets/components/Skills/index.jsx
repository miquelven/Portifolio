import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import javascript from "../../javascript.png";
import typescript from "../../typescript.png";
import nuxt from "../../nuxt.png";
import tailwindcss from "../../tailwindcss.png";
import Sass from "../../Sass.png";
import vue from "../../vue.png";
import react from "../../react.png";

export default function Skills() {
  return (
    <div className="h-96 pr-7 flex-1" data-aos="zoom-in" data-aos-delay="500">
      <ShuffleGrid />;
    </div>
  );
}

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: javascript,
  },
  {
    id: 2,
    src: typescript,
  },
  {
    id: 3,
    src: nuxt,
  },
  {
    id: 4,
    src: tailwindcss,
  },
  {
    id: 5,
    src: Sass,
  },
  {
    id: 6,
    src: vue,
  },
  {
    id: 7,
    src: react,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="flex items-center justify-center h-[70px] w-[170px] bg-[#d9e8f3] rounded-xl"
    >
      <img className="object-cover w-full " src={sq.src}></img>
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid   grid-cols-2 grid-rows-4 h-[7s50px] gap-10 ">
      {squares.map((sq) => sq)}
    </div>
  );
};
