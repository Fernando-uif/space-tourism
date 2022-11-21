import { Routes, Route } from "react-router-dom";

import { CrewPage } from "../crew/pages/CrewPage";
import { HomeScreen } from "../home/pages/HomeScreen";
import { NavBar } from "../ui/components/NavBar";
import { TechnologyPage } from "../technology/page/TechnologyPage";
import { DestinationPage } from "../destination/pages/index";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/crew/*"} element={<CrewPage />} />
        <Route path={"/destination/*"} element={<DestinationPage />} />
        <Route path={"/technology/*"} element={<TechnologyPage />} />
        <Route path={"/*"} element={<HomeScreen />} />
      </Routes>
    </>
  );
};
