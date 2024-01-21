import { useParams } from "react-router-dom";
import { useSpace } from "../../context/SpaceContext";
import { useEffect } from "react";
import { BounceLoader, DotLoader } from "react-spinners";

function Space() {
  const { getSpace, currentSpace, isLoading } = useSpace();
  const { name, description, location, price, contact, image } = currentSpace;
  const { id } = useParams();

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

  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{location}</p>
      <p>{price}</p>
      <p>{contact}</p>
      <img src={image} alt={name} />
    </div>
  );
}

export default Space;
