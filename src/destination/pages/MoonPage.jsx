import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/destination/planet.scss";

export const MoonPage = () => {
  console.log(window.location.href,'Ruta de moon');
  return (
    <div className="planet">
      <img
        className="planet__img"
        src={getImageUrl("destination/image-moon.png")}
        alt={getImageUrl("destination/image-moon.png")}
      />
      <div className="planet__text">
        <div className="planet__title">moon</div>
        <div className="planet__description">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </div>
        <div className="planet__info">
          <div>
            <div className="planet__info-1">avg. distance</div>
            <div className="planet__info-2">384,400 km</div>
          </div>
          <div>
            <div className="planet__info-1">est. travel time</div>
            <div className="planet__info-2">3 days</div>
          </div>
        </div>
      </div>
    </div>
  );
};
