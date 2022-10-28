import React from "react";
import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/destination/planet.scss";

export const TitanPage = () => {
  return (
    <div className="planet">
      <img
        className="planet__img"
        src={getImageUrl("destination/image-titan.png")}
        alt={getImageUrl("destination/image-titan.png")}
      />
      <div className="planet__text">
        <div className="planet__title">titan</div>
        <div className="planet__description">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </div>
        <div className="planet__info">
          <div>
            <div className="planet__info-1">avg. distance</div>
            <div className="planet__info-2">1.6 Bil. km</div>
          </div>
          <div>
            <div className="planet__info-1">est. travel time</div>
            <div className="planet__info-2">7 years</div>
          </div>
        </div>
      </div>
    </div>
  );
};
