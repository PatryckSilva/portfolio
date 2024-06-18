"use client";
import useMousePosition from "@/hooks/useMousePosition";
import { useWidth } from "@/hooks/useWidth";
import { cn } from "@/lib/utils";

const EllipseBackground = () => {
  return (
    <svg
      width={1440}
      height={1080}
      viewBox="0 0 1440 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_856_6)">
        <g filter="url(#filter0_f_856_6)">
          <circle
            cx={856.5}
            cy={498.5}
            r={276.5}
            fill="url(#paint0_radial_856_6)"
            fillOpacity={0.57}
          />
        </g>
        <g filter="url(#filter1_f_856_6)">
          <circle
            cx={994}
            cy={586}
            r={209}
            fill="url(#paint1_radial_856_6)"
            fillOpacity={0.28}
          />
        </g>
        <g filter="url(#filter2_f_856_6)">
          <ellipse
            cx={979.5}
            cy={397}
            rx={234.5}
            ry={235}
            fill="url(#paint2_radial_856_6)"
            fillOpacity={0.39}
          />
        </g>
        <g filter="url(#filter3_f_856_6)">
          <circle
            cx={705}
            cy={527}
            r={165}
            fill="url(#paint3_radial_856_6)"
            fillOpacity={0.13}
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_856_6"
          x={320}
          y={-38}
          width={1073}
          height={1073}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={130}
            result="effect1_foregroundBlur_856_6"
          />
        </filter>
        <filter
          id="filter1_f_856_6"
          x={525}
          y={117}
          width={938}
          height={938}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={130}
            result="effect1_foregroundBlur_856_6"
          />
        </filter>
        <filter
          id="filter2_f_856_6"
          x={485}
          y={-98}
          width={989}
          height={990}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={130}
            result="effect1_foregroundBlur_856_6"
          />
        </filter>
        <filter
          id="filter3_f_856_6"
          x={280}
          y={102}
          width={850}
          height={850}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={130}
            result="effect1_foregroundBlur_856_6"
          />
        </filter>
        <radialGradient
          id="paint0_radial_856_6"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 179 677.5) scale(276.5)"
        >
          <stop stopColor="#6599FF" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_856_6"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 209 -209 0 994 586)"
        >
          <stop stopColor="#0047FF" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_856_6"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 235 -234.5 0 979.5 397)"
        >
          <stop stopColor="red" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_856_6"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 89 616) scale(165)"
        >
          <stop stopColor="#0057FF" />
        </radialGradient>
        <clipPath id="clip0_856_6">
          <path fill="#fff" d="M0 0H1440V1080H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const MovingEllipseBackground = () => {
  const { x, y } = useMousePosition();
  const widthSize = useWidth();
  const isMobile = widthSize < 1024;
  return (
    <aside
      className={cn(
        `${isMobile ? "fixed !-right-28 !-top-10 z-[-1] opacity-90" : "absolute z-[-1] opacity-70"}`,
      )}
      style={{
        top: `${isMobile ? "auto" : y - 500}px`,
        left: `${isMobile ? "auto" : x - 800}px`,
      }}
    >
      <EllipseBackground />
    </aside>
  );
};

export default MovingEllipseBackground;
