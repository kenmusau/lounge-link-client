import Map from "../components/Map";
import MapSidebar from "../components/MapSidebar";
import styles from "./MapLayout.module.css";

function MapLayout() {
  return (
    <div className={styles.mapLayoutContainer}>
      <MapSidebar />
      <Map />
    </div>
  );
}

export default MapLayout;
