"use client";

import Transition from "@/components/Transition";
import { cn } from "@/lib/utils";
import Header from "@/template/partials/Header";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { HeroHighlight } from "@/components/ui/TextHighlight";
const Providers = ({ children }: { children: ReactElement }): ReactElement => {
  const pathname = usePathname();
  return (
    <HeroHighlight>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className={cn(
            ` ${GeistMono.className} ${GeistSans.className} container flex h-full flex-col`,
          )}
        >
          <Transition />
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Header />
            {children}
          </ThemeProvider>
        </motion.div>
      </AnimatePresence>
    </HeroHighlight>
  );
};

export default Providers;
