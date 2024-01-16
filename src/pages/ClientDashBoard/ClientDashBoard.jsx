import "./dashboard.css";

import ClientSideBar from "./ClientSideBar";
import ClientMainBar from "./ClientMainBar";

function ClientDashBoard() {
  return (
    <div className="client-dashboard">
      <div className="dashboard-container">
        <ClientSideBar />
        <ClientMainBar />
      </div>
    </div>
  );
}

export default ClientDashBoard;
