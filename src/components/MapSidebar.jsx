import { useSpace } from "../context/SpaceContext";
import styles from "./MapSidebar.module.css";
import SpaceCardItem from "./Space/SpaceCardItem";
function MapSidebar() {
  const { spaces } = useSpace();
  return (
    <div className={styles.sidebarContainer}>
      <h1>This page is work in progress. Cool Feature Coming up</h1>
      <ul>
        {spaces.map((space) => (
          <SpaceCardItem key={space.id} space={space} />
        ))}
      </ul>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by kenmusau Inc.
        </p>
      </footer>
    </div>
  );
}

export default MapSidebar;
