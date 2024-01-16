import styles from "./Dashboard.module.css";
import { useUser } from "../../context/User";

function Dashboard() {
  const { user } = useUser();
  return <div className={styles["client-intro"]}>Welcome {user?.username}</div>;
}

export default Dashboard;
