import React from "react";
import { Routes, Route } from "react-router-dom";
import TMDashboard from "./pages/TMDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import CreateTest from "./pages/CreateTest";
import TakeTest from "./pages/TakeTest";
import ViewResults from "./pages/ViewResults";
import LandingPage from "./pages/LandingPage"; // ✅ Import your homepage component

const App = () => {
  return (
    <Routes>
      {/* ✅ Add a default route */}
      <Route path="/" element={<LandingPage />} />
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard/tm" element={<TMDashboard />} />
      <Route path="/dashboard/student" element={<StudentDashboard />} />
      <Route path="/createTest" element={<CreateTest />} />
      <Route path="/takeTest" element={<TakeTest />} />
      <Route path="/viewResults" element={<ViewResults />} />
    </Routes>
  );
};

export default App;
