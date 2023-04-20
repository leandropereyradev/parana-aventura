import { createContext, useContext, useState } from "react";
import userServices from "../services/user";
import fishingZoneServices from "../services/fishing-zone";

export const ParanaAventuraContext = createContext();

export const ParanaAventuraProvider = ({ children }) => {
  const [user, setUser] = useState();

  const handleUserContext = async (action, user, id) => {
    switch (action) {
      case "REGISTER":
        const resRegister = await userServices.register(user);
        setUser(resRegister);
        return resRegister;

      case "LOGIN":
        const userLogin = await userServices.login(user);
        setUser(userLogin);
        localStorage.setItem("user-token", userLogin.token);
        return userLogin;

      case "DETAIL":
        const userDetail = await userServices.detail(user);
        setUser(userDetail);
        return userDetail;

      case "UPLOAD":
        const userUpload = await userServices.upload(user, id);
        setUser(userUpload);
        return userUpload;

      default:
        break;
    }
  };

  const handleFishingZoneContext = async (action, id) => {
    switch (action) {
      case "LIST":
        return await fishingZoneServices.list();

      case "DETAIL":
        return await fishingZoneServices.detail(id);

      default:
        break;
    }
  };

  return (
    <ParanaAventuraContext.Provider
      value={{
        payload: { user },
        action: { handleUserContext, handleFishingZoneContext },
      }}
    >
      {children}
    </ParanaAventuraContext.Provider>
  );
};

export const useParanaAventuraContext = () => useContext(ParanaAventuraContext);
