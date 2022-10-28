import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../../sass/layout/navPlanet.scss";

export const NavPlanet = () => {
  return (
    <>
      <div className="NavPlanet">
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-3 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="/destination/moon"
        >
          Moon
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-2 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="/destination/mars"
        >
          Mars
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-1 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="/destination/europa"
        >
          Europa
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-4 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="/destination/titan"
        >
          Titan
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
