import { useNavigate } from "react-router-dom";
import "./myjobs.css";

function MyJobs() {
  const nav = useNavigate();

  const jobs = [
    {
      title: "Frontend Developer",
      company: "Unisys",
      date: "2026-05-14",
      level: "Advanced",
      duration: "45 days plan",
      skills: ["Java", "Javascript", "Typescript", "React", "Node"],
    },
    {
      title: "Software Developer",
      company: "Amazon",
      date: "2026-05-14",
      level: "Intermediate",
      duration: "30 days plan",
      skills: ["Python", "Java", "Javascript", "React", "Node"],
    },
  ];

  return (
    <div className="jobs-page">

      {/* HEADER */}
      <div className="jobs-header">
        <div>
          <h1>My Jobs</h1>
          <p>All uploaded job descriptions and their preparation status.</p>
        </div>

        <button className="upload-btn" onClick={() => nav("/upload")}>
          + Upload JD
        </button>
      </div>

      {/* JOB LIST */}
      <div className="job-list">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="job-card"
            onClick={() => nav("/learning")}
          >
            {/* TOP */}
            <div className="job-top">
              <div>
                <h3>
                  {job.title} <span>- {job.company}</span>
                </h3>

                <p className="meta">
                  📅 {job.date}
                  <span className={`level ${job.level.toLowerCase()}`}>
                    {job.level}
                  </span>
                  {job.duration} · 15 skills
                </p>
              </div>

              <div className="status">In Progress ➤</div>
            </div>

            {/* SKILLS */}
            <div className="skills">
              {job.skills.map((s, i) => (
                <span key={i} className="skill">{s}</span>
              ))}
              <span className="skill more">+10 more</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default MyJobs;