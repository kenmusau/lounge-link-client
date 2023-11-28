import { createContext, useState } from "react";

const ClientContext = createContext();
const [client, setClient] = useState(null);

function ClientProvider({ children }) {
  return <ClientContext.Provider>{children}</ClientContext.Provider>;
}

export { ClientContext, ClientProvider };
