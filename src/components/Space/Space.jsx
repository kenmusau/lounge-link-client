import { useNavigate, useParams } from "react-router-dom";
import { useSpace } from "../../context/SpaceContext";
import { useEffect } from "react";
import { BounceLoader } from "react-spinners";

import styles from "./Space.module.css";

function Space() {
  const { getSpace, currentSpace, isLoading } = useSpace();
  const { name, description, location, price, contact, image } = currentSpace;

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSpace(id);
  }, [id]);

  console.log(currentSpace);

  if (isLoading)
    return (
      <div>
        <BounceLoader />
      </div>
    );

  function handleBackButton(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className={styles["space-container"]}>
      <div className={styles.space}>
        <button onClick={handleBackButton}>&larr; Back</button>
        <p>{name}</p>
        <p>{description}</p>
        <p>{location}</p>
        <p>{price}</p>
        <p>{contact}</p>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default Space;
