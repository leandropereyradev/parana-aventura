import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate } from "react-router-dom";

const EditUserForm = () => {
  const { action, payload } = useParanaAventuraContext();
  const navegate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: payload.user });
  const [serverError, setServerError] = useState();
  const [changePass, setChangePass] = useState(false);

  const onUserSubmit = async (user) => {
    try {
      setServerError();
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("lastname", user.lastname);
      formData.append("telephone", user.telephone);
      formData.append("email", user.email);
      if (changePass) formData.append("password", user.password);

      user = await action.handleUserContext(
        "UPLOAD",
        formData,
        payload.user.id
      );

      navegate(`/user/${payload.user.id}`);
    } catch (error) {
      const errorErrors = error.response?.data?.errors;
      const errorMessage = error.response?.data?.message;

      if (errorErrors) {
        Object.keys(errorErrors).forEach((inputName) =>
          setError(inputName, { message: errorErrors[inputName] })
        );
      } else if (errorMessage) {
        setServerError(errorMessage);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onUserSubmit)}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              {...register("name", {
                required: "El nombre es requerido",
              })}
            />
            {errors.name && <div>{errors.name?.message}</div>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Apellido"
              {...register("lastname", {
                required: "El apellido es requerido",
              })}
            />
            {errors.lastname && <div>{errors.lastname?.message}</div>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("email", {
                required: "El Correo electrónico es requerido",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "El correo electrónico debe ser válido",
                },
              })}
            />
            {errors.email && <div>{errors.email?.message}</div>}
          </div>
          <div>
            <input
              type="number"
              placeholder="Teléfono"
              {...register("telephone", {
                required: "El teléfono es requerido",
                minLength: {
                  value: 9,
                  message: "El teléfono debe tener 9 números",
                },
                maxLength: {
                  value: 9,
                  message: "El teléfono debe tener 9 números",
                },
              })}
            />
            {errors.telephone && <div>{errors.telephone?.message}</div>}
          </div>
          <button type="button" onClick={() => setChangePass(!changePass)}>
            {!changePass ? "Cambiar contraseña" : "No cambiar contraseña"}
          </button>
          {changePass === true && (
            <div>
              <input
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "El contraseña es requerida",
                  minLength: {
                    value: 8,
                    message:
                      "La contraseña debe tener, como mínimo, 8 caracteres",
                  },
                })}
              />
              {errors.password && <div>{errors.password?.message}</div>}
            </div>
          )}
        </div>
        {serverError && <div>{serverError}</div>}
        <div>
          <button type="submit">Actualizar</button>
        </div>
      </form>
      <button onClick={() => navegate(`/user/${payload.user.id}`)}>
        Volver
      </button>
    </>
  );
};

export default EditUserForm;
