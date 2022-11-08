import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../../sass/layout/navPlanet.scss";

export const NavPlanet = ({ setLocation }) => {
  const navigate = useNavigate();
  const changeHref = (e) => {

    switch (e.target.innerText.toLowerCase()) {
      case "moon":
        setLocation(window.location.origin + "/destination/");
        break;
      case "mars":
        setLocation(window.location.origin + "/destination/mars");
        break;
      case "europa":
        setLocation(window.location.origin + "/destination/europa");
        break;
      case "titan":
        setLocation(window.location.origin + "/destination/titan");
        break;
      default:
        setLocation(window.location.origin + "/");
        break;
    }
  };
  const otherPage = () => {
  
      navigate('/');
  }
  
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
