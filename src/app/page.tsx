import { MyStacks } from "@/components/Profile";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center gap-10">
      <MyStacks />
      <ThemeToggle />

      <span>NEXT JS</span>
    </main>
  );
}
