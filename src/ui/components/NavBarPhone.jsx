import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../sass/layout/navBarPhone.scss";
export const NavBarPhone = () => {
  const menuButton = useRef();
  const menu = useRef();

  const handleOpenMenu = () => {
    menuButton.current.classList.toggle("navBarPhone__line-active");
    menu.current.classList.toggle("navBarPhone__items-menuActive");
  };
  return (
    <>
      <nav className="navBarPhone">
        <NavLink to="/" className="navBarPhone__logo">
          <span className="navBarPhone__logo-circle"></span>
          <span className="navBarPhone__logo-circle2"></span>
        </NavLink>
        <div
          ref={menuButton}
          className="navBarPhone__line navBarPhone__line"
          onClick={handleOpenMenu}
        ></div>
        <div ref={menu} className="navBarPhone__items ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "navBarPhone__items-element " +
              (isActive ? "navBarPhone__items-active" : "")
            }
            end
          >
            <span className="navBarPhone__items-number">00</span>
            <span className="navBarPhone__items-title"> Home</span>
          </NavLink>
          <NavLink
            to="/destination/"
            className={({ isActive }) =>
              "navBarPhone__items-element " +
              (isActive ? "navBarPhone__items-active" : "")
            }
          >
            <span className="navBarPhone__items-number">01</span>
            <span className="navBarPhone__items-title"> destination</span>
          </NavLink>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              "navBarPhone__items-element " +
              (isActive ? "navBarPhone__items-active" : "")
            }
          >
            <span className="navBarPhone__items-number">02</span>
            <span className="navBarPhone__items-title"> crew</span>
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              "navBarPhone__items-element " +
              (isActive ? "navBarPhone__items-active" : "")
            }
          >
            <span className="navBarPhone__items-number">03</span>
            <span className="navBarPhone__items-title"> technology</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
