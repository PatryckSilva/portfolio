"use client";

import Transition from "@/components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";
const Providers = ({ children }: { children: ReactElement }): ReactElement => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full max-h-dvh">
        <Transition />
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </motion.div>
    </AnimatePresence>
  );
};

export default Providers;
