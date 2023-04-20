import { createContext, useContext, useState } from "react";
import userServices from "../services/user";

export const ParanaAventuraContext = createContext();

export const ParanaAventuraProvider = ({ children }) => {
  const [user, setUser] = useState();

  const handleUserContext = async (action, info) => {
    switch (action) {
      case "REGISTER":
        const resRegister = await userServices.register(info);
        setUser(resRegister);
        return resRegister;

      case "LOGIN":
        const userLogin = await userServices.login(info);
        setUser(userLogin);
        localStorage.setItem("user-token", userLogin.token);
        return userLogin;

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
