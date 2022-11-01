import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../sass/layout/navPlanet.scss";

export const NavPlanet = ({ setLocation }) => {
  const changeHref = (e) => {
    // setLocation(window.location.href);
    console.log(e.target.innerText,'Tenemos el nombre');

    switch (e.target.innerText) {
      case "Moon":
        setLocation("http://127.0.0.1:5173/destination/");
        break;
      case "Mars":
        setLocation("http://127.0.0.1:5173/destination/mars");
        break;
    }
  };

  return (
    <>
      <div className="NavPlanet">
        <NavLink
          className={({ isActive = true }) =>
            "NavPlanet__item NavPlanet__item-3 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          onClick={(e) => changeHref(e)}
          to="/destination/"
          end
        >
          Moon
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-2 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          onClick={(e) => changeHref(e)}
          to="/destination/mars"
        >
          Mars
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-1 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          onClick={(e) => changeHref(e)}
          to="/destination/europa"
        >
          Europa
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-4 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          onClick={(e) => changeHref(e)}
          to="/destination/titan"
        >
          Titan
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
