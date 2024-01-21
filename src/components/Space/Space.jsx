import { useParams } from "react-router-dom";
import { useSpace } from "../../context/SpaceContext";
import { useEffect } from "react";

function Space() {
  const { getSpace, currentSpace, isLoading } = useSpace();
  const { id } = useParams();

  useEffect(() => {
    getSpace(id);
  }, [id]);

  console.log(currentSpace);

  return <div>Space {id}</div>;
}

export default Space;
