"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactElement } from "react";
const Providers = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
