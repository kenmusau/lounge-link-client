import styles from "./ClientDashBoard.module.css";

import ClientSideBar from "./ClientSideBar";
import ClientMainBar from "./ClientMainBar";

function ClientDashBoard() {
  return (
    <div className={styles["client-dashboard"]}>
      <div className={styles["dashboard-container"]}>
        <ClientSideBar />
        <ClientMainBar />
      </div>
    </div>
  );
}

export default ClientDashBoard;
