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
        `${isMobile ? "fixed !-right-28 !-top-10 z-[-1] opacity-90" : "absolute z-[-1] opacity-70"}`,
      )}
      style={{
        top: `${isMobile ? "auto" : y - 500}px`,
        left: `${isMobile ? "auto" : x - 600}px`,
      }}
    >
      <EllipseSVG />
    </aside>
  );
};

export default MovingEllipseBackground;
