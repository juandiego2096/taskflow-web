"use client";

import styles from "./chart.module.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Enero",
      servicios: 24,
      serviciosA: 20
    },
    {
      name: "Febrero",
      servicios: 15,
    },
    {
      name: "Marzo",
      servicios: 17,
    },
    {
      name: "Abril",
      servicios: 13,
    },
    {
      name: "Mayo",
      servicios: 18,
    },
    {
      name: "Junio",
      servicios: 21,
    },
    {
      name: "Julio",
      servicios: 8,
    },
    {
      name: "Agosto",
      servicios: 14,
    },
    {
      name: "Septiembre",
      servicios: 4,
    },
    {
      name: "Octubre",
      servicios: 19,
    },
    {
      name: "Nobiembre",
      servicios: 20,
    },
    {
      name: "Diciembre",
      servicios: 11,
    },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.title}>Servicios Mensuales</span>
      <ResponsiveContainer className={styles.charts} width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="servicios"
            fill="#004382"
            activeBar={<Rectangle fill="gray" stroke="blue" />}
          />
             <Bar
            dataKey="serviciosA"
            fill="#BBBABA"
            activeBar={<Rectangle fill="gray" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
