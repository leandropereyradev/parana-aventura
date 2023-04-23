import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { action } = useParanaAventuraContext();
  const navegate = useNavigate();

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

      navegate("/login", { state: { user } });
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
      <form onSubmit={handleSubmit(onUserSubmit)}>
        <div className="register-container-inputs group">
          <input
            type="text"
            {...register("name", {
              required: "El nombre es requerido",
            })}
            name="name"
            className="register-input peer"
            placeholder=" "
          />
          <label htmlFor="name" className="register-label origin-[0]">
            Nombre
          </label>
          {errors.name && (
            <div className="register-error">{errors.name?.message}</div>
          )}
        </div>
        <div className="register-container-inputs group">
          <input
            type="text"
            {...register("lastname", {
              required: "El apellido es requerido",
            })}
            name="lastname"
            className="register-input peer"
            placeholder=" "
          />
          <label htmlFor="lastname" className="register-label origin-[0]">
            Apellido
          </label>
          {errors.lastname && (
            <div className="register-error">{errors.lastname?.message}</div>
          )}
        </div>
        <div className="register-container-inputs group">
          <input
            className="register-input peer"
            type="number"
            placeholder=" "
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
          <label htmlFor="number" className="register-label origin-[0]">
            Teléfono
          </label>
          {errors.telephone && (
            <div className="register-error">{errors.telephone?.message}</div>
          )}
        </div>
        <div className="register-container-inputs group">
          <input
            type="email"
            {...register("email", {
              required: "El Correo electrónico es requerido",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "El correo electrónico debe ser válido",
              },
            })}
            name="email"
            id="email"
            className="register-input peer"
            placeholder=" "
          />
          <label htmlFor="email" className="register-label origin-[0]">
            Correo Electrónico
          </label>
          {errors.email && (
            <div className="register-error">{errors.email?.message}</div>
          )}
        </div>
        <div className="register-container-inputs group">
          <input
            type="password"
            {...register("password", {
              required: "El contraseña es requerida",
              minLength: {
                value: 8,
                message: "La contraseña debe tener, como mínimo, 8 caracteres",
              },
            })}
            name="password"
            className="register-input peer"
            placeholder=" "
          />
          <label htmlFor="password" className="register-label origin-[0]">
            Contraseña
          </label>
          {errors.password && (
            <div className="register-error">{errors.password?.message}</div>
          )}
        </div>
        <div className="register-container-inputs group">
          <label htmlFor="file" className="register-label-file">
            Fotografía
          </label>
          <input
            id="file"
            type="file"
            accept="image/"
            {...register("file", {
              required: "Tu fotografía es requerida",
            })}
            className="register-container-inputs-file"
          />
          {errors.file && (
            <div className="register-error">{errors.file?.message}</div>
          )}
        </div>

        <button type="submit" className="register-btn">
          Regístrame
        </button>
      </form>
      {serverError && <div className="register-error">{serverError}</div>}
    </div>
  );
};

export default RegisterForm;
