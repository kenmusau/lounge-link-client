import { useNavigate } from "react-router-dom";

// icons
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillHouseAddFill } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useUser } from "../../context/User";

function ClientSideBar() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  console.log(user);

  function handleLogout() {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/login");
  }
  return (
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
            <BsFillHouseAddFill className="sidebar-icon" />
            <a href="#">Spaces</a>
          </div>
        </li>
        <li>
          <div className="client-sidebar--icon">
            <BsBookmarkStarFill className="sidebar-icon" />
            <a href="#">WishList</a>
          </div>
        </li>
        <li>
          <div className="client-sidebar--icon">
            <FaHistory className="sidebar-icon" />
            <a href="#">Visited</a>
          </div>
        </li>
        <li>
          <div className="client-sidebar--icon">
            <MdManageAccounts className="sidebar-icon" />
            <a href="#">settings</a>
          </div>
        </li>
        <li>
          {/* <a href="#">Dasbhoard</a> */}
          <div className="client-sidebar--icon">
            <RiLogoutBoxFill className="client-logout" />
            <a onClick={handleLogout}>Logout</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ClientSideBar;
