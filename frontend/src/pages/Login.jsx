import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();

  return (
    <div className="login-container">

      {/* LEFT SIDE */}
      <div className="left">
        <h2 className="logo">AI Job Prep Platform</h2>

        <h1>
          Welcome back. <br />
          Let’s continue where <br />
          you left off.
        </h1>

        <p className="desc">
          Your personalized roadmap, practice sessions, and mock interviews are waiting for you.
        </p>

        <ul>
          <li>Personalized learning roadmap</li>
          <li>AI-powered skill extraction</li>
          <li>Mock interview feedback</li>
        </ul>
      </div>


      {/* RIGHT SIDE */}
      <div className="right">
        <h2>Sign in</h2>
        <p className="sub">Enter your credentials to access your account.</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="btn" onClick={() => nav("/upload")}>
          Sign in
        </button>

        <p className="signup-link">
          Don’t have an account?{" "}
          <span onClick={() => nav("/signup")}>Sign up</span>
        </p>
      </div>

    </div>
  );
}

export default Login;