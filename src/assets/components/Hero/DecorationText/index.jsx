import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiMiniCursorArrowRays } from "react-icons/hi2";

export default function DecorationText() {
  return <EncryptButton />;
}

const TARGET_TEXT = "Miquelven";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg  px-4 py-2 [text-shadow:_0_2px_0_rgb(0_0_0_/70%)]  font-medium uppercase text-zinc-200 transition-colors hover:text-zinc-300 "
    >
      <span className="font-semibold text-3xl flex gap-2 relative">
        {text}
        <HiMiniCursorArrowRays className="self-end" />
      </span>
    </motion.button>
  );
};
