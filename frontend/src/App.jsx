import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Roadmap from "./pages/Roadmap";
import MyJobs from "./pages/MyJobs";
import Learning from "./pages/Learning";
import Mock from "./pages/Mock";
import CRT from "./pages/CRT";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/jobs" element={<MyJobs />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/crt" element={<CRT />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;