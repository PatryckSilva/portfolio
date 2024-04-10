import { ProjectsFrame } from "@/components/layout/home/ProjectsFrame";
import { StacksFrame } from "@/components/layout/home/StacksFrame/view";
import { StartingFrame } from "@/components/layout/home/StartingFrame";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <StartingFrame />
      <ProjectsFrame />
      <StacksFrame searchParams={searchParams} />
    </>
  );
}
