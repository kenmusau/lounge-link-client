import styles from "./SpaceCardItem.module.css";

function SpaceCardItem({ space }) {
  console.log(space);
  return (
    <div className={styles["spaceCard-container"]}>
      <li>{space.name}</li>
      <img className={styles["card-image"]} src={space.image} alt="" />
    </div>
  );
}

export default SpaceCardItem;
