import { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

export default function DailyActivityChart() {

  const [chart, setChart] = useState({ labels: [], data: [] });

  useEffect(() => {
    axios.get("http://localhost:8080/api/daily-activity")
      .then(res => {

        const labels = Object.keys(res.data);
        const values = Object.values(res.data);

        setChart({
          labels: labels,
          data: values
        });

      })
      .catch(err => console.log("Daily Chart Error", err));
  }, []);

  return (
    <Bar
      data={{
        labels: chart.labels,
        datasets: [
          {
            label: "Events",
            data: chart.data,
            backgroundColor: "#4ade80"
          }
        ]
      }}
    />
  );
}
