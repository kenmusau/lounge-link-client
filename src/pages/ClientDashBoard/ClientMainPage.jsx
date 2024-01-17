import { Outlet } from "react-router-dom";

import styles from "./ClientMainPage.module.css";

function ClientMainPage() {
  return (
    <div className={styles["main-page-container"]}>
      <Outlet />
    </div>
  );
}

export default ClientMainPage;
