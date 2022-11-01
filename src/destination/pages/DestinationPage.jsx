import React from "react";
import { NavPlanet } from "../../ui/components/NavPlanet";
import { useNavigate, useParams} from 'react-router-dom';
import '../../sass/pages/destination/destination.scss';
import { MoonPage } from "./MoonPage";

export const DestinationPage = () => {
  const params = useParams();
  console.log(params,'Tenemos los params');
  
  return (
    <section className="destination">
      <div className="destination__img">
        <div className="destination__title">
          <span className="destination__number">01</span> pick your destination
        </div>
          <NavPlanet/>
          <MoonPage/>
      </div>
    </section>
  );
};
