import React, { SVGProps } from "react";

import { IconMessage } from "@tabler/icons-react";
import { FloatingNav } from "@/components/navbar/floating-navbar";
import {
  HomeIcon,
  MessageIcon,
  PersonIcons,
  ProjectsIcon,
} from "@/components/navbar/nav-icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon />,
    },
    {
      name: "About",
      link: "/about",
      icon: <PersonIcons />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <MessageIcon />,
    },
    {
      name: "Switch Theme",
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
