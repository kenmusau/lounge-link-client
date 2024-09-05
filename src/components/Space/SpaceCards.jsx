import SpaceCardItem from "./SpaceCardItem";

import styles from "./SpaceCards.module.css";
import { ClipLoader } from "react-spinners";
import { useSpace } from "../../context/SpaceContext";
import { memo } from "react";

const SpaceCards = memo(function SpaceCards() {
  const { isLoading, spaces } = useSpace();
  if (isLoading)
    return (
      <div className={styles.spinner}>
        <ClipLoader color="#f08c00" />
      </div>
    );

  return (
    <div className={styles["cards-container"]}>
      <ul>
        {spaces.map((space) => (
          <SpaceCardItem key={space.id} space={space} />
        ))}
      </ul>
    </div>
  );
});

export default SpaceCards;
