import styles from "./SpaceCardItem.module.css";

function SpaceCardItem({ space }) {
  console.log(space);
  return (
    <div className={styles["spaceCard-container"]}>
      <li>
        <p>{space.name}</p>

        <img className={styles["card-image"]} src={space.image} alt="" />
      </li>
    </div>
  );
}

export default SpaceCardItem;
