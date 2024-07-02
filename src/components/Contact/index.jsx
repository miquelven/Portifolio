import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "react-toastify";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import emailjs from "@emailjs/browser";

import card from "../../../assets/images/gifs/card.gif";

export default function Contact() {
  const [showError, setShowError] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const validateTextArea = textAreaValue.trim().length < 4;

  const sendEmail = (data) => {
    const templateParams = {
      message: textAreaValue,
      email: data.email,
    };

    emailjs.send(
      "service_j9fygzm",
      "template_el44meo",
      templateParams,
      "W7PLvOdvqRzXPUDr1"
    );
  };

  const onSubmit = (data) => {
    setShowError(true);
    if (data !== null && !validateTextArea) {
      sendEmail(data);
      toast.success("Email enviado!");
      reset();
      setShowError(false);
      setTextAreaValue("");
    }
  };

  const createUserFormSchema = z.object({
    email: z
      .string()
      .nonempty("O campo não pode estar vazio!")
      .email("Insira um email válido!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

  return (
    <div className="w-full px-16 max-2xl:px-0">
      <div className="relative flex justify-between max-w-[1500px] h-[600px] mx-auto mb-32 pl-32 shadow-md shadow-[#3c88c4] rounded-xl max-2xl:w-5/6 max-lg:flex-col-reverse max-lg:pl-0">
        <img
          src={card}
          alt="Gif de uma carta"
          className="absolute -left-[73px] top-52 max-sm:top-[535px] max-sm:-left-4"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
        <div className="py-5 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
          <h3
            className=" text-3xl font-semibold max-sm:text-2xl max-[410px]:text-xl"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            Entre em Contato
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 max-w-96 flex flex-col  gap-10 max-lg:mt-8 max-[410px]:px-5"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <label
              htmlFor="email"
              className="w-96 max-sm:w-72 max-[410px]:w-full"
            >
              <p className="mb-2">Email:</p>
              <input
                {...register("email")}
                className={`transition-all duration-300 w-full rounded-md mb-1 shadow-sm border-2 shadow-zinc-400 outline-none py-1 px-2 text-sm hover:scale-105 ${
                  errors.email ? "border-red-400" : "border-transparent"
                }`}
              />
              {errors.email && (
                <span className=" text-red-400 dark:text-red-700 font-light text-sm">
                  {errors.email.message}
                </span>
              )}
            </label>
            <label
              htmlFor="message"
              className="w-96 max-sm:w-72 max-[410px]:w-full"
            >
              <p className="mb-2">Mensagem:</p>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                onChange={(e) => setTextAreaValue(e.target.value)}
                value={textAreaValue}
                className={`transition-all duration-300 resize-none mb-1 rounded-md shadow-sm border-2 w-full shadow-zinc-400 outline-none py-1 px-2 text-sm hover:scale-105
            ${
              validateTextArea == true && showError
                ? "border-red-400"
                : "border-transparent"
            }
            `}
              ></textarea>
              {showError && (
                <span className="text-red-400 dark:text-red-700 font-light text-sm">
                  {textAreaValue.trim().length == 0 ? (
                    <p>O campo não pode ser vazio</p>
                  ) : (
                    <>
                      {validateTextArea && textAreaValue.trim().length > 0 && (
                        <p>O campo deve conter pelo menos 5 caracteres</p>
                      )}
                    </>
                  )}
                </span>
              )}
            </label>
            <button
              type="submit"
              onClick={() => setShowError(true)}
              className="transition-all duration-300 bg-[#245276] capitalize py-1.5 text-white rounded-md shadow-sm shadow-zinc-400 hover:cursor-pointer hover:shadow-md hover:scale-105 max-sm:mb-14"
            >
              enviar
            </button>
          </form>
        </div>

        <div
          className="bg-[#3c88c4] h-full w-1/3 flex justify-center items-center gap-10 rounded-tr-xl rounded-br-xl max-lg:w-full max-lg:py-2 max-lg:rounded-br-none max-lg:rounded-tl-xl"
          data-aos="fade-left"
          data-aos-delay="1200"
        >
          <a
            href="https://github.com/miquelven"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="1400"
          >
            <FaGithub className="w-12 h-12 transition-scale duration-300  hover:scale-110 fill-white max-lg:w-8 max-lg:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/miquelven-silva-80731a23b/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="1600"
          >
            <FaLinkedin className="w-12 h-12 transition-scale duration-300 hover:scale-110 fill-white max-lg:w-8 max-lg:h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
