import { ProjectsFrame } from "@/components/layout/home/ProjectsFrame";
import { StacksFrame } from "@/components/layout/home/StacksFrame/view";

export default function About({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <ProjectsFrame />
      <StacksFrame searchParams={searchParams} />
    </>
  );
}
