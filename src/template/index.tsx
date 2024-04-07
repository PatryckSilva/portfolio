import { ReactElement } from "react";
import Header from "./partials/Header";

const MainTemplate = ({ children }: { children: ReactElement }) => {
  return (
    <main className={`flex w-full flex-col`}>
      <Header />
      {children}
    </main>
  );
};

export default MainTemplate;
