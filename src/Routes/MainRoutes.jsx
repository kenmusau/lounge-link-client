import { Routes, Route } from "react-router-dom";
import Home from "../components/LandingPage/Home";
import LoginForm from "../components/LoginForm/LoginForm";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
