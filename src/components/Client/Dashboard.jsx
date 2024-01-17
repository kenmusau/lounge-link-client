import styles from "./Dashboard.module.css";
import { useUser } from "../../context/User";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className={styles["dashboard-container"]}>
      <h1 className={styles["client-intro"]}>Welcome {user?.username}</h1>
    </div>
  );
}

export default Dashboard;
