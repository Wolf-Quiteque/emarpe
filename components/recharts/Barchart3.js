import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function App({ data }) {
  return (
    <BarChart
      width={535}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 10,
        left: -11,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Endividamento" fill="#388E3C" />
      <Bar dataKey="Solvabilidade" fill="#5D4037" />
      <Bar dataKey="Auto_Financeira" fill="#FF5722" />
    </BarChart>
  );
}
