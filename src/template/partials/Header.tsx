import React from "react";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="size-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="size-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="size-5 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default Header;
