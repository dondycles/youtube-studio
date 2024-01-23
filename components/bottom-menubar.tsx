import {
  BarChart4,
  DollarSign,
  LayoutDashboard,
  MessageSquareText,
  PlaySquare,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function BottomMenuBar() {
  const menus = [
    {
      icon: (
        <LayoutDashboard
          absoluteStrokeWidth
          strokeWidth={1.5}
          className="w-8 h-8"
        />
      ),
      name: "Dashboard",
      link: "/",
    },
    {
      icon: (
        <PlaySquare absoluteStrokeWidth strokeWidth={1.5} className="w-8 h-8" />
      ),
      name: "Content",
      link: "/content",
    },
    {
      icon: (
        <BarChart4 absoluteStrokeWidth strokeWidth={1.5} className="w-8 h-8" />
      ),
      name: "Analytics",
      link: "/analytics",
    },
    {
      icon: (
        <MessageSquareText
          absoluteStrokeWidth
          strokeWidth={1.5}
          className="w-8 h-8"
        />
      ),
      name: "Comments",
      link: "/comments",
    },
    {
      icon: (
        <DollarSign absoluteStrokeWidth strokeWidth={1.5} className="w-8 h-8" />
      ),
      name: "Earn",
      link: "/earn",
    },
  ];

  return (
    <nav className="w-full h-fit flex flex-row justify-around items-center font-poppins border-border border-t-[1px] border-solid">
      {menus.map((m) => {
        return (
          <Button
            key={m.name}
            className="p-2 box-content flex-1 text-center"
            asChild
            variant={"ghost"}
          >
            <Link href={m.link} className="flex flex-col">
              {m.icon}
              <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap text-xs">
                {m.name}
              </p>
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
