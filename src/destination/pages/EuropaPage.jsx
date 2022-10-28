import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/destination/planet.scss";

export const EuropaPage = () => {
  return (
    <div className="planet">
      <img
        className="planet__img"
        src={getImageUrl("destination/image-europa.png")}
        alt={getImageUrl("destination/image-europa.png")}
      />
      <div className="planet__text">
        <div className="planet__title">europa</div>
        <div className="planet__description">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </div>
        <div className="planet__info">
          <div>
            <div className="planet__info-1">avg. distance</div>
            <div className="planet__info-2">628 mil. km</div>
          </div>
          <div>
            <div className="planet__info-1">est. travel time</div>
            <div className="planet__info-2">3 years</div>
          </div>
        </div>
      </div>
    </div>
  );
};
