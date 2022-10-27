import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../../sass/layout/navPlanet.scss';

export const NavPlanet = () => {
  return (
    <div className="NavPlanet">
      <Link
        className="NavPlanet__item NavPlanet__item-3"
        to="/destination/moon"
      >
        Moon
      </Link>
      <Link
        className="NavPlanet__item NavPlanet__item-2"
        to="/destination/mars"
      >
        Mars
      </Link>
      <Link
        className="NavPlanet__item NavPlanet__item-1"
        to="/destination/europa"
      >
        Europa
      </Link>
      <Link
        className="NavPlanet__item NavPlanet__item-4"
        to="/destination/titan"
      >
        Titan
      </Link>
      <Outlet />
    </div>
  );
};
