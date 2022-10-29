import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/crew/crewInfo.scss";

export const CrewThree = () => {
  return (
    <div className="crewInfo">
      <div className="crewInfo__text">
        <div className="crewInfo__position">pilot</div>
        <div className="crewInfo__name">Victor Glover</div>
        <div className="crewInfo__description">
        Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. 
        </div>
      </div>
        <img
          className="crewInfo__img"
          src={getImageUrl("crew/image-victor-glover.webp")}
          alt={getImageUrl("crew/image-victor-glover.webp")}
        />
    </div>
  )
}
