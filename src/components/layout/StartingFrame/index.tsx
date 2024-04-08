import { MyStacks } from "@/components/MyStacks";
import { TextHighlighted } from "@/components/TextHighlighted";

export const StartingFrame = () => {
  return (
    <main className="mt-40 flex w-full items-center justify-around gap-10">
      <MyStacks />
      <TextHighlighted />
    </main>
  );
};
