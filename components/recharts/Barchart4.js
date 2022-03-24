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
      <Bar dataKey="Liquidez_Geral" fill="#0288D1" />
      <Bar dataKey="Liquidez_Reduzida" fill="#C2185B" />
      <Bar dataKey="Liquidez_Imediata" fill="#69F0AE" />
    </BarChart>
  );
}
