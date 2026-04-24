import { format } from "date-fns";
import { 
  Tooltip, 
  XAxis, 
  YAxis,
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  CartesianGrid
} from "recharts";

import { CustomTooltip } from "@/components/custom-tooltip";

type Props = {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const BarVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} barSize={40}>  {/* ✅ use data directly, no formattedData */}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) => format(value, "dd MMM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          style={{ fontSize: "12px" }}
          tickFormatter={(value) => `₹${value}`} 
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="income" fill="#3b82f6" className="drop-shadow-sm" />
        <Bar dataKey="expenses" fill="#f43f5e" className="drop-shadow-sm" />
      </BarChart>
    </ResponsiveContainer>
  );
};