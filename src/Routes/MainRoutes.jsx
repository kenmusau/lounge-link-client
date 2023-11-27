import { Routes, Route } from "react-router-dom";
import Home from "../components/LandingPage/Home";
import LoginForm from "../components/LoginForm/LoginForm";
import ClientDashBoard from "../components/ClientDashBoard/ClientDashBoard";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/clientDashboard" element={<ClientDashBoard />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
