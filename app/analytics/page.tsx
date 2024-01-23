"use client";
import Overview from "@/components/analytics/overview";
import Revenue from "@/components/analytics/revenue";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analytics() {
  const tabs = [
    { name: "Overview", content: <Overview /> },
    { name: "Content", content: <></> },
    { name: "Audience", content: <></> },
    { name: "Revenue", content: <Revenue /> },
  ];
  return (
    <Tabs
      defaultValue="revenue"
      className="h-full w-full p-2 overflow-hidden font-poppins"
    >
      <TabsList className="w-full border-solid ">
        {tabs.map((tab) => {
          return (
            <TabsTrigger
              className="w-fit min-w-0"
              key={tab.name}
              value={tab.name.toLocaleLowerCase()}
            >
              <span className="text-ellipsis overflow-hidden whitespace-nowrap w-full">
                {tab.name}
              </span>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {tabs.map((tab) => {
        return (
          <TabsContent
            className="w-full h-full"
            key={tab.name}
            value={tab.name.toLocaleLowerCase()}
          >
            {tab.content}
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
