import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [showError, setShowError] = useState(false);

  const [emailInput, setEmailInput] = useState("");

  const onSubmit = (data) => {
    setShowError(true);
    if (data !== null) {
      toast.success("Email enviado!");
      setShowError(false);
      setTextAreaValue("");
      setEmailInput("");
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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <section className="flex flex-col w-[1500px] mx-auto px-5  mb-32">
      <h3 className="text-center text-2xl font-semibold">Entre em Contato</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 min-w-96 flex flex-col mx-auto gap-10"
      >
        <label htmlFor="email">
          <p className="mb-2">Email:</p>
          <input
            {...register("email")}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className={`w-full rounded-md  mb-1 shadow-sm border-2 border-transparent shadow-zinc-400 outline-none py-1 px-2 text-sm ${
              errors.email ? "border-red-600" : "border-transparent"
            }`}
          />
          {errors.email && (
            <span className=" text-red-400 dark:text-red-700 font-light max-[420px]:text-xs">
              {errors.email.message}
            </span>
          )}
        </label>
        <label htmlFor="message">
          <p className="mb-2">Mensagem:</p>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={(e) => setTextAreaValue(e.target.value)}
            value={textAreaValue}
            className={`resize-none mb-1 rounded-md shadow-sm border-2 border-transparent w-full shadow-zinc-400 outline-none py-1 px-2 text-sm
            ${
              textAreaValue.trim().length < 4 && showError
                ? "border-red-600"
                : "border-transparent"
            }
            `}
          ></textarea>
          {showError && (
            <span className="text-red-400 dark:text-red-700 font-light max-[420px]:text-xs">
              {textAreaValue.trim().length == 0 ? (
                <p>O campo não pode ser vazio</p>
              ) : (
                <>
                  {textAreaValue.trim().length < 4 &&
                    textAreaValue.trim().length > 0 && (
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
          className="bg-[#245276] capitalize py-1.5 text-white rounded-md shadow-sm shadow-zinc-400 hover:cursor-pointer hover:shadow-md"
        >
          enviar
        </button>
      </form>
    </section>
  );
}
