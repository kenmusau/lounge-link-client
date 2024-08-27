import { HashLoader } from "react-spinners";
import styles from "./SpinnerFullPage.module.css";

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullpage}>
      <div className={styles.spinner}>
        <HashLoader color="#f08c00" size={70} />
      </div>
    </div>
  );
}

export default SpinnerFullPage;
