import { Highlight } from "@/components/ui/TextHighlight";
import { TypeWriteEffect } from "@/components/ui/TypewriteEffect";
import {
  DarkGithubLogo,
  DarkGmailLogo,
  DarkLinkedinLogo,
  GithubLogo,
  GmailLogo,
  LinkedinLogo,
} from "@/components/ui/logos";
import { MyStacks } from "@/components/ui/profileAndStacksCircle";
import { cn } from "@/lib/utils";
import { links } from "@/utils/constants";
import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
export const StartingFrame = () => {
  const texts = ["Front-end", "Back-end", "FullStack", "Web"];
  return (
    <main className="flex h-dvh flex-col items-center justify-around">
      <section
        className={`flex w-full flex-col-reverse items-center justify-around gap-14 md:flex-row`}
      >
        <aside>
          <MyStacks />
        </aside>
        <article className={`flex flex-col items-center gap-10`}>
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
              Desenvolvedor <TypeWriteEffect texts={texts} />
            </Highlight>
          </h1>
          <ListingSocialMedias />
        </article>
      </section>
      <div className={`flex flex-col items-center gap-2`}>
        <span className={`uppercase`}>scroll</span>
        <IconArrowDown className="animate-bounce" />
      </div>
    </main>
  );
};

const ListingSocialMedias = () => {
  const socialMedias = [
    {
      name: "LinkedIn",
      link: links.linkedin,
      icon: <DarkLinkedinLogo />,
    },
    {
      name: "GitHub",
      link: links.github,
      icon: <DarkGithubLogo />,
    },
    {
      name: "Gmail",
      link: "",
      icon: <DarkGmailLogo />,
    },
  ];
  return (
    <aside className={`flex items-end gap-3`}>
      {socialMedias.map(item => (
        <Link
          href={item.link}
          className={`h-max w-8 text-neutral-700 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-primary dark:text-white dark:hover:text-primary`}
        >
          {item.icon}
        </Link>
      ))}
    </aside>
  );
};
