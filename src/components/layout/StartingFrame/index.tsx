import { MyStacks } from "@/components/MyStacks";
import { TextHighlighted } from "@/components/TextHighlighted";

export const StartingFrame = () => {
  return (
    <main className="mt-12 flex w-full flex-col-reverse items-center justify-around gap-14 md:flex-row">
      <MyStacks />
      <TextHighlighted />
    </main>
  );
};
