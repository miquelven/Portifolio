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
    <div className="mt-32 mb-16 md:mt-52 md:mb-32 max-w-[1500px] mx-auto px-4 md:px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Informações de contato */}
        <div className="glass-effect rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-glow">
            Vamos Conversar
          </h3>

          <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato comigo através dos canais abaixo ou envie uma
            mensagem diretamente.
          </p>

          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="group relative icon-container bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-red-500/25 overflow-hidden">
                {/* Background gradient animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <FaEnvelope className="contact-icon text-white relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6" />
              </div>
              <div>
                <p className="text-white font-medium text-sm md:text-base">
                  Email
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                  miquelven.silva@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="group relative icon-container bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden">
                {/* Background gradient animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <FaPhone className="contact-icon text-white relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6" />
              </div>
              <div>
                <p className="text-white font-medium text-sm md:text-base">
                  Telefone
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                  +55 (19) 98935-7148
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="group relative icon-container bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-yellow-500/25 overflow-hidden">
                {/* Background gradient animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <FaMapMarkerAlt className="contact-icon text-white relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6" />
              </div>
              <div>
                <p className="text-white font-medium text-sm md:text-base">
                  Localização
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                  Santa Maria da Serra, Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
            <p className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">
              Me siga nas redes sociais
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://github.com/miquelven"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative icon-container bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
              >
                {/* Background gradient animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <FaGithub className="social-icon text-white relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/miquelven-silva-80731a23b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative icon-container bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-rotate-12 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              >
                {/* Background gradient animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                {/* Partículas animadas */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1 left-2 w-0.5 h-0.5 bg-white rounded-full animate-bounce"></div>
                </div>

                <FaLinkedin className="social-icon text-white relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12" />
              </a>
            </div>
          </div>
        </div>

        {/* Formulário de contato */}
        <div
          className={`glass-effect rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 ${
            emailSent ? "bg-green-500/10 border-green-500/30" : ""
          }`}
        >
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

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-glow">
            Envie uma Mensagem
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
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
                className={`w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 text-sm md:text-base ${
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
                className={`w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 resize-none text-sm md:text-base ${
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
              className={`group relative w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm md:text-base overflow-hidden ${
                emailSent ? "from-green-500 to-green-600" : ""
              }`}
            >
              {/* Efeito de brilho no botão */}
              {!emailSent && !isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              )}

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
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                    Enviar Mensagem
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
