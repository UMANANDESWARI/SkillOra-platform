import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  
const nav = useNavigate();
  return (
    <div className="home">

      {/* Navbar */}
      <div className="navbar">
        <div className="logo">SkillOra</div>

        <div className="nav-right">
          <span onClick={() => nav("/login")} className="login">Log in</span>
          <button onClick={() => nav("/signup")} className="btn-primary">Get Started</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <p className="tag">⚡ AI-Powered Placement Preparation</p>

        <h1>
          Transform Any Job Description <br />
          Into Your <span>Personalized Placement</span> Roadmap
        </h1>

        <p className="subtext">
          Upload a job description and let AI extract required skills,
          build a roadmap, and guide you through preparation.
        </p>

        <div className="hero-buttons">
          <button onClick={() => nav("/signup")} className="btn-primary">Get Started Free →</button>
          <button onClick={() => nav("/upload")} className="btn-outline">Upload JD</button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
  <div className="stat-item">
    <h2>10K+</h2>
    <p>Students</p>
  </div>

  <div className="stat-item">
    <h2>95%</h2>
    <p>Success Rate</p>
  </div>

  <div className="stat-item">
    <h2>50+</h2>
    <p>Companies</p>
  </div>
</div>

      {/* Features */}
      <div className="features">
        <h2>Everything you need to land the job</h2>
        <p className="feature-sub">
          From skill extraction to mock interviews, everything built for success.
        </p>

        <div className="card-grid">

          <div className="card">
            <h3>📤 Smart JD Analysis</h3>
            <p>Upload JD and extract skills instantly.</p>
          </div>

          <div className="card">
            <h3>🗺 Personalized Roadmap</h3>
            <p>Get a structured preparation plan.</p>
          </div>

          <div className="card">
            <h3>🎤 AI Mock Interviews</h3>
            <p>Practice with AI and improve confidence.</p>
          </div>

          <div className="card">
            <h3>📊 Progress Analytics</h3>
            <p>Track your preparation and growth.</p>
          </div>

        </div>
      </div>
    {/* HOW IT WORKS */}
<div className="how">
  <h2>How it works</h2>
  <p className="sub">Four steps from job description to interview ready.</p>

  <div className="how-grid">

    <div className="how-card">
      <span>01</span>
      <h3>Upload Job Description</h3>
      <p>Paste text or upload a job posting.</p>
    </div>

    <div className="how-card">
      <span>02</span>
      <h3>AI Analyzes & Extracts</h3>
      <p>AI identifies required skills and technologies.</p>
    </div>

    <div className="how-card">
      <span>03</span>
      <h3>Get Your Roadmap</h3>
      <p>Receive a personalized preparation plan instantly.</p>
    </div>

    <div className="how-card">
      <span>04</span>
      <h3>Practice & Track</h3>
      <p>Practice interviews and monitor your progress.</p>
    </div>

  </div>
</div>


{/* TESTIMONIALS */}
<div className="testimonials">
  <h2>Trusted by placement winners</h2>

  <div className="testimonial-grid">

    <div className="testimonial">
      <p>
        "The roadmap feature is incredible. I went from confused to confident in 3 weeks."
      </p>
      <h4>Arjun Sharma</h4>
      <span>SDE at Amazon</span>
    </div>

    <div className="testimonial">
      <p>
        "The CRT prep module helped me ace aptitude which I always struggled with."
      </p>
      <h4>Priya Nair</h4>
      <span>Data Analyst at Flipkart</span>
    </div>

    <div className="testimonial">
      <p>
        "Mock interviews with AI feedback transformed my confidence."
      </p>
      <h4>Rohan Mehta</h4>
      <span>Full Stack Dev at Razorpay</span>
    </div>

  </div>
</div>


{/* CTA SECTION */}
<div className="cta">
  <h2>Start your preparation today</h2>
  <p>
    Join thousands of students who landed their dream jobs with AI-powered preparation.
  </p>

  <button onClick={() => nav("/signup")} className="btn-primary">
    Create Free Account →
  </button>
</div>


{/* FOOTER */}
<div className="footer">
  <p>AI Job Prep Platform</p>
  <span>SkillOra</span>
</div>
    </div>
  );
}

export default Home;