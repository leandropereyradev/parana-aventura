import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useParanaAventuraContext } from "../context/paranaAventuraContext";

const NavBar = () => {
  const [menuUser, setMenuUser] = useState(false);
  const [menu, setMenu] = useState(false);
  const { action, payload } = useParanaAventuraContext();

  const isActiveLink = ({ isActive }) =>
    isActive
      ? "nav-bar-menu-navlink nav-bar-menu-navlink-active"
      : "nav-bar-menu-navlink";

  const handleLogout = () => {
    menuUser && setMenuUser(!menuUser);
    action.handleUserContext("LOGOUT");
  };

  return (
    <>
      <nav className="nav-bar z-10">
        <div className="nav-bar-container">
          <NavLink to={"/"} className="w-12">
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
                    className="w-8 h-8 rounded-full"
                    src={payload.user?.image}
                    alt="user photo"
                  />
                </button>
                <div
                  className={`${
                    menuUser ? "block" : "hidden"
                  } nav-bar-profile-menu-container`}
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-50">
                      {payload.user?.name}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li onClick={() => menuUser && setMenuUser(!menuUser)}>
                      <NavLink
                        to={`/user/${payload.user?.id}`}
                        className="nav-bar-profile-menu-navlinks"
                      >
                        Perfil de usuario
                      </NavLink>
                    </li>
                    <li onClick={() => menuUser && setMenuUser(!menuUser)}>
                      <NavLink
                        to={`/user/edit`}
                        className="nav-bar-profile-menu-navlinks"
                      >
                        Editar usuario
                      </NavLink>
                    </li>
                    <li onClick={handleLogout}>
                      <NavLink
                        to={"/"}
                        className="nav-bar-profile-menu-navlinks"
                      >
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
                className="w-6 h-6"
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
            } md:flex nav-bar-menu-container`}
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
    </>
  );
};

export default NavBar;
