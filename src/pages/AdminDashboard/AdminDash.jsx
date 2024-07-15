import "./adminDash.css";
import { useUser } from "../../context/UserContext";

function AdminDash() {
  const { user, logoutUser } = useUser();

  function handleLogout(e) {
    e.preventDefault();
    logoutUser();
  }

  return (
    <div className="admin">
      <h1>Welcome to admin dashboard, {user?.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDash;
