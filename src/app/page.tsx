import { StartingFrame } from "@/components/layout/home/StartingFrame";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <StartingFrame />
    </>
  );
}
