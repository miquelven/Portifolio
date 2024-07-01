import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MenuContent from "./MenuContent";
import MenuIcon from "./MenuIcon";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Menu() {
  const colors = ["#306d9d", "transparent"];

  const [color, setColor] = useState(colors[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    color == colors[1] ? setColor(colors[0]) : setColor(colors[1]);
  };

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex fixed z-50 top-7 gap-5">
        <a href="https://github.com/miquelven" target="_blank">
          <FaGithub
            className="w-7 h-7 transition-scale duration-300  hover:scale-110"
            style={{ fill: isOpen ? "#ffffff" : "#306d9d" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/miquelven-silva-80731a23b/"
          target="_blank"
        >
          <FaLinkedin
            className="w-7 h-7 transition-scale duration-300 hover:scale-110"
            style={{ fill: isOpen ? "#ffffff" : "#306d9d" }}
          />
        </a>
      </div>

      <div
        className="h-12 flex justify-end items-center fixed z-50 right-10 max-sm:right-[5%]"
        onClick={handleClick}
      >
        <MenuIcon isOpen={isOpen} />
      </div>

      <motion.div
        className="bg-[#245276]  p-32 md:p-20 fixed z-40 inset-0 max-sm:px-4"
        style={{ height: isOpen ? "100vh" : "0px" }}
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        animate={isOpen ? "open" : "closed"}
      >
        {isOpen && <MenuContent onLinkClick={handleLinkClick} />}
      </motion.div>
    </>
  );
}
