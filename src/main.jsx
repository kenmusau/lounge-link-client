import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ClientProvider } from "./context/User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ClientProvider>
      <App />
    </ClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
