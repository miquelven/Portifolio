import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import cards from "../../data/cards";

import Card from "./ScrollProjectsCard";

export default function ScrollProjects() {
  return (
    <section
      data-scroll-wrapper
      data-testid="project"
      id="project"
      className="bg-[#245276] my-20 py-10 max-xl:mt-96 max-[530px]:mt-[950px]"
      data-aos="fade-up"
    >
      <div className="flex h-48  items-center justify-center">
        <a
          href="#contact"
          className="flex flex-col items-center justify-center animate-pulse "
        >
          <MdKeyboardDoubleArrowUp className="h-14 w-14 fill-[#d9e8f3] rotate-180" />
        </a>
      </div>
      <HorizontalScrollCarousel />
    </section>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div
      ref={targetRef}
      className="relative h-[300vh] "
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className=" flex gap-20 max-sm:gap-32">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};
