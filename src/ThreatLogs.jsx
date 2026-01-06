import React, { useState } from "react";
import "./ThreatLogs.css";

const ThreatLogs = () => {
  const [search, setSearch] = useState("");

  const logs = [
    { id: 7592, device: "809 5459", type: "Malware Detected", severity: "Critical", ip: "191.105.330", time: "02:03 AM" },
    { id: 8032, device: "557 9986", type: "Health Anamls", severity: "High", ip: "194.005.200", time: "09:08 AM" },
    { id: 8052, device: "937 3989", type: "Ransomware Outbreak", severity: "High", ip: "193.005.200", time: "09:08 AM" },
    { id: 8006, device: "336 2786", type: "Health Anamls", severity: "Low", ip: "183.005.200", time: "09:08 AM" },
    { id: 8001, device: "306 2776", type: "Retail Alerts Login", severity: "Medium", ip: "191.005.200", time: "09:08 AM" },
    { id: 8002, device: "306 2399", type: "Ransomware Outbreak", severity: "Low", ip: "192.000.200", time: "09:08 AM" },
    { id: 8005, device: "306 3586", type: "Potential Detected", severity: "Lock", ip: "139.105.200", time: "02:00 AM" },
  ];

  const getBadge = (level) => {
    if (level === "Critical") return "badge red";
    if (level === "High") return "badge orange";
    if (level === "Medium") return "badge yellow";
    if (level === "Low") return "badge green";
    if (level === "Lock") return "badge blue";
  };

  return (
    <div className="threat-container">

      {/* Header */}
      <div className="threat-header">
        <h2>Threat Logs</h2>

        <div className="right">
          <button className="export">Export Logs</button>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <select><option>Date Range</option></select>
        <select><option>Severity</option></select>
        <select><option>Status</option></select>

        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Device ID</th>
              <th>Threat Type</th>
              <th>Severity</th>
              <th>Source IP</th>
              <th>Detected Time</th>
            </tr>
          </thead>

          <tbody>
            {logs
              .filter((i) =>
                i.type.toLowerCase().includes(search.toLowerCase())
              )
              .map((log, i) => (
                <tr key={i}>
                  <td>{log.id}</td>
                  <td>{log.device}</td>
                  <td>{log.type}</td>
                  <td>
                    <span className={getBadge(log.severity)}>
                      {log.severity}
                    </span>
                  </td>
                  <td>{log.ip}</td>
                  <td>{log.time}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ThreatLogs;