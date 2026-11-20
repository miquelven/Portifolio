import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../../i18n";

export default function LanguageTransition() {
  const { isChangingLanguage, language } = useI18n();

  return (
    <AnimatePresence>
      {isChangingLanguage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900 pointer-events-auto"
        >
          {/* Fundo com efeito de brilho */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo ou Círculo Central */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-2xl shadow-red-600/20 mb-8"
            >
              <span className="text-white text-3xl font-bold">
                {language === "pt" ? "PT" : "EN"}
              </span>
            </motion.div>

            {/* Texto de transição */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-white text-xl font-bold tracking-widest uppercase mb-2">
                {language === "pt" ? "Alterando Idioma" : "Changing Language"}
              </h3>
              <div className="flex gap-1 justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-1.5 h-1.5 bg-red-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Barras de revelação */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent origin-center"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
