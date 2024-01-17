import styles from "./Dashboard.module.css";
import { useUser } from "../../context/User";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className={styles["dashboard-container"]}>
      <h1 className={styles["client-intro"]}>Welcome {user?.username}</h1>
      <p className={styles["intro-description"]}>
        We guarante the best experience in Lounge reservation. Explore Rooms at
        your convenience at the spaces tab
      </p>
    </div>
  );
}

export default Dashboard;
