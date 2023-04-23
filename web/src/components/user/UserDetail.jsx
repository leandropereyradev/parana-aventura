import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";

const UserDetail = () => {
  const [user, setUser] = useState();
  const { action, payload } = useParanaAventuraContext();

  useEffect(() => {
    async function userDetail() {
      try {
        const payloadUser = await action.handleUserContext(
          "DETAIL",
          payload?.user?.id
        );
        setUser(payloadUser);
      } catch (error) {
        console.error(error);
      }
    }
    userDetail();
  }, [payload]);

  return (
    <>
      <p className="mt-3 mb-8 md:text-xl lg:mb-20">
        Aquí podrás encontrar tu información general. Recuerda mantenerla
        actualizada para que seas el primero en recibir las grandes ofertas que
        tenemos para ti.
      </p>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-around xl:items-center">
        <div className="flex flex-col gap-10">
          <div>
            <span className="font-semibold mr-2 md:text-xl">Nombre:</span>
            <p className="ml-6 md:text-xl">
              {user?.name} {user?.lastname}
            </p>
          </div>
          <div>
            <span className="font-semibold mr-2 md:text-xl">
              Correo Electrónico:
            </span>
            <p className="ml-6 md:text-xl">{user?.email}</p>
          </div>
          <div>
            <span className="font-semibold mr-2 md:text-xl">Teléfono:</span>
            <p className="ml-6 md:text-xl">
              {user?.telephone.toLocaleString("es-SP").replace(/\./g, " ")}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={user?.image}
            alt={user?.name}
            className="rounded-xl md:w-72"
          />
        </div>
      </div>
    </>
  );
};

export default UserDetail;
