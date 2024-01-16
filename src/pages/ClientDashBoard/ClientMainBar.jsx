import "./dashboard.css";
import { useUser } from "../../context/User";

function ClientMainBar() {
  const { user } = useUser();
  return <div className="client-mainbar">Welcome {user?.username}</div>;
}

export default ClientMainBar;
