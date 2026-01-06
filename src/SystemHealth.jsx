import "./systemhealth.css";

export default function SystemHealth() {

  const stats = [
    { title:"CPU Usage", value:72, color:"#32d74b" },
    { title:"Memory Usage", value:65, color:"#ff5959" },
    { title:"Disk Usage", value:80, color:"#ffa200" },
    { title:"Network Activity", value:450, unit:"MB/s", color:"#3bc9ff" }
  ];

  return (
    <div className="health-container">

      <div className="health-header">
        <h1>System Health</h1>
      </div>

      {/* Top Gauges */}
      <div className="gauge-row">
        {stats.map((s,i)=>(
          <div key={i} className="gauge-card">
            
            <div className="gauge">
              <svg>
                <circle cx="60" cy="60" r="50"></circle>

                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  style={{
                    strokeDasharray: "314",
                    strokeDashoffset: `${314 - (314 * s.value) / 100}`,
                    stroke: s.color
                  }}
                ></circle>
              </svg>

              <div className="gauge-value">
                {s.value}{s.unit ? s.unit : "%"}
              </div>
            </div>

            <p className="gauge-title">{s.title}</p>
          </div>
        ))}
      </div>

      {/* Bottom Service Status */}
      <div className="service-row">

        <div className="service-card">
          <div className="icon db"></div>
          <h3>Database Status</h3>
          <span className="online">Online</span>
        </div>

        <div className="service-card">
          <div className="icon api"></div>
          <h3>API Status</h3>
          <span className="online">Online</span>
        </div>

        <div className="service-card">
          <div className="icon auth"></div>
          <h3>Auth Service Status</h3>
          <span className="online">Online</span>
        </div>

      </div>
    </div>
  );
}
