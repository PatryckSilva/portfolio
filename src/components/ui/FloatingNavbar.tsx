"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "fixed mx-auto mt-5 flex w-max flex-col items-center justify-center gap-10 rounded-xl border border-white/5 bg-muted p-3 backdrop-blur-xl",
          "right-10 top-1/3",
          "z-[19] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            aria-label={navItem.name}
            className={cn(
              "relative flex items-center text-lg font-semibold text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
            )}
          >
            <span>{navItem.icon}</span>
          </Link>
        ))}

        <aside>
          <ThemeToggle />
        </aside>
      </motion.div>
    </AnimatePresence>
  );
};
