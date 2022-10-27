import React from "react";
import { NavPlanet } from "../../ui/components/NavPlanet";

import "../../sass/pages/destination.scss";

export const DestinationPage = () => {
  return (
    <section className="destination">
      <div className="destination__img">
        <div className="destination__title">
          <span className="destination__number">01</span> pick your destination
        </div>
        <div className="destination__destinations">
          <NavPlanet/>
        </div>
      </div>
    </section>
  );
};
