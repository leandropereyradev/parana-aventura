import { createContext, useContext, useState } from "react";

export const ParanaAventuraContext = createContext();

export const ParanaAventuraProvider = ({ children }) => {
  const [user, setUser] = useState("hola");

  const handleUserContext = (action, info) => {
    switch (action) {
      case value:
        break;

      default:
        break;
    }
  };

  return (
    <ParanaAventuraContext.Provider
      value={{ payload: { user }, action: { handleUserContext } }}
    >
      {children}
    </ParanaAventuraContext.Provider>
  );
};

export const useParanaAventuraContext = () => useContext(ParanaAventuraContext);
