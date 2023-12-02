import { useContext } from "react";
import "./adminDash.css";
import { ClientContext } from "../../context/User";
import { useNavigate } from "react-router-dom";

function AdminDash() {
  const { setClient } = useContext(ClientContext);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("jwt");
    setClient(null);
    navigate("/login");
  }

  return (
    <div className="admin">
      <h1>Welcome to admin dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDash;
