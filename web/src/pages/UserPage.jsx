import { useState } from "react";
import { useParanaAventuraContext } from "../context/paranaAventuraContext";
import UserDetail from "../components/user/UserDetail";
import EditUserForm from "../components/user/EditUserForm ";

const initialState = {
  booking: true,
  detail: false,
  edit: false,
};

const UserPage = () => {
  const { payload } = useParanaAventuraContext();
  const [userDetail, setUserDetail] = useState(initialState);

  const handleClick = (keyToChange) => {
    let state = { ...userDetail };

    for (let key in state) {
      if (key !== keyToChange) state[key] = false;
      else state[keyToChange] = true;
    }

    setUserDetail(state);
  };

  return (
    <div className="user-page-container">
      <div className="user-page-blur">
        <div className="user-page-section-container">
          <h1 className="user-page-section-h1">Hola, {payload?.user?.name}!</h1>
          <div className="w-full flex justify-around">
            <button
              className={`w-full rounded-t-lg md:text-2xl py-1 ${
                userDetail.booking ? "bg-azulProfundo/60" : "bg-black/10"
              }`}
              onClick={() => handleClick("booking")}
            >
              Reservas
            </button>
            <button
              className={`w-full rounded-t-lg md:text-2xl py-1 ${
                userDetail.detail ? "bg-azulProfundo/60" : "bg-black/10"
              }`}
              onClick={() => handleClick("detail")}
            >
              Perfil
            </button>
            <button
              className={`w-full rounded-t-lg md:text-2xl py-1 ${
                userDetail.edit ? "bg-azulProfundo/60" : "bg-black/10"
              }`}
              onClick={() => handleClick("edit")}
            >
              Actualizar
            </button>
          </div>
          {userDetail.booking && <></>}
          {userDetail.detail && (
            <div className="user-page-section-page">
              <UserDetail />
            </div>
          )}
          {userDetail.edit && <EditUserForm />}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
