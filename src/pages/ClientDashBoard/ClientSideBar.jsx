import { NavLink, useNavigate } from "react-router-dom";

import styles from "./ClientSideBar.module.css";

// icons
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillHouseAddFill } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useUser } from "../../context/UserContext";

function ClientSideBar() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/login");
  }
  return (
    <div className={styles["client-sidebar"]}>
      <ul>
        <li>
          <div className={styles["client-sidebar--icon"]}>
            <MdDashboardCustomize className={styles["sidebar-icon"]} />
            <NavLink to="dashboard">Dashboard</NavLink>
          </div>
        </li>
        <li>
          <div className={styles["client-sidebar--icon"]}>
            <BsFillHouseAddFill className={styles["sidebar-icon"]} />
            <NavLink to="spaces">Spaces</NavLink>
          </div>
        </li>
        <li>
          <div className={styles["client-sidebar--icon"]}>
            <BsBookmarkStarFill className={styles["sidebar-icon"]} />
            <NavLink to="wishlist">WishList</NavLink>
          </div>
        </li>
        <li>
          <div className={styles["client-sidebar--icon"]}>
            <FaHistory className={styles["sidebar-icon"]} />
            <NavLink to="visited">Visited</NavLink>
          </div>
        </li>
        <li>
          <div className={styles["client-sidebar--icon"]}>
            <MdManageAccounts className={styles["sidebar-icon"]} />
            <NavLink to="settings">settings</NavLink>
          </div>
        </li>
        <li>
          {/* <a href="#">Dasbhoard</a> */}
          <div className={styles["client-sidebar--icon"]}>
            <RiLogoutBoxFill className="client-logout" />
            <a onClick={handleLogout}>Logout</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ClientSideBar;
