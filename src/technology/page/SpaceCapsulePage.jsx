import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/technology/technologyInfo.scss";

export const SpaceCapsulePage = () => {
  return (
    <div className="technologyInfo">
      <div>
        <div className="technologyInfo__title">THE TERMINOLOGY…</div>
        <div className="technologyInfo__technology">SPACE CAPSULE</div>
        <div className="technologyInfo__description">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </div>
      </div>
      <img
        className="technologyInfo__img"
        src={getImageUrl("technology/image-space-capsule-portrait.jpg")}
        alt={getImageUrl("technology/image-space-capsule-portrait.jpg")}
      />
    </div>
  );
};
