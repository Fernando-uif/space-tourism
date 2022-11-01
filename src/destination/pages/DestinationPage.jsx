import React,{ useState } from "react";

import { NavPlanet } from "../../ui/components/NavPlanet";
import "../../sass/pages/destination/destination.scss";
import { MoonPage } from "./MoonPage";

export const DestinationPage = () => {
  const [location, setLocation] = useState( 'http://127.0.0.1:5173/destination/' );
  console.log(location,'Tenemos location');

  return (
    <section className="destination">
      <div className="destination__img">
        <div className="destination__title">
          <span className="destination__number">01</span> pick your destination
        </div>
        <NavPlanet setLocation={ setLocation } />
        {
          location === "http://127.0.0.1:5173/destination/" 
            && 
          (<MoonPage />)
        }
      </div>
    </section>
  );
};
