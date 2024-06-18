"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "container mx-auto mt-5 flex items-center justify-between space-x-4 rounded-xl border border-white/5 bg-muted p-2 px-3 backdrop-blur-xl",
          "z-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className,
        )}
      >
        <aside className={`flex items-center gap-1`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M11 11v10h10V11Zm8 8h-6v-6h6Z"
              color="#7c3aed"
            />
            <path
              color="#7c3aed"
              fill="currentColor"
              d="M30 13v-2h-4V8a2 2 0 0 0-2-2h-3V2h-2v4h-6V2h-2v4H8a2 2 0 0 0-2 2v3H2v2h4v6H2v2h4v3a2 2 0 0 0 2 2h3v4h2v-4h6v4h2v-4h3a2 2 0 0 0 2-2v-3h4v-2h-4v-6Zm-6 11H8V8h16Z"
            />
          </svg>
          <aside className={`flex flex-col`}>
            <span className="-mb-2 text-base font-semibold text-neutral-600 dark:text-neutral-300">
              Patryck
            </span>
            <span className="text-base font-semibold text-neutral-600 dark:text-neutral-300">
              Dev
            </span>
          </aside>
        </aside>

        <center className={`flex gap-6 md:gap-12`}>
          {navItems.map((navItem, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              aria-label={navItem.name}
              className={cn(
                "relative flex items-center space-x-1 text-lg font-semibold text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden text-sm sm:block">{navItem.name}</span>
            </Link>
          ))}
        </center>
        <aside>
          <ThemeToggle />
        </aside>
      </motion.div>
    </AnimatePresence>
  );
};
