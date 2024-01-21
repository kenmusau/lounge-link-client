import { createContext, useContext, useEffect, useReducer } from "react";
import { baseurl } from "../utils";

const SpaceContext = createContext();

const initialState = {
  spaces: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "spaces/loaded":
      return { ...state, isLoading: false, spaces: action.payload };
    default:
      throw new Error("Unkown action");
  }
}

function SpaceProvider({ children }) {
  const [{ spaces, isLoading }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchSpaces() {
      dispatch({ type: "loading" });

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
    <SpaceContext.Provider value={{ spaces, isLoading }}>
      {children}
    </SpaceContext.Provider>
  );
}

function useSpace() {
  const context = useContext(SpaceContext);
  if (context === undefined)
    throw new Error("Space Context used outside Space provider");
  return context;
}

export { SpaceProvider, useSpace };
