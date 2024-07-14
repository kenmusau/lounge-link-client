import { useSpace } from "../context/SpaceContext";
import styles from "./MapSidebar.module.css";

import SpaceItem from "./Space/SpaceItem";
function MapSidebar() {
  const { spaces } = useSpace();
  return (
    <div className={styles.sidebarContainer}>
      <h1>This page is work in progress. Cool Feature Coming up</h1>
      <ul className={styles.spaceList}>
        {spaces.slice(0, 10).map((space) => (
          <SpaceItem key={space.id} space={space} />
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
