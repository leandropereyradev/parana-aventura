import LoginForm from "../components/user/LoginForm";

const LoginPage = () => {
  return (
    <div className="form-page-container bg-loginSM md:bg-loginMD lg:bg-loginXL">
      <div className="form-page-blur">
        <div className="form-page-form-container">
          <div className="form-page-text-container">
            <h3 className="form-page-text-h3">
              ¡Bienvenido de nuevo a Paraná Aventura!
            </h3>
            <p className="form-page-text-p">
              Ingresa tus credenciales para acceder a nuestras exclusivas zonas
              de pesca y disfrutar de la mejor experiencia en alquiler de casas
              en las islas del Delta del río Paraná.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
