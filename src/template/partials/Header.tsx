import React, { SVGProps } from "react";

import { FloatingNav } from "@/components/navbar/floating-navbar";
import {
  HomeIcon,
  MessageIcon,
  PersonIcons,
  ProjectsIcon,
} from "@/components/navbar/nav-icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { pages } from "@/utils/constants";
function Header() {
  const navItems = [
    {
      name: Object.keys(pages)[0],
      link: pages.Home,
      icon: <HomeIcon />,
    },
    {
      name: Object.keys(pages)[1],
      link: pages.Projetos,
      icon: <ProjectsIcon />,
    },
    {
      name: Object.keys(pages)[2],
      link: pages.Sobre,
      icon: <PersonIcons />,
    },
    {
      name: Object.keys(pages)[3],
      link: pages.Contato,
      icon: <MessageIcon />,
    },
    {
      name: "Trocar Tema",
      link: "",
      icon: <ThemeToggle />,
    },
  ];
  return (
    <header className="relative w-full">
      <FloatingNav navItems={navItems} />
    </header>
  );
}

export default Header;
