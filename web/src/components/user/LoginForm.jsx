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
    <div className="fullHD:w-[60%]">
      <form onSubmit={handleSubmit(onLoginUser)}>
        <div className="form-container-inputs group">
          <input
            type="email"
            className="form-input peer"
            placeholder=" "
            {...register("email", {
              required: "El Correo electrónico es requerido",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "El correo electrónico debe ser válido",
              },
            })}
          />
          <label htmlFor="email" className="form-label origin-[0]">
            Correo Electrónico
          </label>
          {errors.email && (
            <div className="form-error">{errors.email?.message}</div>
          )}
        </div>
        <div className="form-container-inputs group">
          <input
            type="password"
            className="form-input peer"
            placeholder=" "
            {...register("password", {
              required: "El contraseña es requerida",
              minLength: {
                value: 8,
                message: "La contraseña debe tener, como mínimo, 8 caracteres",
              },
            })}
          />
          <label htmlFor="password" className="form-label origin-[0]">
            Contraseña
          </label>
          {errors.password && (
            <div className="form-error">{errors.password?.message}</div>
          )}
        </div>

        <button type="submit" className="form-btn">
          Iniciar Sesión
        </button>
      </form>
      {serverError && <div className="form-error">{serverError}</div>}
    </div>
  );
};

export default LoginForm;
