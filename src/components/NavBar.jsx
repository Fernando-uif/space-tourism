import React from "react";
import "../sass/layout/navbar.scss";

export const NavBar = () => {
  return (
    <>
      <nav className="NavBar">
          <div className="NavBar__logo">
            <span className="NavBar__logo-circle"></span>
            <span className="NavBar__logo-circle2"></span>
          </div>

          <div className="NavBar__items">
            <div className="NavBar__item NavBar__item-1">
              <span>00</span>
              <span>home</span>
            </div>
            <div className="NavBar__item NavBar__item-2">
              <span>01</span>
              <span>destination</span>
            </div>
            <div className="NavBar__item NavBar__item-3">
              <span>02</span>
              <span>crew</span>
            </div>
            <div className="NavBar__item NavBar__item-4">
              <span>03</span>
              <span>technology</span>
            </div>
          </div>
      </nav>
    </>
  );
};
