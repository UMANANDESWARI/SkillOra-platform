import { useState } from "react";
import "./crt.css";

function CRT() {
  const [tab, setTab] = useState("aptitude");

  const questions = [
    {
      q: "If a train travels 60 km in 1 hour, how many kilometers will it travel in 3.5 hours?",
      options: ["180", "200", "210", "220"],
      level: "Easy"
    },
    {
      q: "What is 15% of 200?",
      options: ["25", "30", "35", "40"],
      level: "Easy"
    }
  ];

  return (
    <div className="crt-page">

      <h1>CRT Preparation</h1>
      <p className="subtitle">
        Practice aptitude, logical reasoning, and verbal ability questions.
      </p>

      {/* TABS */}
      <div className="tabs">
        <button className={tab === "aptitude" ? "active" : ""} onClick={() => setTab("aptitude")}>Aptitude</button>
        <button className={tab === "logical" ? "active" : ""} onClick={() => setTab("logical")}>Logical</button>
        <button className={tab === "verbal" ? "active" : ""} onClick={() => setTab("verbal")}>Verbal</button>
      </div>

      {/* LEVEL FILTER */}
      <div className="levels">
        <button className="active">Easy</button>
        <button>Medium</button>
        <button>Hard</button>
      </div>

      {/* QUESTIONS */}
      <div className="questions">
        {questions.map((item, i) => (
          <div key={i} className="question-card">

            <div className="question-top">
              <p>{item.q}</p>
              <span className="badge">{item.level}</span>
            </div>

            {item.options.map((opt, index) => (
              <div key={index} className="option">
                {String.fromCharCode(65 + index)}. {opt}
              </div>
            ))}

          </div>
        ))}
      </div>

    </div>
  );
}

export default CRT;