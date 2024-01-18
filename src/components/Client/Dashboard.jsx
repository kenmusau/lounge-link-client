import styles from "./Dashboard.module.css";
import { useUser } from "../../context/User";

function Dashboard() {
  const { user } = useUser();
  console.log(user);
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
        <div className={styles["client-info"]}>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p
            className={!user.email ? styles["lighter-textStyl"] : styles.darker}
          >
            {user.email ? user.email : "Update your email Below"}
          </p>
          <button className={styles.btn}>Update Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
