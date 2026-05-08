import "./roadmap.css";

function Roadmap() {
    const sections = [
  {
    title: "Technical Skills (Days 1–15)",
    progress: "0/6",
    skills: [
      {
        name: "Java",
        level: "High",
        desc: "Master Java fundamentals and advanced concepts."
      },
      {
        name: "Javascript",
        level: "High",
        desc: "Learn core JS and advanced topics."
      },
      {
        name: "React",
        level: "Medium",
        desc: "Build UI using React."
      },
      {
        name: "Node",
        level: "Medium",
        desc: "Backend development with Node."
      }
    ]
  },
  {
    title: "DSA & Coding (Days 16–24)",
    progress: "0/4",
    skills: [
      {
        name: "Arrays & Strings",
        level: "High",
        desc: "Sliding window, two pointers."
      },
      {
        name: "Trees & Graphs",
        level: "High",
        desc: "DFS, BFS, shortest path."
      },
      {
        name: "Dynamic Programming",
        level: "Medium",
        desc: "Memoization and tabulation."
      }
    ]
  },
  {
    title: "CRT Preparation (Days 25–31)",
    progress: "0/3",
    skills: [
      {
        name: "Quantitative Aptitude",
        level: "High",
        desc: "Time, profit, percentages."
      },
      {
        name: "Logical Reasoning",
        level: "High",
        desc: "Blood relations, puzzles."
      },
      {
        name: "Verbal Ability",
        level: "Medium",
        desc: "Grammar and comprehension."
      }
    ]
  }
];
  return (
    <div className="roadmap-page">

      <h1>Learning Roadmap</h1>
      <p className="subtitle">
        Your personalized preparation plan — check off skills as you complete them.
      </p>

      {/* OVERALL PROGRESS */}
      <div className="overall-box">
        <div>
          <p>Overall Progress</p>
          <h2>0%</h2>
          <span>45-day preparation plan</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      {/* SECTION COMPONENT */}
      {sections.map((section, index) => (
        <div className="section" key={index}>

          <div className="section-header">
            <h3>{section.title}</h3>
            <span>{section.progress}</span>
          </div>

          {section.skills.map((skill, i) => (
            <div className="skill-card" key={i}>

              <div className="skill-left">
                <input type="checkbox" />
                <div>
                  <h4>
                    {skill.name}
                    <span className={`badge ${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </h4>

                  <p>{skill.desc}</p>

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
      ))}

    </div>
  );
}

export default Roadmap;