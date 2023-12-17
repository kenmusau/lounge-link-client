import { useContext } from "react";
import "./adminDash.css";
import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";

function AdminDash() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/login");
  }

  return (
    <div className="admin">
      <h1>Welcome to admin dashboard, {user?.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDash;
