import "./Settings.css";

export default function SettingsPage() {
  return (
    <div className="settings-container">

      {/* LEFT MENU */}
      <div className="settings-left">
        <h2 className="settings-title">⚙️ Settings</h2>

        <ul className="settings-menu">
          <li className="active">📄 Profile Settings</li>
          <li>🔐 Security Settings</li>
          <li>🔔 Notification Preferences</li>
          <li>📍 Theme: Dark / Light</li>
          <li>🗄 Backup Configuration</li>
        </ul>
      </div>

      {/* RIGHT PANEL */}
      <div className="settings-right">

        <div className="settings-card">
          <div className="row">
            <span>✔ Change Password</span>
            <span className="arrow">›</span>
          </div>

          <div className="row">
            <span>✔ Two-Factor Authentication</span>
            <span className="arrow">›</span>
          </div>

          <div className="row">
            <span>✔ Email Alerts</span>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="row">
            <span>✔ Push Notifications</span>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <button className="backup-btn">Back Now</button>
        </div>

      </div>

    </div>
  );
}
