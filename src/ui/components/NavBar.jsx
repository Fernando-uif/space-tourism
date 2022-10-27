import React from "react";
import "../../sass/layout/navbar.scss";

import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="NavBar">
        <div className="NavBar__logo">
          <span className="NavBar__logo-circle"></span>
          <span className="NavBar__logo-circle2"></span>
        </div>

        <div className="NavBar__items">
          <NavLink
            className={({ isActive }) =>
              "NavBar__item NavBar__item-1 " +
              (isActive ? "NavBar__selected" : "")
            }
            to="/"
          >
            <span>00</span>
            <span> home</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "NavBar__item NavBar__item-2 " +
              (isActive ? " NavBar__selected" : "")
            }
            to="/destination"
          >
            <span>01</span>
            <span> destination</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "NavBar__item NavBar__item-3 " +
              (isActive ? " NavBar__selected" : "")
            }
            to="/crew"
          >
            <span>02</span>
            <span> crew</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "NavBar__item NavBar__item-4 " +
              (isActive ? " NavBar__selected" : "")
            }
            to="/technology"
          >
            <span>03</span>
            <span> technology</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
