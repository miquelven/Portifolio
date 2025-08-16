import { useRef } from "react";
import { FaDownload, FaSpinner, FaCheck } from "react-icons/fa";
import downloadCV from "../../../assets/cv/miquelven-CV.pdf";

export default function DownloadButton() {
  const downloadIcon = useRef(null);
  const downloadLoader = useRef(null);
  const downloadCheckMark = useRef(null);
  const downloadText = useRef(null);

  const animationEnd = () => {
    if (
      downloadLoader.current &&
      downloadCheckMark.current &&
      downloadText.current &&
      downloadIcon.current
    ) {
      downloadLoader.current.classList.add("hidden");
      downloadCheckMark.current.classList.remove("hidden");
      downloadText.current.innerHTML = "Baixado";
      setTimeout(() => {
        downloadText.current.innerHTML = "Download CV";
        downloadCheckMark.current.classList.add("hidden");
        downloadIcon.current.classList.remove("hidden");
      }, 1000);
    }
  };

  const animationStart = () => {
    if (
      downloadIcon.current &&
      downloadLoader.current &&
      downloadText.current
    ) {
      downloadIcon.current.classList.add("hidden");
      downloadLoader.current.classList.remove("hidden");
      downloadText.current.innerHTML = "Baixando...";
      setTimeout(animationEnd, 1000);
    }
  };

  return (
    <a
      aria-label="download button"
      role="link"
      href={downloadCV}
      download
      target="_blank"
      onClick={animationStart}
      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 border border-red-400/20 backdrop-blur-sm"
    >
      <FaDownload 
        ref={downloadIcon}
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" 
      />
      <FaSpinner 
        ref={downloadLoader}
        className="w-4 h-4 animate-spin hidden" 
      />
      <FaCheck 
        ref={downloadCheckMark}
        className="w-4 h-4 hidden" 
      />
      <span
        ref={downloadText}
        className="font-semibold tracking-wide"
      >
        Download CV
      </span>
    </a>
  );
}
