import { NavLink, Outlet } from "react-router-dom";
import "../../sass/layout/navCrew.scss";
export const NavCrew = () => {
  return (
    <>
      <div className="navCrew">
        <NavLink className="navCrew__item navCrew__item-1" to="crew-one">
          {" "}
        </NavLink>
        <NavLink className="navCrew__item navCrew__item-2" to="crew-two">
          {" "}
        </NavLink>
        <NavLink className="navCrew__item navCrew__item-3" to="crew-three">
          {" "}
        </NavLink>
        <NavLink className="navCrew__item navCrew__item-4" to="crew-four">
          {" "}
        </NavLink>
      </div>
      <Outlet/>
    </>
  );
};
