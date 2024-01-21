import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { SpaceProvider } from "./context/SpaceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SpaceProvider>
          <App />
        </SpaceProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
