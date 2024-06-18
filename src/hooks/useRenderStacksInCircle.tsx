import {
  ReactLogo,
  JavascriptLogo,
  NextLogo,
  NodeLogo,
  ProfileCard,
  ReactQueryLogo,
  TailwindLogo,
  TypescriptLogo,
} from "@/components/ui/logos";
import { cn } from "@/lib/utils";

export const useRenderStacksInCircle = () => {
  const logos = [
    {
      id: 0,
      logo: <ReactLogo />,
      dataaos: "fade-down",
      className: "absolute -top-[4px] left-[45px] ",
    },
    {
      id: 1,
      logo: <TailwindLogo />,
      dataaos: "fade-down-left",
      className: "absolute -top-[4px] right-[45px] ",
    },
    {
      id: 2,
      logo: <TypescriptLogo />,
      dataaos: "fade-left",
      className: "absolute -left-4 top-20 ",
    },
    {
      id: 3,
      logo: <JavascriptLogo />,
      dataaos: "fade-up-right",
      className: "absolute -left-0 bottom-8 ",
    },
    {
      id: 4,
      logo: <NodeLogo />,
      dataaos: "fade-right",
      className: "absolute -right-4 top-20 ",
    },
    {
      id: 5,
      logo: <NextLogo />,
      dataaos: "fade-up-left",
      className: "absolute -right-0 bottom-8 flex ",
    },
    {
      id: 6,
      logo: <ReactQueryLogo />,
      dataaos: "fade-down-right",
      className: "absolute -bottom-4 right-[40%]",
    },
    {
      id: 7,
      logo: <ProfileCard />,
      dataaos: "zoom-in",
      className: "z-0 h-[200px] w-[200px] ",
    },
  ];

  const renderLogos = (logo: {
    id: number;
    logo: JSX.Element;
    dataaos: string;
    className: string;
  }) => {
    if (logo.id === logos[logos.length - 1].id) {
      return logo.logo;
    }

    if (logo.id < 7) {
      return (
        <button
          className={cn(
            "cursor-pointer rounded-full border  bg-cover p-[2px] transition-all duration-500 hover:scale-95 active:scale-95 dark:border-gray-400/90 ",
            `${logo.className}`,
          )}
        >
          <span className="relative z-[2] flex size-[42px] items-center justify-center rounded-full bg-muted p-2 transition-all duration-500">
            {logo.logo}
          </span>
        </button>
      );
    }
  };

  return { logos, renderLogos };
};
