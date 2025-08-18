import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import goodbyeImage from "../../../assets/images/goodbye.png";

export default function Footer() {
  const [showGoodbye, setShowGoodbye] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Verificar se o usuário está próximo do final da página (últimos 200px)
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 200;

      setShowGoodbye(isNearBottom);
    };

    // Verificar imediatamente ao carregar
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className=" w-full h-20 flex justify-center items-center text-white relative overflow-hidden">
      {/* Animação de despedida com imagem */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{
          y: showGoodbye ? -10 : 120,
          opacity: showGoodbye ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 0.8,
        }}
        className="absolute right-4 md:right-8 -bottom-20 flex justify-center items-end z-20 overflow-hidden"
      >
        {/* Caixa de diálogo */}
        <motion.div
          initial={{ scale: 0, x: 10, opacity: 0 }}
          animate={
            showGoodbye
              ? {
                  scale: 1,
                  x: 0,
                  opacity: 1,
                }
              : {
                  scale: 0,
                  x: 10,
                  opacity: 0,
                }
          }
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="relative -mr-1 mb-24"
        >
          {/* Balão de fala */}
          <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg border border-gray-200 relative">
            <span className="text-sm font-medium whitespace-nowrap">
              Até mais e obrigado pela visita!
            </span>

            {/* Seta do balão apontando para a direita */}
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-0 h-0 border-l-6 border-l-gray-200 border-t-3 border-t-transparent border-b-3 border-b-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Imagem de despedida - animação mais suave */}
        <motion.img
          src={goodbyeImage}
          alt="Goodbye"
          initial={{ scale: 1 }}
          animate={
            showGoodbye
              ? {
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                  y: [0, -3, 0],
                }
              : { scale: 1 }
          }
          transition={{
            duration: 2.5,
            repeat: showGoodbye ? Infinity : 0,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-28 h-28 md:w-36 md:h-36 object-contain select-none drop-shadow-lg"
          style={{
            objectPosition: "center top",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
          }}
        />

        {/* Efeito de brilho sutil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showGoodbye ? [0, 0.3, 0] : 0 }}
          transition={{
            duration: 2,
            repeat: showGoodbye ? Infinity : 0,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent rounded-full"
        />
      </motion.div>
    </footer>
  );
}
