import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const [user, setUser] = useState();
  const { action } = useParanaAventuraContext();
  const { id } = useParams();
  const navegate = useNavigate();

  useEffect(() => {
    async function userDetail() {
      try {
        const payload = await action.handleUserContext("DETAIL", id);
        setUser(payload);
      } catch (error) {
        console.error(error);
      }
    }
    userDetail();
  }, [id]);

  return (
    <>
      <div>
        <h1>Hola, {user?.name}!</h1>
        <div>
          <h2>Información general</h2>
          <img src={user?.image} alt={user?.name} />
          <p>
            Nombre: {user?.name} {user?.lastname}
          </p>
          <p>Correo Electrónico: {user?.email}</p>
          <p>
            Teléfono:{" "}
            {user?.telephone.toLocaleString("es-SP").replace(/\./g, " ")}
          </p>
          <button onClick={() => navegate("/user/edit", { state: user })}>
            Editar Perfil
          </button>
        </div>
      </div>
      <div>
        <h2>Reservas</h2>
      </div>
    </>
  );
};

export default UserDetail;
