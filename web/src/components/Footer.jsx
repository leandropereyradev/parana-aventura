import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-gradient">
        <div className="footer-subcontainer">
          <div className="footer-contact-container">
            <div className="footer-image-container">
              <img
                src="https://res.cloudinary.com/dbr9eypvg/image/upload/v1682091202/parana-aventura/logo-light_nvcoal.svg"
                alt="logo"
                className="footer-image"
              />
            </div>
            <div className="footer-contact-section">
              <div>
                <p className="footer-contact-section-p">Navegacion:</p>
                <ul className="footer-contact-section-ul">
                  <li>
                    <Link to="/fishing-zones">Zonas de Pesca</Link>
                  </li>
                  <li>
                    <Link to="/fishes">Peces</Link>
                  </li>
                  <li>
                    <Link to="/lodgings">Hospedajes</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="footer-contact-section-p">Servicios:</p>
                <ul className="footer-contact-section-ul">
                  <li>Alquiler de Casas</li>
                  <li>Lanchas Taxi</li>
                  <li>Comida y Bebida</li>
                  <li>Insumos de Pesca</li>
                </ul>
              </div>
            </div>
            <div className="footer-contact-section md:mb-10">
              <div>
                <p className="footer-contact-section-p">Redes Sociales:</p>
                <ul className="footer-contact-section-ul">
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
              <div>
                <p className="footer-contact-section-p">Contáctanos:</p>
                <ul className="footer-contact-section-ul">
                  <li>623 19 00 53</li>
                  <li>parana@aventura.com</li>
                  <li>Río Sarmiento - 34</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-credits-container">
            <p>Derechos Reservados © 2023</p>
            <p>Paraná Aventura</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
