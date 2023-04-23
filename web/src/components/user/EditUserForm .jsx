import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate } from "react-router-dom";

const EditUserForm = () => {
  const { action, payload } = useParanaAventuraContext();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: payload?.user });
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
        payload?.user?.id
      );
    } catch (error) {
      console.log(error);
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
    <div className="mt-10 lg:mt-5 xl:mt-5 md:w-2/3 fullHD:w-[60%]">
      <form onSubmit={handleSubmit(onUserSubmit)}>
        <div className="form-container-inputs group mb-7">
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
        <div className="form-container-inputs group mb-7">
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
        <div className="form-container-inputs group mb-7">
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
        <div className="form-container-inputs group mb-7 mb-18 lg:mb-0">
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
        <button
          type="button"
          onClick={() => setChangePass(!changePass)}
          className="form-btn mb-5 lg:mb-0"
        >
          {!changePass ? "Cambiar contraseña" : "No cambiar contraseña"}
        </button>
        {changePass === true && (
          <div className="form-container-inputs group mb-7">
            <input
              type="password"
              {...register("password", {
                required: "El contraseña es requerida",
                minLength: {
                  value: 8,
                  message:
                    "La contraseña debe tener, como mínimo, 8 caracteres",
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
        )}
        {serverError && <div>{serverError}</div>}
        <button className="form-btn">Actualizar</button>
      </form>
    </div>
  );
};

export default EditUserForm;
