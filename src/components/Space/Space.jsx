import { useNavigate, useParams } from "react-router-dom";
import { useSpace } from "../../context/SpaceContext";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { HiOutlineCash } from "react-icons/hi";

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
      <div className={styles["space-loader"]}>
        <ClipLoader color="#f08c00" />
      </div>
    );

  function handleBackButton(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className={styles["space-container"]}>
      <div className={styles.space}>
        <button onClick={handleBackButton} className={styles.btn}>
          &larr; Back
        </button>

        <div>
          <img src={image} alt={name} />
          <h3 className={styles["space-title"]}>{name}</h3>

          <p className={styles.description}>
            <span>Description: </span> {description}
          </p>

          <div>
            <HiPhone />
            <p className={styles["phone-number"]}>
              <span>Phone Number:</span> {contact}
            </p>
          </div>

          <div>
            <div className={styles["icon"]}>
              <HiOutlineLocationMarker />
              <p>{location}</p>
            </div>

            <div>
              <HiOutlineCash />
              <p>{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Space;
