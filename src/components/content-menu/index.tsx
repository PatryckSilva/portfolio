import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import {
  HomeIcon,
  MessageIcon,
  PersonIcons,
  ProjectsIcon,
} from "../navbar/nav-icons";
import Link from "next/link";
import {
  CodeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import { links } from "@/utils/constants";

export function ContextMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon fontSize={18} />,
    },
    {
      name: "Projetos",
      link: "/projects",
      icon: <ProjectsIcon fontSize={18} />,
    },
    {
      name: "About",
      link: "/about",
      icon: <PersonIcons fontSize={18} />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <MessageIcon fontSize={18} />,
    },
  ];

  const socialMedias = [
    {
      name: "LinkedIn",
      link: links.linkedin,
      icon: <LinkedInLogoIcon fontSize={20} />,
    },
    {
      name: "GitHub",
      link: links.github,
      icon: <GitHubLogoIcon fontSize={20} />,
    },
  ];
  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={`${GeistMono.className} ${GeistSans.className}`}
      >
        {children}
      </ContextMenuTrigger>

      <ContextMenuContent className="w-64 border-2  border-white/20 backdrop-blur-xl">
        {/* TODO: adicionar function de copiar link */}
        <ContextMenuItem
          className={`hover:!bg-black/10 hover:dark:!bg-white/20`}
          inset
        >
          Copiar Link
          <ContextMenuShortcut className={` text-background_inverted`}>
            <Share1Icon fontSize={20} />
          </ContextMenuShortcut>
        </ContextMenuItem>

        <Link
          href={links.portfolioRepoLink}
          target="_blank"
          className={`cursor-pointer`}
        >
          <ContextMenuItem
            className={`hover:!bg-black/10 hover:dark:!bg-white/20`}
            inset
          >
            Ver Repositório
            <ContextMenuShortcut className={` text-background_inverted`}>
              <CodeIcon fontSize={30} />
            </ContextMenuShortcut>
          </ContextMenuItem>
        </Link>

        <ContextMenuLabel>Navegação</ContextMenuLabel>
        {pages.map(({ icon, link, name }) => (
          <Link key={name} href={link} className={`cursor-pointer`}>
            <ContextMenuItem
              className={`hover:!bg-black/10 hover:dark:!bg-white/20`}
              inset
            >
              {name}
              <ContextMenuShortcut className={` text-background_inverted`}>
                {icon}
              </ContextMenuShortcut>
            </ContextMenuItem>
          </Link>
        ))}

        <ContextMenuLabel>Seguir</ContextMenuLabel>
        {socialMedias.map(({ icon, link, name }) => (
          <Link
            key={name}
            target="_blank"
            href={link}
            className={`cursor-pointer`}
          >
            <ContextMenuItem
              className={`hover:!bg-black/10 hover:dark:!bg-white/20`}
              inset
            >
              {name}
              <ContextMenuShortcut className={` text-background_inverted`}>
                {icon}
              </ContextMenuShortcut>
            </ContextMenuItem>
          </Link>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
}
