import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import MainLayout from "./Mainlayout";

export default function App() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Signup */}
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard + Sidebar + All Pages */}
      <Route path="/dashboard" element={<MainLayout />} />

    </Routes>
  );
}
