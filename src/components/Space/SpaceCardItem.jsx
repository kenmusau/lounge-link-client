import { Link } from "react-router-dom";
import styles from "./SpaceCardItem.module.css";

function SpaceCardItem({ space }) {
  // console.log(space);

  return (
    <div className={styles["spaceCard-container"]}>
      <Link to={`${space.id}?hse=${space.name}`} className={styles.card}>
        <img className={styles["card-image"]} src={space.image} alt="" />
        <div className={styles["card-content"]}>
          <h3>{space.name}</h3>
          <p>{space.location}</p>
          <p>{space.price}</p>
          <p>{space.status}</p>
        </div>
      </Link>
    </div>
  );
}

export default SpaceCardItem;
