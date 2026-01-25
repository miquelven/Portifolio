import { useRef, useState, useEffect } from "react";
import { FaDownload, FaSpinner, FaCheck } from "react-icons/fa";
import downloadCV from "../../../assets/cv/Miquelven-CV-base.pdf";

export default function DownloadButton() {
  const [downloadState, setDownloadState] = useState("idle");
  const downloadTimeoutRef = useRef(null);
  const downloadStartTime = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && downloadState === "downloading") {
        const timeElapsed = Date.now() - downloadStartTime.current;

        if (timeElapsed > 1000) {
          completeDownload();
        }
      }
    };

    const handleFocus = () => {
      if (downloadState === "downloading") {
        const timeElapsed = Date.now() - downloadStartTime.current;

        if (timeElapsed > 800) {
          completeDownload();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      if (downloadTimeoutRef.current) {
        clearTimeout(downloadTimeoutRef.current);
      }
    };
  }, [downloadState]);

  const completeDownload = () => {
    if (downloadTimeoutRef.current) {
      clearTimeout(downloadTimeoutRef.current);
    }

    setDownloadState("completed");

    setTimeout(() => {
      setDownloadState("idle");
    }, 2000);
  };

  const handleDownload = (e) => {
    setDownloadState("downloading");
    downloadStartTime.current = Date.now();

    downloadTimeoutRef.current = setTimeout(() => {
      completeDownload();
    }, 5000);

    setTimeout(() => {
      if (downloadState === "downloading") {
        const timeElapsed = Date.now() - downloadStartTime.current;
        if (timeElapsed > 2000) {
          completeDownload();
        }
      }
    }, 2000);
  };

  const getButtonContent = () => {
    switch (downloadState) {
      case "downloading":
        return (
          <>
            <FaSpinner className="icon-responsive animate-spin" />
            <span className="font-semibold tracking-wide text-sm md:text-base">
              Baixando...
            </span>
          </>
        );
      case "completed":
        return (
          <>
            <FaCheck className="icon-responsive animate-bounce" />
            <span className="font-semibold tracking-wide text-sm md:text-base">
              Baixado!
            </span>
          </>
        );
      default:
        return (
          <>
            <FaDownload className="icon-responsive" />
            <span className="font-semibold tracking-wide text-sm md:text-base">
              Download CV
            </span>
          </>
        );
    }
  };

  return (
    <a
      aria-label="download button"
      role="link"
      href={downloadCV}
      download
      target="_blank"
      onClick={handleDownload}
      className={`
        w-full font-semibold py-2 md:py-3 px-4 md:px-6 rounded-xl 
        transition-colors duration-200 shadow-lg flex items-center 
        justify-center gap-2 md:gap-3 border backdrop-blur-sm
        ${
          downloadState === "downloading"
            ? "bg-gradient-to-r from-yellow-500 to-orange-500 border-yellow-400/20"
            : downloadState === "completed"
              ? "bg-gradient-to-r from-green-500 to-green-600 border-green-400/20"
              : "bg-gradient-to-r from-red-500 to-red-600 border-red-400/20"
        } text-white
      `}
    >
      {getButtonContent()}
    </a>
  );
}
