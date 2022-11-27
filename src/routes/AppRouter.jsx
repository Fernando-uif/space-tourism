import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { CrewPage } from "../crew/pages/CrewPage";
import { HomeScreen } from "../home/pages/HomeScreen";
import { NavBar } from "../ui/components/NavBar";
import { TechnologyPage } from "../technology/page/TechnologyPage";
import { DestinationPage } from "../destination/pages/index";
import { useEffect } from "react";
import { NavBarPhone } from "../ui/components/NavBarPhone";

export const AppRouter = () => {
  const [widthScreen, setWidthScreen] = useState(window.screen.width);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthScreen(window.screen.width);
    });
  }, []);

  return (
    <>
      {widthScreen >= 425 ? <NavBar /> : <NavBarPhone/>}
      <Routes>
        <Route path={"/crew/*"} element={<CrewPage />} />
        <Route path={"/destination/*"} element={<DestinationPage />} />
        <Route path={"/technology/*"} element={<TechnologyPage />} />
        <Route path={"/*"} element={<HomeScreen />} />
      </Routes>
    </>
  );
};
