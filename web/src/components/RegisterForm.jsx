import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParanaAventuraContext } from "../context/paranaAventuraContext";

const RegisterForm = () => {
  const { action } = useParanaAventuraContext();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState();

  const onUserSubmit = async (user) => {
    try {
      setServerError();
      const formData = new FormData();
      formData.append("file", user.file[0]);
      formData.append("name", user.name);
      formData.append("lastname", user.lastname);
      formData.append("password", user.password);
      formData.append("telephone", user.telephone);
      formData.append("email", user.email);

      user = await action.handleUserContext("REGISTER", formData);
      // TODO: navigate to /login' with { state: { user } }
    } catch (error) {
      const errorErrors = error.response?.data?.errors;
      const errorMessage = error.response?.data?.message;

      if (errorErrors) {
        Object.keys(errors).forEach((inputName) =>
          setError(inputName, { message: errors[inputName] })
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
              type="file"
              accept="image/"
              placeholder="Imagen"
              {...register("file", {
                required: "Tu fotografía es requerida",
              })}
            />
            {errors.image && <div>{errors.image?.message}</div>}
          </div>
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
        </div>
        {serverError && <div>{serverError}</div>}
        <div>
          <button type="submit">Regístrame</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
