import { useEffect, useReducer } from "react";
import { baseurl } from "../../utils";

const initialState = {
  spaces: [],
  status: "loading",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
  }
}

function Spaces() {
  const [{ spaces, status, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    async function fetchSpaces() {
      try {
        const res = await fetch(`${baseurl}/spaces`);
        const data = await res.json();
        dispatch({ type: "spaces/loaded", payload: data });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchSpaces();
  }, []);
  return <div>Spaces</div>;
}

export default Spaces;
