import { Bell, Plus, PlusCircle, User, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function UpperMenuBar() {
  return (
    <nav className="w-full h-fit flex flex-row p-2 border-border border-b-[1px] border-solid font-poppins">
      <h1 className="flex flex-row items-center justify-center">
        <Youtube className="w-12 h-12 " fill="red" strokeWidth={1.5} />
        <span className="font-semibold text-xl sm:text-3xl">Studio</span>
      </h1>
      <div className="flex flex-row items-center h-full flex-1 justify-end gap-2">
        <Button size={"icon"} variant={"ghost"}>
          <PlusCircle />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Bell />
        </Button>
        <ThemeToggle />
        <Button size={"icon"} variant={"ghost"}>
          <User />
        </Button>
      </div>
    </nav>
  );
}
