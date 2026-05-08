import "./signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const nav = useNavigate();

  return (
   <div className="signup-page">

  <div className="signup-left">
    <h1>
      Your <span>placement</span> journey starts right here.
    </h1>
    <p>
      Upload a job description and get a complete AI-generated preparation plan.
    </p>
  </div>

  <div className="signup-right">
    <div className="signup-box">

      <h2>Create account ✨</h2>
      <p>Free forever. No credit card required.</p>

      <input className="signup-input" placeholder="Full Name" />
      <input className="signup-input" placeholder="Email" />
      <input className="signup-input" type="password" placeholder="Password" />

      <button className="signup-btn" onClick={() => nav("/login")}>
        Create account
      </button>

      <p className="signup-text" onClick={() => nav("/login")}>
        Already have an account? <span>Sign in</span>
      </p>

    </div>
  </div>

</div>
  );
}

export default Signup;