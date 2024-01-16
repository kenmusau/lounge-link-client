import styles from "./AppLayout.module.css";

import ClientSideBar from "./ClientSideBar";
import ClientMainPage from "./ClientMainPage";

function AppLayout() {
  return (
    <div className={styles["client-dashboard"]}>
      <div className={styles["dashboard-container"]}>
        <ClientSideBar />
        <ClientMainPage />
      </div>
    </div>
  );
}

export default AppLayout;
