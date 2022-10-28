import { CrewPage } from "../crew/pages/CrewPage";
import { HomeScreen } from "../home/pages/HomeScreen";
import { NavBar } from "../ui/components/NavBar";
import { Routes, Route } from "react-router-dom";
import { TechnologyPage } from "../technology/page/TechnologyPage";
import {
  DestinationPage,
  EuropaPage,
  MarsPage,
  MoonPage,
  TitanPage,
} from "../destination/pages/index";
import { 
  CrewOne, 
  CrewTwo, 
  CrewThree, 
  CrewFour 
} from "../crew/pages/index";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/*"} element={<HomeScreen />} />
        <Route path={"crew"} element={<CrewPage />}>
          <Route path={"crew-one"} element={<CrewOne />} />
          <Route path={"crew-two"} element={<CrewTwo />} />
          <Route path={"crew-three"} element={<CrewThree />} />
          <Route path={"crew-four"} element={<CrewFour />} />
        </Route>
        <Route path={"destination"} element={<DestinationPage />}>
          <Route path={"moon"} element={<MoonPage />} />
          <Route path={"mars"} element={<MarsPage />} />
          <Route path={"titan"} element={<TitanPage />} />
          <Route path={"europa"} element={<EuropaPage />} />
        </Route>
        <Route path={"technology"} element={<TechnologyPage />} />
      </Routes>
    </>
  );
};
