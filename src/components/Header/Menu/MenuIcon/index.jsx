import { MotionConfig, motion } from "framer-motion";

export default function MenuIcon({ isOpen }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        name="menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative h-14 w-14 rounded-full transition-scale duration-300 hover:scale-110  max-sm:h-10 max-sm:w-10"
        style={{ backgroundColor: isOpen ? "transparent" : "#306d9d" }}
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white max-sm:w-7"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white max-sm:w-7"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute bottom-[35%]  h-1 w-5 bg-white max-sm:w-4"
          style={{
            x: "-50%",
            y: "50%",
            left: "calc(50% + 7px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      // left: "calc(50% + 10px)",
    },
  },
};
