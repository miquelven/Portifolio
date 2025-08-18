import { useRef, useState, useEffect } from "react";
import { FaDownload, FaSpinner, FaCheck } from "react-icons/fa";
import downloadCV from "../../../assets/cv/Miquelven-CV-base.pdf";

export default function DownloadButton() {
  const [downloadState, setDownloadState] = useState('idle'); // 'idle', 'downloading', 'completed'
  const downloadTimeoutRef = useRef(null);
  const downloadStartTime = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      // Se a página ficou visível novamente e estamos baixando
      if (!document.hidden && downloadState === 'downloading') {
        const timeElapsed = Date.now() - downloadStartTime.current;
        
        // Se passou pelo menos 1 segundo, consideramos que o download começou
        if (timeElapsed > 1000) {
          completeDownload();
        }
      }
    };

    const handleFocus = () => {
      // Quando o usuário volta para a janela durante o download
      if (downloadState === 'downloading') {
        const timeElapsed = Date.now() - downloadStartTime.current;
        
        // Se passou tempo suficiente, consideramos concluído
        if (timeElapsed > 800) {
          completeDownload();
        }
      }
    };

    // Adiciona os listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      if (downloadTimeoutRef.current) {
        clearTimeout(downloadTimeoutRef.current);
      }
    };
  }, [downloadState]);

  const completeDownload = () => {
    if (downloadTimeoutRef.current) {
      clearTimeout(downloadTimeoutRef.current);
    }
    
    setDownloadState('completed');
    
    // Volta ao estado inicial após mostrar o sucesso
    setTimeout(() => {
      setDownloadState('idle');
    }, 2000);
  };

  const handleDownload = (e) => {
    // Não previne o comportamento padrão para permitir o download
    setDownloadState('downloading');
    downloadStartTime.current = Date.now();
    
    // Fallback: se não detectarmos o download em 5 segundos, completa automaticamente
    downloadTimeoutRef.current = setTimeout(() => {
      completeDownload();
    }, 5000);

    // Detecta quando o download realmente inicia
    setTimeout(() => {
      // Verifica se o arquivo começou a ser baixado
      // (o navegador geralmente muda o foco ou a visibilidade)
      if (downloadState === 'downloading') {
        // Se ainda estamos baixando após 2 segundos, provavelmente o download iniciou
        const timeElapsed = Date.now() - downloadStartTime.current;
        if (timeElapsed > 2000) {
          completeDownload();
        }
      }
    }, 2000);
  };

  const getButtonContent = () => {
    switch (downloadState) {
      case 'downloading':
        return (
          <>
            <FaSpinner className="icon-responsive animate-spin" />
            <span className="font-semibold tracking-wide text-sm md:text-base">
              Baixando...
            </span>
          </>
        );
      case 'completed':
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
            <FaDownload className="icon-responsive transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110" />
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
        group w-full font-semibold py-2 md:py-3 px-4 md:px-6 rounded-xl 
        transition-all duration-500 transform shadow-lg flex items-center 
        justify-center gap-2 md:gap-3 border backdrop-blur-sm
        ${downloadState === 'downloading' 
          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 border-yellow-400/20 scale-95' 
          : downloadState === 'completed'
          ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-green-400/20 scale-105'
          : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-red-400/20 hover:scale-105'
        } text-white
      `}
    >
      {getButtonContent()}
    </a>
  );
}
