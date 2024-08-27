import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "../pages/ClientDashBoard/AppLayout";
import Dashboard from "../components/Client/Dashboard";
import WishList from "../components/Client/WishList";
import Visited from "../components/Client/Visited";
import Settings from "../components/Client/Settings";
import SpaceLayout from "../pages/Space/SpacesLayout";
import Space from "../components/Space/Space";

import ProtectedRoutes from "./ProtectedRoutes";
import SpinnerFullPage from "../components/SpinnerFullPage";

const Home = lazy(() => import("../pages/Home"));
const LoginForm = lazy(() => import("../pages/LoginForm/LoginForm"));
const SignUp = lazy(() => import("../pages/SignUpForm/SignUp"));
const MapLayout = lazy(() => import("../pages/MapLayout"));
const AdminDash = lazy(() => import("../pages/AdminDashboard/AdminDash"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

function MainRoutes() {
  return (
    <div>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="map" element={<MapLayout />} />

          <Route
            path="app"
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="spaces" element={<SpaceLayout />} />
            <Route path="spaces/:id" element={<Space />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="visited" element={<Visited />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="adminDash" element={<AdminDash />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MainRoutes;
