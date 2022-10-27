import React from "react";
import { Routes, Route } from "react-router-dom";
import { CrewPage } from "../crew/pages/CrewPage";
import { DestinationPage } from "../destination/pages/DestinationPage";
import { MarsPage } from "../destination/pages/MarsPage";
import { MoonPage } from "../destination/pages/MoonPage";
import { TechnologyPage } from "../technology/page/TechnologyPage";
import { NavBar } from "../ui/components/NavBar";
import { HomeScreen } from "./HomeScreen";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/*"} element={<HomeScreen />} />
        <Route path={"crew"} element={<CrewPage />} />
        <Route path={"destination"} element={<DestinationPage />}>
          <Route path={"moon"} element={<MoonPage />} />
        </Route>
        <Route path={"technology"} element={<TechnologyPage />} />
      </Routes>
    </>
  );
};
