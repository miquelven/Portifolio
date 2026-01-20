import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import project1 from "../../assets/images/projects/projeto_1.png";
import project2 from "../../assets/images/projects/projeto_2.png";
import project3 from "../../assets/images/projects/projeto_3.png";

export default function Modal() {
  const { idImage } = useParams();

  // Decodifica a URL caso venha com %20 (embora useParams geralmente já faça isso)
  const decodedId = decodeURIComponent(idImage);
  const imageData = images[decodedId] || images[idImage];

  if (!imageData) return null;

  return (
    <AnimatePresence initial={true} mode="popLayout">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-zinc-900/80 fixed inset-0  flex justify-center items-center z-40"
        onClick={() => window.history.back()}
      >
        <div className="fixed w-3/4 h-3/4 flex justify-center items-center rounded-xl shadow-sm shadow-zinc-900 overflow-hidden max-lg:w-[90vw] max-lg:h-[60vw] max-sm:w-[90vw] max-sm:h-[40vh]">
          <div
            className="h-full w-full  transition-all duration-500 hover:scale-[1.02] max-sm:h-3/4"
            style={{
              background: `url(${imageData.img})`,
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
  MiMovies: {
    img: project1,
  },
  Kanbanity: {
    img: project2,
  },
  "Github Analytics": {
    img: project3,
  },
};
