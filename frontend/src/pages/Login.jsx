import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();

  return (
    <div className="login-page">

  <div className="login-left">
    <h1>Welcome back. Let’s continue where you left off.</h1>
    <p>Your personalized roadmap and mock interviews are waiting.</p>
  </div>

  <div className="login-right">
    <div className="login-box">

      <h2>Sign in</h2>

      <input className="login-input" placeholder="Email" />
      <input className="login-input" type="password" placeholder="Password" />

      <button onClick={() => nav("/dashboard")} className="login-btn">
        Sign in
      </button>

      <p className="login-text" onClick={() => nav("/signup")}>
        Don’t have an account? <span>Sign up</span>
      </p>

    </div>
  </div>

</div>
  );
}

export default Login;