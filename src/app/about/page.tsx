import { ProjectsFrame } from "@/components/layout/about/ProjectsFrame";
import { StacksFrame } from "@/components/layout/about/StacksFrame/view";

export default function About({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <ProjectsFrame />
    </>
  );
}
