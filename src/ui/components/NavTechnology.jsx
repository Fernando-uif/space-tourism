import { NavLink, Outlet } from "react-router-dom";
import "../../sass/layout/navTechnology.scss";

export const NavTechnology = () => {
  return (
    <>
      <div className="NavTechnology">
        <NavLink
          className="NavTechnology__circle NavTechnology__selected"
          to="launch"
        >
          <span className="NavTechnology__number">1</span>
        </NavLink>
        <NavLink className="NavTechnology__circle" to="capsule">
          <span className="NavTechnology__number">2</span>
        </NavLink>
        <NavLink className="NavTechnology__circle" to="port">
          <span className="NavTechnology__number">3</span>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
