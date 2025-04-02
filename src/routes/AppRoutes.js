import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import StudentDashboard from "./Pages/StudentDashboard";
import MentorDashboard from "./Pages/MentorDashboard";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/student/dashboard", element: <StudentDashboard /> },
    { path: "/mentor/dashboard", element: <MentorDashboard /> },
    // Other routes here...
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
