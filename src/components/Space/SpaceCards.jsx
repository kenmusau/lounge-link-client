import { useEffect, useReducer } from "react";
import { baseurl } from "../../utils";
import SpaceCardItem from "./SpaceCardItem";

const initialState = {
  spaces: [],
  isLoading: true,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "spaces/loaded":
      return { ...state, isLoading: false, spaces: action.payload };
    case "isLoading":
      return { ...state, isLoading: false };
    default:
      throw new Error("Unkown action");
  }
}

function SpaceCards() {
  const [{ spaces }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchSpaces() {
      dispatch({ type: "isLoading" });
      try {
        const res = await fetch(`${baseurl}/spaces`);
        const data = await res.json();
        dispatch({ type: "spaces/loaded", payload: data });
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchSpaces();
  }, []);
  return (
    <div>
      <ul>
        {spaces.map((space) => (
          <SpaceCardItem key={space.id} space={space} />
        ))}
      </ul>
    </div>
  );
}

export default SpaceCards;
