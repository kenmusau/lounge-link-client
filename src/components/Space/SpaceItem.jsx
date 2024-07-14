import styles from "./SpaceItem.module.css";

function SpaceItem({ space }) {
  return (
    <div className={styles.spaceItem}>
      <h3>{space.name}</h3>
    </div>
  );
}

export default SpaceItem;
