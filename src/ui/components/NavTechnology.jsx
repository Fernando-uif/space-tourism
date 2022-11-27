import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import "../../sass/layout/navTechnology.scss";
import { LaunchPage } from "../../technology/page/LaunchPage";
import { SpaceCapsulePage } from "../../technology/page/SpaceCapsulePage";
import { SpaceportPage } from "../../technology/page/SpaceportPage";

export const NavTechnology = () => {
  return (
    <>
      <div className="NavTechnology">
        <NavLink
          className={({ isActive }) =>
            "NavTechnology__circle " +
            (isActive ? "NavTechnology__selected" : "")
          }
          to="launch"
        >
          1
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavTechnology__circle " +
            (isActive ? "NavTechnology__selected" : "")
          }
          to="port"
        >
          2
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "NavTechnology__circle " +
            (isActive ? "NavTechnology__selected" : "")
          }
          to="capsule"
        >
          3
        </NavLink>
      </div>
      <Routes>
        <Route path="launch" element={<LaunchPage />} />
        <Route path="capsule" element={<SpaceCapsulePage />} />
        <Route path="port" element={<SpaceportPage />} />
        <Route path="*" element={<Navigate replace to="launch" />} />
      </Routes>
    </>
  );
};
