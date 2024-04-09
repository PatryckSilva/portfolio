import EllipseBackground from "@/components/Backgrounds/EllipseBackground";
import { StacksFrame } from "@/components/layout/home/StacksFrame/view";
import { StartingFrame } from "@/components/layout/home/StartingFrame/view";
import { useSearchParams } from "next/navigation";

export default function Home() {
  return (
    <>
      <StartingFrame />
      <StacksFrame />
    </>
  );
}
