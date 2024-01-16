import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../pages/LoginForm/LoginForm";

import SignUp from "../pages/SignUpForm/SignUp";
import AdminDash from "../pages/AdminDashboard/AdminDash";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../pages/ClientDashBoard/AppLayout";
import Dashboard from "../components/Client/Dashboard";
import Spaces from "../components/Client/Spaces";
import WishList from "../components/Client/WishList";
import Visited from "../components/Client/Visited";
import Settings from "../components/Client/Settings";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="spaces" element={<Spaces />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="visited" element={<Visited />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="adminDash" element={<AdminDash />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
