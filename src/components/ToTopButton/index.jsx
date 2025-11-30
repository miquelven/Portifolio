import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ToTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 800) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 800) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <button
      aria-label="botão para ir ao topo da página"
      data-testid="button"
      onClick={scrollTop}
      className="transition-colors duration-200 fixed bottom-12 right-10 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex justify-center items-center shadow-md shadow-black"
      style={{
        opacity: showScroll ? "1" : "0",
        zIndex: showScroll ? "10" : "-1",
      }}
    >
      <FaArrowUp />
    </button>
  );
}
