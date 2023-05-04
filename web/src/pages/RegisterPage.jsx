import RegisterForm from "../components/user/RegisterForm";

const RegisterPage = () => {
  window.scrollTo(0, 0);

  return (
    <div className="form-page-container bg-registerSM md:bg-registerMD lg:bg-registerXL">
      <div className="form-page-blur">
        <div className="form-page-form-container">
          <div className="form-page-text-container">
            <h3 className="form-page-text-h3">
              ¡Ponte en modo aventura con <span>Paraná Aventura</span>!
            </h3>
            <p className="form-page-text-p">
              Regístrate ahora para acceder a nuestros servicios exclusivos y
              disfrutar de la mejor experiencia.
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
