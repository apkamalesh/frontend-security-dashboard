import { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function TodaySegmentChart() {

  const [segment, setSegment] = useState({
    critical: 0,
    warnings: 0,
    safe: 0
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/today-segment")
      .then(res => setSegment(res.data))
      .catch(err => console.log("Segment Error", err));
  }, []);

  const data = {
    labels: ["Critical", "Warnings", "Safe"],
    datasets: [
      {
        data: [
          segment.critical,
          segment.warnings,
          segment.safe
        ],
        backgroundColor: [
          "#ef4444",
          "#facc15",
          "#22c55e"
        ],
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: { size: 14 }
        }
      }
    }
  };

  return (
    <div
      style={{
        width: "240px",   // 👈 adjust this to make smaller/bigger
        height: "240px",
        margin: "auto"
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
}
