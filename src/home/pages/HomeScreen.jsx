import React from "react";
import '../../sass/pages/home.scss';

export const HomeScreen = () => {
  return (
    <section className="home">
      <div className="home__img">
        <div className="home__description">
          <div className="home__container">
            <div className="home__description-1">
              so, you wanto to travel to
            </div>
            <div className="home__title">space</div>
            <div className="home__description-2">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </div>
          </div>
          <div className="home__circle">explore</div>
        </div>
      </div>
    </section>
  );
};
