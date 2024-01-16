import styles from "./AppLayout.module.css";

import ClientSideBar from "./ClientSideBar";
import ClientMainBar from "./ClientMainBar";

function AppLayout() {
  return (
    <div className={styles["client-dashboard"]}>
      <div className={styles["dashboard-container"]}>
        <ClientSideBar />
        <ClientMainBar />
      </div>
    </div>
  );
}

export default AppLayout;
