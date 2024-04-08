import {
  ReactQueryLogo,
  JavascriptLogo,
  NextLogo,
  ReactLogo,
  TailwindLogo,
  TypescriptLogo,
  NodeLogo,
  ProfileCard,
} from "../Logos";

export const MyStacks = () => {
  return (
    <aside className="relative flex h-full items-center justify-center">
      <section className=" relative border-spacing-4 rounded-full border-2 border-dashed border-gray-400/50 p-10 ">
        <ReactLogo />
        <TailwindLogo />
        <TypescriptLogo />
        <JavascriptLogo />
        <NodeLogo />
        <NextLogo />
        <ReactQueryLogo />
        <ProfileCard />
      </section>
    </aside>
  );
};
