import RegisterForm from "../components/user/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="register-page-container">
      <div className="register-page-blur">
        <div className="register-page-form-container">
          <div className="register-page-text-container">
            <h3 className="register-page-text-h3">
              ¡Ponte en modo aventura con <span>Paraná Aventura</span>!
            </h3>
            <p className="register-page-text-p">
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
