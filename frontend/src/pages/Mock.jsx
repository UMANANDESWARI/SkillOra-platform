import "./mock.css";

function Mock() {
  return (
    <div className="mock-page">

      <h1>Mock Interviews</h1>
      <p className="subtitle">
        Practice HR and technical interviews with instant AI feedback.
      </p>

      {/* START NEW INTERVIEW */}
      <div className="start-box">
        <h3>+ Start New Interview</h3>

        <div className="start-row">
          <select>
            <option>Select a job</option>
            <option>Frontend Developer</option>
            <option>Software Developer</option>
          </select>

          <select>
            <option>Interview type</option>
            <option>Technical</option>
            <option>HR</option>
            <option>Mixed</option>
          </select>

          <button className="start-btn">🎤 Start</button>
        </div>
      </div>

      {/* PREVIOUS SESSIONS */}
      <h4 className="section-title">PREVIOUS SESSIONS</h4>

      <div className="session-card">
        <div>
          <span className="tag tech">Technical</span>
          <h3>Session #1</h3>
          <p>5/7/2026 · 6 questions</p>
        </div>

        <div className="session-actions">
          <span className="status">In Progress</span>
          <button className="continue-btn">Continue</button>
        </div>
      </div>

      <div className="session-card">
        <div>
          <span className="tag mixed">Mixed</span>
          <h3>Session #2</h3>
          <p>5/7/2026 · 6 questions</p>
        </div>

        <div className="session-actions">
          <span className="status">In Progress</span>
          <button className="continue-btn">Continue</button>
        </div>
      </div>

    </div>
  );
}

export default Mock;