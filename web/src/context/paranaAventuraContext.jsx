import { createContext, useContext, useState } from "react";
import userServices from "../services/user";
import fishingZoneServices from "../services/fishing-zone";
import lodgingServices from "../services/lodging";
import fishServices from "../services/fish";
import bookingServices from "../services/booking";

export const ParanaAventuraContext = createContext();

export const ParanaAventuraProvider = ({ children }) => {
  const [user, setUser] = useState();

  const handleUserContext = async (action, user, id) => {
    switch (action) {
      case "REGISTER":
        return await userServices.register(user);

      case "LOGIN":
        const userLogin = await userServices.login(user);
        setUser(userLogin);
        localStorage.setItem("user-token", userLogin.token);
        return userLogin;

      case "DETAIL":
        return await userServices.detail(user);

      case "UPLOAD":
        const userUpload = await userServices.upload(user, id);
        setUser(userUpload);
        return userUpload;

      case "LOGOUT":
        localStorage.removeItem("user-token");
        setUser();

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

  const handleLodgingContext = async (action, id) => {
    switch (action) {
      case "DETAIL":
        return await lodgingServices.detail(id);

      case "LIST":
        return await lodgingServices.list();

      default:
        break;
    }
  };

  const handleFishContext = async (action, id) => {
    switch (action) {
      case "DETAIL":
        return await fishServices.detail(id);

      case "LIST":
        return await fishServices.list();

      default:
        break;
    }
  };

  const handleBookingContext = async (action, booking) => {
    switch (action) {
      case "BOOKING":
        return await bookingServices.create(booking);

      default:
        break;
    }
  };

  return (
    <ParanaAventuraContext.Provider
      value={{
        payload: { user },
        action: {
          handleUserContext,
          handleFishingZoneContext,
          handleLodgingContext,
          handleFishContext,
          handleBookingContext,
        },
      }}
    >
      {children}
    </ParanaAventuraContext.Provider>
  );
};

export const useParanaAventuraContext = () => useContext(ParanaAventuraContext);
