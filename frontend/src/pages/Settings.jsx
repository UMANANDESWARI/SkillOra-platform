import { useState } from "react";
import "./settings.css";

function Settings() {
  const [dark, setDark] = useState(false);
  const [reminder, setReminder] = useState(true);
  const [deadline, setDeadline] = useState(true);
  const [milestone, setMilestone] = useState(true);

  return (
    <div className="settings-page">

      <h1>Settings</h1>
      <p className="subtitle">Manage your account and preferences.</p>

      {/* PROFILE */}
      <div className="card">
        <h3>👤 Profile</h3>

        <div className="profile">
          <div className="avatar">D</div>

          <div>
            <h2>Dharani Rolla</h2>
            <p>rolladharani49@gmail.com</p>
            <span>Member since 5/7/2026</span>
          </div>
        </div>

        <div className="stats">
          <div className="stat-box">
            <h2>0</h2>
            <p>Jobs</p>
          </div>
          <div className="stat-box">
            <h2>0</h2>
            <p>Day Streak</p>
          </div>
          <div className="stat-box">
            <h2>0%</h2>
            <p>Completion</p>
          </div>
        </div>
      </div>

      {/* APPEARANCE */}
      <div className="card">
        <h3>☀ Appearance</h3>

        <div className="toggle-row">
          <div>
            <p>Dark Mode</p>
            <span>Toggle between light and dark theme</span>
          </div>

          <label className="switch">
            <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="card">
        <h3>🔔 Notifications</h3>

        <div className="toggle-row">
          <div>
            <p>Daily reminders</p>
            <span>Get reminded to practice daily</span>
          </div>
          <label className="switch">
            <input type="checkbox" checked={reminder} onChange={() => setReminder(!reminder)} />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <div>
            <p>Deadline alerts</p>
            <span>Alerts 3 days before your preparation deadline</span>
          </div>
          <label className="switch">
            <input type="checkbox" checked={deadline} onChange={() => setDeadline(!deadline)} />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <div>
            <p>Progress milestones</p>
            <span>Celebrate when you complete phases</span>
          </div>
          <label className="switch">
            <input type="checkbox" checked={milestone} onChange={() => setMilestone(!milestone)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* ACCOUNT */}
      <div className="card">
        <h3>🛡 Account</h3>

        <button className="logout-btn">Sign Out</button>
      </div>

    </div>
  );
}

export default Settings;