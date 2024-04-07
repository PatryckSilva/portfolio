"use client";
import { ThemeProvider } from "next-themes";
import AOS from "aos";
// import "aos/dist/aos.css";
import React, { ReactElement, useEffect } from "react";
import MainTemplate from "@/template";
const Providers = ({ children }: { children: ReactElement }): ReactElement => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <MainTemplate>{children}</MainTemplate>
      </ThemeProvider>
    </>
  );
};

export default Providers;
