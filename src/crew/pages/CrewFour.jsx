import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/crew/crewInfo.scss";

export const CrewFour = () => {
  return (
    <div className="crewInfo">
      <div className="crewInfo__text">
        <div className="crewInfo__position">Flight Engineer </div>
        <div className="crewInfo__name">Anousheh Ansari</div>
        <div className="crewInfo__description">
          Anousheh Ansari is an Iranian American engineer and co-founder of
        Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </div>
      </div>
      <img
        className="crewInfo__img"
        src={getImageUrl("crew/image-anousheh-ansari.webp")}
        alt={getImageUrl("crew/image-anousheh-ansari.webp")}
      />
    </div>
  );
};
