import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "mx-auto mt-24 flex w-max items-center justify-center gap-5 rounded-xl border border-white/5 bg-muted p-2 backdrop-blur-xl lg:mt-5 lg:flex-col",
          "right-1/4 lg:fixed lg:right-10 lg:top-[28%] xl:top-1/3",
          "z-[19] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        )}
      >
        {navItems.map(({ link, name, icon }, idx: number) => (
          <TooltipProvider key={`link=${idx}`} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger
                className={cn(
                  `flex items-center rounded-md border-none text-2xl shadow-none hover:bg-primary hover:dark:bg-white/20`,
                  `${pathname === link && link !== "" ? "bg-primary bg-opacity-20 dark:bg-white/20" : ""}`,
                )}
                asChild
              >
                {link !== "" ? (
                  <Link
                    href={link}
                    aria-label={name}
                    className={cn(
                      `relative flex w-max items-center p-2 text-lg font-semibold text-background_inverted`,
                    )}
                  >
                    {icon}
                  </Link>
                ) : (
                  icon
                )}
              </TooltipTrigger>
              <TooltipContent
                aria-checked={false}
                className={` hidden min-w-[100px] -translate-x-[90px] translate-y-[34px] text-center lg:block `}
              >
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
