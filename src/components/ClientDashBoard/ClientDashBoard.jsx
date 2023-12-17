import "./dashboard.css";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";

// icons
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillHouseAddFill } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";

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
              <div className="client-sidebar--icon">
                <MdDashboardCustomize className="sidebar-icon" />
                <a href="#">Dashboard</a>
              </div>
            </li>
            <li>
              <div className="client-sidebar--icon">
                <BsFillHouseAddFill />
                <a href="#">Spaces</a>
              </div>
            </li>
            <li>
              <div className="client-sidebar--icon">
                <BsBookmarkStarFill />
                <a href="#">WishList</a>
              </div>
            </li>
            <li>
              <div className="client-sidebar--icon">
                <FaHistory />
                <a href="#">Visited</a>
              </div>
            </li>
            <li>
              <div className="client-sidebar--icon">
                <MdManageAccounts />

                <a href="#">settings</a>
              </div>
            </li>
            <li>
              {/* <a href="#">Dasbhoard</a> */}
              <div className="client-sidebar--icon">
                <RiLogoutBoxFill />
                <a onClick={handleLogout}>Logout</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="client-mainbar">Welcome {user?.username}</div>
      </div>
    </div>
  );
}

export default ClientDashBoard;
