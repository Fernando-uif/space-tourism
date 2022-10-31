import getImageUrl from "../../helpers/getImages";
import "../../sass/pages/technology/technologyInfo.scss";

export const LaunchPage = () => {
  return (
    <div className="technologyInfo">
      <div>
        <div className="technologyInfo__title">THE TERMINOLOGY…</div>
        <div className="technologyInfo__technology">LAUNCH VEHICLE</div>
        <div className="technologyInfo__description">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </div>
      </div>
      <img
      className="technologyInfo__img"
        src={getImageUrl("technology/image-launch-vehicle-portrait.jpg")}
        alt={getImageUrl("technology/image-launch-vehicle-portrait.jpg")}
      />
    </div>
  );
};
