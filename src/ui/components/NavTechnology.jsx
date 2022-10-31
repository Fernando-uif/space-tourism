import { NavLink, Outlet } from "react-router-dom";
import "../../sass/layout/navTechnology.scss";

export const NavTechnology = () => {
  return (
    <>
      <div className="NavTechnology">
        <NavLink
          className={({ isActive }) =>
            "NavTechnology__circle " +
            (isActive ? "NavTechnology__selected" : "")
          }
          to="launch"
        >
          <span className="NavTechnology__number">1</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavTechnology__circle " +
            (isActive ? "NavTechnology__selected" : "")
          }
          to="capsule"
        >
          <span className="NavTechnology__number">2</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavTechnology__circle " +
            (isActive ? "NavTechnology__selected" : "")
          }
          to="port"
        >
          <span className="NavTechnology__number">3</span>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
