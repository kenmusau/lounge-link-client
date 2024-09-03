import { createContext, useContext, useEffect, useReducer } from "react";
import { baseurl } from "../utils";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "Loading":
      return {
        ...state,
        isLoading: true,
      };
    case "user/loaded":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case "admin/loaded":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case "client/loaded":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case "error":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case "logout":
      return {
        ...state,
      };

    default:
      throw new Error("Unknown action");
  }
}

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  // const [user, setUser] = useState(null);
  // const [isLoading, setLoading] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [{ user, isLoading, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const navigate = useNavigate();

  console.log(isAuthenticated);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    async function fetchUser() {
      dispatch({ type: "Loading" });
      try {
        const resp = await fetch(`${baseurl}/currentUser`, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`, // Added Authorization header
          },
        });
        const userData = await resp.json();
        // setUser(userData);
        dispatch({ type: "user/loaded", payload: userData });
      } catch (error) {
        dispatch({ type: "error", payload: error });
      }
    }

    fetchUser();
  }, [token]);

  async function loginUser(user) {
    dispatch({ type: "Loading" });
    try {
      const response = await fetch(`${baseurl}/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();
      if (response.ok) {
        const user = data.user;
        localStorage.setItem("jwt", data.jwt);
        if (user.role === "admin") {
          dispatch({ type: "admin/loaded", payload: user });
          console.log(user.role);
          isAuthenticated && navigate("/adminDash", { replace: true });
        } else {
          dispatch({ type: "client/loaded", payload: user });
          console.log(user.role);
          isAuthenticated && navigate("/app", { replace: true });
        }
      } else {
        // setError(data?.error);
        console.log("error here", data);
        dispatch({ type: "error", payload: data });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  function logoutUser() {
    localStorage.removeItem("jwt");
    dispatch({ type: "logout" });
    navigate("/login");
  }

  // const value = useMemo(() => {
  //   return {
  //     user,
  //     isLoading,
  //     isAuthenticated,
  //     loginUser,
  //     logoutUser,
  //   };
  // }, [isAuthenticated, isLoading, loginUser, logoutUser, user]);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext has been used outside User Provider");
  return context;
}

export { UserProvider, useUser };
