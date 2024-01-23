"use client";
import Revenue from "@/components/analytics/revenue";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analytics() {
  const tabs = [
    { name: "Overview", content: <></> },
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
            <TabsTrigger key={tab.name} value={tab.name.toLocaleLowerCase()}>
              {tab.name}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {tabs.map((tab) => {
        return (
          <TabsContent
            className="w-full max-h-full h-screen "
            key={tab.name}
            value={tab.name.toLocaleLowerCase()}
          >
            <ScrollArea
              className="max-h-full h-screen w-full"
              scrollHideDelay={1}
            >
              {tab.content}
            </ScrollArea>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
