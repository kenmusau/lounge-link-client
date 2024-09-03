import { useNavigate, useParams } from "react-router-dom";
import { useSpace } from "../../context/SpaceContext";
import { memo, useEffect } from "react";
import { ClipLoader } from "react-spinners";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineCash } from "react-icons/hi";

import styles from "./Space.module.css";

const Space = memo(function Space() {
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
        <div>
          <button
            onClick={handleBackButton}
            className={`${styles.btn} ${styles["back--btn"]}`}
          >
            &larr; Back
          </button>

          <div>
            <img src={image} alt={name} />
            <h3 className={styles["space-title"]}>{name}</h3>

            <p className={styles.description}>
              <span>Description: </span> {description}
            </p>

            <p className={styles["phone-number"]}>
              <span>Phone Number:</span> {contact}
            </p>

            <div className={styles["location-price"]}>
              <div className={styles["icons"]}>
                <HiOutlineLocationMarker />
                <p>{location}</p>
              </div>

              <div className={styles["icons"]}>
                <HiOutlineCash />
                <p>{price}</p>
              </div>
            </div>

            <div className={styles["act-btns"]}>
              <button className={styles["btn"]}>Available</button>
              <button className={styles["btn"]}>Book Now</button>
            </div>
          </div>
        </div>

        <div>
          <h2>Features</h2>
          <ul>
            <li>– Fine dining restaurants </li>
            <li>– Casual dining options</li>
            <li>– Buffet or breakfast areas</li>
            <li>– Rooftop bars and lounges</li>
            <li>– Childcare or babysitting services</li>
            <li>– Kids’ clubs and play areas</li>
            <li>– Family-friendly room options</li>
            <li>– Teen activity programs</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Space;
