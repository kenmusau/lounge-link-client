import styles from "./SpaceCardItem.module.css";

function SpaceCardItem({ space }) {
  console.log(space);
  return (
    <div className={styles["spaceCard-container"]}>
      <div className={styles.card}>
        <img className={styles["card-image"]} src={space.image} alt="" />
        <div className={styles["card-content"]}>
          <p>{space.name}</p>
          <p>{space.location}</p>
          <p>{space.price}</p>
        </div>
      </div>
    </div>
  );
}

export default SpaceCardItem;
