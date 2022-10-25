import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { CrewScreen } from "./CrewScreen";
import { DestinationScreen } from "./DestinationScreen";
import { HomeScreen } from "./HomeScreen";
import { TechnologyScreen } from "./TechnologyScreen";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/*"} element={<HomeScreen />} />
        <Route path={"/destination"} element={<DestinationScreen />} />
        <Route path={"/crew"} element={<CrewScreen />} />
        <Route path={"/technology"} element={<TechnologyScreen />} />
      </Routes>
    </>
  );
};
