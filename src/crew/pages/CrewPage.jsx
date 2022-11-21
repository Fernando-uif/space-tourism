import "../../sass/pages/crew/crew.scss";

import { NavCrew } from "../../ui/components/NavCrew";

export const CrewPage = () => {
  return (
    <section className="crew">
      <div className="crew__img">
        <div className="crew__title">
          <span className="crew__number">02</span> Meet your crew
        </div>
        <NavCrew/>
      </div>
    </section>
  );
};
