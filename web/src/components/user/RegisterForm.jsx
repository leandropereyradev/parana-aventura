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
        <div className="form-container-inputs group">
          <input
            type="text"
            {...register("name", {
              required: "El nombre es requerido",
            })}
            name="name"
            className="form-input peer"
            placeholder=" "
          />
          <label htmlFor="name" className="form-label origin-[0]">
            Nombre
          </label>
          {errors.name && (
            <div className="form-error">{errors.name?.message}</div>
          )}
        </div>
        <div className="form-container-inputs group">
          <input
            type="text"
            {...register("lastname", {
              required: "El apellido es requerido",
            })}
            name="lastname"
            className="form-input peer"
            placeholder=" "
          />
          <label htmlFor="lastname" className="form-label origin-[0]">
            Apellido
          </label>
          {errors.lastname && (
            <div className="form-error">{errors.lastname?.message}</div>
          )}
        </div>
        <div className="form-container-inputs group">
          <input
            className="form-input peer"
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
          <label htmlFor="number" className="form-label origin-[0]">
            Teléfono
          </label>
          {errors.telephone && (
            <div className="form-error">{errors.telephone?.message}</div>
          )}
        </div>
        <div className="form-container-inputs group">
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
            className="form-input peer"
            placeholder=" "
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
            {...register("password", {
              required: "El contraseña es requerida",
              minLength: {
                value: 8,
                message: "La contraseña debe tener, como mínimo, 8 caracteres",
              },
            })}
            name="password"
            className="form-input peer"
            placeholder=" "
          />
          <label htmlFor="password" className="form-label origin-[0]">
            Contraseña
          </label>
          {errors.password && (
            <div className="form-error">{errors.password?.message}</div>
          )}
        </div>
        <div className="form-container-inputs group">
          <label htmlFor="file" className="form-label-file">
            Fotografía
          </label>
          <input
            id="file"
            type="file"
            accept="image/"
            {...register("file", {
              required: "Tu fotografía es requerida",
            })}
            className="form-container-inputs-file"
          />
          {errors.file && (
            <div className="form-error">{errors.file?.message}</div>
          )}
        </div>

        <button type="submit" className="form-btn">
          Regístrame
        </button>
      </form>
      {serverError && <div className="form-error">{serverError}</div>}
    </div>
  );
};

export default RegisterForm;
