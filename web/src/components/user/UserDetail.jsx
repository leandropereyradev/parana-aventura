import { useEffect } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { action, payload } = useParanaAventuraContext();
  const { id } = useParams();
  const navegate = useNavigate();

  useEffect(() => {
    async function userDetail() {
      try {
        await action.handleUserContext("DETAIL", id);
      } catch (error) {
        console.error(error);
      }
    }
    userDetail();
  }, [id]);

  return (
    <>
      <div>
        <h1>Hola, {payload.user?.name}!</h1>
        <div>
          <h2>Información general</h2>
          <img src={payload.user?.image} alt={payload.user?.name} />
          <p>
            Nombre: {payload.user?.name} {payload.user?.lastname}
          </p>
          <p>Correo Electrónico: {payload.user?.email}</p>
          <p>
            Teléfono:{" "}
            {payload.user?.telephone
              .toLocaleString("es-SP")
              .replace(/\./g, " ")}
          </p>
          <button onClick={() => navegate("/user/edit")}>Editar Perfil</button>
        </div>
      </div>
      <div>
        <h2>Reservas</h2>
      </div>
    </>
  );
};

export default UserDetail;
