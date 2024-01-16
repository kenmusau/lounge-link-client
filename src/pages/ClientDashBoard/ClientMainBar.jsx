import styles from "./ClientMainBar.module.css";

import { useUser } from "../../context/User";

function ClientMainBar() {
  const { user } = useUser();
  return (
    <div className={styles["client-mainbar"]}>Welcome {user?.username}</div>
  );
}

export default ClientMainBar;
