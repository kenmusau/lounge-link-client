import { useEffect, useReducer } from "react";
import { baseurl } from "../../utils";

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

function Spaces() {
  const [{ spaces }, dispatch] = useReducer(reducer, initialState);

  console.log(spaces);
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
        {spaces.map((space, i) => (
          <>
            <li key={i}>{space.name}</li>
            <img src={space.image} alt="" />
          </>
        ))}
      </ul>
    </div>
  );
}

export default Spaces;
