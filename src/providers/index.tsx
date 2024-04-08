"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactElement } from "react";
import MainTemplate from "@/template";
import useAOS from "@/hook/useAOS";
const Providers = ({ children }: { children: ReactElement }): ReactElement => {
  const aos = useAOS();

  return (
    <>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <MainTemplate>{children}</MainTemplate>
      </ThemeProvider>
    </>
  );
};

export default Providers;
