import getImageUrl from '../../helpers/getImages';
import '../../sass/pages/technology/technologyInfo.scss';

export const SpaceportPage = () => {
  return (
    <div className="technologyInfo">
      <div>
        <div className="technologyInfo__title">THE TERMINOLOGY…</div>
        <div className="technologyInfo__technology">SPACEPORT</div>
        <div className="technologyInfo__description">
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </div>
      </div>
      <img
        className="technologyInfo__img"
        src={getImageUrl("technology/image-launch-vehicle-portrait.jpg")}
        alt={getImageUrl("technology/image-launch-vehicle-portrait.jpg")}
      />
    </div>
  );
}
