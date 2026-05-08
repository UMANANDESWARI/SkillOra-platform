import { useState } from "react";
import "./upload.css";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [analyzed, setAnalyzed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="upload-page">

      <h1>Upload Job Description</h1>
      <p className="subtitle">
        Paste a job description and let AI extract the skills and build your roadmap.
      </p>

      {!analyzed ? (
        /* BEFORE ANALYSIS */
        <div className="upload-box">

          <div className="row">
            <div className="input-group">
              <label>Job Title</label>
              <input placeholder="e.g. Software Engineer" />
            </div>

            <div className="input-group">
              <label>Company (optional)</label>
              <input placeholder="e.g. Amazon" />
            </div>
          </div>

          <div className="input-group">
            <label>Preparation Deadline</label>
            <input type="date" />
          </div>

          <div className="input-group">
            <label>Job Description</label>
            <textarea placeholder="Paste the job description here, or drag and drop a .txt file..." />
          </div>

          <button
            className="analyze-btn"
            onClick={() => setAnalyzed(true)}
          >
            ✨ Analyze & Generate Roadmap
          </button>
        </div>
      ) : (
        /* AFTER ANALYSIS */
        <div className="result-box">

          <h3 className="success">✔ Analysis Complete</h3>

          <div className="stats">
            <div className="stat">
              <h2>30</h2>
              <p>Preparation Days</p>
            </div>

            <div className="stat">
              <h2>15</h2>
              <p>Skills Extracted</p>
            </div>

            <div className="stat">
              <h3 className="badge">Intermediate</h3>
              <p>Difficulty</p>
            </div>
          </div>

          <h4>Extracted Skills</h4>

          <div className="skills">
            {[
              "Python", "Java", "Javascript", "React", "Node",
              "SQL", "MongoDB", "PostgreSQL", "Docker",
              "Kubernetes", "AWS", "Azure", "GCP", "AI", "Git"
            ].map((s, i) => (
              <span key={i} className="skill">{s}</span>
            ))}
          </div>

          <div className="btn-row">
            <button onClick={() => navigate("/roadmap")} className="roadmap-btn">
              View Roadmap
            </button>

            <button
              className="secondary-btn"
              onClick={() => setAnalyzed(false)}
            >
              Upload Another
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Upload;