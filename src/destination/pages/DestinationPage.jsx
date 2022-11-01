import React,{ useState } from "react";

import { NavPlanet } from "../../ui/components/NavPlanet";
import "../../sass/pages/destination/destination.scss";
import { MoonPage } from "./MoonPage";

export const DestinationPage = () => {
  const [location, setLocation] = useState( `${window.location.origin}/destination/` );
  console.log(location,'Tenemos location');

  return (
    <section className="destination">
      <div className="destination__img">
        <div className="destination__title">
          <span className="destination__number">01</span> pick your destination
        </div>
        <NavPlanet setLocation={ setLocation } />
        {
          location === `${window.location.origin}/destination/` 
            && 
          (<MoonPage />)
        }
      </div>
    </section>
  );
};
