"use client";
import { Typewriter } from "react-simple-typewriter";
export const TypeWriteEffect = ({ texts }: { texts: string[] }) => {
  return (
    <Typewriter
      words={texts}
      loop={0}
      cursor
      cursorStyle={"|"}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};
