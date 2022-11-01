import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../sass/layout/navPlanet.scss";

export const NavPlanet = ({ setLocation }) => {
  const changeTheHref = () => {
    setLocation(window.location.href);
  };

  return (
    <>
      <div className="NavPlanet">
        <NavLink
          className={({ isActive = true }) =>
            "NavPlanet__item NavPlanet__item-3 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="/destination/"
          onClick={changeTheHref}
          end
        >
          Moon
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-2 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="/destination/mars"
          onClick={changeTheHref}
        >
          Mars
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-1 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="/destination/europa"
          onClick={changeTheHref}
        >
          Europa
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-4 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="/destination/titan"
          onClick={changeTheHref}
        >
          Titan
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
