import "./signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const nav = useNavigate();

  return (
    <div className="signup-container">

      {/* LEFT SIDE */}
      <div className="left">
        <h2 className="logo">AI Job Prep Platform</h2>

        <h1>
          <span>Your placement journey</span><br />
          starts right here.
        </h1>

        <p>
          Upload a job description and get a complete AI-generated preparation plan within seconds.
        </p>

        <div className="stats">
          <div className="box">
            <h3>10K+</h3>
            <p>Students trained</p>
          </div>

          <div className="box">
            <h3>95%</h3>
            <p>Success rate</p>
          </div>

          <div className="box">
            <h3>500+</h3>
            <p>JDs analyzed</p>
          </div>

          <div className="box">
            <h3>50+</h3>
            <p>Partner companies</p>
          </div>
        </div>
      </div>


      {/* RIGHT SIDE */}
      <div className="right">
        <h2>Create account ✨</h2>
        <p className="sub">Free forever. No credit card required.</p>

        <input placeholder="Full Name" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />

        <button className="btn">Create account</button>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => nav("/login")}>Sign in</span>
        </p>
      </div>

    </div>
  );
}

export default Signup;