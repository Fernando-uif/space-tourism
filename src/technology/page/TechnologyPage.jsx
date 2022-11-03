import { useState } from "react";
import "../../sass/pages/technology/technology.scss";
import { NavTechnology } from "../../ui/components/index";
import { LaunchPage } from "./index";

export const TechnologyPage = () => {
  const [location, setLocation] = useState(
    `${window.location.origin}/technology/`
  );
  return (
    <section className="technology">
      <div className="technology__img">
        <div className="technology__title">
          <span className="technology__number">03</span> space launch 101
        </div>
        <NavTechnology setLocation={setLocation} />
        {location === `${window.location.origin}/technology/` && <LaunchPage />}
      </div>
    </section>
  );
};
