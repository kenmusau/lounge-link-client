import styles from "./SpaceCardItem.module.css";

function SpaceCardItem({ space }) {
  console.log(space);
  return (
    <div className={styles["spaceCard-container"]}>
      <li>
        <img className={styles["card-image"]} src={space.image} alt="" />
        <p>{space.name}</p>
        <p>{space.location}</p>
      </li>
    </div>
  );
}

export default SpaceCardItem;
