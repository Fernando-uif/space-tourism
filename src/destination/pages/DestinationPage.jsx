import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../sass/layout/destination.scss";
export const DestinationPage = () => {
  return (
    <section className="destination">
      <div className="destination__img">
        <div className="destination__title">
          <span className="destination__number">01</span> pick your destination
        </div>
        <div className="destination__destinations">
          <Link to="/destination/moon">Moon</Link>
        </div>
      </div>
      <Outlet />
    </section>
  );
};
