import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/destination/planet.scss";

export const MarsPage = () => {
  return (
    <div className="planet">
      <img
        className="planet__img"
        src={getImageUrl("destination/image-mars.png")}
        alt={getImageUrl("destination/image-mars.png")}
      />
      <div className="planet__text">
        <div className="planet__title">mars</div>
        <div className="planet__description">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </div>
        <div className="planet__info">
          <div>
            <div className="planet__info-1">avg. distance</div>
            <div className="planet__info-2">255 mil. km</div>
          </div>
          <div>
            <div className="planet__info-1">est. travel time</div>
            <div className="planet__info-2">9 months</div>
          </div>
        </div>
      </div>
    </div>
  );
};
