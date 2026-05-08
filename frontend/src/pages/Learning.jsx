import { useState } from "react";
import "./learning.css";

function Learning() {
  const [checked, setChecked] = useState({});

  const toggle = (index) => {
    setChecked({
      ...checked,
      [index]: !checked[index],
    });
  };

  const skills = [
    { name: "Java", level: "High" },
    { name: "Javascript", level: "High" },
    { name: "Typescript", level: "High" },
    { name: "React", level: "Medium" },
    { name: "Node", level: "Medium" },
    { name: "Express", level: "Medium" },
  ];

  return (
    <div className="learning-page">

      <h1>Learning Roadmap</h1>
      <p className="subtitle">
        Your personalized preparation plan — check off skills as you complete them.
      </p>

      {/* OVERALL PROGRESS */}
      <div className="overall">
        <div>
          <p>Overall Progress</p>
          <h2>0%</h2>
          <span>45-day preparation plan</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      {/* SECTION */}
      <div className="section">

        <div className="section-header">
          <h3>Technical Skills</h3>
          <span>0/6</span>
        </div>

        {skills.map((skill, index) => (
          <div key={index} className="skill-card">

            <div className="left">
              <input
                type="checkbox"
                checked={checked[index] || false}
                onChange={() => toggle(index)}
              />

              <div>
                <h4>
                  {skill.name}
                  <span className={`badge ${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </h4>

                <p>
                  Master {skill.name} fundamentals and advanced concepts required for the role.
                </p>

                <div className="links">
                  <a href="#">📘 Docs</a>
                  <a href="#">▶ YouTube</a>
                  <a href="#">💻 Practice</a>
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Learning;