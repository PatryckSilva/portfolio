"use client";
import { useWidth } from "@/hooks/useWidth";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CardsHoverEffect = ({
  items,
  className,
  showAllStacks,
}: {
  items: {
    id: number;
    icon?: React.ReactNode;
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
  showAllStacks: boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const widthSize = useWidth();

  const filteredItems =
    showAllStacks || widthSize > 1400 ? items : items.slice(0, 3);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-0",
        className,
      )}
    >
      {filteredItems.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.id}
          className="group relative block h-full w-full md:p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-slate-500/20 dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <figure className="size-14">{item.icon}</figure>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      id="stacks"
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-border bg-muted/40 p-4 backdrop-blur-md group-hover:border-slate-700 dark:border-white/[0.2]",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "mt-4 font-bold tracking-wide text-slate-800 dark:text-zinc-100",
        className,
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-sm leading-relaxed text-slate-700 dark:text-zinc-300/75 md:tracking-wide",
        className,
      )}
    >
      {children}
    </p>
  );
};
