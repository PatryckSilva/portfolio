import { Highlight } from "@/components/ui/HeroHighlight";
import { TypeWriteEffect } from "@/components/ui/TypewriteEffect";
import { MyStacks } from "@/components/ui/profileAndStacksCircle";
import { cn } from "@/lib/utils";
import { IconArrowDown } from "@tabler/icons-react";
export const StartingFrame = () => {
  const texts = ["Front-end", "Back-end", "FullStack", "Web"];
  return (
    <main className="flex h-dvh flex-col items-center justify-around">
      <section
        className={`flex w-full flex-col-reverse items-center justify-around gap-14 md:flex-row`}
      >
        <MyStacks />
        <h1
          data-aos="zoom-out"
          className="mx-auto flex max-w-4xl flex-col items-center text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-3xl lg:text-5xl lg:leading-snug"
        >
          Sou Patryck Silva!
          <Highlight
            className={cn(
              "text-xl text-black dark:text-white sm:text-2xl lg:text-3xl",
            )}
          >
            Desenvolvedor <br className={`hidden`} />
            <TypeWriteEffect texts={texts} />
          </Highlight>
        </h1>
      </section>
      <div className={`flex flex-col items-center gap-2`}>
        <span className={`uppercase`}>scroll</span>
        <IconArrowDown className="animate-bounce" />
      </div>
    </main>
  );
};
