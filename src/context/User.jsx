import { createContext, useEffect, useState } from "react";
import { baseurl } from "../utils";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    async function fetchUser() {
      try {
        const resp = await fetch(`${baseurl}/currentUser`, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`, // Added Authorization header
          },
        });
        const userData = await resp.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
