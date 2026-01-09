import { useState } from "react";
import Dashboard from "./Dashboard";
import ThreatLogs from "./ThreatLogs";
import SystemHealth from "./SystemHealth";
import SettingsPage from "./Settings";
import "./Mainlayout.css";

export default function MainLayout() {

  const [page, setPage] = useState("dashboard");

  return (
    <div className="main-layout">

      {}
      <div className="sidebar">
        <ul>
          <li 
            className={page==="dashboard" ? "active" : ""} 
            onClick={()=>setPage("dashboard")}
          >
            🏠 Dashboard
          </li>

          <li 
            className={page==="logs" ? "active" : ""} 
            onClick={()=>setPage("logs")}
          >
            🔐 Threat Logs
          </li>

          <li 
            className={page==="health" ? "active" : ""} 
            onClick={()=>setPage("health")}
          >
            ⚙️ System Health
          </li>

          <li 
            className={page==="settings" ? "active" : ""} 
            onClick={()=>setPage("settings")}
          >
            🛠️ Settings
          </li>

          <li
            onClick={()=>{
              localStorage.removeItem("auth");
              window.location.href="/";
            }}
          >
            🚪 Logout
          </li>
        </ul>

        <div className="divider"></div>
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="content-area">
        {page==="dashboard" && <Dashboard />}
        {page==="logs" && <ThreatLogs />}
        {page==="health" && <SystemHealth />}
        {page==="settings" && <SettingsPage />}
      </div>

    </div>
  );
}
