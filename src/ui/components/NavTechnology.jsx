import { NavLink, Outlet } from "react-router-dom";
import "../../sass/layout/navTechnology.scss";

export const NavTechnology = ({ setLocation }) => {
  const changeHref = (e) => {
    const number = e.target.innerText;
    switch (number) {
      case "1":
        setLocation(`${window.location.origin}/technology/`);
        break;
      case "2":
        setLocation(`${window.location.origin}/technology/capsule`);
        break;
      case "3":
        setLocation(`${window.location.origin}/technology/port`);
        break;
      default:
        setLocation(`${window.location.origin}/technology/`);
        break;
    }
  };
  return (
    <>
      <div className="NavTechnology">
        <NavLink
          className={({ isActive }) =>
            "NavTechnology__circle " +
            (isActive ? "NavTechnology__selected" : "")
          }
          onClick={(e) => changeHref(e)}
          to="/technology/"
          end
        >
          1
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavTechnology__circle " +
            (isActive ? "NavTechnology__selected" : "")
          }
          onClick={(e) => changeHref(e)}
          to="/technology/capsule"
        >
          2
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavTechnology__circle " +
            (isActive ? "NavTechnology__selected" : "")
          }
          onClick={(e) => changeHref(e)}
          to="/technology/port"
        >
          3
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
