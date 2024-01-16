import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../pages/LoginForm/LoginForm";

import SignUp from "../pages/SignUpForm/SignUp";
import AdminDash from "../pages/AdminDashboard/AdminDash";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../pages/ClientDashBoard/AppLayout";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="dashboard" element={<AppLayout />}>
          <Route path="dashboard" />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="adminDash" element={<AdminDash />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
