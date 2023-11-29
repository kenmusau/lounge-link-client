import "./dashboard.css";
import { useContext } from "react";
import { ClientContext } from "../../context/Client";

function ClientDashBoard() {
  const { client } = useContext(ClientContext);
  console.log(client);
  return <div className="client-dashboard">Welcome {client?.username}</div>;
}

export default ClientDashBoard;
