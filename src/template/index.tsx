import { ReactElement } from "react";
import Header from "./partials/Header";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const MainTemplate = ({ children }: { children: ReactElement }) => {
  return (
    <main
      className={`container flex flex-col ${GeistMono.className} ${GeistSans.className}`}
    >
      <Header />
      {children}
    </main>
  );
};

export default MainTemplate;
