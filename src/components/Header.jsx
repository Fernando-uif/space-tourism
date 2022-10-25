import React from "react";
import getImageUrl from "../helpers/getImages";
import "../sass/layout/header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__img">
        <div className="header__description">
          <div className="header__container">
            <div className="header__description-1">
              so, you wanto to travel to
            </div>
            <div className="header__title">space</div>
            <div className="header__description-2">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </div>
          </div>
          <div className="header__circle">explore</div>
        </div>
      </div>
    </header>
  );
};
