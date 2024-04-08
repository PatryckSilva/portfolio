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
  const logos = [
    {
      id: 0,
      logo: <ReactLogo />,
      dataaos: "fade-down",
    },
    {
      id: 1,
      logo: <TailwindLogo />,
      dataaos: "fade-down-left",
    },
    {
      id: 2,
      logo: <TypescriptLogo />,
      dataaos: "fade-left",
    },
    {
      id: 3,
      logo: <JavascriptLogo />,
      dataaos: "fade-up-right",
    },
    {
      id: 4,
      logo: <NodeLogo />,
      dataaos: "fade-right",
    },
    {
      id: 5,
      logo: <NextLogo />,
      dataaos: "fade-up-left",
    },
    {
      id: 6,
      logo: <ReactQueryLogo />,
      dataaos: "fade-down-right",
    },
    {
      id: 7,
      logo: <ProfileCard />,
      dataaos: "zoom-in",
    },
  ];
  return (
    <aside className="relative flex h-full items-center justify-center">
      <section
        data-aos={"zoom-out"}
        className=" relative border-spacing-4 rounded-full border-2 border-dashed border-black/60 p-10 dark:border-gray-400/90 "
      >
        {logos.map(logo => (
          <div
            key={logo.id}
            // data-aos={logo.dataaos}
          >
            {logo.logo}
          </div>
        ))}
      </section>
    </aside>
  );
};
