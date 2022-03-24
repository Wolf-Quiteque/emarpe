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
      <Bar dataKey="Investimento" fill="#ffa000" />
      <Bar dataKey="Vol_Negócio" fill="#64dd17" />
      <Bar dataKey="Fluxo_Caixa" fill="#00b0ff" />
    </BarChart>
  );
}
