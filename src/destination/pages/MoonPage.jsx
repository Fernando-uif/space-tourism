import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/destination/moon.scss";

export const MoonPage = () => {
  return (
    <div className="moon">

      <img
        className="moon__img"
        src={getImageUrl("destination/image-moon.png")}
        alt={getImageUrl("destination/image-moon.png")}
        />
      <div className="moon__text">
        <div className="moon__title">moon</div>
        <div className="moon__description">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </div>
        <div className="moon__info">
          <div className="moon__info-1">
            <div>avg. distance</div>
            <div>384,400 km</div>
          </div>
          <div className="moon__info-2">
            <div>est. travel time</div>
            <div>3 days</div>
          </div>
        </div>
      </div>
    </div>
  );
};
