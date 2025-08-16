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
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showError, setShowError] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      toast.success("Email enviado com sucesso!");
      reset();
      setShowError(false);
      setTextAreaValue("");
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
    <div className="my-32 md:my-52 max-w-[1500px] mx-auto px-4 md:px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Informações de contato */}
        <div
          className="glass-effect rounded-2xl p-6 md:p-8"
          data-aos="fade-right"
          data-aos-delay="300"
        >
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
              <div className="icon-container bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <FaEnvelope className="contact-icon text-white" />
              </div>
              <div>
                <p className="text-white font-medium text-sm md:text-base">Email</p>
                <p className="text-gray-300 text-sm md:text-base">miquelven.silva@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="icon-container bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <FaPhone className="contact-icon text-white" />
              </div>
              <div>
                <p className="text-white font-medium text-sm md:text-base">Telefone</p>
                <p className="text-gray-300 text-sm md:text-base">+55 (19) 98935-7148</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="icon-container bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="contact-icon text-white" />
              </div>
              <div>
                <p className="text-white font-medium text-sm md:text-base">Localização</p>
                <p className="text-gray-300 text-sm md:text-base">Santa Maria da Serra, Brasil</p>
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
                className="icon-container bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600"
              >
                <FaGithub className="social-icon text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/miquelven-silva-80731a23b/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="social-icon text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Formulário de contato */}
        <div
          className="glass-effect rounded-2xl p-6 md:p-8"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-glow">
            Envie uma Mensagem
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
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
                className={`w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 text-sm md:text-base ${
                  errors.email ? "border-red-500" : "border-gray-600"
                }`}
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
                onChange={(e) => setTextAreaValue(e.target.value)}
                value={textAreaValue}
                className={`w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 resize-none text-sm md:text-base ${
                  validateTextArea && showError
                    ? "border-red-500"
                    : "border-gray-600"
                }`}
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
              disabled={isLoading}
              onClick={() => setShowError(true)}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm md:text-base"
            >
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
