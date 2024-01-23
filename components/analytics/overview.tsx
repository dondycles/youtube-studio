import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowDownCircle, Dot, Video } from "lucide-react";

export default function Overview() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const slides = [
    { slide: <Slide1 /> },
    { slide: <Slide2 /> },
    { slide: <Slide3 /> },
  ];
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="h-full w-full flex  flex-col gap-2 font-poppins pb-12 overflow-auto">
      <div className="w-full max-h-full h-full flex flex-col gap-2">
        <p className="text-center text-xs sm:text-sm">
          Of 4M views in the last 28 days, 42% came from videos on your Official
          Artist Channel and 58% came from videos that feature your music on
          other channels.
        </p>
        <Carousel setApi={setApi} className="w-full ">
          <CarouselContent>
            {slides.map((slide, index) => {
              return (
                <CarouselItem key={index} className="max-w-[95%] h-full">
                  {slide.slide}
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className="flex flex-row mx-auto ">
          {slides.map((slide, i) => {
            return (
              <Dot
                className={`${
                  current === i + 1 ? "text-foreground" : "text-foreground/25"
                } `}
                strokeWidth={10}
              />
            );
          })}
        </div>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Top content</CardTitle>
          <CardDescription>Views Last 28 Days</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 w-full">
          <TopContent />
        </CardContent>
      </Card>
    </div>
  );
}

function Slide1() {
  const data = [
    { name: "1", amt: 2008 },
    { name: "2", amt: 2006 },
    { name: "3", amt: 2260 },
    { name: "4", amt: 2337 },
    { name: "5", amt: 2197 },
    { name: "6", amt: 2294 },
    { name: "7", amt: 2175 },
    { name: "8", amt: 2221 },
    { name: "9", amt: 2227 },
    { name: "10", amt: 2208 },
    { name: "11", amt: 2144 },
    { name: "12", amt: 2136 },
    { name: "13", amt: 2243 },
    { name: "14", amt: 2121 },
    { name: "15", amt: 2347 },
    { name: "16", amt: 2301 },
    { name: "17", amt: 2338 },
    { name: "18", amt: 2147 },
    { name: "19", amt: 2057 },
    { name: "20", amt: 2005 },
    { name: "21", amt: 2056 },
    { name: "22", amt: 2092 },
    { name: "23", amt: 2217 },
    { name: "24", amt: 2340 },
    { name: "25", amt: 2179 },
    { name: "26", amt: 2208 },
    { name: "27", amt: 2128 },
    { name: "28", amt: 2006 },
    { name: "29", amt: 2281 },
    { name: "30", amt: 2350 },
  ];

  return (
    <Card className="min-w-0">
      <CardHeader className="min-w-0">
        <CardDescription>Views</CardDescription>
        <CardTitle className="flex flex-row items-center gap-2">
          <p>4.0M </p> <ArrowDownCircle className="text-destructive" />
        </CardTitle>
        <CardDescription>9% less than previous 28 days</CardDescription>
      </CardHeader>
      <CardContent className="min-w-0">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="amt" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
function Slide2() {
  const data = [
    { name: "1", amt: 2400 },
    { name: "2", amt: 2210 },
    { name: "3", amt: 2290 },
    { name: "4", amt: 2000 },
    { name: "5", amt: 2181 },
    { name: "6", uv: 2390, pv: 3800, amt: 2500 },
    { name: "7", amt: 2100 },
    { name: "1", amt: 2072 },
    { name: "2", amt: 2110 },
    { name: "3", amt: 2051 },
    { name: "4", amt: 2135 },
    { name: "5", amt: 2180 },
    { name: "6", amt: 2138 },
    { name: "7", amt: 2145 },
    { name: "8", amt: 2138 },
    { name: "9", amt: 2025 },
    { name: "10", amt: 2133 },
    { name: "11", amt: 2017 },
    { name: "12", amt: 2011 },
    { name: "13", amt: 2007 },
    { name: "14", amt: 2019 },
    { name: "15", amt: 2007 },
    { name: "16", amt: 2071 },
    { name: "17", amt: 2124 },
    { name: "18", amt: 2173 },
    { name: "19", amt: 2099 },
    { name: "20", amt: 2029 },
    { name: "21", amt: 2162 },
    { name: "22", amt: 2019 },
    { name: "23", amt: 2052 },
    { name: "24", amt: 2135 },
    { name: "25", amt: 2099 },
    { name: "26", amt: 2103 },
    { name: "27", amt: 2070 },
    { name: "28", amt: 2125 },
    { name: "29", amt: 2032 },
    { name: "30", amt: 2086 },
  ];

  //   for (let i = 1; i <= 30; i++) {
  //     const performance = Math.random() * 5; // Generate a random performance less than 5%
  //     const amt = Math.floor(2000 + performance * 40); // Adjust the base value for amt based on performance

  //     data.push({
  //       name: i.toString(),
  //       amt: amt,
  //     });
  //   }
  //   console.log(data);
  return (
    <Card className="min-w-0">
      <CardHeader className="min-w-0">
        <CardDescription>Watch Time (hours)</CardDescription>
        <CardTitle className="flex flex-row items-center gap-2">
          <p>84.6K </p> <ArrowDownCircle className="text-destructive" />
        </CardTitle>
        <CardDescription>5% less than previous 28 days</CardDescription>
      </CardHeader>
      <CardContent className="min-w-0">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="amt" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
function Slide3() {
  const data = [
    { name: "1", amt: 2400 },
    { name: "2", amt: 2210 },
    { name: "3", amt: 2290 },
    { name: "4", amt: 2000 },
    { name: "5", amt: 2181 },
    { name: "6", uv: 2390, pv: 3800, amt: 2500 },
    { name: "7", amt: 2100 },
    { name: "1", amt: 2250 },
    { name: "2", amt: 3576 },
    { name: "3", amt: 3102 },
    { name: "4", amt: 2756 },
    { name: "5", amt: 4385 },
    { name: "6", amt: 2199 },
    { name: "7", amt: 4287 },
    { name: "8", amt: 2965 },
    { name: "9", amt: 3610 },
    { name: "10", amt: 3447 },
    { name: "11", amt: 2070 },
    { name: "12", amt: 4087 },
    { name: "13", amt: 3676 },
    { name: "14", amt: 2725 },
    { name: "15", amt: 3567 },
    { name: "16", amt: 3008 },
    { name: "17", amt: 3425 },
    { name: "18", amt: 2822 },
    { name: "19", amt: 3023 },
    { name: "20", amt: 2443 },
    { name: "21", amt: 3411 },
    { name: "22", amt: 4213 },
    { name: "23", amt: 2171 },
    { name: "24", amt: 3042 },
    { name: "25", amt: 4224 },
    { name: "26", amt: 4265 },
    { name: "27", amt: 3196 },
    { name: "28", amt: 3758 },
    { name: "29", amt: 3026 },
    { name: "30", amt: 2316 },
  ];

  //   for (let i = 1; i <= 30; i++) {
  //     const performance = Math.random() * 120; // Generate a random performance less than 5%
  //     const amt = Math.floor(2000 + performance * 20); // Adjust the base value for amt based on performance

  //     data.push({
  //       name: i.toString(),
  //       amt: amt,
  //     });
  //   }

  //   console.log(data);

  return (
    <Card className="min-w-0">
      <CardHeader className="min-w-0">
        <CardDescription>Unique Viewers</CardDescription>
        <CardTitle>2.7M</CardTitle>
      </CardHeader>
      <CardContent className="min-w-0">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="amt" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
function TopContent() {
  const data = [
    {
      title:
        "He liked it! 😜🤣 #couples #couplegoals #relationships #marriedlife #funny",
      views: "2.1M",
    },
    {
      title:
        "Christina Perri - A Thousand Years | Piano Cover with Strings (with Lyrics & PIANO SHEET)",
      views: "211.1k",
    },
    {
      title:
        "Ruth B. - Dandelions | Piano Cover with Strings (with Lyrics & PIANO SHEET)",
      views: "102.1M",
    },
    {
      title:
        "The Greatest Showman - Rewrite The Stars | Piano Cover with Strings (with PIANO SHEETS)",
      views: "97.1k",
    },
    {
      title:
        "The Greatest Showman - A Million Dreams | Piano Cover with Strings (with PIANO SHEET)",
      views: "82.6K",
    },
  ];
  return (
    <div className="space-y-2 w-full">
      {data.map((d) => {
        return (
          <div key={d.title} className="grid grid-cols-5 gap-2 ">
            <div className="aspect-video bg-zinc-900 rounded-xl"></div>
            <div className=" col-span-4 grid grid-cols-4 ">
              <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-nowrap col-span-3 my-auto">
                {d.title}
              </p>
              <p className="text-right my-auto">{d.views}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
