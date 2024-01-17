import React from "react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export const PieChart = () => {
  return (
    <Doughnut 
      data={{
        labels: ["Carbs", "Protein", "grass"],
        datasets: [
          {
            label: "gr",
            data: [500, 300, 200],
          },
        ],
      }}
    />
  );
};
