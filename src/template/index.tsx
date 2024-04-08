import { ReactElement } from "react";
import Header from "./partials/Header";

const MainTemplate = ({ children }: { children: ReactElement }) => {
  return (
    <main className={`container flex flex-col`}>
      <Header />
      {children}
    </main>
  );
};

export default MainTemplate;
