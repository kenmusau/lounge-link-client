import { useParams } from "react-router-dom";

function Space() {
  const { id } = useParams();
  return <div>Space {id}</div>;
}

export default Space;
