import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import imgHero from "../../../../assets/images/hero/imgHero.webp";

export default function FloatingPhone() {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-[#245276] w-[402px]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(40px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-full rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
}

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-12 -translate-x-[50%] rounded-md bg-[#000] max-[420px]:w-2"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 h-full w-full flex justify-center items-center overflow-hidden rounded-[20px] bg-white">
      <img src={imgHero} alt="gifHero" className="w-1/6 " />

      <button className="absolute w-1/2 m-auto shadow-sm transition-all duration-300 border-2 border-[#245276]  bottom-4 left-4 right-4 z-10 rounded-lg  bg-white py-2 text-[#245276] backdrop-blur font-bold hover:shadow-[#3c88c4] hover:-translate-x-[1px] hover:-translate-y-[5px] max-[490px]:py-1 ">
        Currículo
      </button>

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-[#3c88c4]" />
    </div>
  );
};
