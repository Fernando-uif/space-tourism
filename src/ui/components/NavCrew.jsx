import { NavLink, Routes, Route, Navigate } from "react-router-dom";

import { CrewOne, CrewTwo, CrewThree, CrewFour } from "../../crew/pages";

import "../../sass/layout/navCrew.scss";

export const NavCrew = () => {
  return (
    <>
      <div className="navCrew">
        <NavLink
          className={({ isActive }) =>
            "navCrew__item navCrew__item-1 " +
            (isActive ? "navCrew__selected" : "")
          }
          to="crew-one"
        ></NavLink>
        <NavLink
          className={({ isActive }) =>
            "navCrew__item navCrew__item-2 " +
            (isActive ? "navCrew__selected" : "")
          }
          to="crew-two"
        ></NavLink>
        <NavLink
          className={({ isActive }) =>
            "navCrew__item navCrew__item-3 " +
            (isActive ? "navCrew__selected" : "")
          }
          to="crew-three"
        ></NavLink>
        <NavLink
          className={({ isActive }) =>
            "navCrew__item navCrew__item-4 " +
            (isActive ? "navCrew__selected" : "")
          }
          to="crew-four"
        ></NavLink>
      </div>
      <Routes>
        <Route path="crew-one" element={<CrewOne />} />
        <Route path="crew-two" element={<CrewTwo />} />
        <Route path="crew-three" element={<CrewThree />} />
        <Route path="crew-four" element={<CrewFour />} />
        <Route path="*" element={<Navigate replace to="crew-one" />} />
      </Routes>
    </>
  );
};
