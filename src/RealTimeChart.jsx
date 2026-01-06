import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

export default function RealTimeChart() {

  const [values, setValues] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const loadData = () => {
      axios
        .get("http://localhost:8080/api/realtime")
        .then(res => setValues(res.data))
        .catch(() => console.log("Realtime API Error"));
    };

    loadData();                          // load initially
    const interval = setInterval(loadData, 3000);   // update every 3 sec

    return () => clearInterval(interval); // cleanup
  }, []);

  const data = {
    labels: ["1m", "2m", "3m", "4m", "5m"],
    datasets: [
      {
        label: "Threats",
        data: values,
        borderColor: "#60a5fa",
        backgroundColor: "#60a5fa33",
        tension: 0.4
      }
    ]
  };

  return <Line data={data} />;
}
