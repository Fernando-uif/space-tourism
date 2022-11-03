import { NavLink, Outlet } from "react-router-dom";
import "../../sass/layout/navCrew.scss";
export const NavCrew = ({ setLocation }) => {
  const chageHref = (e) => {
    const classElement = e.target.classList[1];
    const number = classElement.split("-")[1];
    switch (number) {
      case "1":
        setLocation(`${window.location.origin}/crew/`);
        break;
      case "2":
        setLocation(`${window.location.origin}/crew/crew-two`);
        break;
      case "3":
        setLocation(`${window.location.origin}/crew/crew-three`);
        break;
      case "4":
        setLocation(`${window.location.origin}/crew/crew-four`);
        break;

      default:
        setLocation(`${window.location.origin}/crew/`);
        break;
    }
  };
  return (
    <>
      <div className="navCrew">
        <NavLink
          className={({ isActive }) =>
            "navCrew__item navCrew__item-1 " +
            (isActive ? "navCrew__selected" : "")
          }
          to="/crew/"
          onClick={(e) => chageHref(e)}
          end
        ></NavLink>
        <NavLink
          className={({ isActive }) =>
            "navCrew__item navCrew__item-2 " +
            (isActive ? "navCrew__selected" : "")
          }
          to="crew-two"
          onClick={(e) => chageHref(e)}
        ></NavLink>
        <NavLink
          className={({ isActive }) =>
            "navCrew__item navCrew__item-3 " +
            (isActive ? "navCrew__selected" : "")
          }
          to="crew-three"
          onClick={(e) => chageHref(e)}
        ></NavLink>
        <NavLink
          className={({ isActive }) =>
            "navCrew__item navCrew__item-4 " +
            (isActive ? "navCrew__selected" : "")
          }
          to="crew-four"
          onClick={(e) => chageHref(e)}
        ></NavLink>
      </div>
      <Outlet />
    </>
  );
};
