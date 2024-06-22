"use client";
import { TextHighlighter } from "@/components/TextHighlighter";
import { ChevronsRight } from "@/components/navbar/nav-icons";
import { TypeWriteEffect } from "@/components/ui/TypewriteEffect";
import {
  DarkGithubLogo,
  DarkGmailLogo,
  DarkLinkedinLogo,
} from "@/components/ui/logos";
import { MyStacks } from "@/components/ui/profileAndStacksCircle";
import { cn } from "@/lib/utils";
import { links } from "@/utils/constants";
import Link from "next/link";

export const ViewStartingFrame = () => {
  const texts = ["Front-end", "Back-end", "FullStack", "Web"];
  return (
    <section className="flex h-dvh w-full flex-col items-center justify-start gap-10 pt-10 xs:gap-5 sm:pt-40 md:gap-14 lg:justify-center lg:pt-0">
      <section
        className={`flex w-full flex-col-reverse items-center justify-around gap-14 md:flex-row xl:gap-32`}
      >
        <aside className={`md:hidden`}>
          <ListingSocialMedias />
        </aside>

        <aside>
          <MyStacks />
        </aside>

        <article
          data-aos="fade-up"
          className={`flex flex-col items-center gap-10`}
        >
          <h1 className="mx-auto flex w-[354px] max-w-4xl flex-col items-center text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-3xl lg:w-max lg:text-4xl lg:leading-snug xl:text-5xl">
            Sou Patryck Silva!
            <TextHighlighter
              className={cn(
                "mt-2 text-xl text-black dark:text-white sm:text-2xl xl:text-3xl",
              )}
            >
              Desenvolvedor <TypeWriteEffect texts={texts} />
            </TextHighlighter>
          </h1>
          <aside className={`hidden md:flex`}>
            <ListingSocialMedias />
          </aside>
        </article>
      </section>
      {/* TODO: add link to projects */}
      <Link href={"/"} className="cta !flex !items-center !text-white">
        <span className="hover-underline-animation">
          Veja meus projetos e contribuições{" "}
        </span>
        <figure>
          <ChevronsRight className="text-background_inverted" />
        </figure>
      </Link>
    </section>
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
          key={item.name}
          href={item.link}
          className={cn(
            `h-max w-8 text-neutral-700/70 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-neutral-800 `,
            "dark:text-white/70 dark:hover:text-white",
          )}
        >
          {item.icon}
        </Link>
      ))}
    </aside>
  );
};
