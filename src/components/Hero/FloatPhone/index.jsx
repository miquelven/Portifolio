import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import DownloadButton from "../../DownloadButton";

export default function FloatingPhone() {
  return (
    <>
      <div
        data-testid="floatingPhone"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-30deg) rotateX(15deg)",
        }}
        className="rounded-[24px] bg-[#245276] w-[402px] "
      >
        <motion.div
          data-testid="floatingPhoneAnimated"
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
          className="relative h-96 w-full rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px] max-lg:h-[340px]"
        >
          <HeaderBar />
          <Screen />
        </motion.div>
      </div>
    </>
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
    <div
      data-scroll-wrapper
      className="relative z-0 h-full w-full flex justify-center items-center overflow-hidden rounded-[20px] bg-white"
    >
      <div className="transition-all duration-500 h-32 w-60 rounded-full bg-[#3c88c4] hover:bg-[#3579ae] max-lg:h-24 max-lg:w-52">
        <div className="w-full h-full flex justify-center items-center">
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};
