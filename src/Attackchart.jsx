import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function AttackChart({ dataValues }) {
  const canvasRef = useRef();
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [
          {
            label: "Attack Frequency",
            data: dataValues,
            borderColor: "#38bdf8",
            borderWidth: 3,
            tension: 0.4
          }
        ]
      },
      options: { responsive: true }
    });
  }, [dataValues]);

  return <canvas ref={canvasRef}></canvas>;
}



