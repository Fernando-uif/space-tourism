import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/crew/crewInfo.scss";
export const CrewOne = () => {
  return (
    <div className="crewInfo">
      <div className="crewInfo__text">
        <div className="crewInfo__position">commander</div>
        <div className="crewInfo__name">douglas hurley</div>
        <div className="crewInfo__description">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </div>
      </div>
        <img
          className="crewInfo__img"
          src={getImageUrl("crew/image-douglas-hurley.webp")}
          alt={getImageUrl("crew/image-douglas-hurley.webp")}
        />
    </div>
  );
};
