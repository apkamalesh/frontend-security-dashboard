import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";

import DailyActivityChart from "./DailyActivityChart";
import TodaySegmentChart from "./TodaySegmentChart";
import RealTimeChart from "./RealTimeChart";

// ================= TIME AGO FUNCTION =================
function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);
  const diff = Math.floor((now - past) / 1000);

  if (diff < 60) return `${diff}s ago`;

  const mins = Math.floor(diff / 60);
  if (mins < 60) return `${mins}m ago`;

  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;

  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export default function Dashboard() {

  // ====== TOP STATS ======
  const [stats, setStats] = useState({
    totalEvents: 0,
    critical: 0,
    suspicious: 0,
    apiAttacks: 0
  });

  // ====== RECENT ALERTS ======
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {

    const loadData = () => {
      
      // ===== LOAD STATS =====
      axios.get("http://localhost:8080/api/stats")
        .then(res => setStats(res.data))
        .catch(err => console.log("Stats Error", err));

      // ===== LOAD RECENT ALERTS =====
      axios.get("http://localhost:8080/api/recent-alerts")
        .then(res => setAlerts(res.data))
        .catch(err => console.log("Alerts Error", err));
    };

    loadData();                         // Load once
    const refetch = setInterval(loadData, 5000);  // refresh API every 5s

    // This forces UI re-render every 1 second → live “time ago”
    const liveUpdate = setInterval(() => {
      setAlerts(a => [...a]);
    }, 1000);

    return () => {
      clearInterval(refetch);
      clearInterval(liveUpdate);
    };

  }, []);

  return (
    <div className="dash-wrapper">

      {/* ===== TOP STATS ===== */}
      <div className="stats-row">

        <div className="stat-box green">
          <p>Total Events</p>
          <h2>{stats.totalEvents}</h2>
        </div>

        <div className="stat-box red">
          <p>Critical Alerts</p>
          <h2>{stats.critical}</h2>
        </div>

        <div className="stat-box blue">
          <p>Suspicious Logins</p>
          <h2>{stats.suspicious}</h2>
        </div>

        <div className="stat-box orange">
          <p>API Attacks</p>
          <h2>{stats.apiAttacks}</h2>
        </div>

      </div>

      {/* ===== MIDDLE SECTION ===== */}
      <div className="middle-section">

        <div className="chart-box">
          <h3>Real-Time Threat Activity</h3>
          <RealTimeChart />
        </div>

        <div className="alert-box">
          <h3>Recent Alerts</h3>

          <ul>
            {alerts.length === 0 && <li>No Alerts Available</li>}

            {alerts.map(a => (
              <li key={a.id}>
                {a.title} — {timeAgo(a.time)}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="bottom-row">

        <div className="panel">
          <h3>Daily Activity</h3>
          <DailyActivityChart />
        </div>

        <div className="panel">
          <h3>Today's Segment</h3>
          <TodaySegmentChart />
        </div>

      </div>

    </div>
  );
}
