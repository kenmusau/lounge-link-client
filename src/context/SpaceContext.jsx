import { createContext, useContext, useEffect, useReducer } from "react";
import { baseurl } from "../utils";

const SpaceContext = createContext();

const initialState = {
  spaces: [],
  currentSpace: {},
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "spaces/loaded":
      return { ...state, isLoading: false, spaces: action.payload };
    case "space/loaded":
      return { ...state, isLoading: false, currentSpace: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
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
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was error loading spaces...",
        });
      }
    }

    fetchSpaces();
  }, []);

  async function getSpace(id) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${baseurl}/spaces/${id}`);
      const data = await res.json();
      dispatch({ type: "space/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was error loading a spaces...",
      });
    }
  }
  return (
    <SpaceContext.Provider value={{ spaces, isLoading, getSpace }}>
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
