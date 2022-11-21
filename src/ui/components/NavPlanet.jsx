import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import {
  EuropaPage,
  MarsPage,
  MoonPage,
  TitanPage,
} from "../../destination/pages";

import "../../sass/layout/navPlanet.scss";

export const NavPlanet = () => {
  return (
    <>
      <div className="NavPlanet">
        <NavLink
          className={({ isActive = true }) =>
            "NavPlanet__item NavPlanet__item-3 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="moon"
        >
          Moon
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-2 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="mars"
        >
          Mars
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-1 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="europa"
        >
          Europa
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavPlanet__item NavPlanet__item-4 " +
            (isActive ? "NavPlanet__selected" : "")
          }
          to="titan"
        >
          Titan
        </NavLink>
      </div>
      <Routes>
        <Route path="europa" element={<EuropaPage />} />
        <Route path="mars" element={<MarsPage />} />
        <Route path="moon" element={<MoonPage />} />
        <Route path="*" element={<Navigate replace to="moon" />} />
        <Route path="titan" element={<TitanPage />} />
      </Routes>
    </>
  );
};
