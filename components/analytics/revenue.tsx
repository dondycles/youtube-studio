import { Button } from "../ui/button";
import { useState } from "react";
import All from "./all";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default function Revenue() {
  const tabs = [
    {
      tab: "All",
    },
    {
      tab: "Watch Page ads",
    },
    {
      tab: "Shorts Feed ads",
    },
    {
      tab: "Supers",
    },
  ];
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <div className="h-full w-full space-y-2 font-poppins pb-14 overflow-auto">
      <div className="flex flex-row gap-2 w-full pr-4 overflow-auto">
        {tabs.map((tab) => {
          return (
            <Button
              onClick={() => setSelectedTab(tab.tab)}
              variant={selectedTab === tab.tab ? "default" : "ghost"}
              key={tab.tab}
            >
              {tab.tab}
            </Button>
          );
        })}
      </div>

      {selectedTab === "All" && <All />}
    </div>
  );
}
