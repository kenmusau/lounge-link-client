import "./dashboard.css";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";

function ClientDashBoard() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  console.log(user);

  function handleLogout() {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/login");
  }

  return (
    <div className="client-dashboard">
      <div className="dashboard-container">
        <div className="client-sidebar">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Spaces</a>
            </li>
            <li>
              <a href="#">WishList</a>
            </li>
            <li>
              <a href="#">Visited</a>
            </li>
            <li>
              <a href="#">settings</a>
            </li>
            <li>
              {/* <a href="#">Dasbhoard</a> */}
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
        <div className="client-mainbar">Welcome {user?.username}</div>
      </div>
    </div>
  );
}

export default ClientDashBoard;
