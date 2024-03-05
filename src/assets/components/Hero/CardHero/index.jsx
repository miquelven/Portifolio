import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import DecorationText from "../DecorationText";
import FloatingPhone from "../FloatPhone";

export default function CardHero() {
  return <TiltCard />;
}

const ROTATION_RANGE = 18.5;
const HALF_ROTATION_RANGE = 18.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative min-h-[calc(100vh-400px)] w-full rounded-xl bg-[#3c88c4] shadow-md mt-20 shadow-black"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4  rounded-xl flex  justify-center items-start drop-shadow-2xl shadow-lg bg-gradient-to-br from-[#306d9d] to-[#3c88c4] shadow-black/30"
      >
        <div
          className="flex-1 flex flex-col justify-center p-10 "
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h3 className="text-xl  [text-shadow:_0_2px_0_rgb(0_0_0_/70%)] font-medium text-zinc-200 mb-20">
            Olá! Eu sou o
            <DecorationText />
          </h3>

          <h1 className="text-5xl font-bold text-zinc-100 mb-10 [text-shadow:_0_2px_0_rgb(0_0_0_/70%)] ">
            Desenvolvedor Front End
          </h1>
          <p className="text-zinc-100 text-xl leading-8 font-light max-w-[550px] [text-shadow:_0_2px_0_rgb(0_0_0_/30%)]">
            Bem-vindo! Sou um apaixonado por código em busca de oportunidades
            para aplicar minhas habilidades de programação. Este repositório é
            uma amostra do meu conhecimento e minha dedicação contínua ao
            desenvolvimento. Estou sempre comprometido em aprimorar minhas
            habilidades e contribuir com projetos.
          </p>
        </div>
        <div
          className="
          flex-1 h-full flex justify-end items-center px-10
        "
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <FloatingPhone />
        </div>
      </div>
    </motion.div>
  );
};
