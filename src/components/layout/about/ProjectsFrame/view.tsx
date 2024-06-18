import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
const projectsArray = [
  {
    id: 0,
    title: "First",
    value: "First",
    img: "/images/personalProjects/dummy.png",
  },
  {
    id: 1,
    title: "second",
    value: "second",
    img: "/images/personalProjects/dummy.png",
  },
  {
    id: 2,
    title: "third",
    value: "third",
    img: "/images/personalProjects/dummy.png",
  },
];

export function ViewProjects() {
  return (
    <section
      className={`relative flex h-full w-full flex-col items-center justify-center gap-10 rounded-lg border-2 border-border bg-muted/60 p-10`}
    >
      <h2 className={`text_gradients px-2 text-4xl font-bold lg:self-start`}>
        Projetos
      </h2>

      <center className={`hidden lg:block`}>
        <CardsProjects />
      </center>

      <center className={`w-full lg:hidden`}>
        <CarouselDemo />
      </center>
    </section>
  );
}

export function CardsProjects() {
  return (
    <section className={`flex w-full flex-wrap justify-start gap-8`}>
      {projectsArray.map(project => (
        <div
          key={project.id}
          className="relative flex items-center justify-center"
        >
          <DirectionAwareHover imageUrl={project.img}>
            <p className="text-xl font-bold">{project.title}</p>
            <p className="text-sm font-normal">$1299 / night</p>
          </DirectionAwareHover>
        </div>
      ))}
    </section>
  );
}

function CarouselDemo() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {projectsArray.map(project => (
          <CarouselItem key={project.id}>
            <div className="p-1">
              <DirectionAwareHover imageUrl={project.img}>
                <p className="text-xl font-bold">{project.title}</p>
                <p className="text-sm font-normal">$1299 / night</p>
              </DirectionAwareHover>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-8" />
      <CarouselNext className={`absolute -right-8`} />
    </Carousel>
  );
}
