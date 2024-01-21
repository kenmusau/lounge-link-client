import "./adminDash.css";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function AdminDash() {
  const { user, setUser } = useUser();

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
