import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import imgHero from "../../../../assets/images/hero/perfil.webp";
import DownloadButton from "../../DownloadButton";

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
      <div className="w-1/2 h-1/2 rounded-full bg-[#3c88c4] flex justify-center items-center mb-10 ">
        <div className="w-[calc(100%-8px)] h-[calc(100%-12px)] rounded-full bg-white flex justify-center items-center max-sm:flex-col max-sm:justify-end max-[380px]:justify-center">
          <img
            src={imgHero}
            alt="gifHero"
            className="w-full mb-16 rounded-full max-sm:mb-0"
          />
        </div>
      </div>

      <DownloadButton />

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-[#3c88c4]" />
    </div>
  );
};
