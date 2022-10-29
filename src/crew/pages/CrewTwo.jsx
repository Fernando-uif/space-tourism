import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/crew/crewInfo.scss";

export const CrewTwo = () => {
  return (
    <div className="crewInfo">
      <div className="crewInfo__text">
        <div className="crewInfo__position">Mission Specialist </div>
        <div className="crewInfo__name">mark shuttleworth</div>
        <div className="crewInfo__description">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </div>
      </div>
      <img
        className="crewInfo__img"
        src={getImageUrl("crew/image-mark-shuttleworth.webp")}
        alt={getImageUrl("crew/image-mark-shuttleworth.webp")}
      />
    </div>
  );
};
