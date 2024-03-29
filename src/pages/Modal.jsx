import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import miCoin from "../../assets/images/projects/miCoin.png";
import miDrinks from "../../assets/images/projects/miDrinks.png";
import game from "../../assets/images/projects/game.png";
import pokeList from "../../assets/images/projects/pokeList.png";
import miPizza from "../../assets/images/projects/miPizza.png";

export default function Modal() {
  const { idImage } = useParams();

  return (
    <AnimatePresence initial={true} mode="popLayout">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-zinc-900/80 fixed inset-0  flex justify-center items-center z-40"
        onClick={() => window.history.back()}
      >
        <div className="fixed w-3/4 h-3/4 flex justify-center items-center rounded-xl shadow-sm shadow-zinc-900 overflow-hidden">
          <div
            className="h-full w-full transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: `url(${images[idImage].img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const images = {
  miCoin: {
    img: miCoin,
  },
  miDrinks: {
    img: miDrinks,
  },
  game: {
    img: game,
  },
  pokeList: {
    img: pokeList,
  },
  miPizza: {
    img: miPizza,
  },
};
