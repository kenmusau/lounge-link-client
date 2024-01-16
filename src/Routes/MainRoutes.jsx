import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../pages/LoginForm/LoginForm";
import ClientDashBoard from "../pages/ClientDashBoard/ClientDashBoard";
import SignUp from "../pages/SignUpForm/SignUp";
import AdminDash from "../pages/AdminDashboard/AdminDash";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<ClientDashBoard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adminDash" element={<AdminDash />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
