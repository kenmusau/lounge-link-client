import { Routes, Route } from "react-router-dom";
import Home from "../components/LandingPage/Home";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
