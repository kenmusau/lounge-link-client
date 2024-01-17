import styles from "./Dashboard.module.css";
import { useUser } from "../../context/User";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["client-intro-section"]}>
        <h1 className={styles["client-intro"]}>Welcome {user?.username}</h1>
        <p className={styles["intro-description"]}>
          We guarante the best experience in Lounge reservation. Explore Rooms
          at your convenience at the spaces tab
        </p>
      </div>

      <div className={styles["client-profile"]}>
        <img
          src="https://i.pravatar.cc/100?u=zz"
          alt="client profile"
          className={styles["client-avatar"]}
        />
      </div>
    </div>
  );
}

export default Dashboard;
