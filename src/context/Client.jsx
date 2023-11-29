import { createContext, useEffect, useState } from "react";
import { baseurl } from "../utils";

const ClientContext = createContext();

// eslint-disable-next-line react/prop-types
function ClientProvider({ children }) {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClient();
  }, [setClient]); // Empty dependency array for a one-time effect

  async function fetchClient() {
    try {
      const resp = await fetch(`${baseurl}/theLoggedInClient`);
      const clientData = await resp.json();
      setClient(clientData);
    } catch (error) {
      console.error("Error fetching client data:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ClientContext.Provider value={{ client, setClient, loading }}>
      {children}
    </ClientContext.Provider>
  );
}

export { ClientContext, ClientProvider };
