import "./dashboard.css";
import { useUser } from "../../context/User";

import ClientSideBar from "./ClientSideBar";

function ClientDashBoard() {
  const { user } = useUser();

  return (
    <div className="client-dashboard">
      <div className="dashboard-container">
        <ClientSideBar />
        <div className="client-mainbar">Welcome {user?.username}</div>
      </div>
    </div>
  );
}

export default ClientDashBoard;
