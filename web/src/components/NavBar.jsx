import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useParanaAventuraContext } from "../context/paranaAventuraContext";
import { useScrollPosition } from "../hook/useScrollPosition";

const NavBar = () => {
  const [menuUser, setMenuUser] = useState(false);
  const [menu, setMenu] = useState(false);
  const { action, payload } = useParanaAventuraContext();

  const scrollPosition = useScrollPosition();

  const isActiveLink = ({ isActive }) =>
    isActive
      ? "nav-bar-menu-navlink nav-bar-menu-navlink-active"
      : "nav-bar-menu-navlink";

  const handleLogout = () => {
    menuUser && setMenuUser(!menuUser);
    action.handleUserContext("LOGOUT");
  };

  return (
    <nav className={scrollPosition < 90 ? "nav-bar" : "nav-bar nav-bar-bg"}>
      <div className="nav-bar-container">
        <NavLink to={"/"} className="nav-bar-link-image">
          <img
            src="https://res.cloudinary.com/dbr9eypvg/image/upload/v1682091202/parana-aventura/logo-light_nvcoal.svg"
            alt="Paraná Aventura"
          />
        </NavLink>
        <div className="nav-bar-profile-container">
          {payload.user?.email && (
            <>
              <button
                onClick={() => {
                  menu && setMenu(!menu);
                  setMenuUser(!menuUser);
                }}
                type="button"
                className="nav-bar-profile-button"
              >
                <img
                  className="nav-bar-profile-button-image"
                  src={payload.user?.image}
                  alt="user photo"
                />
              </button>
              <div
                className={`${
                  menuUser ? "block" : "hidden"
                } nav-bar-profile-menu-container`}
              >
                <div className="nav-bar-profile-name-container">
                  <span className="nav-bar-profile-menu-name">
                    {payload.user?.name}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li onClick={() => menuUser && setMenuUser(!menuUser)}>
                    <NavLink to="/me" className="nav-bar-profile-menu-navlinks">
                      Perfil de usuario
                    </NavLink>
                  </li>
                  <li onClick={handleLogout}>
                    <NavLink to={"/"} className="nav-bar-profile-menu-navlinks">
                      Desconectarse
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
          <button
            onClick={() => {
              menuUser && setMenuUser(!menuUser);
              setMenu(!menu);
            }}
            type="button"
            className="nav-bar-menu-button"
          >
            <svg
              className="nav-bar-menu-button-svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            menu ? "block" : "hidden"
          } lg:flex nav-bar-menu-container`}
        >
          <ul className="nav-bar-menu-list">
            <li className="w-full">
              <NavLink
                to={"/fishing-zones"}
                onClick={() => setMenu(!menu)}
                className={isActiveLink}
              >
                Zonas de Pesca
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to={"/lodgings"}
                onClick={() => setMenu(!menu)}
                className={isActiveLink}
              >
                Hospedajes
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to={"/fishes"}
                onClick={() => setMenu(!menu)}
                className={isActiveLink}
              >
                Peces
              </NavLink>
            </li>
            {payload.user?.email === undefined && (
              <>
                <li className="w-full">
                  <NavLink
                    to={"/register"}
                    onClick={() => setMenu(!menu)}
                    className={isActiveLink}
                  >
                    Regístrate
                  </NavLink>
                </li>
                <li className="w-full">
                  <NavLink
                    to={"/login"}
                    onClick={() => setMenu(!menu)}
                    className={isActiveLink}
                  >
                    Iniciar Sesión
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
