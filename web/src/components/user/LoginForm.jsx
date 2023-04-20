import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { action } = useParanaAventuraContext();
  const navegate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { email: location?.state?.user?.email },
  });
  const [serverError, setServerError] = useState();

  const onLoginUser = async (user) => {
    try {
      setServerError();
      await action.handleUserContext("LOGIN", user);
      navegate("/");
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
      <form onSubmit={handleSubmit(onLoginUser)}>
        <div>
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
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
