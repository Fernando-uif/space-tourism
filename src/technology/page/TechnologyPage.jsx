import "../../sass/pages/technology/technology.scss";
import { NavTechnology } from "../../ui/components/index";

export const TechnologyPage = () => {
  return (
    <section className="technology">
      <div className="technology__img">
        <div className="technology__title">
          <span className="technology__number">03</span> space launch 101
        </div>
        <NavTechnology />
      </div>
    </section>
  );
};
