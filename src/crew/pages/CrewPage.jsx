import React from "react";
import { useState } from "react";
import "../../sass/pages/crew/crew.scss";
import { NavCrew } from "../../ui/components/NavCrew";
import { CrewOne } from "./CrewOne";

export const CrewPage = () => {
  const [location, setLocation] = useState(`${window.location.origin}/crew/`);
  return (
    <section className="crew">
      <div className="crew__img">
        <div className="crew__title">
          <span className="crew__number">02</span> Meet your crew
        </div>
        <NavCrew setLocation={setLocation} />
        {location === `${window.location.origin}/crew/` && <CrewOne />}
      </div>
    </section>
  );
};
