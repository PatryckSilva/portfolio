"use client";
import useMousePosition from "@/hooks/useMousePosition";
import { useWidth } from "@/hooks/useWidth";
import { cn } from "@/lib/utils";
import { EllipseSVG } from "./ellipse-svg";

const MovingEllipseBackground = () => {
  const { x, y } = useMousePosition();
  const widthSize = useWidth();
  const isMobile = widthSize < 1024;
  return (
    <aside
      className={cn(
        "md:max-w-screen-md",
        `${isMobile ? "fixed -right-40 -top-10 z-[-1] opacity-90 md:-right-0 md:-top-20" : "absolute z-[-1] opacity-70"}`,
      )}
      style={{
        top: `${isMobile ? "auto" : `${y - 400}px`}`,
        left: `${isMobile ? "auto" : `${x - 500}px`}`,
      }}
    >
      <EllipseSVG />
    </aside>
  );
};

export default MovingEllipseBackground;
