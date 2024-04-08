"use client";
import { cn } from "@/lib/utils";
import { Highlight } from "../ui/HeroHighlight";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
export const TextHighlighted = () => {
  const texts = ["Front-end", "Back-end", "FullStack", "Web"];
  return (
    <aside>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug"
      >
        Sou Patryck Silva!
        <Highlight
          className={cn("stext-base text-black dark:text-white sm:text-2xl")}
        >
          Desenvolvedor{" "}
          <Typewriter
            words={texts}
            loop={0}
            cursor
            cursorStyle={"|"}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Highlight>
      </motion.h1>
    </aside>
  );
};
