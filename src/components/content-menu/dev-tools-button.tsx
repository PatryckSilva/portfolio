import { useToast } from "@/hooks/use-toast";
import { ContextMenuItem, ContextMenuShortcut } from "../ui/context-menu";

export const DevToolsButton = () => {
  const { toast } = useToast();

  return (
    <ContextMenuItem
      onClick={() =>
        toast({
          title: "Aperte F12 ou Ctrl+Shift+I",
          description: "para abrir o DevTools",
        })
      }
      className={`hover:!bg-black/10 hover:dark:!bg-white/20`}
      inset
    >
      DevTools
      <ContextMenuShortcut className={` text-background_inverted`}>
        F12
      </ContextMenuShortcut>
    </ContextMenuItem>
  );
};
