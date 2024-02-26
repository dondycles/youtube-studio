import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePhpPeso } from "@/lib/phpformatter";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Progress } from "../ui/progress";
import { toPhDate } from "@/lib/phdate";

export default function All() {
  const currentDate = new Date(toPhDate());
  const currentRevenue = 56533;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const estimatedRevenue = [
    {
      name: "1",
      amt: 2400,
    },
    {
      name: "2",
      amt: 2210,
    },
    {
      name: "3",
      amt: 2290,
    },
    {
      name: "4",
      amt: 2000,
    },
    {
      name: "5",
      amt: 2181,
    },
    {
      name: "6",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "7",
      amt: 2100,
    },
  ];
  const last6months = Array.from({ length: 6 }, (_, index) => {
    const month = ((currentDate.getMonth() - index + 12) % 12) + 1;
    return { month };
  });
  const last6monthsAmt = [
    { amt: 34261 },
    { amt: currentRevenue },
    { amt: 55713 },
    { amt: 54345 },
    { amt: 55312 },
    { amt: 53323 },
  ];
  return (
    <div className="space-y-2 w-full h-full">
      <Card className="min-w-0">
        <CardHeader className="min-w-0">
          <CardDescription>Estimated Revenue</CardDescription>
          <CardTitle>{usePhpPeso(currentRevenue)}</CardTitle>
        </CardHeader>
        <CardContent className="min-w-0">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={estimatedRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line dataKey="amt" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>How much you're earning</CardTitle>
          <CardDescription>Estimated Last 6 months</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {last6months.map((month, i) => {
            return (
              <div key={month.month} className="space-y-1">
                <div className="flex flex-row justify-between text-sm">
                  <p>
                    {monthNames[month.month - 1]}
                    {i === 0 && <span>(ongoing)</span>}
                  </p>
                  <p>{usePhpPeso(last6monthsAmt[i].amt)}</p>
                </div>
                <Progress
                  value={(last6monthsAmt[i].amt / 100000) * 100}
                  className="h-2 w-full"
                />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
