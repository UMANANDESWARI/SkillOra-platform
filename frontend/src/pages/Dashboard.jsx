import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const nav = useNavigate();

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2 className="logo">AI Job Prep</h2>

        <ul>
          <li className="active" onClick={() => nav("/dashboard")}>Dashboard</li>
          <li onClick={() => nav("/upload")}>Upload JD</li>
          <li onClick={() => nav("/jobs")}>My Jobs</li>
          <li onClick={() => nav("/learning")}>Learning Path</li>
          <li onClick={() => nav("/mock")}>Mock Interview</li>
          <li onClick={() => nav("/crt")}>CRT Prep</li>
          <li onClick={() => nav("/settings")}>Settings</li>
        </ul>

        <div className="user">
          <p>Dharani</p>
          <span>student@mail.com</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main">

        <h1>Good Morning, Dharani 👋</h1>
        <p className="subtitle">Here’s your preparation overview</p>

        {/* PROGRESS BOX */}
        <div className="progress-box">
          <h3>Overall Preparation Progress</h3>
          <h1 className="percent">20%</h1>
          <p>4 of 20 skills completed</p>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="cards">
          <div className="card">
            <h3>Total Jobs</h3>
            <h1>2</h1>
          </div>

          <div className="card">
            <h3>Skills Done</h3>
            <h1>4</h1>
          </div>

          <div className="card">
            <h3>Day Streak</h3>
            <h1>3</h1>
          </div>

          <div className="card">
            <h3>Interviews</h3>
            <h1>1</h1>
          </div>
        </div>

        {/* CHART SECTION */}
        <div className="charts">
          <div className="chart-box">
            <h3>Weekly Activity</h3>
            <p>(chart here later)</p>
          </div>

          <div className="chart-box">
            <h3>Skill Breakdown</h3>
            <p>(chart here later)</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;