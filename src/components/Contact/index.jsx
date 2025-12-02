import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showError, setShowError] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const validateTextArea = textAreaValue.trim().length < 4;

  const sendEmail = async (data) => {
    setIsLoading(true);
    const templateParams = {
      message: textAreaValue,
      email: data.email,
    };

    try {
      await emailjs.send(
        "service_j9fygzm",
        "template_el44meo",
        templateParams,
        "W7PLvOdvqRzXPUDr1"
      );
      setEmailSent(true);

      // Reset após 3 segundos
      setTimeout(() => {
        setEmailSent(false);
        reset();
        setShowError(false);
        setTextAreaValue("");
      }, 3000);
    } catch (error) {
      toast.error("Erro ao enviar email. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    setShowError(true);
    if (data !== null && !validateTextArea) {
      sendEmail(data);
    }
  };

  const schema = z.object({
    email: z.string().email("Email inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="relative mx-auto px-4 md:px-5 pb-20 ">
      <div className="p-4 md:p-8 lg:p-12 !pt-0 max-w-[1200px] mx-auto">
        <h2 className="text-5xl max-sm:text-2xl max-sm:text-center font-bold text-white mb-12">
          Entre em{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            Contato
          </span>
        </h2>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="">
          <div
            className={`glass-effect bg-gray-900/70 backdrop-blur-xl border border-gray-700/60 rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 ${
              emailSent ? "bg-green-500/10 border-green-500/30" : ""
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl"></div>
            {/* Animação de sucesso */}
            {emailSent && (
              <div className="absolute inset-0 flex items-center justify-center bg-green-500/20 backdrop-blur-sm z-20">
                <div className="text-center animate-bounce">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <FaCheck className="text-white text-2xl" />
                  </div>
                  <h4 className="text-white text-xl font-bold mb-2">
                    Email Enviado!
                  </h4>
                  <p className="text-green-300">Obrigado pelo contato</p>

                  {/* Partículas de celebração */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute top-20 right-15 w-1 h-1 bg-green-300 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-15 right-10 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-15 right-25 w-2 h-2 bg-green-300 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}

            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Envie uma Mensagem
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6 "
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2 text-sm md:text-base"
                >
                  Email *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  disabled={emailSent}
                  className={`w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/60 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 text-sm md:text-base ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } ${emailSent ? "opacity-50" : ""}`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs md:text-sm mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2 text-sm md:text-base"
                >
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  disabled={emailSent}
                  onChange={(e) => setTextAreaValue(e.target.value)}
                  value={textAreaValue}
                  className={`w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/60 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 resize-none text-sm md:text-base ${
                    validateTextArea && showError
                      ? "border-red-500"
                      : "border-gray-600"
                  } ${emailSent ? "opacity-50" : ""}`}
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                />
                {showError && (
                  <span className="text-red-400 text-xs md:text-sm mt-1 block">
                    {textAreaValue.trim().length === 0
                      ? "O campo não pode ser vazio"
                      : validateTextArea &&
                        textAreaValue.trim().length > 0 &&
                        "O campo deve conter pelo menos 5 caracteres"}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading || emailSent}
                onClick={() => setShowError(true)}
                className={`block relative bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base w-full max-w-sm mx-auto ${
                  emailSent ? "from-green-500 to-green-600" : ""
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <FaPaperPlane className="animate-bounce" />
                      Enviando...
                    </>
                  ) : emailSent ? (
                    <>
                      <FaCheck className="animate-pulse" />
                      Email Enviado!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Enviar Mensagem
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
