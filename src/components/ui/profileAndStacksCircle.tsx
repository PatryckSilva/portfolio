import { useRenderStacksInCircle } from "@/hook/useRenderStacksInCircle";

export const MyStacks = () => {
  const { logos, renderLogos } = useRenderStacksInCircle();
  return (
    <aside className="relative flex h-full items-center justify-center">
      <section
        data-aos={"zoom-out"}
        className=" relative border-spacing-4 rounded-full border-2 border-dashed border-black/60 p-10 dark:border-gray-400/90 "
      >
        {logos.map(logo => (
          <div
            className={`h-full w-full`}
            key={logo.id}
            // data-aos={logo.dataaos}
          >
            {renderLogos(logo)}
          </div>
        ))}
      </section>
    </aside>
  );
};
